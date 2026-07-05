import { NavLink } from "react-router-dom";
import { AppButton } from "../components/common/AppButton";

const NAV_ACTIVE =
  "text-secondary font-bold border-b-2 border-secondary pb-1 font-label-md text-label-md transition-colors";
const NAV_DEFAULT =
  "text-on-surface hover:text-secondary transition-colors font-label-md text-label-md";
const SUBNAV_ACTIVE =
  "block rounded-lg px-3 py-2 text-body-sm text-secondary font-semibold transition-colors";
const SUBNAV_DEFAULT =
  "block rounded-lg px-3 py-2 text-body-sm text-on-surface hover:text-secondary transition-colors";

export default function Header() {
  return (
    <nav
      data-home-nav
      className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest border-b border-outline-variant shadow-sm h-20 transition-all duration-300"
    >
      <div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-full">
        <div className="flex items-center">
          <img
            alt="ANGER Operador Logístico Logo"
            className="h-10 w-auto"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAp7aEN1SeJfRRLdwxBouv6aReIt9xq71NDrOopr3tc_pu3_qouiMitn8TWqJkcCVIJLcnZCMJIzjTVfhDqMX_HugATT8DtS5eltX8Njl2wF3uVp_hyGe0l2be6WbiPnM0FMgsxDYj04qa6ddRRo1krr_G_7qR1E71RF-Qt4WmHY5OLV275vqpZ-6_ibx9KTIm5vSGeFJzMH2-ZeCnrTfIBsVw09UW5_G6r16lVJ-M9RfLFXfp-aaGkjm_v-8-5w1esbnyQVeNT1bA"
          />
        </div>
        <div className="hidden md:flex items-center gap-8">
          <NavLink end className={({ isActive }) => (isActive ? NAV_ACTIVE : NAV_DEFAULT)} to="/">
            Inicio
          </NavLink>
          <NavLink end className={({ isActive }) => (isActive ? NAV_ACTIVE : NAV_DEFAULT)} to="/nosotros">
            Nosotros
          </NavLink>
          <div className="relative group pb-3 -mb-3">
            <NavLink
              className={({ isActive }) =>
                isActive || window.location.pathname.startsWith("/servicios")
                  ? NAV_ACTIVE
                  : NAV_DEFAULT
              }
              to="/servicios"
            >
              Servicios
            </NavLink>
            <div className="absolute left-0 top-full hidden min-w-56 pt-3 group-hover:block">
              <div className="rounded-xl border border-outline-variant bg-white p-3 shadow-lg">
                <NavLink className={({ isActive }) => (isActive ? SUBNAV_ACTIVE : SUBNAV_DEFAULT)} to="/servicios/express">
                  Servicio Express
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? SUBNAV_ACTIVE : SUBNAV_DEFAULT)} to="/servicios/exclusivo">
                  Servicio Exclusivo
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? SUBNAV_ACTIVE : SUBNAV_DEFAULT)} to="/servicios/aereo">
                  Servicio Aéreo
                </NavLink>
              </div>
            </div>
          </div>
          <NavLink end className={({ isActive }) => (isActive ? NAV_ACTIVE : NAV_DEFAULT)} to="/seguimiento">
            Seguimiento
          </NavLink>
          <NavLink end className={({ isActive }) => (isActive ? NAV_ACTIVE : NAV_DEFAULT)} to="/contacto">
            Contáctanos
          </NavLink>
          <AppButton
            className="px-6 py-2 font-label-md text-label-md"
            type="button"
            variant="primary"
          >
            Cotizar Envío
          </AppButton>
        </div>
        <button className="md:hidden text-primary" type="button">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}

