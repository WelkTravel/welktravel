'use client';

import { useModalCotizar } from './ModalCotizar';

export default function BotonContactenos({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const { abrirModal } = useModalCotizar();

  return (
    <button type="button" onClick={abrirModal} className={className}>
      {children}
    </button>
  );
}
