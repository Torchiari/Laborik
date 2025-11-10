import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import type { ReactNode } from "react"
import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ["latin"], weight: ["400","200", "700"] })

export const metadata = {
  title: "UNIFORM.AR",
  description: "Indumentaria de trabajo y uniformes.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={`${poppins.className} bg-[#F8F5F0] text-[#6B4A52]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
