import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import type { ReactNode } from "react"
import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ["latin"], weight: ["400","200", "700"] })

export const metadata = {
  title: "Laborik",
  description: "Landing page de la tienda con catálogo, reseñas y contacto.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={`${poppins.className} bg-[#0b1220] text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
