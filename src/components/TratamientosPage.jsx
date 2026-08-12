import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, X, CheckCircle2 } from 'lucide-react'
import { treatmentsData } from '../data/spineData'

export default function TratamientosPage() {
  const [selectedTreatment, setSelectedTreatment] = useState(null)

  const handleWhatsAppBooking = (title) => {
    const text = encodeURIComponent(`Hola Spine Clínica, deseo recibir información sobre el tratamiento: ${title}.`)
    window.open(`https://wa.me/51986858574?text=${text}`, '_blank')
  }

  return (
    <section className="bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* Page Banner Hero */}
      <div className="relative bg-[#8C4A6E] text-white pt-36 pb-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://spine.pe/wp-content/uploads/2023/06/hero-poster.jpg"
            alt="Tratamientos Fondo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="inline-block bg-white/10 backdrop-blur-md text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest border border-amber-300/30">
            Tecnología Avanzada
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-widest uppercase">
            Nuestros Tratamientos
          </h1>
          <p className="text-sm md:text-base text-slate-100 font-light max-w-2xl mx-auto leading-relaxed">
            Contamos con terapias no invasivas de última generación para la corrección y rehabilitación de la columna vertebral.
          </p>
        </div>
      </div>

      {/* Treatments Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatmentsData.map((treatment) => (
            <motion.div
              key={treatment.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-md border border-slate-200/50 overflow-hidden flex flex-col h-full group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-grow space-y-4">
                <h3 className="text-xl font-heading font-extrabold text-[#8C4A6E] group-hover:text-amber-600 transition-colors">
                  {treatment.title}
                </h3>
                <p className="text-slate-600 text-sm font-light leading-relaxed flex-grow">
                  {treatment.description}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedTreatment(treatment)}
                    className="text-sm font-semibold text-secondary hover:text-primary transition-colors cursor-pointer"
                  >
                    Ver detalles &rarr;
                  </button>
                  <button
                    onClick={() => handleWhatsAppBooking(treatment.title)}
                    className="bg-[#8C4A6E] hover:bg-[#733E5E] text-white font-bold py-2 px-4 rounded-lg text-xs cursor-pointer transition-colors flex items-center gap-1.5"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    Reservar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Detail Popup */}
      <AnimatePresence>
        {selectedTreatment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTreatment(null)}
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full border border-slate-200 relative"
            >
              <button
                onClick={() => setSelectedTreatment(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-video w-full relative">
                <img
                  src={selectedTreatment.image}
                  alt={selectedTreatment.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <span className="text-secondary text-xs font-bold uppercase tracking-wider">
                    Detalles del Tratamiento
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#8C4A6E] mt-1">
                    {selectedTreatment.title}
                  </h2>
                </div>

                <div className="space-y-4 text-slate-600 font-light text-sm sm:text-base leading-relaxed">
                  <p className="font-medium text-slate-800">
                    {selectedTreatment.description}
                  </p>
                  <p>
                    {selectedTreatment.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      handleWhatsAppBooking(selectedTreatment.title)
                      setSelectedTreatment(null)
                    }}
                    className="flex-grow bg-[#8C4A6E] hover:bg-[#733E5E] text-white py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Calendar className="h-4 w-4" />
                    Reservar Consulta por WhatsApp
                  </button>
                  <button
                    onClick={() => setSelectedTreatment(null)}
                    className="border-2 border-slate-200 text-slate-700 hover:bg-slate-50 py-3 px-6 rounded-xl font-bold transition-colors cursor-pointer"
                  >
                    Cerrar
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
