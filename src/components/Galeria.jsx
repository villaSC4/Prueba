import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, Eye } from 'lucide-react'

export default function Galeria() {
  const [selectedImg, setSelectedImg] = useState(null)

  const images = [
    {
      url: 'https://spine.pe/wp-content/uploads/2023/05/clinica-spine.jpg',
      title: 'Instalaciones de Spine Clínica',
      category: 'Nuestra Clínica',
      description: 'Consultorios modernos equipados con tecnología de rehabilitación de columna de clase mundial en Surco, Lima.',
    },
    {
      url: 'https://spine.pe/wp-content/uploads/2023/06/tratamiento-sistema-descompresion-e1717453214507.jpg',
      title: 'Sistema de Descompresión Vertebral Computarizado',
      category: 'Tecnología',
      description: 'El tratamiento estrella de la clínica: descompresión de discos vertebrales de forma mecánica y tracción controlada.',
    },
    {
      url: 'https://spine.pe/wp-content/uploads/2023/06/clinica-spine-tecarterapia.jpeg',
      title: 'Sesión de Tecarterapia Avanzada',
      category: 'Terapia Física',
      description: 'Aplicación de transferencia eléctrica capacitiva y resistiva de alta frecuencia para relajar músculos y regenerar tejidos.',
    },
    {
      url: 'https://spine.pe/wp-content/uploads/2023/06/tratamiento-ajuste-quiropractico.jpg',
      title: 'Ajuste Quiropráctico Profesional',
      category: 'Quiropráctica',
      description: 'Especialista quiropráctico realizando una manipulación vertebral exacta para corregir subluxaciones y liberar la presión nerviosa.',
    },
    {
      url: 'https://spine.pe/wp-content/uploads/2023/06/clinica-spine-magnototerapia.jpg',
      title: 'Magnetoterapia Clínica',
      category: 'Tecnología',
      description: 'Campos electromagnéticos aplicados de forma segura sobre la columna para desinflamar vértebras y acelerar la consolidación ósea.',
    },
    {
      url: 'https://spine.pe/wp-content/uploads/2023/06/clinica-spine-electroterapia.jpg',
      title: 'Electroterapia de Rehabilitación',
      category: 'Terapia Física',
      description: 'Estimulación muscular localizada para aliviar contracturas agudas y bloquear las vías del dolor en la espalda.',
    },
  ]

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em]">Instalaciones y Equipos</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-primary mt-2">
            Nuestra Clínica en Imágenes
          </h2>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="text-dark/70 font-light mt-4 text-base sm:text-lg">
            Conoce nuestras instalaciones de primer nivel, equipos computarizados de descompresión y el equipo de profesionales dedicados a tu salud.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedImg(img)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group relative"
            >
              {/* Photo */}
              <div className="h-64 w-full overflow-hidden relative">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Badge overlay */}
                <span className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-xl bg-primary text-white text-xs font-bold shadow-md">
                  {img.category}
                </span>

                {/* Hover overlay icons */}
                <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="h-6 w-6" />
                  </div>
                </div>
              </div>

              {/* Text Meta Info */}
              <div className="p-6 text-left">
                <h4 className="font-heading font-extrabold text-primary text-base leading-snug group-hover:text-secondary transition-colors duration-300">
                  {img.title}
                </h4>
                <p className="text-xs text-dark/60 font-light mt-2 line-clamp-2">
                  {img.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal (Confined to absolute path overlay) */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer border border-white/15"
              aria-label="Cerrar Imagen"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl border border-white/10 flex flex-col md:flex-row"
            >
              {/* Left Column (Image) */}
              <div className="md:w-3/5 bg-slate-950 flex items-center justify-center max-h-[500px] md:max-h-[600px] overflow-hidden">
                <img 
                  src={selectedImg.url} 
                  alt={selectedImg.title} 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Right Column (Info) */}
              <div className="md:w-2/5 p-8 text-left flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest block">
                    {selectedImg.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-primary leading-tight">
                    {selectedImg.title}
                  </h3>
                  <div className="w-8 h-1 bg-secondary rounded-full" />
                  <p className="text-sm text-dark/70 font-light leading-relaxed pt-2">
                    {selectedImg.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex flex-col gap-3">
                  <button
                    onClick={() => {
                      const msg = `Hola Spine Clínica, me gustaría agendar una cita tras ver la foto de: ${selectedImg.title}.`
                      window.open(`https://wa.me/51900000000?text=${encodeURIComponent(msg)}`, '_blank')
                    }}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all cursor-pointer text-sm text-center"
                  >
                    Preguntar por este Servicio
                  </button>
                  <button
                    onClick={() => setSelectedImg(null)}
                    className="w-full border border-slate-200 hover:bg-slate-50 text-slate-500 font-semibold py-3 px-6 rounded-xl transition-all cursor-pointer text-xs text-center"
                  >
                    Volver a la Galería
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
