import Image from 'next/image';

export type Paquete = {
  id: string;
  slug: string;
  titulo: string;
  descripcion: string | null;
  incluye: string[];
  precio_base_cop: number | null;
  imagen_url: string | null;
  destacado: boolean;
};

function formatearPrecio(precio: number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(precio);
}

export default function PaqueteCard({ paquete }: { paquete: Paquete }) {
  return (
    <div
      className={`bg-white rounded-md overflow-hidden border flex flex-col ${
        paquete.destacado ? 'border-2 border-gold' : 'border-navy-light'
      }`}
    >
      <div className="relative h-40 bg-gray-100">
        {paquete.imagen_url ? (
          <Image
            src={paquete.imagen_url}
            alt={paquete.titulo}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs font-body">
            Sin imagen
          </div>
        )}
      </div>
      <div className="p-3 flex flex-col flex-1">
        <p className="font-title text-base text-navy">{paquete.titulo}</p>
        {paquete.descripcion && (
          <p className="font-body text-xs text-navy/60 mt-1">{paquete.descripcion}</p>
        )}

        {paquete.incluye.length > 0 && (
          <ul className="mt-2 flex flex-col gap-0.5">
            {paquete.incluye.map((item) => (
              <li key={item} className="font-body text-xs text-navy/70 flex items-center gap-1.5">
                <span className="text-gold-dark">✓</span> {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-3">
          {paquete.precio_base_cop != null && (
            <p className="font-body text-sm text-gold-dark font-medium">
              Desde {formatearPrecio(paquete.precio_base_cop)} COP
            </p>
          )}
          <a
            href={`https://wa.me/573001234567?text=${encodeURIComponent(
              `Hola, quiero consultar la tarifa de "${paquete.titulo}"`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 w-full text-center bg-navy text-cream text-xs font-body font-medium py-2 rounded hover:bg-navy-light transition-colors"
          >
            Consultar esta tarifa
          </a>
        </div>
      </div>
    </div>
  );
}
