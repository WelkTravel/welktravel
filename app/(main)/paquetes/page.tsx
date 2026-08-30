import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Paquetes — Welk Travel',
  description: 'Paquetes turísticos completos: vuelo, hotel y experiencias en un solo plan.',
};

export default function PaquetesPage() {
  return (
    <section className="bg-navy px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-xs text-gold tracking-[0.2em] mb-2">PAQUETES</p>
        <h1 className="font-title text-3xl text-cream font-semibold mb-4">
          Todo resuelto en un solo paquete
        </h1>
        <p className="font-body text-sm md:text-base text-mauve mb-8 max-w-xl mx-auto">
          Combinamos vuelo, hospedaje y experiencias en un plan armado a tu medida,
          para que solo tengas que preocuparte por disfrutar el viaje.
        </p>
        <Link
          href="/#contacto"
          className="inline-block bg-gold text-navy text-sm font-body font-medium px-6 py-2.5 rounded hover:bg-gold-dark transition-colors"
        >
          Arma tu paquete
        </Link>
      </div>
    </section>
  );
}
