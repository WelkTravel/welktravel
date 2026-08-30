import type { Metadata } from 'next';
import FormularioPqrs from '@/components/FormularioPqrs';

export const metadata: Metadata = {
  title: 'PQRS — Welk Travel',
  description: 'Radica tu petición, queja, reclamo o sugerencia con Welk Travel.',
};

export default function PqrsPage() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h1 className="font-title text-3xl text-navy font-semibold mb-4">
          Peticiones, quejas, reclamos y sugerencias
        </h1>
        <p className="font-body text-sm md:text-base text-slate max-w-xl mx-auto text-justify">
          Si tienes una petición, queja, reclamo o sugerencia sobre nuestro
          servicio, cuéntanos aquí. Revisamos cada solicitud y te
          responderemos dentro de los términos establecidos por la ley.
        </p>
      </div>

      <FormularioPqrs />
    </section>
  );
}
