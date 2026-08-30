// Edge Function: notificar-lead
//
// Se dispara vía un Database Webhook de Supabase (Database > Webhooks)
// configurado sobre INSERT en la tabla `leads_growth`. Envía un correo al
// equipo comercial usando Resend (https://resend.com) apenas llega un lead
// nuevo, sin importar por cuál ruta entró (/, /cotizar, /romance-bogota).
//
// Variables de entorno requeridas (Supabase > Project Settings > Edge Functions):
//   RESEND_API_KEY   — API key de Resend
//   NOTIFY_EMAIL_TO  — correo del equipo comercial que debe recibir la alerta
//
// Deploy: supabase functions deploy notificar-lead

Deno.serve(async (req) => {
  try {
    const payload = await req.json();
    const lead = payload.record;

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    const NOTIFY_EMAIL_TO = Deno.env.get('NOTIFY_EMAIL_TO');

    if (!RESEND_API_KEY || !NOTIFY_EMAIL_TO) {
      console.error('Faltan variables de entorno RESEND_API_KEY o NOTIFY_EMAIL_TO');
      return new Response('Configuración incompleta', { status: 500 });
    }

    const asunto = `Nuevo lead (${lead.origen_ruta}): ${lead.nombre_completo}`;
    const cuerpo = `
      <h2>Nuevo lead registrado</h2>
      <p><strong>Nombre:</strong> ${lead.nombre_completo}</p>
      <p><strong>WhatsApp:</strong> ${lead.whatsapp_contacto ?? '—'}</p>
      <p><strong>Correo:</strong> ${lead.correo ?? '—'}</p>
      <p><strong>Destino de interés:</strong> ${lead.destino_interes ?? '—'}</p>
      <p><strong>Ruta de origen:</strong> ${lead.origen_ruta}</p>
      <p><strong>UTM:</strong> ${lead.utm_source ?? '—'} / ${lead.utm_medium ?? '—'} / ${lead.utm_campaign ?? '—'}</p>
      <p><strong>Fecha:</strong> ${lead.fecha_registro}</p>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Welk Travel <leads@welktravel.com>', // TODO: dominio verificado en Resend
        to: [NOTIFY_EMAIL_TO],
        subject: asunto,
        html: cuerpo,
      }),
    });

    if (!res.ok) {
      const detalle = await res.text();
      console.error('Error enviando correo con Resend:', detalle);
      return new Response('Error enviando notificación', { status: 502 });
    }

    return new Response('OK', { status: 200 });
  } catch (err) {
    console.error('Error inesperado en notificar-lead:', err);
    return new Response('Error inesperado', { status: 500 });
  }
});
