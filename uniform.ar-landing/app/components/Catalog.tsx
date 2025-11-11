"use client"

export default function Catalog() {
  return (
    <section
      id="catalog"
      className="bg-[#F8F5F0] text-[#3E2E32] py-24 px-6 md:px-16 lg:px-28"
    >
      {/* Título */}
      <h2 className="text-4xl font-extrabold text-center mb-14 tracking-tight text-[#6B4A52]">
        Catálogo
      </h2>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#d6c9c2]/50 hover:-translate-y-1"
          >
            {/* Imagen del producto */}
            <div className="h-52 bg-[#EDE9E6] rounded-t-2xl flex items-center justify-center">
              <span className="text-[#b1988c] font-medium">Imagen {item}</span>
            </div>

            {/* Info del producto */}
            <div className="p-6 text-center">
              <h3 className="font-semibold text-lg text-[#6B4A52] mb-2">
                Producto {item}
              </h3>
              <p className="text-[#7C6A64] text-sm leading-relaxed">
                Descripción breve del producto o categoría destacada.
              </p>
              <button className="mt-5 bg-[#6B4A52] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#5a3f46] transition-all duration-300">
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
