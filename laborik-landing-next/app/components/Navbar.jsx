"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSetActive = (section) => {
    setActive(section)
    setOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 py-2 shadow-lg" : "bg-black py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between text-white font-semibold">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2" onClick={() => handleSetActive("hero")}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={scrolled ? 40 : 55}
            height={scrolled ? 40 : 55}
            className="rounded-full transition-all duration-300 cursor-pointer"
          />
          <span className="text-xl tracking-wide">LABORIK</span>
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8 text-lg">
          {[
            { id: "catalog", label: "Catálogo" },
            { id: "reviews", label: "Reseñas" },
            { id: "contact", label: "Contacto" },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => handleSetActive(item.id)}
                className={`relative transition-all duration-200 hover:text-[#ff7b00] ${
                    active === item.id ? "text-[#ff7b00]" : "text-white"
                } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0  after:bg-[#ff7b00] hover:after:w-full after:transition-all ${
                  active === item.id ? "after:w-full" : "after:w-0"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl focus:outline-none"
        >
          ☰
        </button>

        {/* Menú móvil */}
        {open && (
          <ul className="absolute top-full left-0 w-full bg-black/95 flex flex-col items-center py-4 gap-4 md:hidden text-lg font-semibold">
            {[
              { id: "catalog", label: "Catálogo" },
              { id: "reviews", label: "Reseñas" },
              { id: "contact", label: "Contacto" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => handleSetActive(item.id)}
                  className={`hover:text-[#ff7b00] ${
                    active === item.id ? "text-[#ff7b00]" : "text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}