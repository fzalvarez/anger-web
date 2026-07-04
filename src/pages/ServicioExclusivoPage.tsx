export default function ServicioExclusivoPage() {
  return (
    <main className="mt-20 bg-background text-on-surface">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Transporte exclusivo de carga pesada"
            className="w-full h-full object-cover brightness-[0.4]"
            src="https://lh3.googleusercontent.com/aida/AP1WRLvgExlh93vARy8zeTazpUZMh6IarXR9C4GeZT24ZXu_3fJtFPu3AZ5SEyyt1m9YcxcGIdwQDqdjgbX6gCWftpEzKWCqiL16vWEcDPLOLg-9iz7J_c4hYkBdfmo4SIUAQhnDMjIqHj99zzWf_AO_sEmCNvUvpjAMVDy7G2TOmpboPLtqbAQ91TWC-3-QlJawivHD9eXQzEdqbw0mmcSJLoV_bwu3RZvk_ZJMVhrrJw44fGcNDx5lPuih0iHU"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-margin-desktop max-w-container-max mx-auto py-20">
          <div className="max-w-4xl space-y-6">
            <span className="inline-block bg-secondary text-on-secondary px-4 py-1 font-label-md text-label-md tracking-widest uppercase rounded-sm">
              ANGER EXCLUSIVO
            </span>

            <h1 className="font-headline-lg text-headline-lg text-white leading-tight">
              Transporte de Carga en Unidades Completas y Dedicadas
              <br />
              Furgones y Plataformas
            </h1>

            <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl">
              Soluciones de transporte exclusivo a nivel nacional para
              operaciones logísticas industriales, farmacéuticas y mineras de
              alta envergadura.
            </p>

            <div className="pt-8">
              <a
                className="bg-secondary hover:bg-red-700 text-white font-bold px-10 py-4 rounded-lg shadow-lg flex items-center gap-3 w-fit transition-all hover:translate-x-2"
                href="#quote"
              >
                <span>Cotizar Unidad Completa</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-gutter">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Especificaciones de la Flota Pesada
            </h2>
            <div className="w-24 h-1.5 bg-secondary" />
          </div>

          <p className="font-body-md text-body-md text-outline max-w-md">
            Diseñamos soluciones a medida con vehículos de última generación,
            optimizados para el rendimiento y la seguridad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              tag: "CONSUMO MASIVO & RETAIL",
              title: "Furgones Cerrados de 15 a 30 TN",
              text: "Unidades herméticas ideales para consumo masivo, retail y carga seca farmacéutica. Capacidades volumétricas optimizadas de 50 a 90 m³ que maximizan el factor de estiba en carga paletizada.",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAsSRZAFqrwc2jnIrU4NYd9zT0HGm-FEZo-3x__ET7wvgirW4NAU3gXn645d3omSoApluEkcvlSV2xR9lXMwaMNYsAgSNsX-C5p1sL5CZRYWdvwmr1QvoXtvli4IG04e8KZ5xJYqiK7Am8C-LX6S-xbnRl4BIs5UxxZlMoF0qP6x2CN45u7uVIkLrQQPPu-xc-UJb4rIZOQzQSU5SIub4Na68a0z8GROt6Pg8CkqzoMI94mwzGVtm_0GZXHEGEUoO5thO25CDdT4d4_",
              items: [
                "Control de sellos de seguridad",
                "Interiores revestidos para protección",
              ],
            },
            {
              tag: "INDUSTRIAL & MINERÍA",
              title: "Unidades Tipo Plataforma de 30 TN",
              text: "Vehículos pesados configurados para el traslado seguro de maquinaria industrial, componentes mineros, estructuras metálicas y suministros pesados en rutas de alta exigencia geográfica.",
              image:
                "https://lh3.googleusercontent.com/aida/AP1WRLtyys-z4Jg1CZSYHK4nnCJsQCXcJEqYhxyYE3OHfSb6jTGZ5l4dHaKYMQWeQGyBC8lVjQfG0NtWaSdGgaLUA1jwOrT3Wba-1bkMtkUYywrmcwN3CRxGu3r1cQnqA07lcwv7ys1vhfq_sd1GBejHljhfV9bvSoEQbnvg7gQdCqlCWHWgYvCkN_gi3DPUfrgPIlsTj7fayNgA40Wc9WKoMrGkPJyuwB_qvXnSt8NKcHNRzO08EqG1zhv5B25k",
              items: [
                "Sistemas de trincado de alta resistencia",
                "Chasis reforzado para rutas críticas",
              ],
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-80 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={card.title}
                  src={card.image}
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 font-label-md text-label-md rounded">
                  {card.tag}
                </div>
              </div>

              <div className="p-10 flex-1 border-l-[6px] border-transparent group-hover:border-secondary transition-all">
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  {card.title}
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  {card.text}
                </p>

                <ul className="space-y-3 font-label-md text-label-md text-primary">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-xl">
                        check_circle
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-on-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-5">
            <h2 className="font-headline-lg text-headline-lg mb-8 border-l-8 border-secondary pl-6">
              Protocolos de Seguridad y Homologación
            </h2>

            <p className="font-body-lg text-body-lg leading-relaxed text-on-primary-container mb-8">
              Operamos bajo exigentes estándares corporativos. Toda la flota
              cuenta con revisiones técnicas vigentes ante el MTC, sistemas de
              rastreo satelital GPS activo las 24 horas y pólizas de seguro de
              carga dedicadas.
            </p>

            <p className="font-body-md text-body-md opacity-80 mb-10">
              Nuestros conductores están capacitados en manejo defensivo y
              protocolos de ingreso a campamentos y plantas industriales.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                ["my_location", "GPS 24/7"],
                ["verified_user", "CERTIFICACIÓN MTC"],
                ["shield", "SEGUROS FULL"],
                ["engineering", "MANEJO DEFENSIVO"],
              ].map(([icon, label]) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-4xl">
                    {icon}
                  </span>
                  <div className="font-label-md text-label-md">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                className="w-full h-96 object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
                alt="Centro de control logístico con monitoreo GPS"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQuq32FcTw61Fr-V3m7Xjlm5cfDo1JaisAk_djAnS7dvLUNuBsyYWDgPbGPthmswsxgXsya3VMIe-uo0Ts0SRcc408e4R2x4-cwTS5pPcE06_ta-auHWHZLr-DXlGOIjmxI2tqwBt50LOjXe2QQacYVjJQFHK5KZ5dbDNQ2R2eHdjNdKnYGoqOrUGKgWZN3OnrL2gBZpE00CG3RLPojZ6ZuSJDe0z9RgRQDqNu668hX10o9IV_RWeZvacIRxDfEmJjmwgIJG3azq4K"
              />

              <div className="absolute inset-0 bg-secondary/10 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined text-white text-5xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                </button>
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                <span className="font-label-sm text-label-sm uppercase tracking-tighter text-secondary">
                  MONITOREO EN TIEMPO REAL
                </span>
                <div className="font-body-sm text-body-sm text-white">
                  Centro de Control Operativo - Vigilancia permanente de cada
                  ruta.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24 px-margin-desktop bg-surface-container-low"
        id="quote"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-outline-variant p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-secondary rotate-45 translate-x-12 -translate-y-12" />

          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            ¿Listo para mover su carga con exclusividad?
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
            Obtenga una cotización personalizada para su operación industrial o
            comercial hoy mismo.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              className="bg-secondary text-white font-bold px-12 py-5 rounded shadow-lg hover:bg-red-700 transition-all text-body-md font-body-md"
              href="/contacto"
            >
              Cotizar Unidad Completa
            </a>

            <a
              className="flex items-center gap-2 font-bold text-primary hover:text-secondary transition-colors text-body-md font-body-md"
              href="tel:013653968"
            >
              <span className="material-symbols-outlined">call</span>
              Hablar con un asesor
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-outline-variant flex flex-wrap justify-center gap-gutter opacity-60">
            {[
              ["description", "Rápida facturación"],
              ["schedule", "Disponibilidad 24/7"],
              ["language", "Cobertura Nacional"],
            ].map(([icon, label]) => (
              <div key={label} className="flex items-center gap-2">
                <span className="material-symbols-outlined">{icon}</span>
                <span className="font-label-md text-label-md">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
