'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createBrowserClient } from '@/lib/supabase/client';

type Estado = 'idle' | 'enviando' | 'error' | 'error-envio';

export default function FormularioCotizar({ origenRuta }: { origenRuta: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [destino, setDestino] = useState('');
  const [nombre, setNombre] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [estado, setEstado] = useState<Estado>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!nombre.trim() || !whatsapp.trim() || !destino.trim()) {
      setEstado('error');
      return;
    }

    setEstado('enviando');

    try {
      const supabase = createBrowserClient();
      const { error } = await supabase.from('leads_growth').insert({
        nombre_completo: nombre.trim(),
        whatsapp_contacto: whatsapp.trim(),
        destino_interes: destino.trim(),
        origen_ruta: origenRuta,
        utm_source: searchParams.get('utm_source'),
        utm_medium: searchParams.get('utm_medium'),
        utm_campaign: searchParams.get('utm_campaign'),
      });

      if (error) {
        console.error('Error al guardar el lead:', error.message);
        setEstado('error-envio');
        return;
      }

      router.push('/gracias');
    } catch (err) {
      console.error('Error inesperado al enviar el formulario:', err);
      setEstado('error-envio');
    }
  }

  const enviando = estado === 'enviando';

  return (
    <form onSubmit={handleSubmit} className="text-left w-full max-w-sm">
      <label className="font-body text-xs text-mist block mb-1">
        ¿A qué destino internacional deseas viajar?
      </label>
      <input
        type="text"
        value={destino}
        onChange={(e) => {
          setDestino(e.target.value);
          if (estado === 'error') setEstado('idle');
        }}
        placeholder="Ej. Cancún, Punta Cana, Europa..."
        disabled={enviando}
        className={`w-full rounded px-3 py-2 text-sm font-body bg-navy-deep text-cream outline-none border disabled:opacity-60 ${
          estado === 'error' && !destino.trim() ? 'border-error' : 'border-navy-light'
        }`}
      />

      <label className="font-body text-xs text-mist block mb-1 mt-3">
        Nombre completo
      </label>
      <input
        type="text"
        value={nombre}
        onChange={(e) => {
          setNombre(e.target.value);
          if (estado === 'error') setEstado('idle');
        }}
        placeholder="Tu nombre"
        disabled={enviando}
        className={`w-full rounded px-3 py-2 text-sm font-body bg-navy-deep text-cream outline-none border disabled:opacity-60 ${
          estado === 'error' && !nombre.trim() ? 'border-error' : 'border-navy-light'
        }`}
      />

      <label className="font-body text-xs text-mist block mb-1 mt-3">
        WhatsApp de contacto
      </label>
      <input
        type="tel"
        value={whatsapp}
        onChange={(e) => {
          setWhatsapp(e.target.value);
          if (estado === 'error') setEstado('idle');
        }}
        placeholder="300 123 4567"
        disabled={enviando}
        className={`w-full rounded px-3 py-2 text-sm font-body bg-navy-deep text-cream outline-none border disabled:opacity-60 ${
          estado === 'error' && !whatsapp.trim() ? 'border-error' : 'border-navy-light'
        }`}
      />

      {estado === 'error' && (
        <p className="font-body text-xs text-error mt-2">
          Completa los tres campos para continuar
        </p>
      )}
      {estado === 'error-envio' && (
        <p className="font-body text-xs text-error mt-2">
          No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={enviando}
        className="w-full mt-4 bg-gold text-navy text-sm font-body font-medium py-2.5 rounded hover:bg-gold-dark transition-colors disabled:opacity-60"
      >
        {enviando ? 'Enviando...' : 'Recibir mi itinerario personalizado gratis'}
      </button>
    </form>
  );
}
