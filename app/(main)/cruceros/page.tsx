import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cruceros — Welk Travel',
  description: 'Navega por el Caribe, el Mediterráneo o el mundo entero con cabinas reservadas a tarifa de operador mayorista. Te asesoramos en la elección de itinerario, categoría de cabina y naviera según tu presupuesto.',
};

export default function CrucerosPage() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-xs text-navy font-medium tracking-[0.2em] mb-2">CRUCEROS</p>
        <h1 className="font-title text-3xl text-navy font-semibold mb-4">
          Cruceros a tu medida
        </h1>
        <p className="font-body text-sm md:text-base text-slate mb-8 max-w-xl mx-auto text-justify">
          Navega por el Caribe, el Mediterráneo o el mundo entero con cabinas reservadas a tarifa de operador mayorista. Te asesoramos en la elección de itinerario, categoría de cabina y naviera según tu presupuesto.
        </p>
        <Link
          href="/#contacto"
          className="inline-block bg-gold text-navy text-sm font-body font-medium px-6 py-2.5 rounded hover:bg-gold-dark transition-colors"
        >
          Cotiza tu crucero ahora
        </Link>
      </div>
    </section>
  );
}
