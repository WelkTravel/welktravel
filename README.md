# Welk Travel

Sitio de Welk Travel — vuelos, hoteles y paquetes turísticos — hecho con
[Next.js](https://nextjs.org), Tailwind CSS y [Supabase](https://supabase.com).

## Requisitos

- Node.js 20+
- Variables de entorno en `.env.local` (ver `.env.local.example`):
  ```
  NEXT_PUBLIC_SUPABASE_URL=...
  NEXT_PUBLIC_SUPABASE_ANON_KEY=...
  NEXT_PUBLIC_GTM_ID=...        # opcional, Google Tag Manager
  ```

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Base de datos

El esquema de Supabase está en `supabase/schema.sql`. Ejecútalo completo desde
el SQL Editor de tu proyecto de Supabase **antes** de usar el sitio:

- `paquetes_turisticos` — catálogo mostrado en la sección "Nuestros Planes" del Home.
- `leads_growth` — todos los leads del sitio (Home, `/cotizar`, `/romance-bogota`),
  con atribución de origen (`origen_ruta`, `utm_source`, `utm_medium`, `utm_campaign`).
- `testimonios` — testimonios mostrados en el Home.

### Notificación de leads en tiempo real

Por defecto, un lead nuevo solo es visible entrando manualmente al panel de
Supabase. Para enterarte al instante:

1. Configura las variables de entorno `RESEND_API_KEY` y `NOTIFY_EMAIL_TO` en
   Supabase (Project Settings → Edge Functions).
2. Despliega la función incluida: `supabase functions deploy notificar-lead`.
3. En Supabase → Database → Webhooks, crea un webhook que dispare sobre
   `INSERT` en `leads_growth` hacia esa función.

Sin este paso, el equipo comercial puede perder leads simplemente por no
revisar el panel a tiempo — es la mejora de mayor impacto en tasa de cierre
antes de invertir en tráfico pago.

## Estructura de rutas

- `app/(main)/` — páginas corporativas con header/nav/footer: Home, Vuelos,
  Hoteles, Paquetes, Preguntas frecuentes, Política de datos.
- `app/cotizar/` — landing de captura aislada (sin nav), para tráfico
  pagado/social. `noindex`.
- `app/romance-bogota/` — landing de co-branding con Cómplices Eventos, para
  tráfico referido. `noindex`. **Confirmar autorización de marca antes de
  lanzar la campaña.**
- `app/gracias/` — confirmación tras enviar el formulario de `/cotizar`.
  `noindex`.

## SEO técnico

- JSON-LD `TravelAgency` en el Home y `FAQPage` en Preguntas frecuentes.
- `/cotizar`, `/romance-bogota` y `/gracias` están excluidas del sitemap y
  marcadas `noindex` + `disallow` en `robots.ts` a propósito: son páginas de
  conversión, no de ranking orgánico.
- Pendiente de mayor impacto: las páginas `/vuelos`, `/hoteles` y `/paquetes`
  siguen teniendo contenido mínimo. Para competir por keywords de volumen
  necesitan contenido único y sustancial por página (no solo un CTA).

## Pendientes antes de producción

- [ ] Reemplazar NIT de ejemplo en `app/(main)/layout.tsx` por el dato real.
- [ ] **RNT**: se removió intencionalmente de la barra legal hasta que esté
      radicado/aprobado (ver decisión de negocio). Agregarlo de vuelta cuando
      corresponda.
- [ ] Reemplazar el número de WhatsApp de ejemplo (`573001234567`) en todos
      los componentes y páginas por el número real.
- [ ] Completar la política de tratamiento de datos con la razón social real
      y hacerla revisar por un abogado.
- [ ] Reemplazar `welktravel.com` (dominio de ejemplo) por el dominio real en
      `layout.tsx`, `robots.ts`, `sitemap.ts` y el JSON-LD del Home.
- [ ] `components/SelloAutoridad.tsx` usa un mensaje genérico de respaldo
      institucional. Actualizarlo con el nombre de Ruta Maya Travel SAS **solo
      cuando exista convenio/contrato formal firmado**.
- [ ] Confirmar con Cómplices Eventos la autorización de marca antes de
      lanzar tráfico hacia `/romance-bogota`.
- [ ] Cargar paquetes reales en `paquetes_turisticos` y testimonios reales en
      `testimonios`.
- [ ] Configurar la notificación de leads (ver sección arriba).
- [ ] Configurar `NEXT_PUBLIC_GTM_ID` con el contenedor real de GTM antes de
      invertir en tráfico pago — sin esto no hay forma de medir conversión.
- [ ] Reemplazar los enlaces `href="#"` de redes sociales en el footer por
      las cuentas reales.
