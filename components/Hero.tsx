import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-navy py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex flex-col items-center flex-shrink-0 w-48 md:w-64">
          <Image
            src="/isotipo.png"
            alt="Welk Travel"
            width={500}
            height={477}
            className="w-full h-auto"
            priority
          />
          <span className="font-title text-cream text-2xl md:text-3xl font-semibold tracking-wide mt-2">
            WELK TRAVEL
          </span>
          <span className="font-body text-gold text-xs tracking-[0.2em] mt-1">
            EXPLORA SIN LÍMITES
          </span>
        </div>

        <div className="text-center md:text-left">
          <h1 className="font-title text-2xl md:text-4xl font-semibold text-cream mb-3 leading-tight">
            Viajes internacionales a la medida desde Colombia, con tarifas de
            operador mayorista.
          </h1>
          <p className="font-body text-sm md:text-base text-mauve mb-6 max-w-md">
            Diseñamos tu itinerario ideal sin intermediarios ocultos. Disfruta
            del Caribe y el mundo entero con respaldo logístico de operadores
            mayoristas de trayectoria comprobada.
          </p>
          <a
            href="https://wa.me/573001234567?text=Hola%20Welk%20Travel%2C%20quiero%20iniciar%20una%20cotizaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-navy text-sm font-body font-medium px-6 py-3 rounded hover:bg-gold-dark transition-colors"
          >
            Iniciar cotización en vivo por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
