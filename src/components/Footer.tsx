import { AppButton } from "./common/AppButton";
import { Input } from "#components/ui/input";

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
            <form
              className="flex items-center rounded-lg bg-white/10 overflow-hidden"
              onSubmit={(event) => {
                event.preventDefault();
                alert("Gracias por suscribirte a nuestro boletín informativo.");
                event.currentTarget.reset();
              }}
            >
              <Input
                className="h-10 rounded-none border-0 bg-transparent text-on-primary placeholder:text-white/60 focus-visible:ring-0 font-body-md"
                placeholder="Su correo"
                required
                type="email"
              />
              <AppButton
                aria-label="Suscribirse al boletín"
                className="h-10 shrink-0 rounded-none px-4"
                type="submit"
                variant="secondary"
              >
                <span className="material-symbols-outlined">send</span>
              </AppButton>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-fixed-dim text-body-sm font-body-sm">
            © {new Date().getFullYear()} ANGER Operador Logístico. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a
              aria-label="Facebook"
              className="text-on-primary/80 hover:text-secondary"
              href="https://www.facebook.com/AngerOperadorLogistico/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.06C22 6.48 17.52 2 11.94 2S1.88 6.48 1.88 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.42V9.91c0-2.39 1.42-3.71 3.6-3.71 1.04 0 2.13.19 2.13.19v2.35h-1.2c-1.18 0-1.55.74-1.55 1.5v1.8h2.64l-.42 2.91h-2.22V22c4.78-.76 8.44-4.92 8.44-9.94z" />
              </svg>
            </a>
            <a
              aria-label="Instagram"
              className="text-on-primary/80 hover:text-secondary"
              href="https://www.instagram.com/anger_operador_logistico/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              aria-label="WhatsApp"
              className="text-on-primary/80 hover:text-secondary"
              href="https://wa.me/+51941841583?text=Hola+Anger%2C+estoy+interesado+en+tus+servicios"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.9 9.9 0 0 0 4.62 1.14h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2m5.83 14.11c-.24.68-1.42 1.31-1.96 1.35-.5.05-1.14.07-1.84-.12-.42-.11-.96-.31-1.66-.6-2.92-1.26-4.83-4.2-4.98-4.4-.15-.19-1.2-1.59-1.2-3.03s.75-2.15 1.02-2.44c.26-.29.57-.36.76-.36s.38 0 .55.01c.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.15.12.32.02.51-.09.19-.14.31-.28.47-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.15.28.68 1.12 1.46 1.82 1 .9 1.85 1.18 2.13 1.31.28.14.45.12.61-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.09 1.65.78 1.94.92.28.14.47.21.54.33.07.12.07.68-.16 1.36" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}