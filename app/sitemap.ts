import type { MetadataRoute } from 'next';

const baseUrl = 'https://welktravel.com'; // TODO: reemplazar por el dominio real

export default function sitemap(): MetadataRoute.Sitemap {
  // Solo rutas indexables. /cotizar, /romance-bogota y /gracias quedan fuera
  // a propósito (ver robots.ts y el noindex en cada page.tsx).
  const rutas = [
    '',
    '/vuelos',
    '/hoteles',
    '/paquetes',
    '/cruceros',
    '/circuitos',
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
