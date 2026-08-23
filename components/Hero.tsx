import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-navy py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex flex-col items-center flex-shrink-0 w-48 md:w-64">
          <Image
            src="/isotipo.png"
            alt="Welk Travel"
            width={992}
            height={1058}
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
          <h1 className="font-title text-3xl md:text-4xl font-semibold text-cream mb-3">
            Explora sin límites
          </h1>
          <p className="font-body text-sm md:text-base text-mauve mb-6 max-w-md">
            Vuelos, hoteles, paquetes y experiencias turísticas a la medida de tu
            próxima aventura. Cuéntanos a dónde quieres ir y nosotros nos
            encargamos de todo lo demás.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-gold text-navy text-sm font-body font-medium px-6 py-2.5 rounded hover:bg-gold-dark transition-colors"
          >
            Cotiza tu viaje ahora
          </a>
        </div>
      </div>
    </section>
  );
}
