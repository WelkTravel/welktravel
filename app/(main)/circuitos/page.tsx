import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Circuitos — Welk Travel',
  description: 'Diseñamos circuitos multidestino a la medida, combinando varias ciudades o países en un solo itinerario con traslados y hospedaje coordinados. Ideal para quienes quieren ver más en un solo viaje.',
};

export default function CircuitosPage() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-xs text-navy font-medium tracking-[0.2em] mb-2">CIRCUITOS</p>
        <h1 className="font-title text-3xl text-navy font-semibold mb-4">
          Circuitos a tu medida
        </h1>
        <p className="font-body text-sm md:text-base text-slate mb-8 max-w-xl mx-auto text-justify">
          Diseñamos circuitos multidestino a la medida, combinando varias ciudades o países en un solo itinerario con traslados y hospedaje coordinados. Ideal para quienes quieren ver más en un solo viaje.
        </p>
        <Link
          href="/#contacto"
          className="inline-block bg-gold text-navy text-sm font-body font-medium px-6 py-2.5 rounded hover:bg-gold-dark transition-colors"
        >
          Cotiza tu circuito ahora
        </Link>
      </div>
    </section>
  );
}
