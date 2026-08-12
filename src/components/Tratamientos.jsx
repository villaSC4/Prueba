import { motion } from 'framer-motion'
import { Cpu, Magnet, Zap, Activity, BatteryCharging, Dumbbell, ArrowUpRight, Play } from 'lucide-react'

export default function Tratamientos() {
  const treatments = [
    {
      image: 'https://spine.pe/wp-content/uploads/2023/06/tratamiento-sistema-descompresion-e1717453214507.jpg',
      icon: <Cpu className="h-5 w-5" />,
      title: 'Sistema de Descompresión Vertebral',
      description: 'Terapia computarizada de alta tecnología diseñada para aliviar la presión sobre discos intervertebrales y raíces nerviosas. Ideal para hernias y ciática.',
      whatsappMsg: 'Hola Spine Clínica, me interesa el tratamiento de Sistema de Descompresión Vertebral Computarizada.',
    },
    {
      image: 'https://spine.pe/wp-content/uploads/2023/06/clinica-spine-magnototerapia.jpg',
      icon: <Magnet className="h-5 w-5" />,
      title: 'Magnetoterapia',
      description: 'Tratamiento no invasivo mediante campos magnéticos de baja y alta frecuencia que acelera la regeneración del tejido óseo y alivia procesos inflamatorios del aparato músculo-esquelético.',
      whatsappMsg: 'Hola Spine Clínica, me gustaría solicitar información sobre las sesiones de Magnetoterapia.',
    },
    {
      image: 'https://spine.pe/wp-content/uploads/2023/06/clinica-spine-tecarterapia.jpeg',
      icon: <Zap className="h-5 w-5" />,
      title: 'Tecarterapia (Fisioterapia Avanzada)',
      description: 'Estimulación de la energía celular del propio tejido mediante corrientes de alta frecuencia. Reduce drásticamente el dolor y acelera la cicatrización biológica.',
      whatsappMsg: 'Hola Spine Clínica, deseo información sobre la Tecarterapia para rehabilitación.',
    },
    {
      image: 'https://spine.pe/wp-content/uploads/2023/06/tratamiento-ajuste-quiropractico.jpg',
      icon: <Activity className="h-5 w-5" />,
      title: 'Ajuste Quiropráctico Profesional',
      description: 'Manipulación vertebral precisa para alinear las vértebras desplazadas, liberando la presión en el sistema nervioso central y optimizando la función corporal integral.',
      whatsappMsg: 'Hola Spine Clínica, quiero agendar una sesión de Ajuste Quiropráctico.',
    },
    {
      image: 'https://spine.pe/wp-content/uploads/2023/06/clinica-spine-electroterapia.jpg',
      icon: <BatteryCharging className="h-5 w-5" />,
      title: 'Electroterapia Avanzada',
      description: 'Aplicación de micro-corrientes eléctricas terapéuticas para bloquear señales de dolor, estimular la circulación local y recuperar lesiones musculares rebeldes.',
      whatsappMsg: 'Hola Spine Clínica, me interesa conocer más sobre la Electroterapia para dolor muscular.',
    },
    {
      image: 'https://spine.pe/wp-content/uploads/2025/10/estiramientos-ejercicio-2.jpg',
      icon: <Dumbbell className="h-5 w-5" />,
      title: 'Estiramientos y Ejercicios Terapéuticos',
      description: 'Programas de acondicionamiento físico clínico guiados por especialistas para corregir malos hábitos posturales, fortalecer la faja lumbar y estabilizar la columna.',
      whatsappMsg: 'Hola Spine Clínica, me gustaría información sobre los planes de Ejercicios Terapéuticos y corrección postural.',
    },
  ]

  const handleWhatsAppInquiry = (msg) => {
    window.open(`https://wa.me/51900000000?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 14 },
    },
  }

  return (
    <section id="tratamientos" className="py-20 bg-white relative">
      {/* Decorative shapes */}
      <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em]">Especialidades</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-primary mt-2">
            Tratamientos de Alta Tecnología
          </h2>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="text-dark/70 font-light mt-4 text-base sm:text-lg">
            Ofrecemos terapias modernas combinadas para un abordaje integral del dolor y la rehabilitación física de tu columna.
          </p>
        </div>

        {/* Grid layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {treatments.map((treatment, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="glass-panel rounded-3xl border border-slate-100 hover:border-secondary/20 shadow-xl shadow-slate-100/40 hover:shadow-2xl hover:shadow-secondary/5 flex flex-col justify-between overflow-hidden transition-all duration-300 group"
            >
              <div>
                {/* Treatment Image header */}
                <div className="h-48 w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity duration-300 z-10" />
                  <img 
                    src={treatment.image} 
                    alt={treatment.title} 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute bottom-4 left-4 z-20 w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center shadow-lg border border-slate-100">
                    {treatment.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-left">
                  <h3 className="font-heading font-extrabold text-primary text-lg leading-snug mb-3 group-hover:text-secondary transition-colors duration-300">
                    {treatment.title}
                  </h3>
                  <p className="text-dark/70 font-light text-sm leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 mt-auto">
                <button
                  onClick={() => handleWhatsAppInquiry(treatment.whatsappMsg)}
                  className="w-full py-3 px-4 rounded-xl border border-slate-200 group-hover:border-secondary group-hover:bg-secondary group-hover:text-white text-primary text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Consultar Tratamiento</span>
                  <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dedicated Video Demonstration Block */}
        <div className="mt-20 glass-panel rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-xl text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold">
                <Play className="h-3 w-3 fill-secondary text-secondary" />
                <span>Video Demostrativo</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-primary leading-tight">
                ¿Cómo funciona la Descompresión Vertebral?
              </h3>
              <p className="text-dark/70 font-light text-sm sm:text-base leading-relaxed">
                Descubre en este video cómo nuestro equipo de especialistas utiliza el sistema computarizado de descompresión vertebral para tratar hernias discales y dolores lumbares de forma segura, precisa y libre de dolor.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => handleWhatsAppInquiry('Hola Spine Clínica, vi el video de Descompresión Vertebral y quiero agendar una evaluación.')}
                  className="bg-primary text-white hover:bg-primary/95 font-bold px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer text-sm"
                >
                  Agendar Evaluación de Columna
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              {/* Responsive 16:9 Video Container */}
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/cSiPkPwFpj0?autoplay=0"
                  title="Demostración de Descompresión Vertebral - Spine Clínica"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
