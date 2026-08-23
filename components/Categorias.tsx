const categorias = [
  { nombre: 'Vuelos', href: '/vuelos' },
  { nombre: 'Hoteles', href: '/hoteles' },
  { nombre: 'Paquetes', href: '/paquetes' },
];

export default function Categorias() {
  return (
    <section className="bg-navy px-6 pb-10">
      <p className="font-body text-xs text-mauve mb-3 max-w-6xl mx-auto">Categorías</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-6xl mx-auto">
        {categorias.map((cat) => (
          <a
            key={cat.nombre}
            href={cat.href}
            className="bg-navy-mid rounded-md py-4 text-center min-h-[44px] flex items-center justify-center hover:border-gold border border-transparent transition-colors"
          >
            <span className="font-body text-sm text-cream">{cat.nombre}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
