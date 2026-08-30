import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Luna de miel a la medida — Welk Travel × Cómplices Eventos',
  description:
    'Coordinamos tu luna de miel soñada desde Bogotá con tarifas de operador mayorista.',
  // Landing de campaña/referido, no destinada a ranking orgánico.
  robots: { index: false, follow: false },
};

// NOTA: confirmar con Cómplices Eventos que la mención de marca y el enlace
// de co-branding en esta página están autorizados antes de lanzar la campaña.
export default function RomanceBogotaPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16 text-center">
      <Image
        src="/isotipo.png"
        alt="Welk Travel"
        width={140}
        height={134}
        className="w-24 h-auto mb-6"
        priority
      />

      <p className="font-body text-xs text-navy font-medium tracking-[0.2em] mb-3">
        LUNA DE MIEL · ANIVERSARIOS · PEDIDAS DE MANO
      </p>
      <h1 className="font-title text-3xl md:text-5xl text-navy font-semibold max-w-2xl leading-tight">
        El viaje de tu vida empieza aquí. Coordinamos tu luna de miel soñada
        desde Bogotá.
      </h1>
      <p className="font-body text-sm md:text-base text-slate mt-5 max-w-xl text-justify">
        Planifica la logística y los momentos íntimos de tu evento en Bogotá
        con la creatividad de Cómplices, y asegura la hotelería internacional
        del más alto nivel con tarifas de operador mayorista y respaldo
        global.
      </p>

      <a
        href="https://wa.me/573001234567?text=Hola%2C%20quiero%20dise%C3%B1ar%20nuestra%20escapada%20rom%C3%A1ntica"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 bg-gold text-navy text-sm md:text-base font-body font-medium px-8 py-3.5 rounded hover:bg-gold-dark transition-colors"
      >
        Diseñar nuestra escapada romántica ahora
      </a>
    </main>
  );
}
