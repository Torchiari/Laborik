export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Contacto</h2>
      <p className="text-gray-300 mb-6">
        ¿Tenés dudas o querés pedir un presupuesto? Escribinos, te responderemos a la brevedad.
      </p>
      <form className="grid gap-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Tu nombre"
          className="p-3 rounded bg-gray-800 text-white border border-gray-700"
        />
        <input
          type="email"
          placeholder="Tu correo"
          className="p-3 rounded bg-gray-800 text-white border border-gray-700"
        />
        <textarea
          placeholder="Tu mensaje"
          className="p-3 rounded bg-gray-800 text-white border border-gray-700"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="bg-pink-500 text-white py-3 rounded hover:bg-pink-600 transition"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  )
}
