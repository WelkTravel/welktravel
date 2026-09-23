import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import FormularioCotizar from '@/components/FormularioCotizar';

export const metadata: Metadata = {
  title: 'Cotiza tu viaje — Welk Travel',
  description: 'Cuéntanos tu destino soñado y recibe tu itinerario personalizado gratis.',
  // Página de captura para tráfico pagado/social, no para ranking orgánico:
  // no queremos que compita en Google con el Home.
  robots: { index: false, follow: false },
};

export default function CotizarPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full flex flex-col md:flex-row items-center gap-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-shrink-0 md:w-1/2">
          <Image
            src="/isotipo.png"
            alt="Welk Travel"
            width={900}
            height={643}
            className="w-32 h-auto md:w-40"
            priority
          />
          <span className="font-title text-navy text-xl font-semibold tracking-wide mt-2">
            WELK TRAVEL
          </span>
          <p className="font-body text-sm text-slate mt-4 max-w-sm text-justify">
            Cuéntanos tu destino soñado y nuestro equipo diseñará una
            propuesta a la medida usando tarifas exclusivas de operador
            mayorista — para paquetes, cruceros y circuitos.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="bg-navy rounded-md p-6 w-full max-w-sm">
            <Suspense fallback={null}>
              <FormularioCotizar origenRuta="/cotizar" />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
