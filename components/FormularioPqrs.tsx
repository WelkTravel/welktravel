'use client';

import { useState } from 'react';
import { createBrowserClient } from '@/lib/supabase/client';

type Tipo = 'peticion' | 'queja' | 'reclamo' | 'sugerencia';
type Estado = 'idle' | 'enviando' | 'error' | 'error-envio' | 'enviado';

const tipos: { value: Tipo; label: string }[] = [
  { value: 'peticion', label: 'Petición' },
  { value: 'queja', label: 'Queja' },
  { value: 'reclamo', label: 'Reclamo' },
  { value: 'sugerencia', label: 'Sugerencia' },
];

export default function FormularioPqrs() {
  const [tipo, setTipo] = useState<Tipo>('peticion');
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [estado, setEstado] = useState<Estado>('idle');

  function validarCorreo(valor: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!nombre.trim() || !validarCorreo(correo) || !mensaje.trim()) {
      setEstado('error');
      return;
    }

    setEstado('enviando');

    try {
      const supabase = createBrowserClient();
      const { error } = await supabase.from('pqrs').insert({
        tipo,
        nombre_completo: nombre.trim(),
        correo: correo.trim(),
        mensaje: mensaje.trim(),
      });

      if (error) {
        console.error('Error al guardar el PQRS:', error.message);
        setEstado('error-envio');
        return;
      }

      setEstado('enviado');
      setNombre('');
      setCorreo('');
      setMensaje('');
      setTipo('peticion');
    } catch (err) {
      console.error('Error inesperado al enviar el PQRS:', err);
      setEstado('error-envio');
    }
  }

  const enviando = estado === 'enviando';

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left">
      <label className="font-body text-xs text-navy block mb-1">Tipo de solicitud</label>
      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value as Tipo)}
        disabled={enviando}
        className="w-full rounded px-3 py-2 text-sm font-body bg-white text-navy outline-none border border-navy-light/40 disabled:opacity-60"
      >
        {tipos.map((t) => (
          <option key={t.value} value={t.value}>{t.label}</option>
        ))}
      </select>

      <label className="font-body text-xs text-navy block mb-1 mt-3">Nombre completo</label>
      <input
        type="text"
        value={nombre}
        onChange={(e) => {
          setNombre(e.target.value);
          if (estado === 'error') setEstado('idle');
        }}
        placeholder="Tu nombre"
        disabled={enviando}
        className={`w-full rounded px-3 py-2 text-sm font-body bg-white text-navy outline-none border disabled:opacity-60 ${
          estado === 'error' && !nombre.trim() ? 'border-error' : 'border-navy-light/40'
        }`}
      />

      <label className="font-body text-xs text-navy block mb-1 mt-3">Correo electrónico</label>
      <input
        type="email"
        value={correo}
        onChange={(e) => {
          setCorreo(e.target.value);
          if (estado === 'error') setEstado('idle');
        }}
        placeholder="tucorreo@ejemplo.com"
        disabled={enviando}
        className={`w-full rounded px-3 py-2 text-sm font-body bg-white text-navy outline-none border disabled:opacity-60 ${
          estado === 'error' && !validarCorreo(correo) ? 'border-error' : 'border-navy-light/40'
        }`}
      />

      <label className="font-body text-xs text-navy block mb-1 mt-3">Cuéntanos qué pasó</label>
      <textarea
        value={mensaje}
        onChange={(e) => {
          setMensaje(e.target.value);
          if (estado === 'error') setEstado('idle');
        }}
        placeholder="Describe tu petición, queja, reclamo o sugerencia"
        rows={5}
        disabled={enviando}
        className={`w-full rounded px-3 py-2 text-sm font-body bg-white text-navy outline-none border disabled:opacity-60 ${
          estado === 'error' && !mensaje.trim() ? 'border-error' : 'border-navy-light/40'
        }`}
      />

      {estado === 'error' && (
        <p className="font-body text-xs text-error mt-2">
          Completa tu nombre, un correo válido y tu mensaje
        </p>
      )}
      {estado === 'error-envio' && (
        <p className="font-body text-xs text-error mt-2">
          No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.
        </p>
      )}
      {estado === 'enviado' && (
        <p className="font-body text-xs text-navy font-semibold mt-2">
          ✓ Solicitud enviada. Te responderemos dentro de los términos de ley.
        </p>
      )}

      <button
        type="submit"
        disabled={enviando}
        className="w-full mt-4 bg-gold text-navy text-sm font-body font-medium py-2.5 rounded hover:bg-gold-dark transition-colors disabled:opacity-60"
      >
        {enviando ? 'Enviando...' : 'Enviar solicitud'}
      </button>
    </form>
  );
}
