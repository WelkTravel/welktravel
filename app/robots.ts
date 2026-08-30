import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Landings de campaña/conversión pura: no deben gastar presupuesto de
      // rastreo ni competir por autoridad con el Home.
      disallow: ['/cotizar', '/romance-bogota', '/gracias'],
    },
    sitemap: 'https://welktravel.com/sitemap.xml', // TODO: reemplazar por el dominio real
  };
}
