'use client';

import { createContext, useContext, useState } from 'react';
import FormularioContacto from './FormularioContacto';

type ModalCotizarContextType = {
  abierto: boolean;
  abrirModal: () => void;
  cerrarModal: () => void;
};

const ModalCotizarContext = createContext<ModalCotizarContextType | null>(null);

export function ModalCotizarProvider({ children }: { children: React.ReactNode }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <ModalCotizarContext.Provider
      value={{
        abierto,
        abrirModal: () => setAbierto(true),
        cerrarModal: () => setAbierto(false),
      }}
    >
      {children}
    </ModalCotizarContext.Provider>
  );
}

export function useModalCotizar() {
  const ctx = useContext(ModalCotizarContext);
  if (!ctx) {
    throw new Error('useModalCotizar debe usarse dentro de ModalCotizarProvider');
  }
  return ctx;
}

export function ModalCotizar() {
  const { abierto, cerrarModal } = useModalCotizar();

  if (!abierto) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/70 px-4 py-8 overflow-y-auto"
      onClick={cerrarModal}
    >
      <div
        className="relative w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={cerrarModal}
          aria-label="Cerrar"
          className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-gold text-navy flex items-center justify-center font-bold hover:bg-gold-dark transition-colors"
        >
          ✕
        </button>
        <FormularioContacto />
      </div>
    </div>
  );
}
