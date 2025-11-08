export default function Reviews() {
  return (
    <section id="reviews" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Reseñas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1,2,3].map((item) => (
          <div key={item} className="bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-300 mb-4">
              “Excelente calidad y atención al cliente. ¡Volveré a comprar!”
            </p>
            <p className="font-semibold text-pink-400">Cliente {item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
