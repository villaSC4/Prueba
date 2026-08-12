import { motion } from 'framer-motion'
import { Users, Cpu, HeartHandshake } from 'lucide-react'

export default function Diferenciadores() {
  const diffs = [
    {
      icon: <Users className="h-7 w-7" />,
      title: 'Profesionales Colegiados',
      description: 'Nuestro equipo está conformado por profesionales altamente capacitados y formados en las mejores universidades del Perú y del mundo. Comprometidos con tu recuperación.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: <Cpu className="h-7 w-7" />,
      title: 'Tecnología Avanzada',
      description: 'Contamos con el Sistema de Descompresión Vertebral computarizado de última generación. Actúa sobre discos y nervios de manera controlada y segura.',
      color: 'from-cyan-400 to-teal-500',
    },
    {
      icon: <HeartHandshake className="h-7 w-7" />,
      title: 'Tratamiento No Invasivo',
      description: 'Terapias 100% libres de dolor, sin cirugías ni fármacos. Diseñamos planes personalizados que se adaptan al ritmo de vida y condición de cada paciente.',
      color: 'from-emerald-400 to-teal-600',
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  }

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-[#F8FAFC] to-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em]">Diferenciadores</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-primary mt-2">
            ¿Por Qué Elegir Spine Clínica?
          </h2>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="text-dark/70 font-light mt-4 text-base sm:text-lg">
            Combinamos experiencia clínica comprobada y tecnología de vanguardia para ofrecerte la mejor alternativa en salud de columna.
          </p>
        </div>

        {/* Grid Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {diffs.map((diff, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon wrapper with custom gradient */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${diff.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6`}>
                  {diff.icon}
                </div>
                
                <h3 className="text-xl font-heading font-extrabold text-primary mb-3">
                  {diff.title}
                </h3>
                
                <p className="text-dark/70 font-light leading-relaxed text-sm sm:text-base">
                  {diff.description}
                </p>
              </div>

              {/* Decorative accent element in card bottom */}
              <div className="w-8 h-1 bg-slate-100 group-hover:bg-secondary transition-colors duration-300 rounded-full mt-6" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
