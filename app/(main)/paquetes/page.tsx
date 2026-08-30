import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Paquetes — Welk Travel',
  description: 'Combinamos hospedaje, traslados y asistencia en un solo paquete con tarifas de operador mayorista. Ideal si quieres resolver toda la logística de tu viaje en un solo lugar.',
};

export default function PaquetesPage() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-xs text-navy font-medium tracking-[0.2em] mb-2">PAQUETES</p>
        <h1 className="font-title text-3xl text-navy font-semibold mb-4">
          Paquetes a tu medida
        </h1>
        <p className="font-body text-sm md:text-base text-slate mb-8 max-w-xl mx-auto text-justify">
          Combinamos hospedaje, traslados y asistencia en un solo paquete con tarifas de operador mayorista. Ideal si quieres resolver toda la logística de tu viaje en un solo lugar.
        </p>
        <Link
          href="/#contacto"
          className="inline-block bg-gold text-navy text-sm font-body font-medium px-6 py-2.5 rounded hover:bg-gold-dark transition-colors"
        >
          Cotiza tu paquete ahora
        </Link>
      </div>
    </section>
  );
}
