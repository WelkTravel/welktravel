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
    console.error('Error al traer paquetes destacados:', error.message);
  }

  const lista = (paquetes ?? []) as Paquete[];

  // Si todavía no hay paquetes cargados en Supabase, no mostramos la
  // sección en absoluto (nada de texto de "vacío" visible al usuario final).
  if (lista.length === 0) return null;

  return (
    <section id="planes" className="bg-white px-6 py-10 scroll-mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {lista.map((paquete) => (
          <PaqueteCard key={paquete.id} paquete={paquete} />
        ))}
      </div>
    </section>
  );
}
