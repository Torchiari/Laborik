import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata = {
  title: "UNIFORM.AR",
  description: "Indumentaria de trabajo y uniformes.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

