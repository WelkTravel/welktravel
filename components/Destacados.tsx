import { createServerClient } from '@/lib/supabase/server';
import PaqueteCard, { Paquete } from './PaqueteCard';

export default async function Destacados() {
  const supabase = createServerClient();

  const { data: paquetes, error } = await supabase
    .from('paquetes_turisticos')
    .select('id, slug, titulo, descripcion, incluye, precio_base_cop, imagen_url, destacado')
    .eq('activo', true)
    .order('destacado', { ascending: false })
    .limit(3);

  if (error) {
    // No tumbamos la página por un error de datos — mostramos el estado vacío
    console.error('Error al traer paquetes destacados:', error.message);
  }

  const lista = (paquetes ?? []) as Paquete[];

  return (
    <section id="planes" className="bg-cream px-6 py-10 scroll-mt-20">
      <p className="font-body text-xs text-navy/60 mb-1 max-w-6xl mx-auto">
        Nuestros Planes
      </p>
      <h2 className="font-title text-2xl text-navy font-semibold mb-4 max-w-6xl mx-auto">
        Ofertas con tarifas de operador mayorista
      </h2>
      {lista.length === 0 ? (
        <p className="font-body text-sm text-navy/50 max-w-6xl mx-auto">
          Todavía no hay paquetes cargados.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {lista.map((paquete) => (
            <PaqueteCard key={paquete.id} paquete={paquete} />
          ))}
        </div>
      )}
    </section>
  );
}
