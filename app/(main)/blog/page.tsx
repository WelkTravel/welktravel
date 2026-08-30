import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Welk Travel',
  description: 'Guías, consejos y novedades de viaje de Welk Travel.',
};

// TODO: cuando haya artículos, este listado debe traerse de una tabla
// `articulos_blog` en Supabase (mismo patrón que `paquetes_turisticos`),
// para poder publicar sin tocar código. Es la pieza de mayor impacto en SEO
// orgánico a mediano plazo (contenido long-tail: "qué hacer en...", "mejor
// época para viajar a...", etc.) — ver README, sección SEO técnico.
export default function BlogPage() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-title text-3xl text-navy font-semibold mb-4">
          Blog de Welk Travel
        </h1>
        <p className="font-body text-sm md:text-base text-slate max-w-xl mx-auto text-justify">
          Muy pronto encontrarás aquí guías de destinos, consejos de viaje y
          novedades sobre nuestros paquetes, cruceros y circuitos. Mientras
          tanto, escríbenos por WhatsApp si tienes alguna pregunta sobre tu
          próximo viaje.
        </p>
      </div>
    </section>
  );
}
