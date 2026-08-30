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
    ],
  },
};

export default nextConfig;
