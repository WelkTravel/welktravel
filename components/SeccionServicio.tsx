import Image from 'next/image';
import BotonContactenos from './BotonContactenos';
import MiniaturaVideoYoutube from './MiniaturaVideoYoutube';

export type Destino = {
  nombre: string;
  imagen: string;
  descripcion: string;
  youtubeId?: string;
};

export default function SeccionServicio({
  id,
  kicker,
  titulo,
  descripcion,
  destinos,
  ctaTexto,
  fondo = 'white',
}: {
  id: string;
  kicker: string;
  titulo: string;
  descripcion: string;
  destinos: Destino[];
  ctaTexto: string;
  fondo?: 'white' | 'cloud';
}) {
  return (
    <section
      id={id}
      className={`px-6 py-12 scroll-mt-20 ${fondo === 'cloud' ? 'bg-cloud' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-body text-xs text-navy font-medium tracking-[0.2em] mb-2 text-center">
          {kicker}
        </p>
        <h2 className="font-title text-2xl md:text-3xl text-navy font-semibold mb-3 text-center">
          {titulo}
        </h2>
        <p className="font-body text-sm md:text-base text-slate max-w-2xl mx-auto text-center text-justify mb-8">
          {descripcion}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {destinos.map((destino) => (
            <div
              key={destino.nombre}
              className="bg-white rounded-md overflow-hidden border border-navy-light/15 flex flex-col"
            >
              <div className="relative aspect-video">
                {destino.youtubeId ? (
                  <MiniaturaVideoYoutube
                    youtubeId={destino.youtubeId}
                    imagen={destino.imagen}
                    titulo={destino.nombre}
                  />
                ) : (
                  <Image
                    src={destino.imagen}
                    alt={destino.nombre}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="font-title text-navy text-base mb-1">{destino.nombre}</p>
                <p className="font-body text-xs text-slate text-justify flex-1">
                  {destino.descripcion}
                </p>
                <BotonContactenos className="mt-3 w-full text-center bg-gold text-navy text-xs font-body font-medium py-2 rounded hover:bg-gold-dark transition-colors">
                  {ctaTexto}
                </BotonContactenos>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
