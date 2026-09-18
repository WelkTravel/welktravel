'use client';

import { useState } from 'react';
import Image from 'next/image';

// Hover-to-play: en escritorio se reproduce al pasar el mouse por encima y
// se detiene al salir; en pantallas táctiles (donde no existe "hover"), un
// toque cumple la misma función.
//
// El video NUNCA se aloja en el proyecto: el <iframe> solo se monta en el
// DOM cuando el usuario interactúa (hover/tap), así que no afecta el tiempo
// de carga inicial de la página — es carga diferida por diseño, no solo por
// el atributo `loading="lazy"` del iframe.
export default function MiniaturaVideoYoutube({
  youtubeId,
  imagen,
  titulo,
}: {
  youtubeId: string;
  imagen: string;
  titulo: string;
}) {
  const [reproduciendo, setReproduciendo] = useState(false);

  return (
    <div
      className="relative w-full h-full bg-navy-light cursor-pointer"
      onMouseEnter={() => setReproduciendo(true)}
      onMouseLeave={() => setReproduciendo(false)}
      onClick={() => setReproduciendo((v) => !v)}
      role="button"
      tabIndex={0}
      aria-label={`Reproducir video de ${titulo}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') setReproduciendo((v) => !v);
      }}
    >
      {reproduciendo ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`}
          title={`Video de ${titulo}`}
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <Image
            src={imagen}
            alt={titulo}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-navy/20 hover:bg-navy/30 transition-colors">
            <span className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-navy text-lg">
              ▶
            </span>
          </span>
        </>
      )}
    </div>
  );
}
