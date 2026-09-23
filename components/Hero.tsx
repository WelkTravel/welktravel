import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex flex-col items-center flex-shrink-0 w-48 md:w-64">
          <Image
            src="/isotipo.png"
            alt="Welk Travel"
            width={900}
            height={643}
            className="w-full h-auto"
            priority
          />
          <span className="font-title text-navy text-2xl md:text-3xl font-semibold tracking-wide mt-2">
            WELK TRAVEL
          </span>
          <span className="font-body text-navy text-xs tracking-[0.2em] mt-1">
            EXPLORA SIN LÍMITES
          </span>
        </div>

        <div className="text-center md:text-left">
          <h1 className="font-title text-2xl md:text-4xl font-semibold text-navy mb-3 leading-tight">
            Viajes internacionales a la medida desde Colombia, con tarifas de
            operador mayorista.
          </h1>
          <p className="font-body text-sm md:text-base text-slate mb-6 max-w-md text-justify">
            Diseñamos tu itinerario ideal sin intermediarios ocultos. Disfruta
            de paquetes, cruceros y circuitos por el Caribe y el mundo entero
            con respaldo logístico de operadores mayoristas de trayectoria
            comprobada.
          </p>
        </div>
      </div>
    </section>
  );
}
