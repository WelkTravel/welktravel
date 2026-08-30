import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Derechos del pasajero y deberes del transportador — Welk Travel',
  description: 'Información sobre los derechos del pasajero aéreo y los deberes del transportador en Colombia.',
};

export default function DerechosPasajeroPage() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-title text-2xl text-navy font-semibold mb-8">
          Derechos del pasajero y/o deberes del transportador
        </h1>

        <div className="font-body text-sm text-navy/80 flex flex-col gap-5 text-justify">
          <div>
            <h2 className="font-title text-navy text-base mb-1">1. Marco normativo</h2>
            <p>Los derechos del pasajero aéreo y los deberes de las aerolíneas en Colombia están regulados por la Aerocivil (Unidad Administrativa Especial de Aeronáutica Civil), a través de normas como el Reglamento Aeronáutico de Colombia (RAC 3) y demás disposiciones vigentes.</p>
          </div>

          <div>
            <h2 className="font-title text-navy text-base mb-1">2. Rol de Welk Travel</h2>
            <p>Como agencia intermediaria, Welk Travel te informa sobre estos derechos y te acompaña ante la aerolínea en caso de novedades, pero la relación contractual del transporte aéreo se establece directamente entre el pasajero y la aerolínea operadora.</p>
          </div>

          <div>
            <h2 className="font-title text-navy text-base mb-1">3. Dónde consultar el detalle completo</h2>
            <p>Para consultar el listado oficial y actualizado de derechos del pasajero y deberes del transportador, visita el sitio web de la Aerocivil, enlazado en el pie de página de este sitio.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
