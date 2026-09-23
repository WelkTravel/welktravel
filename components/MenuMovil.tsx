'use client';

import { useState } from 'react';
import Link from 'next/link';
import BotonContactenos from './BotonContactenos';

const enlaces = [
  { nombre: 'Paquetes', href: '/#paquetes' },
  { nombre: 'Hoteles', href: '/#hoteles' },
  { nombre: 'Cruceros', href: '/#cruceros' },
  { nombre: 'Circuitos', href: '/#circuitos' },
  { nombre: 'Vuelos', href: '/#conserjeria-aerea' },
];

export default function MenuMovil() {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={abierto}
        className="flex flex-col gap-1.5 p-2 -mr-2"
      >
        <span className={`block w-6 h-0.5 bg-cream transition-transform ${abierto ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`block w-6 h-0.5 bg-cream transition-opacity ${abierto ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-cream transition-transform ${abierto ? '-translate-y-2 -rotate-45' : ''}`} />
      </button>

      {abierto && (
        <nav className="absolute top-full left-0 right-0 bg-navy border-b border-navy-light flex flex-col px-6 py-4 gap-4 text-sm text-mist font-body shadow-lg">
          {enlaces.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              onClick={() => setAbierto(false)}
              className="hover:text-white transition-colors"
            >
              {e.nombre}
            </Link>
          ))}
          <BotonContactenos className="hover:text-white transition-colors text-left">
            Contáctenos
          </BotonContactenos>
        </nav>
      )}
    </div>
  );
}
