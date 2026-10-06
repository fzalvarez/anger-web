import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AppButton } from "../components/common/AppButton";
import { AppLinkButton } from "../components/common/AppLinkButton";
import { MathCaptcha } from "#components/seguimiento/MathCaptcha";
import { TrackingResultado } from "#components/seguimiento/TrackingResultado";
import { useMathCaptcha } from "#hooks/useMathCaptcha";
import {
  fetchTrackingPorNumero,
  TrackingNotFoundError,
  type TrackingPublico,
} from "#lib/tracking";

type Estado =
  | { tipo: "inicial" }
  | { tipo: "cargando" }
  | { tipo: "error"; mensaje: string }
  | { tipo: "listo"; tracking: TrackingPublico; consultado: string };

export default function SeguimientoPage() {
  // El enlace compartido (?guia=XXX) precarga el número; la verificación sigue siendo obligatoria.
  const [searchParams, setSearchParams] = useSearchParams();
  const [tracking, setTracking] = useState(() => searchParams.get("guia") ?? "");
  const [estado, setEstado] = useState<Estado>({ tipo: "inicial" });
  const [inputError, setInputError] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const captcha = useMathCaptcha();
  const resultsRef = useRef<HTMLElement | null>(null);

  const loading = estado.tipo === "cargando";

  useEffect(() => {
    if (estado.tipo !== "listo") return;
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const timer = setTimeout(() => setHighlight(false), 1500);
    return () => clearTimeout(timer);
  }, [estado]);

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    const valor = tracking.trim().toUpperCase();

    if (!valor) {
      setInputError(true);
      setTimeout(() => setInputError(false), 2000);
      return;
    }
    if (!captcha.esValido) {
      setEstado({
        tipo: "error",
        mensaje: "Resuelve la verificación de seguridad para continuar.",
      });
      return;
    }

    setEstado({ tipo: "cargando" });
    try {
      const resultado = await fetchTrackingPorNumero(valor);
      setEstado({ tipo: "listo", tracking: resultado, consultado: valor });
      setHighlight(true);
      setSearchParams({ guia: valor }, { replace: true });
    } catch (error) {
      const mensaje =
        error instanceof TrackingNotFoundError
          ? error.message
          : "No se pudo consultar el estado en este momento. Intenta de nuevo en unos minutos o comunícate con nuestra Central de Operaciones.";
      setEstado({ tipo: "error", mensaje });
    } finally {
      captcha.reiniciar();
    }
  };

  return (
    <main className="mt-20 min-h-screen bg-background text-on-background">
      <section className="relative pt-16 pb-12 overflow-hidden">
        <div className="max-w-4xl mx-auto px-margin-mobile text-center relative z-10">
          <h1 className="font-headline-lg text-headline-lg mb-6 text-primary">
            Seguimiento de Envíos y Carga Nacional
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
            Ingresa el número de tu guía de remisión para conocer el estado y
            el historial de tu mercancía.
          </p>

          <form noValidate onSubmit={handleSearch}>
            <div className="flex flex-col md:flex-row gap-4 p-2 bg-white rounded-xl shadow-xl border border-outline-variant max-w-3xl mx-auto group focus-within:ring-2 focus-within:ring-[#021356]/20 transition-all">
              <div
                className={`grow flex items-center px-4 rounded-lg transition-all ${
                  inputError ? "ring-2 ring-[#bc0100]/50" : ""
                }`}
              >
                <span className="material-symbols-outlined text-outline mr-3">
                  search
                </span>
                <input
                  aria-label="Número de guía de remisión"
                  autoComplete="off"
                  className="w-full border-none outline-none focus:ring-0 font-body-md text-body-md bg-transparent placeholder-outline py-3 uppercase placeholder:normal-case"
                  placeholder="Ej: GR-2026-003 o la guía de tu empresa (F001-0007356)"
                  type="text"
                  value={tracking}
                  onChange={(event) => setTracking(event.target.value)}
                />
              </div>

              <AppButton
                className="px-8 py-4 h-auto rounded-lg font-label-md text-label-md hover:bg-secondary active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                disabled={loading}
                leftIcon={
                  loading ? (
                    <span className="material-symbols-outlined animate-spin">
                      sync
                    </span>
                  ) : null
                }
                type="submit"
                variant="secondary"
              >
                {loading ? "Consultando..." : "Consultar Estado"}
              </AppButton>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
              <MathCaptcha captcha={captcha} />
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Puedes usar el número de guía de Anger o el de tu empresa.
              </p>
            </div>
          </form>

          {estado.tipo === "error" && (
            <div
              className="max-w-3xl mx-auto mt-6 flex items-start gap-3 text-left bg-secondary-fixed text-on-secondary-fixed-variant border-l-4 border-secondary rounded-lg px-4 py-3"
              role="alert"
            >
              <span className="material-symbols-outlined text-secondary">
                error
              </span>
              <p className="font-body-sm text-body-sm font-semibold">
                {estado.mensaje}
              </p>
            </div>
          )}
        </div>
      </section>

      {estado.tipo === "listo" && (
        <section ref={resultsRef} className="py-6 px-margin-mobile scroll-mt-24">
          <div className="max-w-5xl mx-auto">
            <TrackingResultado
              consultado={estado.consultado}
              highlight={highlight}
              tracking={estado.tracking}
            />
          </div>
        </section>
      )}

      <section className="py-12 px-margin-mobile">
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface-container-low border-l-4 border-secondary rounded-xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary text-3xl">
                info
              </span>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-primary mb-3">
                  ¿No encuentras tu guía o necesitas más detalle?
                </h2>

                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  Si deseas conocer la ubicación exacta de tu carga, coordinar
                  una entrega o reportar una incidencia, utiliza nuestros
                  canales directos de atención inmediata:
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start gap-3 p-3 hover:bg-white rounded-lg transition-colors">
                    <span className="font-bold text-primary">1.</span>
                    <p className="font-body-sm text-body-sm">
                      <span className="font-bold">Ejecutivo Asignado:</span>{" "}
                      Comunícate directamente con el Ejecutivo Comercial
                      asignado al soporte operativo y documentario de tu cuenta.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 p-3 hover:bg-white rounded-lg transition-colors">
                    <span className="font-bold text-primary">2.</span>
                    <p className="font-body-sm text-body-sm">
                      <span className="font-bold">Central de Operaciones:</span>{" "}
                      Llama a nuestra línea dedicada al{" "}
                      <a
                        className="text-secondary font-bold hover:underline"
                        href="tel:+51941841853"
                      >
                        +51941841853
                      </a>
                      .
                    </p>
                  </div>

                  <div className="flex items-start gap-3 p-3 hover:bg-white rounded-lg transition-colors">
                    <span className="font-bold text-primary">3.</span>
                    <p className="font-body-sm text-body-sm">
                      <span className="font-bold">Correo de Atención:</span>{" "}
                      Envía el número de guía de remisión al correo{" "}
                      <a
                        className="text-secondary font-bold hover:underline break-all"
                        href="mailto:atencionalcliente@angerperu.com"
                      >
                        atencionalcliente@angerperu.com
                      </a>{" "}
                      para recibir una actualización detallada de tu despacho.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-desktop grid md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-4 text-white">
              ¿Necesitas soporte especializado para tu carga?
            </h2>
            <p className="font-body-lg text-body-lg text-white/80 mb-8">
              Nuestros expertos logísticos están listos para brindarte la mejor
              solución en transporte y distribución a nivel nacional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <AppLinkButton
                className="px-8 py-4 h-auto shadow-lg"
                to="/contacto"
                variant="secondary"
              >
                Solicitar Cotización
              </AppLinkButton>
              <AppLinkButton
                className="border border-white/40 text-white px-8 py-4 h-auto hover:bg-white/10"
                to="/servicios"
                variant="outline"
              >
                Saber más
              </AppLinkButton>
            </div>
          </div>

          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYhmNAU4FPXja06YSF8e2rS26PTsn4YjiuHUxSUoOhaiAg1LDiLfndOoe4AOboyH0buEGKGq__xzduzw6ul70r3W0FZCAjxVg7Gf1UaYrUL0O17KouKfntSIl9wPhdt0YE5VNWu6uC77wHMJ9QcmRXWE_Idf2iiiQMjrU4iWI0VYefOe-I9qGu0OO8dMgvuaGe_PfluT8SRL2cUySma-60njtW8EVjmcFH1uibBMO7V5KUfTLCTlaMAzHsCGLBnhSxdiuXpPq4n8i-')",
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
