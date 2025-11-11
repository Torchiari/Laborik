"use client"

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#F8F5F0] text-[#3E2E32] py-24 px-6 md:px-16 lg:px-28"
    >
      {/* Título */}
      <h2 className="text-4xl font-extrabold text-center mb-6 tracking-tight text-[#6B4A52]">
        Contacto
      </h2>

      {/* Descripción */}
      <p className="text-center text-[#7C6A64] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        ¿Tenés dudas o querés pedir un presupuesto?  
        Completá el formulario y te responderemos a la brevedad.
      </p>

      {/* Formulario */}
      <form className="max-w-lg mx-auto bg-white rounded-2xl shadow-md border border-[#d6c9c2]/50 p-8 md:p-10 space-y-5">
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full p-3 rounded-md border border-[#e0d5cf] bg-[#F9F6F3] text-[#3E2E32] placeholder:text-[#a38f86] focus:outline-none focus:border-[#6B4A52] transition"
        />
        <input
          type="email"
          placeholder="Tu correo"
          className="w-full p-3 rounded-md border border-[#e0d5cf] bg-[#F9F6F3] text-[#3E2E32] placeholder:text-[#a38f86] focus:outline-none focus:border-[#6B4A52] transition"
        />
        <textarea
          placeholder="Tu mensaje"
          rows={4}
          className="w-full p-3 rounded-md border border-[#e0d5cf] bg-[#F9F6F3] text-[#3E2E32] placeholder:text-[#a38f86] focus:outline-none focus:border-[#6B4A52] transition"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#6B4A52] text-white py-3 rounded-md font-semibold hover:bg-[#5a3f46] transition-all duration-300 shadow-md"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  )
}
