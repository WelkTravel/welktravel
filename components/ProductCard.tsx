import Image from 'next/image';

export type Producto = {
  id: string;
  nombre: string;
  precio: number;
  moneda: string;
  unidad: string;
  imagen_url: string | null;
  destacado: boolean;
};

function formatearPrecio(precio: number, moneda: string) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: moneda,
    maximumFractionDigits: 0,
  }).format(precio);
}

export default function ProductCard({ producto }: { producto: Producto }) {
  return (
    <div
      className={`bg-white rounded-md overflow-hidden border ${
        producto.destacado ? 'border-2 border-gold' : 'border-navy-light'
      }`}
    >
      <div className="relative h-28 bg-gray-100">
        {producto.imagen_url ? (
          <Image
            src={producto.imagen_url}
            alt={producto.nombre}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs font-body">
            Sin imagen
          </div>
        )}
      </div>
      <div className="p-2">
        <p className="font-body text-sm text-navy">{producto.nombre}</p>
        <p className="font-body text-xs text-gold-dark font-medium mt-1">
          {formatearPrecio(producto.precio, producto.moneda)} {producto.moneda} · {producto.unidad}
        </p>
      </div>
    </div>
  );
}
