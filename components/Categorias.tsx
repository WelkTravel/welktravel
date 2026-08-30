const categorias = [
  { nombre: 'Vuelos', href: '/vuelos' },
  { nombre: 'Hoteles', href: '/hoteles' },
  { nombre: 'Paquetes', href: '/paquetes' },
  { nombre: 'Cruceros', href: '/cruceros' },
  { nombre: 'Circuitos', href: '/circuitos' },
];

export default function Categorias() {
  return (
    <section className="bg-white px-6 pb-10">
      <p className="font-body text-xs text-navy font-medium mb-3 max-w-6xl mx-auto">Categorías</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
        {categorias.map((cat) => (
          <a
            key={cat.nombre}
            href={cat.href}
            className="bg-cloud rounded-md py-4 text-center min-h-[44px] flex items-center justify-center hover:border-navy border border-transparent transition-colors"
          >
            <span className="font-body text-sm text-navy">{cat.nombre}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
