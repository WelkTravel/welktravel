import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Denuncie situaciones que afectan a menores de 18 años — Welk Travel',
  description: 'Canales oficiales para denunciar situaciones que afectan a menores de edad en el contexto del turismo.',
};

export default function DenunciasMenoresPage() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-title text-2xl text-navy font-semibold mb-8">
          Denuncie situaciones que afectan a menores de 18 años
        </h1>

        <div className="font-body text-sm text-navy/80 flex flex-col gap-5 text-justify">
          <div>
            <h2 className="font-title text-navy text-base mb-1">1. Compromiso de Welk Travel</h2>
            <p>Si durante un viaje coordinado por Welk Travel identificas o sospechas de una situación que ponga en riesgo a un menor de edad (explotación sexual, trabajo infantil, trata de personas u otra forma de maltrato), te pedimos reportarlo de inmediato tanto a las autoridades competentes como a nuestro equipo.</p>
          </div>

          <div>
            <h2 className="font-title text-navy text-base mb-1">2. Canales oficiales de denuncia en Colombia</h2>
            <p>Puedes denunciar directamente ante el ICBF (Instituto Colombiano de Bienestar Familiar) a través de la línea 141, ante la Policía Nacional a través de la línea 123, o a través de la plataforma nacional Te Protejo (www.teprotejo.org), disponible las 24 horas.</p>
          </div>

          <div>
            <h2 className="font-title text-navy text-base mb-1">3. Cómo contactar a Welk Travel</h2>
            <p>También puedes escribirnos por WhatsApp o a través del formulario de PQRS de este sitio para reportarnos la situación; la trataremos con la máxima prioridad y confidencialidad.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
