// Regenera la página cada 5 minutos en vez de golpear Supabase en cada visita.
// Si necesitas ver cambios al instante mientras cargas datos de prueba, puedes
// bajarlo temporalmente (ej. revalidate = 0) y volver a subirlo después.
export const revalidate = 300;

import { createServerClient } from '@/lib/supabase/server';
import Hero from '@/components/Hero';
import Categorias from '@/components/Categorias';
import Destacados from '@/components/Destacados';
import VideoCarousel, { Video } from '@/components/VideoCarousel';
import Testimonios from '@/components/Testimonios';
import FormularioContacto from '@/components/FormularioContacto';

export default async function Home() {
  const supabase = createServerClient();

  const { data: productosConVideo } = await supabase
    .from('productos')
    .select('id, video_url, nombre')
    .not('video_url', 'is', null);

  const videos: Video[] = (productosConVideo ?? [])
    .filter((p) => p.video_url)
    .map((p) => ({ id: p.id, youtube_id: p.video_url as string, nombre: p.nombre }));

  return (
    <>
      <Hero />
      <Categorias />
      <Destacados />
      <VideoCarousel videos={videos} />
      <Testimonios />
      <FormularioContacto />
    </>
  );
}
