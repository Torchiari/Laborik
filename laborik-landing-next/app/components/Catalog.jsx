export default function Catalog() {
  return (
    <section id="catalog" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Catálogo</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Ejemplo de productos */}
        {[1,2,3,4,5,6].map((item) => (
          <div key={item} className="bg-gray-800 p-4 rounded-lg text-center">
            <div className="h-48 bg-gray-700 rounded mb-4"></div>
            <h3 className="font-semibold">Producto {item}</h3>
            <p className="text-gray-400 text-sm">Descripción breve del producto.</p>
          </div>
        ))}
      </div>
    </section>
  )
}
