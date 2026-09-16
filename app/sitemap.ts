import type { MetadataRoute } from 'next';

const baseUrl = 'https://welktravel.com'; // TODO: reemplazar por el dominio real

export default function sitemap(): MetadataRoute.Sitemap {
<<<<<<< HEAD
  // Landing de una sola página: los servicios (paquetes, hoteles, cruceros,
  // circuitos) viven como secciones ancla del Home, no como rutas propias.
  const rutas = [
    '',
=======
  // Solo rutas indexables. /cotizar, /romance-bogota y /gracias quedan fuera
  // a propósito (ver robots.ts y el noindex en cada page.tsx).
  const rutas = [
    '',
    '/vuelos',
    '/hoteles',
    '/paquetes',
    '/cruceros',
    '/circuitos',
>>>>>>> 175c97d73fe7fbecef194af1fd4202024d698cdc
    '/preguntas-frecuentes',
    '/blog',
    '/pqrs',
    '/terminos-y-condiciones',
    '/politica-de-tratamiento-de-datos',
    '/derechos-del-pasajero',
    '/politica-pornografia-infantil',
    '/denuncias-menores',
  ];

  return rutas.map((ruta) => ({
    url: `${baseUrl}${ruta}`,
    lastModified: new Date(),
  }));
}
