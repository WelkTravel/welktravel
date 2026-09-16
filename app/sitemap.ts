import type { MetadataRoute } from 'next';

const baseUrl = 'https://welktravel.com'; // TODO: reemplazar por el dominio real

export default function sitemap(): MetadataRoute.Sitemap {
  // Landing de una sola página: los servicios (paquetes, hoteles, cruceros,
  // circuitos) viven como secciones ancla del Home, no como rutas propias.
  const rutas = [
    '',
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
