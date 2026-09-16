// Regenera la página cada 5 minutos en vez de golpear Supabase en cada visita.
export const revalidate = 300;

import { createServerClient } from '@/lib/supabase/server';
import Hero from '@/components/Hero';
import SelloAutoridad from '@/components/SelloAutoridad';
import Destacados from '@/components/Destacados';
import SeccionServicio, { Destino } from '@/components/SeccionServicio';
import ConserjeriaAerea from '@/components/ConserjeriaAerea';
import VideoCarousel, { Video } from '@/components/VideoCarousel';
import Testimonios from '@/components/Testimonios';
import BotonContactenos from '@/components/BotonContactenos';

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

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

// Destinos seleccionados según el criterio de mayor consumo de viajeros
// colombianos por categoría (fuente: comportamiento típico reportado por
// agencias y operadores mayoristas — ajustar si tienen datos propios de
// reservas una vez el sitio esté operando).
const destinosPaquetes: Destino[] = [
  {
    nombre: 'Cancún',
    imagen: UNSPLASH('photo-1509818139432-c67e4197a914'),
    descripcion: 'El destino de playa más reservado por colombianos: todo incluido, hoteles frente al mar y vida nocturna.',
  },
  {
    nombre: 'Riviera Maya',
    imagen: UNSPLASH('photo-1709069015065-e902b5148601'),
    descripcion: 'Playas de arena blanca, cenotes y zonas arqueológicas a pocos minutos del resort.',
  },
  {
    nombre: 'Punta Cana',
    imagen: UNSPLASH('photo-1678816331175-a61a6835e889'),
    descripcion: 'Resorts todo incluido con algunas de las playas mejor calificadas del Caribe.',
  },
];

const destinosHoteles: Destino[] = [
  {
    nombre: 'Cartagena',
    imagen: UNSPLASH('photo-1536308037887-165852797016'),
    descripcion: 'Hospedaje en la Ciudad Amurallada o el sector de Bocagrande, a tarifa preferencial.',
  },
  {
    nombre: 'San Andrés',
    imagen: UNSPLASH('photo-1576475510454-b0af18970e6d'),
    descripcion: 'Hoteles frente al mar de los siete colores, con y sin plan todo incluido.',
  },
  {
    nombre: 'Miami',
    imagen: UNSPLASH('photo-1641535162421-fd1639067f8f'),
    descripcion: 'Hospedaje en South Beach o Brickell, ideal para compras y playa en un mismo viaje.',
  },
];

const destinosCruceros: Destino[] = [
  {
    nombre: 'Caribe',
    imagen: UNSPLASH('photo-1548574505-12caf0050b5b'),
    descripcion: 'Cruceros de varias noches por islas del Caribe, con salidas frecuentes desde Miami.',
  },
  {
    nombre: 'Mediterráneo',
    imagen: UNSPLASH('photo-1533105079780-92b9be482077'),
    descripcion: 'Recorre Grecia, Italia y España en un solo itinerario, sin deshacer maletas cada noche.',
  },
  {
    nombre: 'Fiordos Noruegos',
    imagen: UNSPLASH('photo-1740847553620-3b6e4bae8470'),
    descripcion: 'Paisajes escandinavos espectaculares para quienes buscan algo distinto al Caribe.',
  },
];

const destinosCircuitos: Destino[] = [
  {
    nombre: 'Italia Clásica',
    imagen: UNSPLASH('photo-1759674679441-1eb5bb7b12ce'),
    descripcion: 'Roma, Florencia y Venecia en un solo circuito con traslados y hospedaje coordinados.',
  },
  {
    nombre: 'España',
    imagen: UNSPLASH('photo-1604506341132-5b3f43009c3e'),
    descripcion: 'Madrid, Barcelona y Sevilla, a tu ritmo, con la logística ya resuelta.',
  },
  {
    nombre: 'Europa Clásica',
    imagen: UNSPLASH('photo-1568402028652-297e5f6fd07d'),
    descripcion: 'Francia, Suiza e Italia combinadas en un solo itinerario multidestino.',
  },
];

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
      <SelloAutoridad />
      <Destacados />

      <SeccionServicio
        id="paquetes"
        kicker="PAQUETES"
        titulo="Paquetes con tarifa de operador mayorista"
        descripcion="Hospedaje, traslados y asistencia combinados en un solo precio, en los destinos de playa más elegidos por viajeros colombianos."
        destinos={destinosPaquetes}
        ctaTexto="Consultar este paquete"
        fondo="white"
      />

      <SeccionServicio
        id="hoteles"
        kicker="HOTELES"
        titulo="Hoteles a tarifa preferencial"
        descripcion="Bloqueamos habitaciones directamente con las cadenas hoteleras, sin intermediarios de más, en los destinos con mayor demanda hotelera."
        destinos={destinosHoteles}
        ctaTexto="Consultar este hotel"
        fondo="cloud"
      />

      <SeccionServicio
        id="cruceros"
        kicker="CRUCEROS"
        titulo="Cruceros por el Caribe, el Mediterráneo y más"
        descripcion="Cabinas reservadas a tarifa de operador mayorista, con asesoría en la elección de itinerario, categoría y naviera."
        destinos={destinosCruceros}
        ctaTexto="Consultar este crucero"
        fondo="white"
      />

      <SeccionServicio
        id="circuitos"
        kicker="CIRCUITOS"
        titulo="Circuitos multidestino"
        descripcion="Varias ciudades o países en un solo itinerario, con traslados y hospedaje ya coordinados entre cada parada."
        destinos={destinosCircuitos}
        ctaTexto="Consultar este circuito"
        fondo="cloud"
      />

      <ConserjeriaAerea />
      <VideoCarousel videos={videos} />
      <Testimonios />

      <section className="bg-navy px-6 py-14 text-center">
        <h2 className="font-title text-2xl text-cream font-semibold mb-3">
          ¿Listo para tu próximo viaje?
        </h2>
        <p className="font-body text-sm text-mist max-w-md mx-auto mb-6 text-justify">
          Cuéntanos qué tienes en mente y te enviamos una propuesta a la
          medida, sin costo ni compromiso.
        </p>
        <BotonContactenos className="inline-block bg-gold text-navy text-sm font-body font-medium px-6 py-2.5 rounded hover:bg-gold-dark transition-colors">
          Contáctenos
        </BotonContactenos>
      </section>
    </>
  );
}
