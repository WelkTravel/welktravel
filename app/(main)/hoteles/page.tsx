import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hoteles — Welk Travel',
  description: 'Bloqueamos habitaciones con tarifas preferenciales de operador mayorista en cadenas hoteleras de todo el mundo. Cuéntanos tu destino, fechas y número de viajeros y armamos la mejor opción para ti.',
};

export default function HotelesPage() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-xs text-navy font-medium tracking-[0.2em] mb-2">HOTELES</p>
        <h1 className="font-title text-3xl text-navy font-semibold mb-4">
          Hoteles a tu medida
        </h1>
        <p className="font-body text-sm md:text-base text-slate mb-8 max-w-xl mx-auto text-justify">
          Bloqueamos habitaciones con tarifas preferenciales de operador mayorista en cadenas hoteleras de todo el mundo. Cuéntanos tu destino, fechas y número de viajeros y armamos la mejor opción para ti.
        </p>
        <Link
          href="/#contacto"
          className="inline-block bg-gold text-navy text-sm font-body font-medium px-6 py-2.5 rounded hover:bg-gold-dark transition-colors"
        >
          Cotiza tu hotel ahora
        </Link>
      </div>
    </section>
  );
}
