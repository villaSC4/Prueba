import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Info } from 'lucide-react'

export default function Hero() {
  const slides = [
    'Terapia indolora y sin cirugía',
    'Adaptado a cada paciente',
    'Bienvenidos a Clínica Spine',
    'Sin cirugías ni medicamentos',
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent('Hola Spine Clínica, me gustaría agendar una cita de evaluación para mi columna.')
    window.open(`https://wa.me/51900000000?text=${message}`, '_blank')
  }

  const advantages = [
    {
      icon: 'https://spine.pe/wp-content/uploads/2023/05/spine-profesionales.png',
      title: 'Profesionales titulados',
    },
    {
      icon: 'https://spine.pe/wp-content/uploads/2023/05/spine-internacional.png',
      title: 'Seminarios internacionales',
    },
    {
      icon: 'https://spine.pe/wp-content/uploads/2023/05/spine-calidad.png',
      title: 'Tecnología avanzada',
    },
    {
      icon: 'https://spine.pe/wp-content/uploads/2025/10/spine-experiencia.png',
      title: 'Más de 9 años de experiencia',
    },
  ]

  return (
    <div id="inicio" className="relative w-full">

      <section className="relative w-full h-[95vh] min-h-[620px] flex items-center justify-center overflow-hidden z-1">

        <div className="absolute inset-0 w-full h-full z-0">
          <video
            src="https://spine.pe/wp-content/uploads/2023/06/hero.mp4"
            poster="https://spine.pe/wp-content/uploads/2023/06/hero-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(34, 19, 27, 0.8) 0%, rgba(16, 117, 149, 0.45) 100%)'
          }}
        />

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white space-y-6 flex flex-col items-center select-none">

          <span className="bg-primary text-white px-5 py-2 rounded font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md animate-pulse">
            Nuestra Máquina de descompresión
          </span>

          <div className="h-28 sm:h-36 flex items-center justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold leading-tight tracking-tight drop-shadow-md text-white max-w-3xl"
              >
                {slides[currentSlide]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <p className="text-base sm:text-lg text-secondary font-bold font-heading max-w-2xl uppercase tracking-wider animate-slide-in-left">
            Especialistas en la prevención y corrección de problemas de la columna vertebral
          </p>

          <p className="text-sm sm:text-base text-slate-200 font-light max-w-xl leading-relaxed animate-slide-in-right">
            Somos un centro especializado en columna vertebral donde la ciencia, la tecnología y la experiencia internacional se unen para transformar vidas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto animate-fade-in-up">
            <button
              onClick={handleWhatsAppBooking}
              className="bg-primary hover:bg-[#733E5E] text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 text-base w-full sm:w-auto hover:scale-105"
            >
              <Calendar className="h-5 w-5" />
              Agenda tu cita
            </button>
            <a
              href="#nosotros"
              className="px-8 py-4 rounded-lg border-2 border-white text-white hover:bg-white hover:text-primary font-bold transition-all duration-300 text-base flex items-center justify-center gap-2 w-full sm:w-auto hover:scale-105 active:scale-95"
            >
              <Info className="h-5 w-5" />
              Quiénes somos
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-25 -mt-16 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
        >
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.6, y: 80 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 150, damping: 11 }
                }
              }}
              whileHover={{ y: -8, backgroundColor: '#BF932E' }}
              className="bg-primary text-white p-5 rounded-lg shadow-xl hover:shadow-2xl flex flex-col items-center justify-center text-center gap-4 min-h-[160px] border border-white/5 transition-all duration-300 group cursor-default card-hover-move"
            >
              <div className="w-14 h-14 flex items-center justify-center">
                <img
                  src={adv.icon}
                  alt={adv.title}
                  className="h-full w-full object-contain filter brightness-0 invert"
                />
              </div>
              <h3 className="text-sm sm:text-base font-semibold leading-snug max-w-[160px]">
                {adv.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
