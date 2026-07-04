export default function ServicioAereoPage() {
  return (
    <main className="mt-20 bg-surface text-on-surface overflow-x-hidden">
      <section className="relative min-h-[819px] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10" />
          <img
            className="w-full h-full object-cover"
            alt="Avión de carga siendo preparado en terminal aérea"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAriG5CA8cvz_czmaNHPglr2U04ZlHJ8ej5fNHHEp-uddh1H9RqAIBQYBxv3Y5p3Loqji1jaKo9x059oPHzTZI-Z9XRHqRpIpvWV9i1SyTclzjk5Fj-QRHIFN9UiAuTmtp6GznPD_9NTr7zC6O1Pz1OzR9KFwfO2DZgiYlv5u5SjAijthvon_bHcYyiSkbtDzCe8IEikHWGdJ5V_Wn2gux4_q0dYz3W58-7QKeufPqmnh_Xy4o6Xgh71YNvd7J4hL40NcNLxKDWa5OR"
          />
        </div>

        <div className="px-margin-desktop max-w-container-max mx-auto relative z-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-secondary text-on-primary px-4 py-1 mb-6 rounded-full">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                bolt
              </span>
              <span className="font-label-md text-label-md">
                ALTA PRIORIDAD NACIONAL
              </span>
            </div>

            <h1 className="font-headline-lg text-headline-lg text-on-primary mb-6 leading-tight">
              Logística Aérea Nacional para Cargas de Alta Prioridad
            </h1>

            <p className="font-body-lg text-body-lg text-on-primary/90 mb-8">
              La vía más rápida para mitigar quiebres de stock o trasladar
              suministros críticos. Conectamos tus almacenes con las terminales
              aéreas de los principales departamentos del país en tiempos
              récord.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                className="bg-secondary text-on-primary px-8 py-4 rounded-lg font-label-md hover:bg-secondary-container transition-all active:scale-95 flex items-center gap-2"
                href="#coordinar"
              >
                COORDINAR ENVÍO AÉREO URGENTE
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>

              <button className="bg-transparent border border-on-primary text-on-primary px-8 py-4 rounded-lg font-label-md hover:bg-on-primary/10 transition-all">
                DESCARGAR PORTAFOLIO
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <span className="text-secondary font-label-md tracking-widest block mb-2">
                ESPECIFICACIONES TÉCNICAS
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Modalidades de Carga Aérea
              </h2>
            </div>

            <p className="font-body-md text-on-surface-variant max-w-sm">
              Soluciones adaptadas a la criticidad de su mercancía con
              trazabilidad total.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {[
              {
                icon: "shutter_speed",
                title: "Servicio Aéreo Urgente (24 Horas)",
                text: "Despachos de alta prioridad diseñados para muestras comerciales, repuestos críticos de maquinaria o lotes farmacéuticos urgentes de carga seca. Entrega máxima en el aeropuerto de destino dentro de las 24 horas.",
                label: "TIEMPO CRÍTICO",
                value: "DISPONIBILIDAD 24/7",
                color: "secondary",
              },
              {
                icon: "inventory_2",
                title: "Servicio de Carga Regular (Hasta 2 TN)",
                text: "Consolidación y coordinación logística para envíos de volumen mediano, hasta 2 toneladas por despacho, optimizando costos logísticos sin perder la velocidad del canal aéreo. Ideal para reabastecimiento programado.",
                label: "ALTO VOLUMEN",
                value: "HASTA 2.000 KG",
                color: "primary",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-lowest p-8 border border-outline-variant border-l-4 border-l-transparent hover:border-l-secondary hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`w-12 h-12 flex items-center justify-center mb-6 transition-colors ${
                      item.color === "secondary"
                        ? "bg-secondary/10 group-hover:bg-secondary"
                        : "bg-primary/10 group-hover:bg-primary"
                    }`}
                  >
                    <span className="material-symbols-outlined group-hover:text-on-primary">
                      {item.icon}
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4">
                    {item.title}
                  </h3>

                  <p className="font-body-md text-on-surface-variant">
                    {item.text}
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-outline-variant flex justify-between items-center gap-4">
                  <span
                    className={`font-label-md ${
                      item.color === "secondary"
                        ? "text-secondary"
                        : "text-primary"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span className="text-body-sm font-bold text-right">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-on-primary overflow-hidden relative">
        <div className="px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div
                className="aspect-video w-full bg-cover bg-center shadow-2xl relative"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9S3AHw5F3fXAPzyHLcbd_p__97XYP3UsmNxkPfFY_WI9v_on8vxtjaJMyhnUe8DUfvjbNGM8SYjAPi1VYDaHLU4h8hFjLKz6kWECr6cahHwuTqXkJFOSJpiP4mM1okHx0vGbLZ24KCGEjYQYYAYahnU-ine0wgl4ov9gr9o7cRxNVdjuWC4JS8h8Xki7-TfMJkUNG5gnSjIYXIxf4HcCzXPjwM_Y8DtZsR9HPWTkDQcn49tpQUCpQWxIHs5h21Boh6d7uMz0Fmx7P')",
                }}
              >
                <div className="absolute -bottom-6 -right-6 bg-secondary p-8 hidden md:block">
                  <span className="text-headline-sm font-headline-sm text-on-primary block">
                    99.8%
                  </span>
                  <span className="text-label-sm uppercase tracking-widest text-on-primary/80">
                    Precisión Documentaria
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="text-secondary-fixed font-label-md tracking-widest block mb-4">
                GESTIÓN DE TERMINALES
              </span>

              <h2 className="font-headline-lg text-headline-lg mb-6">
                Soporte en Terminales y Aduana
              </h2>

              <p className="font-body-lg text-body-lg mb-8 text-on-primary/80">
                Nos encargamos del manipuleo, trámites documentarios aduaneros
                locales/aeroportuarios y la cadena de custodia de la mercancía
                seca, garantizando un flujo limpio desde el recojo hasta la
                puesta a disposición.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary text-2xl">
                    description
                  </span>
                  <div>
                    <h4 className="font-bold mb-1">Trámites Aduaneros</h4>
                    <p className="text-body-sm text-on-primary/70">
                      Gestión completa de manifiestos y guías aéreas sin
                      demoras.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary text-2xl">
                    verified_user
                  </span>
                  <div>
                    <h4 className="font-bold mb-1">Cadena de Custodia</h4>
                    <p className="text-body-sm text-on-primary/70">
                      Seguimiento físico riguroso en cada punto de
                      transferencia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-1/3 h-full bg-on-background/30 -skew-x-12 translate-x-1/2" />
      </section>

      <section
        className="py-24 bg-surface-container-high border-t border-outline-variant"
        id="coordinar"
      >
        <div className="px-margin-desktop max-w-container-max mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            ¿Tiene un embarque crítico hoy?
          </h2>

          <p className="font-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
            Nuestros especialistas en transporte aéreo están listos para
            coordinar su recojo y despacho de inmediato. Actuamos con la
            urgencia que su negocio demanda.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              className="bg-secondary text-on-primary px-10 py-5 rounded-lg font-headline-sm hover:bg-secondary-container transition-all active:scale-95 shadow-lg flex items-center justify-center gap-3"
              href="/contacto"
            >
              COORDINAR ENVÍO AÉREO URGENTE
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                rocket_launch
              </span>
            </a>

            <a
              className="bg-primary text-on-primary px-10 py-5 rounded-lg font-headline-sm hover:bg-primary-container transition-all active:scale-95 flex items-center justify-center gap-3"
              href="tel:013653968"
            >
              Llamar a Despacho
              <span className="material-symbols-outlined">call</span>
            </a>
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-on-surface-variant font-label-md">
            {[
              "COBERTURA NACIONAL",
              "MONITOREO EN TIEMPO REAL",
              "SEGURO DE CARGA",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">
                  check_circle
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
