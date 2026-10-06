import { useState } from "react";
import { cn } from "#lib/utils";
import {
  estadoTono,
  eventoVisual,
  formatearFecha,
  pasosEnvio,
  TONO,
  type Paso,
  type TrackingEvento,
  type TrackingPublico,
} from "#lib/tracking";

interface TrackingResultadoProps {
  tracking: TrackingPublico;
  /** Número tal como lo ingresó el usuario (puede ser una guía del cliente). */
  consultado: string;
  highlight: boolean;
}

export function TrackingResultado({
  tracking,
  consultado,
  highlight,
}: TrackingResultadoProps) {
  const [copiado, setCopiado] = useState(false);
  const tono = estadoTono(tracking.estado);
  const pasos = pasosEnvio(tracking);
  const eventos = [...tracking.eventos].reverse();
  const ultimo = tracking.ultimo_evento;
  const consultoGuiaCliente =
    consultado !== tracking.numero_interno.toUpperCase();

  async function compartir() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1500);
    } catch {
      // Sin permiso de portapapeles: el usuario puede copiar la URL a mano.
    }
  }

  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-2xl border border-outline-variant overflow-hidden transition-all",
        highlight && "ring-4 ring-[#bc0100]/20",
      )}
    >
      <div className="bg-primary p-6 md:p-8 text-on-primary">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest opacity-80 font-bold">
              Estado del Envío
            </span>
            <h2 className="font-headline-md text-headline-md mt-1 text-white">
              Guía de Remisión: {tracking.numero_interno}
            </h2>
            {consultoGuiaCliente && (
              <p className="text-sm opacity-70 mt-1">
                Consultado como: <span className="font-bold">{consultado}</span>
              </p>
            )}
          </div>

          <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              {tono !== "success" && tono !== "danger" && (
                <span
                  className={cn(
                    "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                    TONO[tono].punto,
                  )}
                />
              )}
              <span
                className={cn(
                  "relative inline-flex rounded-full h-3 w-3",
                  TONO[tono].punto,
                )}
              />
            </span>
            <span className="font-label-md text-label-md uppercase">
              {tracking.estado}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-white/10">
          <DatoCabecera label="Origen" valor={tracking.origen_distrito} />
          <DatoCabecera label="Destino" valor={tracking.destino_distrito} />
          <DatoCabecera
            label="Fecha de traslado"
            valor={formatearFecha(tracking.fecha_traslado, false)}
          />
          <DatoCabecera
            label="Última actualización"
            valor={ultimo ? formatearFecha(ultimo.fecha_evento) : "Sin reportes"}
          />
        </div>

        {tracking.guias_cliente.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mt-6">
            <span className="text-xs opacity-70 uppercase font-bold">
              Guías del cliente:
            </span>
            {tracking.guias_cliente.map((guia) => (
              <span
                key={guia}
                className="bg-white/10 border border-white/20 rounded-full px-3 py-0.5 text-xs font-bold"
              >
                {guia}
              </span>
            ))}
          </div>
        )}
      </div>

      {tracking.estado === "Anulada" ? (
        <Aviso
          icono="cancel"
          className="bg-[#ffdad6] text-[#93000a]"
          texto="Esta guía fue anulada. Si tienes dudas, comunícate con nuestra Central de Operaciones."
        />
      ) : (
        <>
          {tracking.estado === "Observada" && (
            <Aviso
              icono="report"
              className="bg-amber-50 text-amber-800"
              texto="El envío presenta una observación. Nuestro equipo de operaciones ya está gestionándola."
            />
          )}
          <Pasos pasos={pasos} />
        </>
      )}

      <div className="border-t border-outline-variant p-6 md:p-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary">
              history
            </span>
            <h3 className="font-headline-sm text-headline-sm text-primary">
              Historial de eventos
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-label-md text-label-md text-on-surface-variant">
              {eventos.length}{" "}
              {eventos.length === 1 ? "HITO REGISTRADO" : "HITOS REGISTRADOS"}
            </span>
            <button
              className="inline-flex items-center gap-1 rounded-lg border border-outline-variant px-3 py-1.5 font-label-md text-label-md text-primary hover:border-secondary hover:text-secondary transition-colors"
              type="button"
              onClick={compartir}
            >
              <span className="material-symbols-outlined text-[18px]">
                {copiado ? "check" : "share"}
              </span>
              {copiado ? "ENLACE COPIADO" : "COMPARTIR"}
            </button>
          </div>
        </div>

        {eventos.length > 0 ? (
          <ol className="flex flex-col">
            {eventos.map((evento, i) => (
              <EventoItem
                key={evento.id}
                actual={i === 0}
                evento={evento}
                ultimo={i === eventos.length - 1}
              />
            ))}
          </ol>
        ) : (
          <p className="bg-surface-container-low rounded-lg p-6 font-body-sm text-body-sm text-on-surface-variant">
            Todavía no hay eventos registrados para este envío. Los hitos
            aparecerán aquí en cuanto la carga inicie su recorrido.
          </p>
        )}
      </div>
    </div>
  );
}

