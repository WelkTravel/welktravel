// Bloque 3 del Home — "Sello de Autoridad Local".
//
// NOTA IMPORTANTE: el texto original propuesto nombraba explícitamente a
// "Ruta Maya Travel SAS" como respaldo institucional. Hasta que exista un
// convenio/contrato formal firmado con esa empresa, este componente usa un
// mensaje genérico para evitar un riesgo de publicidad engañosa. En cuanto
// el convenio esté firmado, reemplaza el texto de `mensaje` por la versión
// con el nombre del operador mayorista.
const mensaje =
  'Viaja con total seguridad. Welk Travel trabaja con operadores mayoristas internacionales de trayectoria comprobada para ofrecerte tarifas preferenciales y respaldo logístico en todo tu viaje.';

const marcasAliadas = ['Amresorts', 'Palace Resorts', 'Iberostar'];

export default function SelloAutoridad() {
  return (
    <section id="respaldo" className="bg-navy-mid px-6 py-10 scroll-mt-20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-sm md:text-base text-cream leading-relaxed">
          {mensaje}
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {marcasAliadas.map((marca) => (
            <span
              key={marca}
              className="font-title text-mauve text-sm tracking-wide opacity-80"
            >
              {marca}
            </span>
          ))}
        </div>
        <p className="font-body text-[11px] text-mauve/70 mt-4">
          * Nombres de marca a modo referencial — actualizar con los aliados
          reales confirmados antes de publicar.
        </p>
      </div>
    </section>
  );
}
