import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BannerUrgencia from './components/BannerUrgencia'
import Nosotros from './components/Nosotros'
import Nosotros1 from './components/Nosotros1'
import Diferenciadores from './components/Diferenciadores'
import SpineMap from './components/SpineMap'
import Tratamientos from './components/Tratamientos'
import Galeria from './components/Galeria'
import Padecimientos from './components/Padecimientos'
import Testimonios from './components/Testimonios'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import WhatsAppCTA from './components/WhatsAppCTA'

// Import route page components
import TratamientosPage from './components/TratamientosPage'
import ProblemasColumnaPage from './components/ProblemasColumnaPage'
import BlogPage from './components/BlogPage'
import ContactoPage from './components/ContactoPage'

// Vista 1: Página Principal (Home)
function Home() {
  return (
    <>
      <Hero />
      <BannerUrgencia />
      <Nosotros />
      <Diferenciadores />
      <SpineMap />
      <Tratamientos />
      <Galeria />
      <Padecimientos />
      <Testimonios />
      <Contacto />
    </>
  )
}

import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-dark overflow-x-hidden antialiased selection:bg-secondary/30 selection:text-primary">
      {/* Scroll restoration */}
      <ScrollToTop />

      {/* El Navbar y Footer se mantienen visibles en todas las páginas */}
      <Navbar />

      <main className="flex-grow">
        <Routes>
          {/* Ruta principal del sitio */}
          <Route path="/" element={<Home />} />

          {/* Páginas independientes */}
          <Route path="/nosotros" element={<Nosotros1 />} />
          <Route path="/tratamientos" element={<TratamientosPage />} />
          <Route path="/problemas-columna" element={<ProblemasColumnaPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppCTA />
    </div>
  )
}

export default App