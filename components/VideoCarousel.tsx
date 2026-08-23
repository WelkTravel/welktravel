'use client';

import { useState } from 'react';

export type Video = {
  id: string;
  youtube_id: string;
  nombre: string;
};

function VideoSlide({ video }: { video: Video }) {
  const [reproduciendo, setReproduciendo] = useState(false);

  return (
    <div className="relative aspect-video bg-navy-light rounded-md overflow-hidden">
      {!reproduciendo ? (
        <button
          onClick={() => setReproduciendo(true)}
          className="relative w-full h-full group"
          aria-label={`Reproducir video: ${video.nombre}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://img.youtube.com/vi/${video.youtube_id}/hqdefault.jpg`}
            alt={video.nombre}
            className="w-full h-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-navy/30 group-hover:bg-navy/40 transition-colors">
            <span className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-navy text-lg">
              ▶
            </span>
          </span>
        </button>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${video.youtube_id}?autoplay=1`}
          title={video.nombre}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </div>
  );
}

export default function VideoCarousel({ videos }: { videos: Video[] }) {
  if (videos.length === 0) {
    return (
      <section className="bg-cream px-6 py-6">
        <p className="font-body text-sm text-navy/50 max-w-6xl mx-auto">
          Todavía no hay videos promocionales cargados.
        </p>
      </section>
    );
  }

  return (
    <section className="bg-cream px-6 py-10">
      <p className="font-body text-xs text-navy/60 mb-3 max-w-6xl mx-auto">
        Carrusel de videos promocionales
      </p>
      <div className="max-w-2xl mx-auto">
        {/* Versión simple: un video a la vez. Si luego quieres swipe/carrusel real,
            se puede instalar embla-carousel-react y envolver este mismo VideoSlide */}
        <VideoSlide video={videos[0]} />
      </div>
    </section>
  );
}
