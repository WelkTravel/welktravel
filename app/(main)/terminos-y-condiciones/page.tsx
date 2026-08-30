import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y condiciones — Welk Travel',
  description: 'Términos y condiciones de uso del sitio web de Welk Travel.',
};

export default function TerminosCondicionesPage() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-title text-2xl text-navy font-semibold mb-8">
          Términos y condiciones del sitio
        </h1>

        <div className="font-body text-sm text-navy/80 flex flex-col gap-5 text-justify">
          <div>
            <h2 className="font-title text-navy text-base mb-1">1. Aceptación de los términos</h2>
            <p>El acceso y uso de este sitio web implica la aceptación plena de estos términos y condiciones. Si no estás de acuerdo con ellos, te pedimos no utilizar el sitio.</p>
          </div>

          <div>
            <h2 className="font-title text-navy text-base mb-1">2. Naturaleza del servicio</h2>
            <p>Welk Travel actúa como intermediario turístico, cotizando y coordinando la reserva de paquetes, hoteles, cruceros y circuitos con operadores mayoristas y proveedores aliados. Los tiquetes aéreos son adquiridos directamente por el usuario ante la aerolínea de su elección, según se explica en la sección de Conserjería Aérea.</p>
          </div>

          <div>
            <h2 className="font-title text-navy text-base mb-1">3. Cotizaciones y disponibilidad</h2>
            <p>Las tarifas y disponibilidad mostradas o comunicadas por nuestros asesores están sujetas a cambios sin previo aviso por parte de los operadores y proveedores, hasta el momento de la confirmación y pago de la reserva.</p>
          </div>

          <div>
            <h2 className="font-title text-navy text-base mb-1">4. Uso del sitio</h2>
            <p>El usuario se compromete a utilizar el sitio de forma lícita, sin afectar su disponibilidad, seguridad o el uso legítimo por parte de terceros, y a suministrar información veraz en los formularios de contacto y cotización.</p>
          </div>

          <div>
            <h2 className="font-title text-navy text-base mb-1">5. Propiedad intelectual</h2>
            <p>Los textos, imágenes, logotipos y demás contenidos de este sitio son propiedad de Welk Travel o de sus licenciantes, y no pueden reproducirse sin autorización previa.</p>
          </div>

          <div>
            <h2 className="font-title text-navy text-base mb-1">6. Modificaciones</h2>
            <p>Welk Travel podrá actualizar estos términos en cualquier momento. La versión vigente será siempre la publicada en esta página.</p>
          </div>

          <p className="text-xs text-navy/50 border-t border-navy/10 pt-4 mt-2">
            Este texto es una plantilla base y no constituye asesoría legal. Antes de publicarlo, pídele a un abogado que lo revise para asegurar el cumplimiento normativo.
          </p>

        </div>
      </div>
    </section>
  );
}
