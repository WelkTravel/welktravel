import type { Metadata } from 'next';

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
      'Aceptamos pago seguro por los medios que te indicaremos al confirmar tu cotización. Si necesitas facturación especial, cuéntanoslo al momento de cotizar.',
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

export default function PreguntasFrecuentesPage() {
  return (
    <section className="bg-navy px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <p className="font-body text-xs text-gold tracking-[0.2em] mb-2 text-center">
          AYUDA
        </p>
        <h1 className="font-title text-3xl text-cream font-semibold mb-8 text-center">
          Preguntas frecuentes
        </h1>

        <div className="flex flex-col gap-4">
          {preguntas.map((item) => (
            <div
              key={item.pregunta}
              className="bg-navy-mid border border-navy-light rounded-md p-4"
            >
              <p className="font-title text-cream text-base mb-2">{item.pregunta}</p>
              <p className="font-body text-sm text-mauve">{item.respuesta}</p>
            </div>
          ))}
        </div>

        <p className="font-body text-sm text-mauve text-center mt-8">
          ¿No encontraste lo que buscabas?{' '}
          <a href="/#contacto" className="text-gold hover:underline">
            Escríbenos aquí
          </a>
          .
        </p>
      </div>
    </section>
  );
}
