import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppButton } from "../components/common/AppButton";

const NAV_ACTIVE =
  "text-secondary font-bold border-b-2 border-secondary pb-1 font-label-md text-body-sm transition-colors";
const NAV_DEFAULT =
  "text-on-surface hover:text-secondary transition-colors font-label-md text-body-sm";
const SUBNAV_ACTIVE =
  "block rounded-lg px-3 py-2 text-body-sm text-secondary font-semibold transition-colors";
const SUBNAV_DEFAULT =
  "block rounded-lg px-3 py-2 text-body-sm text-on-surface hover:text-secondary transition-colors";
const MOBILE_NAV_ACTIVE =
  "block rounded-lg px-3 py-2 text-secondary font-bold font-label-md text-body-sm transition-colors";
const MOBILE_NAV_DEFAULT =
  "block rounded-lg px-3 py-2 text-on-surface hover:text-secondary font-label-md text-body-sm transition-colors";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <nav
      data-home-nav
      className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest border-b border-outline-variant shadow-sm h-20 transition-all duration-300"
    >
      <div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-full">
        <Link className="flex items-center" to="/">
          <img
            alt="ANGER Operador Logístico Logo"
            className="h-10 w-auto"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAp7aEN1SeJfRRLdwxBouv6aReIt9xq71NDrOopr3tc_pu3_qouiMitn8TWqJkcCVIJLcnZCMJIzjTVfhDqMX_HugATT8DtS5eltX8Njl2wF3uVp_hyGe0l2be6WbiPnM0FMgsxDYj04qa6ddRRo1krr_G_7qR1E71RF-Qt4WmHY5OLV275vqpZ-6_ibx9KTIm5vSGeFJzMH2-ZeCnrTfIBsVw09UW5_G6r16lVJ-M9RfLFXfp-aaGkjm_v-8-5w1esbnyQVeNT1bA"
          />
        </Link>
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
        <button
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          className="md:hidden text-primary"
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface-container-lowest border-b border-outline-variant shadow-lg">
          <div className="px-margin-mobile py-4 flex flex-col gap-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <NavLink
              end
              className={({ isActive }) => (isActive ? MOBILE_NAV_ACTIVE : MOBILE_NAV_DEFAULT)}
              to="/"
              onClick={closeMobileMenu}
            >
              Inicio
            </NavLink>
            <NavLink
              end
              className={({ isActive }) => (isActive ? MOBILE_NAV_ACTIVE : MOBILE_NAV_DEFAULT)}
              to="/nosotros"
              onClick={closeMobileMenu}
            >
              Nosotros
            </NavLink>
            <NavLink
              end
              className={({ isActive }) => (isActive ? MOBILE_NAV_ACTIVE : MOBILE_NAV_DEFAULT)}
              to="/servicios"
              onClick={closeMobileMenu}
            >
              Servicios
            </NavLink>
            <div className="pl-4 flex flex-col gap-1">
              <NavLink className={({ isActive }) => (isActive ? SUBNAV_ACTIVE : SUBNAV_DEFAULT)} to="/servicios/express" onClick={closeMobileMenu}>
                Servicio Express
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? SUBNAV_ACTIVE : SUBNAV_DEFAULT)} to="/servicios/exclusivo" onClick={closeMobileMenu}>
                Servicio Exclusivo
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? SUBNAV_ACTIVE : SUBNAV_DEFAULT)} to="/servicios/aereo" onClick={closeMobileMenu}>
                Servicio Aéreo
              </NavLink>
            </div>
            <NavLink
              end
              className={({ isActive }) => (isActive ? MOBILE_NAV_ACTIVE : MOBILE_NAV_DEFAULT)}
              to="/seguimiento"
              onClick={closeMobileMenu}
            >
              Seguimiento
            </NavLink>
            <NavLink
              end
              className={({ isActive }) => (isActive ? MOBILE_NAV_ACTIVE : MOBILE_NAV_DEFAULT)}
              to="/contacto"
              onClick={closeMobileMenu}
            >
              Contáctanos
            </NavLink>
            <AppButton
              className="mt-3 w-full px-6 py-2 font-label-md text-label-md"
              type="button"
              variant="primary"
              onClick={closeMobileMenu}
            >
              Cotizar Envío
            </AppButton>
          </div>
        </div>
      )}
    </nav>
  );
}
