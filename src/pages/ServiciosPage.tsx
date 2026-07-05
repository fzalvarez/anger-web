import { AppButton } from "../components/common/AppButton";

export default function ServiciosPage() {
  return (
    <main className="mt-20 bg-background text-on-background">
      <section className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCowqYDG_CWHGJrcm3B88wZ4Uq-a_jhBbn76ke40-xPZWWVL-jguLHJzISLc8oKNHJi0rbOVHqww2-edBy2v56sujsjKtnGsqpKiLQ1Dppogi6a3wg0AbooYt9C57vRjdlP47PJLTccMgVDQjiEDtlOxwov_49CnSLN-iTI_HkE0q7lPvImSuZFb5RZNIWeC5RPt5zJcHW-YryTWMWcV2glSAqeRVAvdPvp3D6waM46UUQh4TuXJw1W5dEZBsHS9fI-Z-BLbclrNgu')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/0" />

        <div className="relative h-full flex flex-col justify-center px-margin-desktop max-w-container-max mx-auto text-white">
          <div className="max-w-2xl">
            <h1 className="font-headline-lg text-headline-lg mb-6 leading-tight">
              Distribución Nacional Express y Logística Comercial B2B
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary/80 leading-relaxed mb-8">
              Conectamos tus almacenes con los principales puntos de venta y
              Centros de Distribución del país mediante un servicio ágil,
              monitoreado y diseñado para cumplir ventanas horarias estrictas.
            </p>
            <AppButton variant="hero" size="lg" leftIcon={<span className="material-symbols-outlined">local_shipping</span>}>
              OPERACIÓN EXPRESS
            </AppButton>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-2xl h-[450px]">
              <img
                className="w-full h-full object-cover"
                alt="Profesional logístico revisando un manifiesto digital"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGB_e6Rm0slfQjg4WwAYBLXA6TJE09khyn5aCs3WfxNRK0ixE7cw10lftc-2pWd942MEfwMBrVc2VFFBYZD7wphVVlbqCdU7PwDR8622CmlwvXyrvmSSSBMsgYHqoaOkCgsmVil1n48C14a6nUux5H7BGWQexnDnve19k6N-akKAe_EE2BIVQSzs46aNuPBraLIoEKwrZZsTSJ_Tj-FkJKi0hWLssE1HV5Q_B-82kbTNK1VBiRqEHAa8Cxb42zSN1O0K8Na4F7hoUr"
              />
              <div className="absolute bottom-6 right-6 bg-primary p-6 rounded-lg shadow-lg">
                <span className="text-on-primary font-headline-md text-headline-md block">
                  99.8%
                </span>
                <span className="text-on-primary/80 font-label-md text-label-md">
                  ENTREGA A TIEMPO
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="inline-flex items-center bg-secondary text-on-secondary px-4 py-1 rounded-full font-label-md text-label-md uppercase tracking-wider mb-4">
              ESPECIALISTAS EN RETAIL
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Gestión Específica para Retail y Consumo Masivo
            </h2>
            <div className="w-20 h-1 bg-secondary mb-8" />
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              Entendemos el impacto financiero de un rechazo o una penalidad por
              impuntualidad. Por ello, nuestro servicio Express incluye un
              control riguroso de citas en las principales cadenas de
              supermercados, tiendas por departamento y homecenters de Lima y
              provincias.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Nos encargamos del flujo documentario completo y el retorno
              oportuno de tus guías de remisión firmadas, garantizando un ciclo
              comercial impecable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-container-low">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Estándares de Servicio (SLAs)
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Nuestro compromiso con la excelencia operativa se mide en cada
              kilómetro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              {
                icon: "support_agent",
                title: "Ejecutivo Dedicado",
                text: "Un solo canal de comunicación directo para la coordinación operativa de tus despachos y contingencias en ruta.",
              },
              {
                icon: "assignment_turned_in",
                title: "Confirmación Diaria",
                text: "Reportes automatizados del estado de tus envíos al cierre de cada jornada operativa para un control total.",
              },
              {
                icon: "schedule",
                title: "Recojos Flexibles",
                text: "Programación de unidades adaptada a los picos de demanda y flujos de salida de tu centro de distribución.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant hover:shadow-lg hover:border-secondary transition-all group border-l-4 border-l-secondary"
              >
                <div className="w-14 h-14 bg-surface-container flex items-center justify-center rounded-lg mb-6 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary text-[32px]">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                  {item.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-on-primary overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary skew-x-12 translate-x-1/2 opacity-20" />

        <div className="px-margin-desktop max-w-container-max mx-auto text-center relative z-10">
          <h2 className="font-headline-lg text-headline-lg mb-4">
            Optimiza tu logística nacional con ANGER Express
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mx-auto mb-10">
            Solicita hoy una cotización personalizada y descubre cómo podemos
            elevar tus estándares de entrega B2B.
          </p>
          <AppButton
            className="px-10 py-5 shadow-lg"
            type="button"
            variant="secondary"
          >
            Solicitar Tarifa Express
          </AppButton>
        </div>
      </section>
    </main>
  );
}
