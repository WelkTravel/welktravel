// Regenera la página cada 5 minutos en vez de golpear Supabase en cada visita.
// Si necesitas ver cambios al instante mientras cargas datos de prueba, puedes
// bajarlo temporalmente (ej. revalidate = 0) y volver a subirlo después.
export const revalidate = 300;

import { createServerClient } from '@/lib/supabase/server';
import Hero from '@/components/Hero';
import Categorias from '@/components/Categorias';
import SelloAutoridad from '@/components/SelloAutoridad';
import Destacados from '@/components/Destacados';
import ConserjeriaAerea from '@/components/ConserjeriaAerea';
import VideoCarousel, { Video } from '@/components/VideoCarousel';
import Testimonios from '@/components/Testimonios';
import FormularioContacto from '@/components/FormularioContacto';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Welk Travel',
  description: 'Vuelos, hoteles, paquetes, cruceros y circuitos turísticos hechos a tu medida.',
  url: 'https://welktravel.com', // TODO: reemplazar por el dominio real
  image: 'https://welktravel.com/logo-principal.png', // TODO: reemplazar por el dominio real
  taxID: '902087020-3',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'KR 14 No. 63-73',
    addressLocality: 'Bogotá',
    addressCountry: 'CO',
  },
  sameAs: [
    // TODO: agregar URLs reales de redes sociales cuando estén activas
  ],
};

export default async function Home() {
  const supabase = createServerClient();

  const { data: paquetesConVideo } = await supabase
    .from('paquetes_turisticos')
    .select('id, video_url, titulo')
    .eq('activo', true)
    .not('video_url', 'is', null);

  const videos: Video[] = (paquetesConVideo ?? [])
    .filter((p) => p.video_url)
    .map((p) => ({ id: p.id, youtube_id: p.video_url as string, nombre: p.titulo }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Categorias />
      <SelloAutoridad />
      <Destacados />
      <ConserjeriaAerea />
      <VideoCarousel videos={videos} />
      <Testimonios />
      <FormularioContacto />
    </>
  );
}