function DatoCabecera({ label, valor }: { label: string; valor: string }) {
  return (
    <div className="min-w-0">
      <p className="text-xs opacity-70 uppercase font-bold">{label}</p>
      <p className="font-label-md text-label-md mt-1 truncate" title={valor}>
        {valor}
      </p>
    </div>
  );
}

function Aviso({
  icono,
  texto,
  className,
}: {
  icono: string;
  texto: string;
  className: string;
}) {
  return (
    <div className={cn("flex items-start gap-3 px-6 md:px-8 py-4", className)}>
      <span className="material-symbols-outlined">{icono}</span>
      <p className="font-body-sm text-body-sm font-semibold">{texto}</p>
    </div>
  );
}

function Pasos({ pasos }: { pasos: Paso[] }) {
  const actual = pasos.findIndex((p) => p.actual);

  return (
    <div className="p-6 md:p-12">
      <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
        {pasos.map((paso) => (
          <div
            key={paso.titulo}
            className={cn(
              "relative z-10 flex md:flex-col items-center md:text-center gap-4 md:gap-0 w-full md:w-1/4",
              !paso.completado && "opacity-40",
            )}
          >
            <div
              className={cn(
                "w-12 h-12 shrink-0 rounded-full flex items-center justify-center md:mb-4",
                paso.completado
                  ? "bg-secondary text-on-secondary shadow-lg"
                  : "bg-surface-variant text-on-surface-variant",
                paso.actual && "ring-8 ring-[#bc0100]/20",
              )}
            >
              <span
                className="material-symbols-outlined"
                style={
                  paso.completado
                    ? { fontVariationSettings: "'FILL' 1" }
                    : undefined
                }
              >
                {paso.icono}
              </span>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-primary">
                {paso.titulo}
              </h4>
              <p className="text-[11px] text-on-surface-variant mt-2 leading-tight">
                {paso.texto}
              </p>
              <p
                className={cn(
                  "text-[10px] font-bold mt-1 uppercase",
                  paso.completado ? "text-secondary" : "text-on-surface-variant",
                )}
              >
                {paso.fecha && paso.completado
                  ? formatearFecha(paso.fecha)
                  : paso.actual
                    ? "En proceso"
                    : paso.completado
                      ? "Completado"
                      : "Pendiente"}
              </p>
            </div>
          </div>
        ))}

        {/* Conectores entre pasos (solo escritorio): sólido hasta el paso actual. */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(
              "hidden md:block absolute top-6 h-1 z-0",
              i < actual
                ? "bg-secondary"
                : "border-t-4 border-dashed border-outline-variant",
            )}
            style={{ left: `${12.5 + i * 25}%`, right: `${62.5 - i * 25}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function EventoItem({
  evento,
  actual,
  ultimo,
}: {
  evento: TrackingEvento;
  actual: boolean;
  ultimo: boolean;
}) {
  const { icono, tono } = eventoVisual(evento.tipo);
  const alerta = tono === "warning" || tono === "danger";

  return (
    <li className={cn("relative flex items-start gap-4", !ultimo && "pb-6")}>
      {!ultimo && (
        <div className="absolute top-11 bottom-0 left-[21px] w-0.5 bg-outline-variant" />
      )}
      <div
        className={cn(
          "relative z-10 flex w-11 h-11 shrink-0 items-center justify-center rounded-full",
          actual
            ? cn(
                "text-white shadow-lg ring-4",
                alerta
                  ? "bg-amber-500 ring-amber-100"
                  : tono === "success"
                    ? "bg-emerald-600 ring-emerald-100"
                    : "bg-secondary ring-[#bc0100]/15",
              )
            : alerta
              ? "bg-amber-100 text-amber-700"
              : "bg-surface-container text-primary",
        )}
      >
        <span
          className="material-symbols-outlined text-[22px]"
          style={actual ? { fontVariationSettings: "'FILL' 1" } : undefined}
        >
          {icono}
        </span>
      </div>

      <div
        className={cn(
          "flex min-w-0 flex-1 flex-col gap-1 rounded-lg border p-4 transition-colors",
          actual
            ? "border-outline-variant bg-white shadow-sm"
            : "border-transparent bg-surface-container-low",
        )}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-body-md text-body-md font-bold text-primary">
              {evento.tipo}
            </span>
            {actual && (
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-label-sm font-label-md uppercase",
                  TONO[tono === "neutral" ? "info" : tono].pill,
                )}
              >
                Actual
              </span>
            )}
          </div>
          <span className="font-label-md text-label-md text-on-surface-variant whitespace-nowrap">
            {formatearFecha(evento.fecha_evento)}
          </span>
        </div>
        {evento.descripcion && (
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {evento.descripcion}
          </p>
        )}
        {evento.tiene_foto && (
          <span className="mt-1 inline-flex w-fit items-center gap-1 rounded bg-surface-container px-2 py-0.5 text-[11px] font-bold text-primary">
            <span className="material-symbols-outlined text-[14px]">
              photo_camera
            </span>
            Con evidencia fotográfica
          </span>
        )}
      </div>
    </li>
  );
}
