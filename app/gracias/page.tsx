import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solicitud recibida — Welk Travel',
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16 text-center">
      <Image
        src="/isotipo.png"
        alt="Welk Travel"
        width={900}
        height={643}
        className="w-20 h-auto mb-6"
        priority
      />

      <h1 className="font-title text-2xl md:text-4xl text-navy font-semibold">
        ¡Tu solicitud está en camino!
      </h1>
      <p className="font-body text-sm md:text-base text-slate mt-4 max-w-md text-justify">
        Nuestros asesores ya están consultando el inventario mayorista para
        armar tu propuesta a la medida. Mientras procesamos tu información,
        puedes acelerar el proceso chateando directamente con un asesor
        asignado en tiempo real.
      </p>

      <a
        href="https://wa.me/573001234567?text=Hola%2C%20acabo%20de%20enviar%20mi%20solicitud%20de%20cotizaci%C3%B3n"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-8 bg-gold text-navy text-sm md:text-base font-body font-medium px-8 py-3.5 rounded hover:bg-gold-dark transition-colors"
      >
        Hablar con un asesor por WhatsApp ahora mismo
      </a>

      <Link
        href="/"
        className="font-body text-xs text-slate hover:text-navy transition-colors mt-8 underline"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
