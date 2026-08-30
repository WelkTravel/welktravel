-- ============================================================
-- Welk Travel — schema de Supabase
-- Reemplaza al schema anterior (productos, cotizaciones).
-- Ejecutar completo desde el SQL Editor de Supabase antes de
-- usar el sitio en producción.
-- ============================================================

-- ------------------------------------------------------------
-- paquetes_turisticos: catálogo mostrado en el Bloque 4 del Home
-- ------------------------------------------------------------
create table if not exists public.paquetes_turisticos (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  titulo text not null,
  descripcion text,
  incluye jsonb not null default '[]'::jsonb, -- ej. ["Hotel 5 noches", "Traslados", "Asistencia médica"]
  precio_base_cop numeric,
  imagen_url text,
  video_url text, -- id de YouTube opcional, para el carrusel de video del Home
  destacado boolean not null default false,
  activo boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.paquetes_turisticos enable row level security;

-- Lectura pública solo de paquetes activos (la app usa la anon key desde el server)
create policy "Lectura pública de paquetes activos"
  on public.paquetes_turisticos
  for select
  to anon
  using (activo = true);

-- ------------------------------------------------------------
-- leads_growth: reemplaza a la antigua tabla "cotizaciones".
-- Captura leads desde cualquier ruta del sitio (/, /cotizar,
-- /romance-bogota), con atribución de origen.
-- ------------------------------------------------------------
create table if not exists public.leads_growth (
  id uuid primary key default gen_random_uuid(),
  nombre_completo text not null,
  correo text,
  whatsapp_contacto text,
  destino_interes text,
  origen_ruta text not null default '/', -- ej. '/', '/cotizar', '/romance-bogota'
  utm_source text,
  utm_medium text,
  utm_campaign text,
  fecha_registro timestamptz not null default now()
);

alter table public.leads_growth enable row level security;

-- El formulario usa la anon key desde el navegador: solo permitimos INSERT
-- público. Nadie puede leer, actualizar ni borrar leads con la anon key —
-- eso se hace desde el panel de Supabase, con la service_role key, o desde
-- la función de notificación (ver README, sección "Notificación de leads").
create policy "Cualquiera puede registrar un lead"
  on public.leads_growth
  for insert
  to anon
  with check (true);

-- ------------------------------------------------------------
-- testimonios (sin cambios respecto al schema anterior)
-- ------------------------------------------------------------
create table if not exists public.testimonios (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  texto text not null,
  destino text,
  publicado boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.testimonios enable row level security;

create policy "Lectura pública de testimonios publicados"
  on public.testimonios
  for select
  to anon
  using (publicado = true);

-- ------------------------------------------------------------
-- pqrs: peticiones, quejas, reclamos y sugerencias del servicio.
-- Se maneja separada de leads_growth porque es atención al cliente,
-- no un lead comercial.
-- ------------------------------------------------------------
create table if not exists public.pqrs (
  id uuid primary key default gen_random_uuid(),
  tipo text not null check (tipo in ('peticion', 'queja', 'reclamo', 'sugerencia')),
  nombre_completo text not null,
  correo text not null,
  mensaje text not null,
  fecha_registro timestamptz not null default now()
);

alter table public.pqrs enable row level security;

create policy "Cualquiera puede radicar un PQRS"
  on public.pqrs
  for insert
  to anon
  with check (true);

-- ------------------------------------------------------------
-- Notificación en tiempo real de nuevos leads (recomendado):
-- Configura un Database Webhook en Supabase (Database > Webhooks)
-- que dispare un HTTP POST hacia la función de Edge
-- `notificar-lead` (ver supabase/functions/notificar-lead) cada vez
-- que se inserte una fila en leads_growth. Sin esto, los leads solo
-- se pueden ver entrando manualmente al panel de Supabase.
-- ------------------------------------------------------------
