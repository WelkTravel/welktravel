import type { Metadata } from 'next';
import BotonContactenos from '@/components/BotonContactenos';

export const metadata: Metadata = {
  title: 'Preguntas frecuentes — Welk Travel',
  description: 'Resolvemos las dudas más comunes sobre cotizaciones, pagos y reservas con Welk Travel.',
};

const preguntas = [
  {
    pregunta: '¿Cómo cotizo un viaje?',
    respuesta:
      'Llena el formulario de contacto en la página principal con tu destino y fechas aproximadas, o escríbenos directamente por WhatsApp. Te respondemos con opciones sin ningún compromiso de compra.',
  },
  {
    pregunta: '¿Cuáles son los medios de pago?',
    respuesta:
      'Te compartimos los medios de pago disponibles al confirmar tu cotización. Si necesitas facturación especial, cuéntanoslo al momento de cotizar.',
  },
  {
    pregunta: '¿Con cuánta anticipación debo cotizar mi viaje?',
    respuesta:
      'Recomendamos cotizar con al menos 3-4 semanas de anticipación para temporada baja, y con más tiempo para temporada alta o fechas festivas, donde la disponibilidad y los precios cambian más rápido.',
  },
  {
    pregunta: '¿Qué pasa si necesito cambiar o cancelar mi reserva?',
    respuesta:
      'Las condiciones de cambio y cancelación dependen de la aerolínea, hotel u operador de cada reserva. Te las explicamos claramente antes de confirmar cualquier compra.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: preguntas.map((item) => ({
    '@type': 'Question',
    name: item.pregunta,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.respuesta,
    },
  })),
};

export default function PreguntasFrecuentesPage() {
  return (
    <section className="bg-white px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <p className="font-body text-xs text-navy font-medium tracking-[0.2em] mb-2 text-center">
          AYUDA
        </p>
        <h1 className="font-title text-3xl text-navy font-semibold mb-8 text-center">
          Preguntas frecuentes
        </h1>

        <div className="flex flex-col gap-4">
          {preguntas.map((item) => (
            <div
              key={item.pregunta}
              className="bg-cloud border border-navy-light/20 rounded-md p-4"
            >
              <p className="font-title text-navy text-base mb-2">{item.pregunta}</p>
              <p className="font-body text-sm text-slate text-justify">{item.respuesta}</p>
            </div>
          ))}
        </div>

        <p className="font-body text-sm text-slate text-center mt-8">
          ¿No encontraste lo que buscabas?{' '}
          <BotonContactenos className="text-navy font-medium hover:underline">
            Escríbenos aquí
          </BotonContactenos>
          .
        </p>
      </div>
    </section>
  );
}
