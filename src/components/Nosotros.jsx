import { useState } from 'react'
import { motion as m, AnimatePresence as Ap } from 'framer-motion'
import { Play, Calendar, HelpCircle, X } from 'lucide-react'

export default function Nosotros() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent('Hola Spine Clínica, me gustaría solicitar información sobre los tratamientos.')
    window.open(`https://wa.me/51900000000?text=${message}`, '_blank')
  }

  return (
    <section id="nosotros" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Left Column (Text content) */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left space-y-6"
          >
            
            {/* Header decoration */}
            <div className="flex items-center gap-4">
              <img 
                src="https://spine.pe/wp-content/uploads/2023/05/icon-titulo.png" 
                alt="Columna Vertebral" 
                className="h-12 w-auto object-contain" 
              />
              <div>
                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-primary leading-tight">
                  Bienvenidos a Clínica Spine
                </h2>
                <p className="text-sm sm:text-base text-secondary font-bold font-heading mt-1 uppercase tracking-wide">
                  Especialistas en la prevención y corrección de problemas de la columna vertebral
                </p>
              </div>
            </div>

            <div className="w-12 h-1 bg-secondary rounded-full mt-3" />

            {/* Paragraphs body */}
            <div className="space-y-4 text-slate-600 font-light text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="font-semibold text-primary">CLÍNICA SPINE</strong>, somos un centro especializado en columna vertebral donde la ciencia, la tecnología y la experiencia internacional se unen para transformar vidas.
              </p>
              <p>
                Nuestros especialistas se formaron en las mejores universidades del Perú y el mundo; participan constantemente en seminarios internacionales, trayendo al Perú los avances más modernos en el tratamiento no quirúrgico de la columna.
              </p>
              <p className="border-l-4 border-primary pl-4 py-2 bg-slate-50 text-primary font-medium italic rounded-r-xl">
                "En SPINE, atendemos a pacientes de todas las edades; desde niños hasta adultos mayores, con un mismo propósito: Restaurar tu salud, Devolver tu movilidad y Ayudarte a vivir sin dolor."
              </p>
              <p>
                Porque en SPINE, no solo tratamos la columna. Reconectamos tu cuerpo con su verdadero potencial.
              </p>
              <p>
                Te ofrecemos un trato individualizado y profesional que conecta contigo; te ayudamos a lograr la calidad de vida que mereces sin importar la edad. Nos enfocamos en tratamientos integrales y personalizados, contando con la más alta tecnología avanzada para tratamientos de la columna vertebral sin medicamentos ni cirugías; porque tu bienestar es nuestra prioridad.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#tratamientos"
                className="inline-flex items-center justify-center bg-primary hover:bg-[#733E5E] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/10 transition-all duration-300 text-sm hover:scale-105 active:scale-95"
              >
                Nuestros Tratamientos
              </a>
              <button
                onClick={handleWhatsAppBooking}
                className="inline-flex items-center justify-center border-2 border-slate-700 text-slate-700 hover:bg-slate-50 font-bold px-8 py-4 rounded-xl transition-all duration-300 text-sm cursor-pointer hover:scale-105 active:scale-95"
              >
                Consúltanos por WhatsApp
              </button>
            </div>

          </m.div>

          {/* Right Column (Doctor Photo & Video Link) */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            
            {/* Interactive Image Frame */}
            <div 
              onClick={() => setIsVideoOpen(true)}
              className="relative w-full max-w-[440px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 shadow-slate-300/40 group cursor-pointer card-hover-move"
            >
              {/* Image */}
              <img 
                src="https://spine.pe/wp-content/uploads/2023/05/clinica-spine.jpg" 
                alt="Especialista de Spine Clínica" 
                className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-all duration-500" 
              />

              {/* Dimmed Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-all duration-300" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <m.div 
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl border-4 border-white/90 cursor-pointer"
                >
                  <Play className="h-6 w-6 fill-white text-white ml-1" />
                </m.div>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-primary/95 text-white py-2.5 px-4 rounded-xl text-xs font-bold text-center border border-white/10 uppercase tracking-wider">
                Reproducir Video de Presentación
              </div>
            </div>

          </m.div>

        </div>

      </div>

      {/* Video Modal Popup */}
      <Ap>
        {isVideoOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4"
          >
            {/* Close button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer border border-white/10"
              aria-label="Cerrar Video"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Video container */}
            <m.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
              className="aspect-video w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-black"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/cSiPkPwFpj0?autoplay=1"
                title="Clínica Spine - Presentación Médica"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </m.div>
          </m.div>
        )}
      </Ap>
    </section>
  )
}
