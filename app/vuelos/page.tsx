import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vuelos — Welk Travel',
  description: 'Cotiza vuelos nacionales e internacionales con Welk Travel.',
};

export default function VuelosPage() {
  return (
    <section className="bg-navy px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-xs text-gold tracking-[0.2em] mb-2">VUELOS</p>
        <h1 className="font-title text-3xl text-cream font-semibold mb-4">
          Vuelos a tu medida
        </h1>
        <p className="font-body text-sm md:text-base text-mauve mb-8 max-w-xl mx-auto">
          Cotizamos vuelos nacionales e internacionales buscando la mejor combinación
          de precio, horario y aerolínea para tu viaje. Cuéntanos tu destino y fechas
          y te enviamos opciones sin compromiso.
        </p>
        <a
          href="/#contacto"
          className="inline-block bg-gold text-navy text-sm font-body font-medium px-6 py-2.5 rounded hover:bg-gold-dark transition-colors"
        >
          Cotiza tu vuelo ahora
        </a>
      </div>
    </section>
  );
}
