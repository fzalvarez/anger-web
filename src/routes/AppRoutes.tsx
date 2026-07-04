import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import NosotrosPage from "../pages/NosotrosPage";
import ServiciosPage from "../pages/ServiciosPage";
import ServicioExpressPage from "../pages/ServicioExpressPage";
import ServicioAereoPage from "../pages/ServicioAereoPage";
import ServicioExclusivoPage from "../pages/ServicioExclusivoPage";
import SeguimientoPage from "../pages/SeguimientoPage";
import ContactoPage from "../pages/ContactoPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="nosotros" element={<NosotrosPage />} />
        <Route path="servicios" element={<ServiciosPage />} />
        <Route path="servicios/express" element={<ServicioExpressPage />} />
        <Route path="servicios/aereo" element={<ServicioAereoPage />} />
        <Route path="servicios/exclusivo" element={<ServicioExclusivoPage />} />
        <Route path="seguimiento" element={<SeguimientoPage />} />
        <Route path="contacto" element={<ContactoPage />} />
      </Route>
    </Routes>
  );
}
