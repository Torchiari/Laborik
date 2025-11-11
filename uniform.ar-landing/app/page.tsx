import Hero from "./components/Hero"
import Catalog from "./components/Catalog"
// import Reviews from "./components/Reviews"
import Contact from "./components/Contact"

export default function HomePage() {
  return (
    <main className="pt-20">
    
      <Hero />
      <Catalog />
      {/* <Reviews /> */}
      <Contact />
    </main>
  )
}
