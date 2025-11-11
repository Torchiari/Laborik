"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("hero")

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  const handleSetActive = (section: string) => {
    setActive(section)
    setOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#efeef1]/95 dark:bg-[#3a0015]/90 py-2 shadow-md" : "bg-[#efeef1] dark:bg-[#3a0015] py-4"}`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between text-[#6B4A52] dark:text-[#F3D9DC] font-medium transition-colors duration-500">
        
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2" onClick={() => handleSetActive("hero")}>
          <Image src="/navbarblanco.png" alt="Logo claro" width={scrolled ? 100 : 180} height={scrolled ? 100 : 180} className="dark:hidden" />
          <Image src="/footer.png" alt="Logo oscuro" width={scrolled ? 100 : 180} height={scrolled ? 100 : 180} className="hidden dark:block" />
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8 text-lg">
          {[
            { id: "catalog", label: "Catálogo" },
            { id: "contact", label: "Contacto" },
          ].map(item => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={() => handleSetActive(item.id)}
                 className={`relative transition-all duration-300 hover:text-[#4A2E35]/80 dark:hover:text-[#F3D9DC]/80 ${active === item.id ? "text-[#6B4A52] dark:text-[#F3D9DC] font-semibold after:w-full" : "text-[#6B4A52]/90 dark:text-[#F3D9DC]/70 after:w-0"} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#6B4A52] dark:after:bg-[#F3D9DC] after:transition-all hover:after:w-full`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón dark mode */}
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="ml-4 text-2xl transition-transform hover:scale-110">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        {/* Botón menú móvil */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl transition-colors duration-500">
          ☰
        </button>

        {/* Menú móvil */}
        {open && (
          <ul className="absolute top-full left-0 w-full bg-[#F8F5F0]/95 dark:bg-[#2a0010]/95 flex flex-col items-center py-4 gap-4 md:hidden text-lg font-semibold text-[#6B4A52] dark:text-[#F3D9DC] transition-colors duration-500">
            {[
              { id: "catalog", label: "Catálogo" },
              { id: "contact", label: "Contacto" },
            ].map(item => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={() => handleSetActive(item.id)}
                   className={`relative transition-all duration-300 hover:text-[#4A2E35]/80 dark:hover:text-[#F3D9DC]/80 ${active === item.id ? "text-[#6B4A52] dark:text-[#F3D9DC] font-semibold after:w-full" : "text-[#6B4A52]/90 dark:text-[#F3D9DC]/70 after:w-0"} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#6B4A52] dark:after:bg-[#F3D9DC] after:transition-all`}>
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
