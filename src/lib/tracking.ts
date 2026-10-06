// Consulta pública de guías contra tms-backend (sin autenticación).
// Referencia: repo tms-tracking y `TrackingPublico` en
// tms-backend/app/modules/tracking/schemas.py.

const API_URL =
  import.meta.env.VITE_API_URL || "https://tms-anger-api.odyssoft.com/api/v1";

export type GuiaEstado =
  | "Pendiente"
  | "Programada"
  | "En tránsito"
  | "Entregada"
  | "Observada"
  | "Anulada";

export interface TrackingEvento {
  id: string;
  tipo: string;
  /** Hora local de Lima, sin offset (ej. "2026-09-14T17:01:00"). */
  fecha_evento: string;
  descripcion: string | null;
  /** La foto no se expone en la consulta pública; solo se indica si existe. */
  tiene_foto: boolean;
  created_at: string;
}

export interface TrackingPublico {
  numero_interno: string;
  /** Guías del cliente consolidadas en esta guía; también sirven para buscar. */
  guias_cliente: string[];
  estado: GuiaEstado;
  fecha_traslado: string;
  origen_distrito: string;
  destino_distrito: string;
  /** En orden cronológico (el más antiguo primero). */
  eventos: TrackingEvento[];
  ultimo_evento: TrackingEvento | null;
}

export class TrackingNotFoundError extends Error {}

/** Busca por número interno o por cualquiera de las guías del cliente. */
export async function fetchTrackingPorNumero(
  numero: string,
): Promise<TrackingPublico> {
  const response = await fetch(
    `${API_URL}/tracking/numero/${encodeURIComponent(numero)}`,
  );

  if (response.status === 404) {
    throw new TrackingNotFoundError(
      "No encontramos ningún envío con ese número. Verifica que esté bien escrito.",
    );
  }
  if (!response.ok) {
    throw new Error("No se pudo consultar el estado en este momento");
  }

  return (await response.json()) as TrackingPublico;
}

export type Tono = "neutral" | "info" | "success" | "warning" | "danger";

/** Pill (fondo + texto) y punto por tono, con la paleta de Anger. */
export const TONO: Record<Tono, { pill: string; punto: string }> = {
  neutral: {
    pill: "bg-surface-variant text-on-surface-variant",
    punto: "bg-[#6a7285]",
  },
  info: { pill: "bg-secondary-fixed text-secondary", punto: "bg-secondary" },
  success: { pill: "bg-emerald-100 text-emerald-800", punto: "bg-emerald-500" },
  warning: { pill: "bg-amber-100 text-amber-800", punto: "bg-amber-500" },
  danger: { pill: "bg-[#ffdad6] text-[#93000a]", punto: "bg-[#ba1a1a]" },
};

const ESTADO_TONO: Record<GuiaEstado, Tono> = {
  Pendiente: "neutral",
  Programada: "neutral",
  "En tránsito": "info",
  Entregada: "success",
  Observada: "warning",
  Anulada: "danger",
};

export function estadoTono(estado: GuiaEstado): Tono {
  return ESTADO_TONO[estado] ?? "neutral";
}

