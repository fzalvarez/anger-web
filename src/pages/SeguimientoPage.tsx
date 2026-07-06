import { useRef, useState } from "react";
import { AppButton } from "../components/common/AppButton";

export default function SeguimientoPage() {
  const [tracking, setTracking] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const resultsRef = useRef<HTMLElement | null>(null);

  const handleSearch = () => {
    if (!tracking.trim()) {
      setInputError(true);
      setTimeout(() => setInputError(false), 2000);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setHighlight(true);
      setTimeout(() => setHighlight(false), 1500);
    }, 1200);
  };

  return (
    <main className="mt-20 min-h-screen bg-background text-on-background">
      <section className="relative pt-16 pb-12 overflow-hidden">
        <div className="max-w-4xl mx-auto px-margin-mobile text-center relative z-10">
          <h1 className="font-headline-lg text-headline-lg mb-6 text-primary">
            Seguimiento de Envíos y Carga Nacional
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
            Consulta el estado actual y la ubicación de tu mercancía en tiempo
            real.
          </p>

          <div className="flex flex-col md:flex-row gap-4 p-2 bg-white rounded-xl shadow-xl border border-outline-variant max-w-3xl mx-auto group focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <div className="grow flex items-center px-4">
              <span className="material-symbols-outlined text-outline mr-3">
                search
              </span>
              <input
                className={`w-full border-none focus:ring-0 font-body-md text-body-md bg-transparent placeholder-outline ${
                  inputError ? "ring-2 ring-secondary/50" : ""
                }`}
                placeholder="Ingresa el número de guía de remisión o código de tracking..."
                type="text"
                value={tracking}
                onChange={(event) => setTracking(event.target.value)}
              />
            </div>

            <AppButton
              className="px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-secondary active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
              disabled={loading}
              leftIcon={
                loading ? (
                  <span className="material-symbols-outlined animate-spin">
                    sync
                  </span>
                ) : null
              }
              type="button"
              variant="secondary"
              onClick={handleSearch}
            >
              {loading ? "Consultando..." : "Consultar Estado"}
            </AppButton>
          </div>
        </div>
      </section>

      <section className="py-6 px-margin-mobile">
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface-container-low border-l-4 border-secondary rounded-xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary text-3xl">
                info
              </span>

              <div>
                <h2 className="font-headline-sm text-headline-sm text-primary mb-3">
                  Canales de Consulta Directa
                </h2>

                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  Actualmente nos encontramos digitalizando e integrando de
                  forma automatizada nuestros sistemas de seguimiento en ruta.
                  Si deseas conocer el estado exacto, ubicación actual o
                  confirmación de entrega de tu carga, utiliza nuestros canales
                  directos de atención inmediata:
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
                        href="tel:013653968"
                      >
                        (01) 365 3968
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

      <section ref={resultsRef} className="py-12 px-margin-mobile">
        <div className="max-w-5xl mx-auto">
          <div
            className={`bg-white rounded-xl shadow-2xl border border-outline-variant overflow-hidden transition-all ${
              highlight ? "ring-4 ring-secondary/20" : ""
            }`}
          >
            <div className="bg-primary p-8 text-on-primary">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest opacity-80 font-bold">
                    Estado del Envío
                  </span>
                  <h3 className="font-headline-md text-headline-md mt-1">
                    Guía de Remisión: GR-2026-XXXX{" "}
                    <span className="text-sm opacity-60 font-normal ml-2">
                      (Simulación)
                    </span>
                  </h3>
                </div>

                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
                  </span>
                  <span className="font-label-md text-label-md">
                    EN TRÁNSITO
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-white/10">
                {[
                  ["Servicio", "ANGER EXCLUSIVO"],
                  ["Destino", "Chiclayo, Lambayeque"],
                  ["Cliente", "Corporativo XYZ"],
                  ["Est. Entrega", "24 Oct, 2024"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-xs opacity-70 uppercase font-bold">
                      {label}
                    </p>
                    <p className="font-label-md text-label-md mt-1">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
                {[
                  {
                    icon: "inventory_2",
                    title: "Recojo de Mercancía",
                    text: "Carga estibada y validada en almacén de origen.",
                    status: "22 OCT - 09:15 AM",
                    active: true,
                  },
                  {
                    icon: "local_shipping",
                    title: "En Tránsito",
                    text: "Unidad en ruta nacional bajo monitoreo satelital GPS activo.",
                    status: "EN PROCESO",
                    active: true,
                  },
                  {
                    icon: "warehouse",
                    title: "Llegada a Destino",
                    text: "Ingreso a Centro de Distribución / Almacén principal.",
                    status: "PENDIENTE",
                    active: false,
                  },
                  {
                    icon: "verified",
                    title: "Entrega Confirmada",
                    text: "Guía firmada y conformidad reportada al cliente.",
                    status: "PENDIENTE",
                    active: false,
                  },
                ].map((step) => (
                  <div
                    key={step.title}
                    className={`relative z-10 flex flex-col items-center text-center w-full md:w-1/4 ${
                      step.active ? "" : "opacity-40"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                        step.active
                          ? "bg-secondary text-on-secondary shadow-lg"
                          : "bg-surface-variant text-on-surface-variant"
                      } ${step.title === "En Tránsito" ? "ring-8 ring-secondary/20" : ""}`}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={
                          step.active
                            ? { fontVariationSettings: "'FILL' 1" }
                            : undefined
                        }
                      >
                        {step.icon}
                      </span>
                    </div>
                    <h4 className="font-label-md text-label-md text-primary">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-on-surface-variant mt-2 leading-tight">
                      {step.text}
                    </p>
                    <p
                      className={`text-[10px] font-bold mt-1 ${
                        step.active
                          ? "text-secondary"
                          : "text-on-surface-variant"
                      }`}
                    >
                      {step.status}
                    </p>
                  </div>
                ))}

                <div className="hidden md:block absolute top-6 left-[12.5%] right-[62.5%] h-1 bg-secondary z-0" />
                <div className="hidden md:block absolute top-6 left-[37.5%] right-[37.5%] h-1 border-t-4 border-dashed border-outline-variant z-0" />
                <div className="hidden md:block absolute top-6 left-[62.5%] right-[12.5%] h-1 border-t-4 border-dashed border-outline-variant z-0" />
              </div>
            </div>

            <div className="bg-surface h-80 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAjFlhb7Kj6UUgquHRe6TBOHUTYubmrd9DOpgyFHnjdrPOqkGzMQtDzxMygGD97Wx1CYz4a1zv9r9lQl3BpbzRs-HhpmO_JSB9M_SkDddwy5XDgdy6fhK3V_af6ihKkcqyzWfgcwzZYfuEaYa3_E44pBJR943EG0zFiLs6HkVVVTiiIS2Z_SCtTecpHkcicPbpu-Y7palxllBRN09tzTVr1O8qpeDpYzAV16hiV5PIC_bqt6RsZlVIYbQMOUggITWJsnFioYoW_q61m')",
                }}
              />

              <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row gap-4">
                <div className="bg-white p-4 rounded-lg shadow-lg border border-outline-variant flex items-center gap-4 flex-1 max-w-sm">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <span className="material-symbols-outlined text-primary">
                      location_on
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-outline uppercase tracking-wider">
                      Última Ubicación Conocida
                    </p>
                    <p className="font-label-md text-label-md text-primary">
                      Km 540 Panamericana Norte, Virú
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-lg border border-outline-variant flex items-center gap-4 flex-1 max-w-sm">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <span className="material-symbols-outlined text-secondary">
                      speed
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-outline uppercase tracking-wider">
                      Velocidad Promedio
                    </p>
                    <p className="font-label-md text-label-md text-primary">
                      78 km/h
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
            <h2 className="font-headline-lg text-headline-lg mb-4">
              ¿Necesitas soporte especializado para tu carga?
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary/80 mb-8">
              Nuestros expertos logísticos están listos para brindarte la mejor
              solución en transporte y distribución a nivel nacional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <AppButton
                className="px-8 py-4 shadow-lg"
                type="button"
                variant="secondary"
              >
                Solicitar Cotización
              </AppButton>
              <AppButton
                className="border border-on-primary text-on-primary px-8 py-4 hover:bg-on-primary/10"
                type="button"
                variant="outline"
              >
                Saber más
              </AppButton>
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
