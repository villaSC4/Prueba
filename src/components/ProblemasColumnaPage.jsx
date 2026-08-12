import { motion } from 'framer-motion'
import { padecimientosData } from '../data/spineData'
import SpineMap from './SpineMap'

export default function ProblemasColumnaPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans">


      <div className="relative bg-[#8C4A6E] text-white pt-36 pb-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://spine.pe/wp-content/uploads/2023/06/spine-cuerpo-bg.png"
            alt="Columna Vertebral Fondo"
            className="w-full h-full object-contain object-right-top"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="inline-block bg-white/10 backdrop-blur-md text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest border border-amber-300/30">
            Afecciones Comunes
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-widest uppercase">
            Problemas de la Columna
          </h1>
          <p className="text-sm md:text-base text-slate-100 font-light max-w-2xl mx-auto leading-relaxed">
            Conoce las principales afecciones de la columna vertebral y cómo nuestro equipo especializado puede ayudarte a corregirlas de forma natural.
          </p>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#8C4A6E]">
            Afecciones y Síntomas Tratados
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
            Identifica tus molestias. Abordamos cada problema mecánicamente para liberar la tensión sobre tu sistema nervioso.
          </p>
          <div className="w-12 h-1 bg-secondary mx-auto rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {padecimientosData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-slate-200/50 flex gap-4 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#8C4A6E]/10 flex items-center justify-center text-2xl flex-shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-heading font-extrabold text-[#8C4A6E]">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200">
        <SpineMap />
      </div>

    </div>
  )
}
