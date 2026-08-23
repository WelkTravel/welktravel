-- Tabla para las cotizaciones que llegan desde el formulario de contacto del landing.
create table if not exists public.cotizaciones (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  correo text not null,
  telefono text,
  destino text,
  created_at timestamptz not null default now()
);

alter table public.cotizaciones enable row level security;

-- El formulario usa la anon key desde el navegador, así que solo permitimos INSERT
-- público. Nadie puede leer, actualizar ni borrar cotizaciones con la anon key:
-- eso se hace desde el panel de Supabase o con la service_role key en el backend.
create policy "Cualquiera puede enviar una cotización"
  on public.cotizaciones
  for insert
  to anon
  with check (true);

-- Tabla opcional para testimonios, si quieren gestionarlos desde Supabase
-- en vez de tenerlos escritos directamente en el componente.
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
