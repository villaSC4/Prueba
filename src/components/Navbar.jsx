import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, PhoneCall } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros', isPage: true },
    { name: 'Tratamientos', href: '/#tratamientos' },
    { name: 'Dolor y Columna', href: '/#columna-interactiva' },
    { name: 'Opiniones', href: '/#opiniones' },
    { name: 'Contacto', href: '/#contacto' },
  ]

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent('Hola Spine Clínica, me gustaría agendar una cita de evaluación para mi columna.')
    window.open(`https://wa.me/51900000000?text=${message}`, '_blank')
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md py-2.5 shadow-md border-b border-slate-200/50'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://spine.pe/wp-content/uploads/2023/06/logo-color-white-bg.svg"
                alt="Spine Clínica"
                className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'} w-auto object-contain`}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.isPage ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-semibold transition-colors duration-200 text-sm ${isScrolled
                      ? 'text-slate-800 hover:text-primary'
                      : 'text-white hover:text-secondary'
                    }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-semibold transition-colors duration-200 text-sm ${isScrolled
                      ? 'text-slate-800 hover:text-primary'
                      : 'text-white hover:text-secondary'
                    }`}
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <button
              onClick={handleWhatsAppBooking}
              className={`font-bold px-6 py-2.5 rounded-lg text-sm transition-all duration-300 cursor-pointer ${isScrolled
                  ? 'bg-primary text-white hover:bg-primary/95 shadow-md shadow-primary/10'
                  : 'bg-white/10 text-white border-2 border-white hover:bg-white hover:text-primary'
                }`}
            >
              Agendar Cita
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg cursor-pointer ${isScrolled ? 'text-primary' : 'text-white'
                }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-200/50 py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) =>
              link.isPage ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-800 hover:text-primary font-semibold transition-colors py-2 text-base text-left"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-800 hover:text-primary font-semibold transition-colors py-2 text-base text-left"
                >
                  {link.name}
                </a>
              )
            )}
            <button
              onClick={() => {
                setIsOpen(false)
                handleWhatsAppBooking()
              }}
              className="w-full bg-primary text-white py-3 px-4 rounded-lg font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <PhoneCall className="h-4 w-4" />
              Agendar Cita
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}