import { AppButton } from "../components/common/AppButton";

export default function NosotrosPage() {
  return (
    <main className="mt-20">
      <section className="py-20 px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div className="space-y-6">
            <h1 className="font-headline-lg text-headline-lg text-primary leading-tight">
              Especialistas en Soluciones Logísticas Integrales para Empresas
            </h1>
            <div className="w-16 h-1 bg-secondary"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Somos un operador logístico dedicado, enfocado en optimizar la
              cadena de suministro de nuestros clientes a través de la
              precisión, tecnología de vanguardia y un compromiso inquebrantable
              con la excelencia operativa. Nuestra estructura está diseñada para
              responder con agilidad a los desafíos más complejos del transporte
              nacional.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-2 bg-secondary opacity-10 rounded-xl blur-lg group-hover:opacity-20 transition-all duration-500"></div>
            <div className="relative overflow-hidden shadow-xl" style={{ aspectRatio: "4/3" }}>
              <img
                className="w-full h-full object-cover"
                alt="Centro de control logístico"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAITDPolkLC0h9es4-2yg7nQeRGyTs0Q_j8nvLjFuIhWCqzuaqtp9CZlGFJv98sFqWtNtEhy_0pXXwvvJplPF9gUqCVmat7oSJHWIf0wM2HBxNgnIFQchhuPrCij8vUHLvmJGJr_derumydgE_V4lpVvBOOkmG3WwzoBLoiegyxOLshEMxY3aFz-TK-re3lrxZqVr6T3TNf2nuZI_V7SRyiOjUiUVAB4EPbqpDE1CE_ejqTcADp9Ez4N2bLtjq16Pe9u9zd1XO-RXI4"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-20 px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-surface p-12 rounded-xl border border-outline-variant hover:border-secondary hover:shadow-lg transition-all duration-300 group shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-4xl text-primary group-hover:text-secondary transition-colors">
                  flag
                </span>
                <h2 className="font-headline-md text-headline-md text-primary">
                  NUESTRA MISIÓN
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Ser el aliado logístico nacional líder, proporcionando
                soluciones estratégicas que impulsen el crecimiento de nuestros
                clientes mediante la eficiencia operativa, la transparencia total
                y el manejo experto de mercancías en todo el territorio.
              </p>
            </div>

            <div className="bg-surface p-12 rounded-xl border border-outline-variant hover:border-secondary hover:shadow-lg transition-all duration-300 group shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-4xl text-primary group-hover:text-secondary transition-colors">
                  visibility
                </span>
                <h2 className="font-headline-md text-headline-md text-primary">
                  NUESTRA VISIÓN
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Consolidarnos como el referente de excelencia técnica y
                asistencia operativa en el mercado logístico, integrando
                innovación constante y procesos certificados que garanticen la
                máxima seguridad y trazabilidad en cada kilómetro recorrido.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center bg-secondary text-on-secondary px-4 py-1 rounded-full font-label-md text-label-md uppercase tracking-wider mb-4">
            NUESTROS VALORES
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Compromiso con la Precisión
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="group">
            <div className="text-headline-lg font-headline-lg text-secondary opacity-20 group-hover:opacity-100 transition-colors mb-4">
              01
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                assignment_turned_in
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Rigor Corporativo
              </h3>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Alineación estricta con los requerimientos de entrega y controles
              rigurosos en Centros de Distribución para asegurar la conformidad
              total.
            </p>
          </div>

          <div className="group">
            <div className="text-headline-lg font-headline-lg text-secondary opacity-20 group-hover:opacity-100 transition-colors mb-4">
              02
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                analytics
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Trazabilidad
              </h3>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Comunicación continua y reportes en tiempo real. Mantenga el
              control absoluto de sus mercancías durante todo el trayecto.
            </p>
          </div>

          <div className="group">
            <div className="text-headline-lg font-headline-lg text-secondary opacity-20 group-hover:opacity-100 transition-colors mb-4">
              03
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                gpp_good
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Seguridad Activa
              </h3>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Protección garantizada con unidades herméticas, seguros de carga
              integrales y monitoreo GPS las 24 horas del día.
            </p>
          </div>

          <div className="group">
            <div className="text-headline-lg font-headline-lg text-secondary opacity-20 group-hover:opacity-100 transition-colors mb-4">
              04
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                route
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Adaptabilidad
              </h3>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Rutas personalizadas y flexibilidad operativa para cubrir
              necesidades locales e interprovinciales con máxima eficiencia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-on-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary skew-x-12 translate-x-1/2 opacity-20" />
        <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto text-center space-y-8">
          <h2 className="font-headline-lg text-headline-lg">
            Conoce nuestras soluciones de transporte nacional
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mx-auto">
            Optimice sus operaciones con el respaldo técnico de un operador
            logístico de primer nivel.
          </p>
          <div className="pt-4">
            <AppButton
              className="px-10 py-4 shadow-lg hover:opacity-90"
              type="button"
              variant="secondary"
            >
              Explorar Nuestros Servicios
            </AppButton>
          </div>
        </div>
      </section>
    </main>
  );
}
