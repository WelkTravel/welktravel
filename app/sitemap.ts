import type { MetadataRoute } from 'next';

const baseUrl = 'https://welktravel.com'; // TODO: reemplazar por el dominio real

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = ['', '/vuelos', '/hoteles', '/paquetes', '/preguntas-frecuentes'];

  return rutas.map((ruta) => ({
    url: `${baseUrl}${ruta}`,
    lastModified: new Date(),
  }));
}
