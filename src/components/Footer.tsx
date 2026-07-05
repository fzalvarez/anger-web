export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="w-full py-margin-desktop px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-12">
          <div className="col-span-1 md:col-span-1">
            <img
              alt="Logo"
              className="h-10 mb-6 brightness-0 invert"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAp7aEN1SeJfRRLdwxBouv6aReIt9xq71NDrOopr3tc_pu3_qouiMitn8TWqJkcCVIJLcnZCMJIzjTVfhDqMX_HugATT8DtS5eltX8Njl2wF3uVp_hyGe0l2be6WbiPnM0FMgsxDYj04qa6ddRRo1krr_G_7qR1E71RF-Qt4WmHY5OLV275vqpZ-6_ibx9KTIm5vSGeFJzMH2-ZeCnrTfIBsVw09UW5_G6r16lVJ-M9RfLFXfp-aaGkjm_v-8-5w1esbnyQVeNT1bA"
            />
            <p className="text-on-primary/80 text-body-sm font-body-sm">
              Líderes en transporte nacional y soluciones logísticas
              integrales para el crecimiento de su empresa.
            </p>
          </div>

          <div>
            <h5 className="text-on-primary font-bold mb-6">Navegación</h5>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-on-primary/80 hover:text-on-primary transition-colors font-label-md text-label-md"
                  href="/"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  className="text-on-primary/80 hover:text-on-primary transition-colors font-label-md text-label-md"
                  href="/nosotros"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  className="text-on-primary/80 hover:text-on-primary transition-colors font-label-md text-label-md"
                  href="/servicios"
                >
                  Servicios
                </a>
                <ul className="mt-3 space-y-2 pl-4 border-l border-white/10">
                  <li>
                    <a
                      className="text-on-primary/80 hover:text-on-primary transition-colors font-label-md text-label-md"
                      href="/servicios/express"
                    >
                      Servicio Express
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-on-primary/80 hover:text-on-primary transition-colors font-label-md text-label-md"
                      href="/servicios/exclusivo"
                    >
                      Servicio Exclusivo
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-on-primary/80 hover:text-on-primary transition-colors font-label-md text-label-md"
                      href="/servicios/aereo"
                    >
                      Servicio Aéreo
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="text-on-primary/80 hover:text-on-primary transition-colors font-label-md text-label-md"
                  href="/seguimiento"
                >
                  Seguimiento
                </a>
              </li>
              <li>
                <a
                  className="text-on-primary/80 hover:text-on-primary transition-colors font-label-md text-label-md"
                  href="/contacto"
                >
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-on-primary font-bold mb-6">Contacto</h5>
            <ul className="space-y-4 text-on-primary/80 text-body-sm font-body-sm">
              <li className="flex gap-2">
                <span className="material-symbols-outlined text-secondary text-sm">
                  location_on
                </span>
                <span>Lima, Perú</span>
              </li>
              <li className="flex gap-2">
                <span className="material-symbols-outlined text-secondary text-sm">
                  mail
                </span>
                <span>contacto@angerlogistica.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-on-primary font-bold mb-6">Boletín Informativo</h5>
            <div className="flex">
              <input
                className="bg-white/10 border-none text-on-primary rounded-l-lg w-full focus:ring-secondary"
                placeholder="Su correo"
                type="email"
              />
              <button className="bg-secondary text-on-secondary px-4 rounded-r-lg" type="button">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-fixed-dim text-body-sm font-body-sm">
            © 2024 ANGER Operador Logístico. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a className="text-on-primary/80 hover:text-secondary" href="#">
              <span className="material-symbols-outlined">face_nod</span>
            </a>
            <a className="text-on-primary/80 hover:text-secondary" href="#">
              <span className="material-symbols-outlined">hub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}