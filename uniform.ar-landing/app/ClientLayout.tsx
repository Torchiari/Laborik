"use client"

import { ThemeProvider } from "next-themes"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="transition-colors duration-500 bg-[#F8F5F0] dark:bg-[#1a1221] text-[#6B4A52] dark:text-[#DCC7FF] min-h-screen">
        <Navbar />
        <main className="transition-colors duration-500">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
