import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TITLES: Record<string, string> = {
  "/": "ANGER Operador Logístico | Transporte y Distribución Nacional Segura",
  "/nosotros": "Nosotros | ANGER Operador Logístico",
  "/servicios": "Servicios | ANGER Operador Logístico",
  "/servicios/express": "Servicio Express | ANGER Operador Logístico",
  "/servicios/aereo": "Servicio Aéreo | ANGER Operador Logístico",
  "/servicios/exclusivo": "Servicio Exclusivo | ANGER Operador Logístico",
  "/seguimiento": "Seguimiento | ANGER Operador Logístico",
  "/contacto": "Contáctanos | ANGER Operador Logístico",
};

export default function MainLayout() {
  const location = useLocation();
  const normalizedPath = location.pathname.replace(/\/+$/, "") || "/";

  useEffect(() => {
    document.title = TITLES[normalizedPath] ?? TITLES["/"];
    document.documentElement.lang = "es";
    document.documentElement.classList.add("light");
    document.body.style.margin = "0";

    const handleScroll = () => {
      const nav = document.querySelector("[data-home-nav]");
      if (!nav) return;

      if (window.scrollY > 50) {
        nav.classList.add("h-16", "shadow-md");
        nav.classList.remove("h-20", "shadow-sm");
      } else {
        nav.classList.add("h-20", "shadow-sm");
        nav.classList.remove("h-16", "shadow-md");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [normalizedPath]);

  return (
    <>
      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .hero-gradient {
          background: linear-gradient(90deg, rgba(2, 19, 86, 0.95) 30%, rgba(2, 19, 86, 0.4) 100%);
        }
        .skew-bg {
          clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);
        }
        .transition-cubic {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .bg-background { background-color: #f8f9ff; }
        .bg-surface { background-color: #f8f9ff; }
        .bg-surface-container-low { background-color: #eff4ff; }
        .bg-surface-container-lowest { background-color: #ffffff; }
        .bg-surface-container { background-color: #dce9ff; }
        .bg-surface-container-high { background-color: #d3e0f8; }
        .bg-surface-container-highest { background-color: #c5d4f1; }
        .bg-surface-variant { background-color: #dce0ef; }
        .bg-primary { background-color: #021356; }
        .bg-primary-container { background-color: #354282; }
        .bg-secondary { background-color: #bc0100; }
        .bg-secondary-container { background-color: #ea0703; }
        .bg-secondary-fixed { background-color: #ffd9d4; }
        .bg-on-primary { background-color: #ffffff; }

        .text-on-background { color: #0f1c2d; }
        .text-on-surface { color: #0f1c2d; }
        .text-on-surface-variant { color: #454650; }
        .text-on-primary { color: #ffffff; }
        .text-on-primary-container { color: #dbe2ff; }
        .text-on-secondary { color: #ffffff; }
        .text-on-secondary-fixed { color: #5c0000; }
        .text-on-secondary-fixed-variant { color: #7d1e19; }
        .text-primary { color: #021356; }
        .text-secondary { color: #bc0100; }
        .text-outline { color: #6a7285; }
        .text-primary-fixed-dim { color: #b9c3ff; }
        .text-secondary-fixed { color: #ffdad4; }

        .border-outline-variant { border-color: #c6c5d2; }
        .border-outline { border-color: #6a7285; }
        .border-secondary { border-color: #bc0100; }
        .border-primary { border-color: #021356; }
        .border-surface-variant { border-color: #dce0ef; }

        .hover\:text-secondary:hover { color: #bc0100; }
        .hover\:border-secondary:hover { border-color: #bc0100; }
        .hover\:bg-primary-container:hover { background-color: #354282; }
        .hover\:bg-secondary-container:hover { background-color: #ea0703; }
        .group:hover .group-hover\:bg-primary { background-color: #021356; }
        .group:hover .group-hover\:text-secondary { color: #bc0100; }
        .focus\:ring-secondary:focus {
          outline: 2px solid #bc0100;
          outline-offset: 2px;
        }

        .px-margin-desktop {
          padding-left: 32px;
          padding-right: 32px;
        }
        .py-margin-desktop {
          padding-top: 32px;
          padding-bottom: 32px;
        }
        .max-w-container-max { max-width: 1440px; }
        .gap-gutter { gap: 24px; }

        .font-headline-lg,
        .font-headline-md,
        .font-headline-sm,
        .font-body-md,
        .font-body-sm,
        .font-body-lg,
        .font-label-md {
          font-family: "Montserrat", sans-serif;
        }

        .text-headline-lg {
          font-size: 32px;
          line-height: 40px;
          letter-spacing: -0.02em;
          font-weight: 700;
        }
        .text-headline-md {
          font-size: 24px;
          line-height: 32px;
          font-weight: 600;
        }
        .text-headline-sm {
          font-size: 20px;
          line-height: 28px;
          font-weight: 600;
        }
        .text-body-md {
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
        }
        .text-body-sm {
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
        }
        .text-body-lg {
          font-size: 18px;
          line-height: 28px;
          font-weight: 400;
        }
        .text-label-sm {
          font-size: 11px;
          line-height: 16px;
          letter-spacing: 0.04em;
          font-weight: 600;
        }
        .text-label-md {
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .rounded-lg { border-radius: 0.25rem; }
        .rounded-xl { border-radius: 0.5rem; }
        .rounded-full { border-radius: 0.75rem; }

        @media (max-width: 768px) {
          .px-margin-desktop {
            padding-left: 16px;
            padding-right: 16px;
          }
          .py-margin-desktop {
            padding-top: 16px;
            padding-bottom: 16px;
          }
          .text-headline-lg {
            font-size: 24px;
            line-height: 32px;
          }
        }
      `}</style>

      <div
        className="bg-background text-on-surface font-body-md text-body-md"
        style={{
          fontFamily: "Montserrat, sans-serif",
          backgroundColor: "#f8f9ff",
          color: "#0f1c2d",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
