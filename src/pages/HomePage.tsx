export default function HomePage() {
  return (
    <main className="mt-20">
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Truck on highway"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida/AP1WRLvgExlh93vARy8zeTazpUZMh6IarXR9C4GeZT24ZXu_3fJtFPu3AZ5SEyyt1m9YcxcGIdwQDqdjgbX6gCWftpEzKWCqiL16vWEcDPLOLg-9iz7J_c4hYkBdfmo4SIUAQhnDMjIqHj99zzWf_AO_sEmCNvUvpjAMVDy7G2TOmpboPLtqbAQ91TWC-3-QlJawivHD9eXQzEdqbw0mmcSJLoV_bwu3RZvk_ZJMVhrrJw44fGcNDx5lPuih0iHU"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 w-full px-margin-desktop max-w-container-max mx-auto text-on-primary">
          <div className="max-w-2xl">
            <span className="bg-secondary text-white px-4 py-1 rounded-full font-label-md text-label-md uppercase tracking-wider mb-6 inline-block">
              Soluciones de Transporte 360°
            </span>
            <h1 className="font-headline-lg text-headline-lg mb-6 leading-tight">
              Operador Logístico en Perú: <br />
              <span className="text-secondary-fixed">
                Transporte y Distribución Nacional Segura
              </span>
            </h1>
            <p className="font-body-lg text-body-lg mb-8 opacity-90">
              Optimizamos su cadena de suministro con tecnología de punta y una
              flota de vanguardia para garantizar entregas precisas en todo el
              territorio peruano.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary hover:bg-secondary-container text-white px-8 py-4 rounded-lg font-bold transition-cubic hover:shadow-xl active:scale-95">
                Nuestros Servicios
              </button>
              <button className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold transition-cubic">
                Ver Cobertura
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-margin-desktop bg-surface">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-white border border-outline-variant p-8 rounded-xl transition-cubic hover:border-secondary hover:shadow-lg group">
              <div className="w-14 h-14 bg-surface-container-low rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span
                  className="material-symbols-outlined text-primary group-hover:text-white"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  gps_fixed
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                Monitoreo Satelital
              </h3>
              <p className="text-on-surface-variant font-body-sm text-body-sm">
                Control total de su mercadería en tiempo real con tecnología GPS
                avanzada y protocolos de seguridad preventivos.
              </p>
            </div>

            <div className="bg-white border border-outline-variant p-8 rounded-xl transition-cubic hover:border-secondary hover:shadow-lg group">
              <div className="w-14 h-14 bg-surface-container-low rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span
                  className="material-symbols-outlined text-primary group-hover:text-white"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified_user
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                Carga Asegurada
              </h3>
              <p className="text-on-surface-variant font-body-sm text-body-sm">
                Respaldo total ante cualquier eventualidad. Trabajamos con las
                mejores aseguradoras para garantizar su inversión.
              </p>
            </div>

            <div className="bg-white border border-outline-variant p-8 rounded-xl transition-cubic hover:border-secondary hover:shadow-lg group">
              <div className="w-14 h-14 bg-surface-container-low rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span
                  className="material-symbols-outlined text-primary group-hover:text-white"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  local_shipping
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                Flota Homologada
              </h3>
              <p className="text-on-surface-variant font-body-sm text-body-sm">
                Unidades modernas que cumplen con los más altos estándares
                técnicos y certificaciones del sector logístico.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-margin-desktop bg-primary text-on-primary">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-4">
                Soluciones por Sector
              </h2>
              <p className="text-primary-fixed-dim max-w-xl">
                Experiencia especializada en el manejo de mercancía crítica para
                diversas industrias peruanas.
              </p>
            </div>
            <div className="h-1 bg-secondary w-24"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative group overflow-hidden rounded-xl h-[400px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida/AP1WRLu4_uOiSoQpdsvg96p29TlK9QH8EgRmaQ0iAM8iJ_2NS7W59CXve3qXkWCVX-C8YjXds1_ZzoNzKx9OQADxH_OXXmzE0F4dElC-m5N_Ig-BKPHWT-oBlriB2Jpnk7N5oQESpD7emSYedfd77ex2PXOAg7DJgNdZZpE0A4E031kPPHI5qZ_IuXQOHJYsgD65ISSntaY6EYGmM8TkkJmP0R7vUR95JKAeknJ7YemJPaaa2udO4lPl9UgKnHpj')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="material-symbols-outlined text-secondary mb-2">
                  shopping_bag
                </span>
                <h4 className="font-headline-sm text-headline-sm">Retail</h4>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  Distribución a puntos de venta y centros comerciales a nivel
                  nacional.
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl h-[400px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                data-alt="A high-contrast professional photograph of various consumer goods boxes neatly stacked on pallets within a bright, high-tech distribution center. The scene is illuminated with modern cool-toned lighting, reflecting the reliable navy and red corporate identity of a premium logistics operator. The focus is sharp, emphasizing scale and efficiency in a light-mode warehouse environment."
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCrDnX6PvgViz4mdcMt_ffz9XYuaWchn55_tqXvlEvquPOyMBkPrR91-P7CgrEejTBLxwlNiwsxNZFgWXrKiJuwQz0o6mO1R1JoULXzjMSf9npy29FBuHDeK2Q9vvIkxoOtgsc1u61dgAqf-2eTZf-JbMNlIt9OCg1pNxsobcW7-FNaRMIpLirJdIcqqSc6v0n39THudp0T5imH9CrGC-t8q7GBo3xLIamVL7jk1PdYBbRpFkJo3NQ6JAdI964CT2rxZHXApYJtK2zv')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="material-symbols-outlined text-secondary mb-2">
                  inventory_2
                </span>
                <h4 className="font-headline-sm text-headline-sm">
                  Consumo Masivo
                </h4>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  Logística ágil para productos de alta rotación y demanda
                  constante.
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl h-[400px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                data-alt="A clinical and sterile professional environment featuring a pharmaceutical logistics cold chain storage facility. The lighting is bright and white, emphasizing cleanliness and precision. Professional staff in protective gear handle specialized medical crates. The atmosphere conveys trust and high-stakes reliability, utilizing a palette of clean whites and corporate navy blue accents."
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida/public/AB6AXuBSBZZTcK1scx_mj_heRJTfGYDjkm3-qXSVXRrd9W8ocE9ChJAzl5Ggt9QQfwGpeK73aUKlYQubfMPSPCg-V1QRc2-_qQUtEIm3Syh2KYom62zO7GPg_eoBiHenApR0cQRPLeXqlDFK7oH0SqSx-jP1e5gNKTkszMtTySxuqPnSgQJgqqgky4uIwNob6HzAFMfyhGJ1sM2omlPISrYA0Sn8oDFk4gKu1VjtKKY1hoNKFm8INypWyIAg54sjPRHYrLuppL5zZXY5LdKQ')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="material-symbols-outlined text-secondary mb-2">
                  medication
                </span>
                <h4 className="font-headline-sm text-headline-sm">
                  Farmacéutico
                </h4>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  Manejo especializado de medicinas con control estricto de
                  temperatura.
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl h-[400px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida/AP1WRLtyys-z4Jg1CZSYHK4nnCJsQCXcJEqYhxyYE3OHfSb6jTGZ5l4dHaKYMQWeQGyBC8lVjQfG0NtWaSdGgaLUA1jwOrT3Wba-1bkMtkUYywrmcwN3CRxGu3r1cQnqA07lcwv7ys1vhfq_sd1GBejHljhfV9bvSoEQbnvg7gQdCqlCWHWgYvCkN_gi3DPUfrgPIlsTj7fayNgA40Wc9WKoMrGkPJyuwB_qvXnSt8NKcHNRzO08EqG1zhv5B25k')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="material-symbols-outlined text-secondary mb-2">
                  precision_manufacturing
                </span>
                <h4 className="font-headline-sm text-headline-sm">Minería</h4>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  Transporte de maquinaria pesada e insumos industriales a zonas
                  remotas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-margin-desktop bg-surface-container-low">
        <div className="px-margin-desktop max-w-container-max mx-auto text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Nuestros Servicios Principales
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Modelos de transporte diseñados para ajustarse a los requerimientos
            de tiempo y presupuesto de su empresa.
          </p>
        </div>

        <div className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-white rounded-2xl p-1 shadow-sm border border-outline-variant hover:shadow-2xl transition-cubic overflow-hidden">
            <div className="bg-primary text-on-primary p-4 text-center skew-bg ml-[-1px]">
              <h3 className="font-bold text-lg">ANGER EXPRESS</h3>
            </div>
            <div className="p-8 text-center">
              <span className="material-symbols-outlined text-5xl text-secondary mb-6">
                bolt
              </span>
              <p className="text-on-surface-variant mb-8 h-20">
                Entregas ultra-rápidas en Lima Metropolitana y principales
                provincias para mercancía de alta prioridad.
              </p>
              <a
                className="inline-flex w-full justify-center border-2 border-primary text-primary font-bold py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
                href="/servicios"
              >
                Saber más
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-1 shadow-sm border border-outline-variant hover:shadow-2xl transition-cubic overflow-hidden relative transform md:-translate-y-4">
            <div className="bg-secondary text-on-primary p-4 text-center skew-bg ml-[-1px]">
              <h3 className="font-bold text-lg">EXCLUSIVO</h3>
            </div>
            <div className="p-8 text-center">
              <span className="material-symbols-outlined text-5xl text-secondary mb-6">
                workspace_premium
              </span>
              <p className="text-on-surface-variant mb-8 h-20">
                Unidades dedicadas únicamente a su carga. Sin paradas
                intermedias ni consolidación. Máxima seguridad.
              </p>
              <a
                className="inline-flex w-full justify-center bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-container transition-colors shadow-lg"
                href="/servicios/exclusivo"
              >
                Saber más
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-1 shadow-sm border border-outline-variant hover:shadow-2xl transition-cubic overflow-hidden">
            <div className="bg-primary text-on-primary p-4 text-center skew-bg ml-[-1px]">
              <h3 className="font-bold text-lg">AÉREO</h3>
            </div>
            <div className="p-8 text-center">
              <span className="material-symbols-outlined text-5xl text-secondary mb-6">
                flight_takeoff
              </span>
              <p className="text-on-surface-variant mb-8 h-20">
                Conexión directa con las principales aerolíneas para traslados
                urgentes que no pueden esperar el transporte terrestre.
              </p>
              <a
                className="inline-flex w-full justify-center border-2 border-primary text-primary font-bold py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
                href="/servicios/aereo"
              >
                Saber más
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-margin-desktop bg-white overflow-hidden">
        <div className="px-margin-desktop max-w-container-max mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              Cobertura Nacional Estratégica
            </h2>
            <p className="text-on-surface-variant font-body-lg text-body-lg mb-8 leading-relaxed">
              Contamos con una red logística que abarca costa, sierra y selva.
              Nuestros centros de consolidación están ubicados estratégicamente
              para reducir los tiempos de tránsito y asegurar que su carga llegue
              a tiempo, incluso en los destinos más remotos del Perú.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">
                  check_circle
                </span>
                <span className="font-bold">24/7 Operatividad</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">
                  check_circle
                </span>
                <span className="font-bold">Rutas Homologadas</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">
                  check_circle
                </span>
                <span className="font-bold">Control de Flota</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">
                  check_circle
                </span>
                <span className="font-bold">Last-Mile Delivery</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="aspect-square bg-surface-container rounded-3xl overflow-hidden shadow-inner border border-outline-variant">
              <img
                alt="Cobertura nacional en Perú"
                className="w-full h-full object-cover grayscale opacity-50"
                data-alt="A highly detailed and modern 3D map of Peru showing major highway connections and transport routes. The map uses a sophisticated color scheme of deep navy for the terrain and bright vibrant red glowing lines for the logistics routes. Sleek minimalist pins mark key cities. The style is clean, corporate, and high-tech, perfect for a premium logistics operator's coverage section."
                data-location="Peru"
                src="https://lh3.googleusercontent.com/aida/public/AB6AXuCTihCvv-K2RqyFRkEC3KcDbBX5q6C6svZkYSmpB34LCLTccHFWWRfPBS643a5aTSGCU9FfoV-zt-MFSZ4jr58wy6NcXpwwcvMijhMo1YpaKB0R8gUBSQrxat_VzrRL6Nq6eywzaIvLlkv9pW8w8ZBBzhxQZfqnRy3DL2zHJAbOhLel25XSJxdiHcHQd7FPh8eJjFRNCSGVNKyhACJau5W0YkygKXuty5PmqzZjXau4zovGMsIyYRxz7A80Q8jZKqJP4p2s3tU4G19"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-pulse bg-secondary/20 p-8 rounded-full border-2 border-secondary">
                  <span
                    className="material-symbols-outlined text-secondary text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    public
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary skew-x-12 translate-x-1/2 opacity-20"></div>
        <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg text-white mb-8">
            ¿Listo para optimizar los tiempos de tu cadena logística?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="bg-secondary text-white px-10 py-5 rounded-lg font-bold text-lg hover:shadow-[0_0_30px_rgba(188,1,0,0.4)] transition-cubic active:scale-95">
              Cotizar mi Proyecto Ahora
            </button>
            <a
              className="flex items-center gap-3 text-white hover:text-secondary transition-colors font-bold text-lg"
              href="tel:+511234567"
            >
              <span className="material-symbols-outlined">phone_in_talk</span>
              Contactar a un Asesor
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
