import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoteles — Welk Travel',
  description: 'Reserva hoteles y alojamientos con Welk Travel.',
};

export default function HotelesPage() {
  return (
    <section className="bg-navy px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-xs text-gold tracking-[0.2em] mb-2">HOTELES</p>
        <h1 className="font-title text-3xl text-cream font-semibold mb-4">
          El hospedaje correcto para cada viaje
        </h1>
        <p className="font-body text-sm md:text-base text-mauve mb-8 max-w-xl mx-auto">
          Desde hoteles boutique hasta resorts todo incluido: te ayudamos a elegir el
          alojamiento que mejor se ajusta a tu presupuesto y al tipo de viaje que
          quieres vivir.
        </p>
        <a
          href="/#contacto"
          className="inline-block bg-gold text-navy text-sm font-body font-medium px-6 py-2.5 rounded hover:bg-gold-dark transition-colors"
        >
          Cotiza tu hospedaje
        </a>
      </div>
    </section>
  );
}
