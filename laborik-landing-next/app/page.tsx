import Hero from "./components/Hero"
import Catalog from "./components/Catalog"
import Reviews from "./components/Reviews"
import Contact from "./components/Contact"

export default function HomePage() {
  return (
    <main className="pt-20"> {/* pt-20 para dejar espacio bajo la navbar fija */}
      <Hero />
      <Catalog />
      <Reviews />
      <Contact />
    </main>
  )
}
