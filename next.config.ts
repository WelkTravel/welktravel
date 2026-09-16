import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // Cubre cualquier bucket público de Supabase Storage
        // (https://<project-ref>.supabase.co/storage/v1/object/public/...).
        // Si en algún momento usan otro host para imágenes (ej. un CDN),
        // agrégalo aquí también.
        protocol: 'https',
        hostname: '**.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
<<<<<<< HEAD
      {
        // Fotos de referencia de Unsplash usadas en las tarjetas de destinos.
        // TODO: reemplazar por fotografía propia antes de lanzar a producción.
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
=======
>>>>>>> 175c97d73fe7fbecef194af1fd4202024d698cdc
    ],
  },
};

export default nextConfig;
