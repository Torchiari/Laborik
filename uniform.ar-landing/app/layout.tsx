import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import type { ReactNode } from "react"
import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ["latin"], weight: ["200","400","700"] })

export const metadata = {
  title: "UNIFORM.AR",
  description: "Indumentaria de trabajo y uniformes.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${poppins.className} bg-[#F8F5F0] text-[#6B4A52] 
        dark:bg-[#1a1221] dark:text-[#DCC7FF] transition-colors duration-500`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
