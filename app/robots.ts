import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://welktravel.com/sitemap.xml', // TODO: reemplazar por el dominio real
  };
}
