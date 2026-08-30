import { createServerClient } from '@/lib/supabase/server';

type Testimonio = {
  id: string;
  nombre: string;
  texto: string;
};

const testimoniosEjemplo: Testimonio[] = [
  { id: 'demo-1', texto: 'Excelente atención, todo salió como lo planeamos.', nombre: 'María' },
  { id: 'demo-2', texto: 'El paquete superó nuestras expectativas.', nombre: 'Juan' },
];

export default async function Testimonios() {
  const supabase = createServerClient();

  const { data, error } = await supabase
    .from('testimonios')
    .select('id, nombre, texto')
    .eq('publicado', true)
    .order('created_at', { ascending: false })
    .limit(4);

  if (error) {
    console.error('Error al traer testimonios:', error.message);
  }

  // Si todavía no hay testimonios reales cargados en Supabase, mostramos los
  // de ejemplo para que la sección nunca se vea vacía. En cuanto carguen
  // testimonios reales en la tabla `testimonios`, estos reemplazan a los de ejemplo.
  const lista = data && data.length > 0 ? data : testimoniosEjemplo;

  return (
    <section className="bg-white px-6 py-10">
      <p className="font-body text-xs text-navy font-medium mb-3 max-w-6xl mx-auto">
        Testimonios de clientes
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-6xl mx-auto">
        {lista.map((t) => (
          <div
            key={t.id}
            className="bg-white border border-cloud rounded-md p-3"
          >
            <p className="font-body text-sm text-navy text-justify">
              &ldquo;{t.texto}&rdquo; — {t.nombre}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
