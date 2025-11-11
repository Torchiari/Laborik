"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("hero")
  const [darkMode, setDarkMode] = useState(false)

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Aplicar modo oscuro al html
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")
  }, [darkMode])

  const handleSetActive = (section: string) => {
    setActive(section)
    setOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#efeef1]/95 dark:bg-[#261b33]/90 py-2 shadow-md"
          : "bg-[#efeef1] dark:bg-[#261b33] py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between text-[#6B4A52] dark:text-[#DCC7FF] font-medium">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2"
          onClick={() => handleSetActive("hero")}
        >
          {/* Imagen clara */}
          <Image
            src="/navbarblanco.png"
            alt="Logo Uniformar claro"
            width={scrolled ? 100 : 180}
            height={scrolled ? 100 : 180}
            className="transition-all duration-300 cursor-pointer dark:hidden"
          />

          {/* Imagen oscura */}
          <Image
            src="/footer.png"
            alt="Logo Uniformar oscuro"
            width={scrolled ? 100 : 180}
            height={scrolled ? 100 : 180}
            className="transition-all duration-300 cursor-pointer hidden dark:block"
          />
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8 text-lg">
          {[
            { id: "catalog", label: "Catálogo" },
            { id: "contact", label: "Contacto" },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => handleSetActive(item.id)}
                className={`relative transition-all duration-300 hover:text-[#6B4A52]/80 dark:hover:text-violet-300 ${
                  active === item.id
                    ? "text-[#6B4A52] dark:text-violet-200 font-semibold after:w-full"
                    : "text-[#6B4A52]/90 dark:text-violet-300 after:w-0"
                } after:content-[''] after:absolute after:left-0 after:-bottom-1 
                after:h-[2px] after:bg-[#6B4A52] dark:after:bg-violet-400 after:transition-all hover:after:w-full`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón modo oscuro */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 text-2xl transition-transform hover:scale-110"
          aria-label="Cambiar modo"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Botón móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-[#6B4A52] dark:text-violet-200 focus:outline-none"
        >
          ☰
        </button>

        {/* Menú móvil */}
        {open && (
          <ul className="absolute top-full left-0 w-full bg-[#F8F5F0]/95 dark:bg-[#1a1221]/95 flex flex-col items-center py-4 gap-4 md:hidden text-lg font-semibold text-[#6B4A52] dark:text-violet-200">
            {[
              { id: "catalog", label: "Catálogo" },
              { id: "contact", label: "Contacto" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => handleSetActive(item.id)}
                  className={`relative transition-all duration-200 hover:text-[#6B4A52]/80 dark:hover:text-violet-300 ${
                    active === item.id
                      ? "text-[#6B4A52] dark:text-violet-200 font-semibold after:w-full"
                      : "text-[#6B4A52]/90 dark:text-violet-300 after:w-0"
                  } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#6B4A52] dark:after:bg-violet-400 after:transition-all`}
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
