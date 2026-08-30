'use client';

import { useState } from 'react';
import { createBrowserClient } from '@/lib/supabase/client';

type Estado = 'idle' | 'enviando' | 'error' | 'error-politica' | 'error-envio' | 'enviado';

export default function FormularioContacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [destino, setDestino] = useState('');
  const [aceptaPolitica, setAceptaPolitica] = useState(false);
  const [estado, setEstado] = useState<Estado>('idle');

  function validarCorreo(valor: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!nombre.trim() || !validarCorreo(correo)) {
      setEstado('error');
      return;
    }
    if (!aceptaPolitica) {
      setEstado('error-politica');
      return;
    }

    setEstado('enviando');

    try {
      const supabase = createBrowserClient();
      const { error } = await supabase.from('leads_growth').insert({
        nombre_completo: nombre.trim(),
        correo: correo.trim(),
        whatsapp_contacto: telefono.trim() || null,
        destino_interes: destino.trim() || null,
        origen_ruta: '/',
      });

      if (error) {
        console.error('Error al guardar la cotización:', error.message);
        setEstado('error-envio');
        return;
      }

      setEstado('enviado');
      setNombre('');
      setCorreo('');
      setTelefono('');
      setDestino('');
      setAceptaPolitica(false);
    } catch (err) {
      console.error('Error inesperado al enviar el formulario:', err);
      setEstado('error-envio');
    }
  }

  const enviando = estado === 'enviando';

  return (
    <section id="contacto" className="bg-white px-6 py-10">
      <div className="max-w-md mx-auto bg-navy rounded-md p-6 text-center">
        <h2 className="font-title text-lg text-cream mb-4">
          ¿Listo para tu próximo viaje?
        </h2>

        <form onSubmit={handleSubmit} className="text-left">
          <label className="font-body text-xs text-mist block mb-1">
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
            Correo electrónico
          </label>
          <input
            type="email"
            value={correo}
            onChange={(e) => {
              setCorreo(e.target.value);
              if (estado === 'error') setEstado('idle');
            }}
            placeholder="tucorreo@ejemplo.com"
            disabled={enviando}
            className={`w-full rounded px-3 py-2 text-sm font-body bg-navy-deep text-cream outline-none border disabled:opacity-60 ${
              estado === 'error' && !validarCorreo(correo) ? 'border-error' : 'border-navy-light'
            }`}
          />

          {estado === 'error' && (
            <p className="font-body text-xs text-error mt-1">
              Completa tu nombre y un correo válido
            </p>
          )}

          <label className="font-body text-xs text-mist block mb-1 mt-3">
            WhatsApp / teléfono (opcional)
          </label>
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="300 123 4567"
            disabled={enviando}
            className="w-full rounded px-3 py-2 text-sm font-body bg-navy-deep text-cream outline-none border border-navy-light disabled:opacity-60"
          />

          <label className="font-body text-xs text-mist block mb-1 mt-3">
            ¿A dónde quieres viajar? (opcional)
          </label>
          <input
            type="text"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            placeholder="Ej. San Andrés, Cartagena..."
            disabled={enviando}
            className="w-full rounded px-3 py-2 text-sm font-body bg-navy-deep text-cream outline-none border border-navy-light disabled:opacity-60"
          />

          <label className="flex items-start gap-2 mt-4 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={aceptaPolitica}
              onChange={(e) => {
                setAceptaPolitica(e.target.checked);
                if (estado === 'error-politica') setEstado('idle');
              }}
              disabled={enviando}
              className="mt-0.5 h-4 w-4 shrink-0 accent-cream"
            />
            <span className="font-body text-xs text-mist text-justify">
              Acepto la{' '}
              <a href="/politica-de-tratamiento-de-datos" className="text-cream underline">
                política de tratamiento de datos personales
              </a>
            </span>
          </label>

          {estado === 'error-politica' && (
            <p className="font-body text-xs text-error mt-1">
              Debes aceptar la política de tratamiento de datos para continuar
            </p>
          )}

          {estado === 'error-envio' && (
            <p className="font-body text-xs text-error mt-3">
              No pudimos enviar tu cotización. Intenta de nuevo o escríbenos por WhatsApp.
            </p>
          )}

          {estado === 'enviado' && (
            <p className="font-body text-xs text-cream font-semibold mt-3">
              ✓ Cotización enviada. Te contactaremos muy pronto.
            </p>
          )}

          <button
            type="submit"
            disabled={enviando}
            className="w-full mt-4 bg-gold text-navy text-sm font-body font-medium py-2 rounded hover:bg-gold-dark transition-colors disabled:opacity-60"
          >
            {enviando ? 'Enviando...' : 'Cotizar ahora'}
          </button>
        </form>
      </div>
    </section>
  );
}
