import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de privacidad y tratamiento de datos personales — Welk Travel',
  description: 'Política de tratamiento de datos personales de Welk Travel.',
};

export default function PoliticaDatosPage() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-title text-2xl text-navy font-semibold mb-2">
          Política de tratamiento de datos personales
        </h1>
        <p className="font-body text-xs text-navy/50 mb-8">
          [Última actualización: completar antes de publicar]
        </p>

        <div className="font-body text-sm text-navy/80 flex flex-col gap-5 text-justify">
          <p>
            Welk Travel, NIT 902.087.020-3 (&ldquo;Welk Travel&rdquo;, &ldquo;nosotros&rdquo;),
            es responsable del tratamiento de los datos personales que recolecta a través
            de este sitio web, en cumplimiento de la Ley 1581 de 2012, el Decreto 1377
            de 2013 y demás normas que las modifiquen o complementen en Colombia.
          </p>

          <div>
            <h2 className="font-title text-navy text-base mb-1">1. Datos que recolectamos</h2>
            <p>
              A través del formulario de cotización recolectamos: nombre, correo
              electrónico, teléfono/WhatsApp y destino de interés. Estos datos son
              suministrados voluntariamente por el usuario.
            </p>
          </div>

          <div>
            <h2 className="font-title text-navy text-base mb-1">2. Finalidad del tratamiento</h2>
            <p>
              Usamos estos datos exclusivamente para: (a) contactarte y responder tu
              solicitud de cotización, (b) enviarte información sobre vuelos, hoteles y
              paquetes turísticos que hayas solicitado, y (c) mejorar la atención al
              cliente. No vendemos ni compartimos tus datos con terceros para fines
              distintos a la prestación del servicio, salvo obligación legal.
            </p>
          </div>

          <div>
            <h2 className="font-title text-navy text-base mb-1">3. Derechos del titular</h2>
            <p>
              Como titular de tus datos personales tienes derecho a conocer, actualizar,
              rectificar y solicitar la supresión de tus datos, así como a revocar la
              autorización otorgada, en los términos de la Ley 1581 de 2012.
            </p>
          </div>

          <div>
            <h2 className="font-title text-navy text-base mb-1">4. Cómo ejercer tus derechos</h2>
            <p>
              Puedes solicitar la actualización, corrección o eliminación de tus datos
              escribiendo a [completar correo de contacto] o por WhatsApp al [completar
              número]. Atenderemos tu solicitud dentro de los plazos establecidos por la
              ley.
            </p>
          </div>

          <div>
            <h2 className="font-title text-navy text-base mb-1">5. Vigencia</h2>
            <p>
              Esta política aplica desde su fecha de publicación y permanecerá vigente
              mientras Welk Travel trate datos personales de sus usuarios y clientes.
            </p>
          </div>

          <p className="text-xs text-navy/50 border-t border-navy/10 pt-4 mt-2">
            Este texto es una plantilla base y no constituye asesoría legal. Antes de
            publicarlo, complétalo con los datos reales de la empresa y pídele a un
            abogado que lo revise para asegurar el cumplimiento normativo.
          </p>
        </div>
      </div>
    </section>
  );
}