/** "En Tránsito" → "en transito": los tipos históricos no siempre siguen el catálogo. */
function normalizar(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

/**
 * Ícono (Material Symbols) y tono por tipo de evento, por palabra clave sobre
 * el tipo normalizado. Cubre el catálogo del TMS y variantes antiguas
 * ("Recojo", "En transito"); lo desconocido cae en el genérico. El orden
 * importa: "intento de entrega fallido" debe ganar a "entrega".
 */
const EVENTO_VISUAL: { claves: string[]; icono: string; tono: Tono }[] = [
  { claves: ["intento", "fallid"], icono: "schedule", tono: "warning" },
  { claves: ["rechaz"], icono: "block", tono: "warning" },
  { claves: ["incidencia", "novedad"], icono: "report", tono: "warning" },
  { claves: ["devolucion"], icono: "undo", tono: "warning" },
  { claves: ["reprogram"], icono: "event_repeat", tono: "neutral" },
  { claves: ["entrega", "entregad"], icono: "verified", tono: "success" },
  { claves: ["recojo"], icono: "inventory_2", tono: "neutral" },
  { claves: ["despacho"], icono: "warehouse", tono: "neutral" },
  { claves: ["transito"], icono: "local_shipping", tono: "info" },
  { claves: ["llegada"], icono: "where_to_vote", tono: "info" },
  { claves: ["reparto"], icono: "delivery_dining", tono: "info" },
  { claves: ["cita"], icono: "event", tono: "neutral" },
];

export function eventoVisual(tipo: string): { icono: string; tono: Tono } {
  const t = normalizar(tipo);
  const visual = EVENTO_VISUAL.find(({ claves }) => claves.some((c) => t.includes(c)));
  return visual ?? { icono: "radio_button_checked", tono: "neutral" };
}

export interface Paso {
  titulo: string;
  texto: string;
  icono: string;
  /** Fecha del primer evento que marca el paso, si existe. */
  fecha: string | null;
  completado: boolean;
  actual: boolean;
}

const PASOS: { titulo: string; texto: string; icono: string; claves: string[] }[] = [
  {
    titulo: "Guía registrada",
    texto: "Carga programada para su traslado.",
    icono: "inventory_2",
    claves: ["recojo", "despacho"],
  },
  {
    titulo: "En tránsito",
    texto: "Unidad en ruta hacia el destino.",
    icono: "local_shipping",
    claves: ["transito"],
  },
  {
    titulo: "Llegada a destino",
    texto: "Carga en destino o en reparto final.",
    icono: "warehouse",
    claves: ["llegada", "reparto", "cita"],
  },
  {
    titulo: "Entrega confirmada",
    texto: "Entrega registrada y conforme.",
    icono: "verified",
    claves: ["entrega registrada", "entregad"],
  },
];

function marcaPaso(evento: TrackingEvento, paso: number): boolean {
  const t = normalizar(evento.tipo);
  return PASOS[paso].claves.some((c) => t.includes(c));
}

/**
 * Índice (0–3) del paso en el que va el envío: el mayor entre lo que dice el
 * estado y lo que muestran los eventos (el estado de la guía no siempre se
 * actualiza al registrar un evento).
 */
function pasoActual(tracking: TrackingPublico): number {
  if (tracking.estado === "Entregada") return 3;
  const porEstado =
    tracking.estado === "En tránsito" || tracking.estado === "Observada" ? 1 : 0;
  const porEventos = [3, 2, 1].find((paso) =>
    tracking.eventos.some((e) => marcaPaso(e, paso)),
  );
  return Math.max(porEstado, porEventos ?? 0);
}

/** Línea de avance de 4 pasos derivada del estado y los eventos públicos. */
export function pasosEnvio(tracking: TrackingPublico): Paso[] {
  const actual = pasoActual(tracking);
  return PASOS.map((paso, i) => {
    const evento = tracking.eventos.find((e) => marcaPaso(e, i));
    return {
      titulo: paso.titulo,
      texto: paso.texto,
      icono: paso.icono,
      fecha: evento?.fecha_evento ?? (i === 0 ? tracking.fecha_traslado : null),
      completado: i <= actual,
      actual: i === actual,
    };
  });
}

/**
 * "14 sep 2026 · 17:01". El backend envía hora de Lima sin offset, así que
 * `new Date` la toma como hora local y se muestra tal cual.
 */
export function formatearFecha(iso: string, conHora = true): string {
  const fecha = new Date(iso);
  const dia = fecha
    .toLocaleDateString("es-PE", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(".", "");
  if (!conHora) return dia;
  const hora = fecha.toLocaleTimeString("es-PE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return `${dia} · ${hora}`;
}
