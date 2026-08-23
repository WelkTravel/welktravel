import { createServerClient } from '@/lib/supabase/server';
import ProductCard, { Producto } from './ProductCard';

export default async function Destacados() {
  const supabase = createServerClient();

  const { data: productos, error } = await supabase
    .from('productos')
    .select('id, nombre, precio, moneda, unidad, imagen_url, destacado')
    .eq('destacado', true)
    .limit(3);

  if (error) {
    // No tumbamos la página por un error de datos — mostramos el estado vacío
    console.error('Error al traer destacados:', error.message);
  }

  const lista = (productos ?? []) as Producto[];

  return (
    <section className="bg-cream px-6 py-10">
      <p className="font-body text-xs text-navy/60 mb-3 max-w-6xl mx-auto">
        Destinos / productos destacados
      </p>
      {lista.length === 0 ? (
        <p className="font-body text-sm text-navy/50 max-w-6xl mx-auto">
          Todavía no hay productos destacados cargados.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
          {lista.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </section>
  );
}
