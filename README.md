# Welk Travel

Landing page de Welk Travel — vuelos, hoteles y paquetes turísticos — hecha con
[Next.js](https://nextjs.org), Tailwind CSS y [Supabase](https://supabase.com).

## Requisitos

- Node.js 20+
- Variables de entorno en `.env.local`:
  ```
  NEXT_PUBLIC_SUPABASE_URL=...
  NEXT_PUBLIC_SUPABASE_ANON_KEY=...
  ```

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Base de datos

El esquema de Supabase (tablas `cotizaciones` y `testimonios`, con sus políticas de
Row Level Security) está en `supabase/schema.sql`. Ejecútalo desde el SQL Editor de
tu proyecto de Supabase antes de usar el formulario de contacto o los testimonios
dinámicos.

## Estructura

- `app/` — páginas (Home, Vuelos, Hoteles, Paquetes, Preguntas frecuentes, Política de datos)
- `components/` — secciones de la landing (Hero, Categorías, Destacados, Testimonios, Formulario, etc.)
- `lib/supabase/` — clientes de Supabase (browser y server)
- `supabase/schema.sql` — esquema y políticas de la base de datos

## Pendientes antes de producción

- [ ] Reemplazar NIT y RNT de ejemplo en `app/layout.tsx` por los datos reales
- [ ] Reemplazar el número de WhatsApp de ejemplo en `app/layout.tsx`
- [ ] Completar la política de tratamiento de datos con la razón social real y hacerla revisar por un abogado
- [ ] Reemplazar `welktravel.com` (dominio de ejemplo) por el dominio real en `layout.tsx`, `robots.ts` y `sitemap.ts`
- [ ] Cargar productos y testimonios reales en Supabase
" " 
