import { AppButton } from "../components/common/AppButton";
import { Input } from "#components/ui/input";
import { Label } from "#components/ui/label";
import { Textarea } from "#components/ui/textarea";

export default function ContactoPage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-desktop py-12 mt-20">
      <section className="mb-16 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-secondary text-on-secondary font-label-md text-label-md uppercase tracking-wider rounded-full mb-4">
          <span className="material-symbols-outlined text-[16px]">
            support_agent
          </span>
          ATENCIÓN INMEDIATA
        </div>

        <h1 className="font-headline-lg text-headline-lg text-primary mb-6">
          Central de Atención Comercial y Soporte Logístico
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
          Ponte en contacto directo con nuestro equipo para resolver dudas
          operativas, coordinar despachos urgentes o solicitar cotizaciones
          corporativas a medida.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-outline-variant hover:border-secondary hover:shadow-lg transition-all shadow-sm group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-surface-container rounded-lg group-hover:bg-secondary-fixed transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-secondary">
                  call
                </span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface-variant mb-1">
                  CENTRAL TELEFÓNICA
                </p>
                <p className="font-headline-sm text-headline-sm text-primary">
                  (01) 365 3968
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                  Lunes a Sábado: 08:00 AM - 06:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-outline-variant hover:border-secondary hover:shadow-lg transition-all shadow-sm group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-surface-container rounded-lg group-hover:bg-secondary-fixed transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-secondary">
                  mail
                </span>
              </div>

              <div className="w-full">
                <p className="font-label-md text-label-md text-on-surface-variant mb-2">
                  CANALES CORPORATIVOS
                </p>

                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 pb-2 border-b border-surface-variant">
                    <span className="font-body-md text-body-md font-semibold text-primary">
                      Atención al Cliente
                    </span>
                    <a
                      className="text-secondary font-label-md text-label-md hover:underline break-all"
                      href="mailto:atencionalcliente@angerperu.com"
                    >
                      atencionalcliente@angerperu.com
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <span className="font-body-md text-body-md font-semibold text-primary">
                      Ventas y Comercial
                    </span>
                    <a
                      className="text-secondary font-label-md text-label-md hover:underline break-all"
                      href="mailto:comercial@angerperu.com"
                    >
                      comercial@angerperu.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-outline-variant overflow-hidden shadow-sm">
            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-surface-container rounded-lg">
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant mb-1">
                    SEDE PRINCIPAL
                  </p>
                  <p className="font-body-md text-body-md text-primary font-semibold">
                    Lima, Perú
                  </p>
                </div>
              </div>
            </div>

            <div className="h-64 w-full bg-surface-container relative">
              <div
                className="absolute inset-0 grayscale opacity-50 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXJLDRabuLshacT3fNyzpRuXfSXA-_P2Po7lGYNQzINCNCMgc51vZ_WhC3uvWB-M8hXu0DCDSqGbku3qnpCekN0mfqO0YFPR6RfAys2pm23cxbasG4RZTRBtbRYqyf3RYcyqGld72ZVKaKURciumeG6oX9b38L8-NNVugzNmhPKCAPfxC-g4HZiJVAn6vv2GU1CAgHEmTQr2e4bP189hEty5wGOiTfKi7QywB5OcieaOC4cl0629PplW7u4-i3mnavtBJU0nhVBXiR')",
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white p-3 rounded-full shadow-lg border-2 border-secondary animate-bounce">
                  <span
                    className="material-symbols-outlined text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded-lg border border-outline-variant shadow-sm text-label-sm font-label-sm">
                Haga clic para ver en Google Maps
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white px-margin-desktop py-margin-desktop rounded-xl border border-outline-variant shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />

            <h2 className="font-headline-md text-headline-md text-primary mb-2">
              Solicita una propuesta comercial
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Complete los siguientes datos y un ejecutivo se pondrá en contacto
              con usted.
            </p>

            <form
              className="space-y-6"
              onSubmit={(event) => {
                event.preventDefault();
                alert(
                  "Requerimiento enviado exitosamente. Nos contactaremos con usted en breve.",
                );
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="font-label-md text-label-md text-on-surface uppercase" htmlFor="nombre">
                    Nombre Completo
                  </Label>
                  <Input
                    className="font-body-md"
                    id="nombre"
                    placeholder="Ej: Juan Pérez"
                    required
                    type="text"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-label-md text-label-md text-on-surface uppercase" htmlFor="empresa">
                    Empresa / RUC
                  </Label>
                  <Input
                    className="font-body-md"
                    id="empresa"
                    placeholder="Nombre de empresa o RUC"
                    required
                    type="text"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="font-label-md text-label-md text-on-surface uppercase" htmlFor="correo">
                    Correo Corporativo
                  </Label>
                  <Input
                    className="font-body-md"
                    id="correo"
                    placeholder="nombre@empresa.com"
                    required
                    type="email"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-label-md text-label-md text-on-surface uppercase" htmlFor="telefono">
                    Teléfono de Contacto
                  </Label>
                  <Input
                    className="font-body-md"
                    id="telefono"
                    inputMode="numeric"
                    pattern="^\\+?[0-9\\s]{6,15}$"
                    placeholder="+51 900 000 000"
                    required
                    title="Ingresa solo números; puede incluir un + inicial"
                    type="tel"
                    onChange={(event) => {
                      event.target.value = event.target.value.replace(/[^\d+\s]/g, "");
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="font-label-md text-label-md text-on-surface uppercase" htmlFor="detalles">
                  Detalles del Requerimiento
                </Label>
                <Textarea
                  className="font-body-md min-h-32"
                  id="detalles"
                  placeholder="Describa brevemente su necesidad operativa, origen, destino y tipo de carga..."
                  required
                  rows={4}
                />
              </div>

              <AppButton
                className="group w-full md:w-auto h-auto px-10 py-4 text-body-md shadow-md justify-center"
                rightIcon={
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    send
                  </span>
                }
                type="submit"
                variant="primary"
              >
                Enviar Requerimiento Comercial
              </AppButton>
            </form>
          </div>
        </div>
      </div>

      <section className="mt-16 bg-primary rounded-xl p-8 md:p-12 text-on-primary relative overflow-hidden group">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="bg-white/10 p-6 rounded-full backdrop-blur-sm border border-white/20">
            <span
              className="material-symbols-outlined text-[48px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              timer
            </span>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="font-headline-md text-headline-md mb-2">
              Compromiso ANGER
            </h3>
            <p className="font-body-lg text-body-lg text-white/80 max-w-4xl leading-relaxed">
              Entendemos la urgencia de tu cadena de suministro. Todos los
              requerimientos recibidos a través de nuestros canales digitales
              son asignados a un Ejecutivo Comercial en un plazo máximo de{" "}
              <span className="font-bold text-secondary-fixed">
                2 horas hábiles.
              </span>
            </p>
          </div>
        </div>

        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/40 transition-colors" />
      </section>
    </main>
  );
}
