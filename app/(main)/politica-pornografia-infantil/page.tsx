import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política contra la explotación sexual de niños, niñas y adolescentes — Welk Travel',
  description: 'Política de Welk Travel contra la explotación sexual y pornografía infantil en el turismo.',
};

export default function PoliticaPornografiaInfantilPage() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-title text-2xl text-navy font-semibold mb-8">
          Política en contra de la pornografía y explotación sexual infantil
        </h1>

        <div className="font-body text-sm text-navy/80 flex flex-col gap-5 text-justify">
          <div>
            <h2 className="font-title text-navy text-base mb-1">1. Compromiso</h2>
            <p>Welk Travel rechaza y prohíbe de forma absoluta cualquier forma de explotación sexual, pornografía infantil o turismo sexual que involucre a niños, niñas o adolescentes, en cumplimiento de la Ley 679 de 2001, la Ley 1336 de 2009 y demás normas colombianas que protegen a los menores de edad frente a la explotación sexual.</p>
          </div>

          <div>
            <h2 className="font-title text-navy text-base mb-1">2. Alcance</h2>
            <p>Este compromiso aplica a todos los servicios, destinos y proveedores con los que Welk Travel trabaja. Cualquier proveedor, hotel u operador del que se tenga conocimiento de prácticas de explotación sexual infantil será reportado a las autoridades competentes y descartado como aliado comercial.</p>
          </div>

          <div>
            <h2 className="font-title text-navy text-base mb-1">3. Colaboración con autoridades</h2>
            <p>Welk Travel colabora activamente con las autoridades colombianas (ICBF, Policía Nacional, Aerocivil) en la prevención, detección y denuncia de cualquier situación de explotación sexual infantil relacionada con el turismo.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
