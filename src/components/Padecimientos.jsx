import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Calendar, HelpCircle, ArrowRight } from 'lucide-react'

export default function Padecimientos() {
  const padecimientos = [
    {
      id: 'hernia',
      title: 'Hernia Discal',
      subtitle: 'Compresión e inflamación de discos intervertebrales',
      description: 'Ocurre cuando el núcleo blando de un disco intervertebral se desplaza hacia afuera a través de un desgarro en la corteza exterior. Esto presiona las raíces nerviosas adyacentes, provocando dolores intensos, espasmos musculares y entumecimiento.',
      symptoms: 'Dolor punzante, adormecimiento de glúteos o piernas, debilidad muscular generalizada en la zona afectada.',
      howWeTreat: 'Utilizamos el Sistema de Descompresión Vertebral computarizado para generar presión negativa dentro del disco, atrayendo de vuelta el material herniado y promoviendo el flujo de nutrientes para su autoregeneración.',
      whatsappMsg: 'Hola Spine Clínica, me gustaría agendar una evaluación por un diagnóstico de Hernia Discal.',
    },
    {
      id: 'escoliosis',
      title: 'Escoliosis',
      subtitle: 'Desviación lateral de la columna vertebral',
      description: 'Es una curvatura lateral de la columna vertebral que se presenta con mayor frecuencia durante el período de crecimiento anterior a la pubertad. En adultos, puede empeorar debido al desgaste y malos hábitos posturales, provocando desbalances corporales.',
      symptoms: 'Hombros desiguales, un omóplato más prominente que otro, fatiga recurrente en la espalda tras estar de pie.',
      howWeTreat: 'Realizamos Ajuste Quiropráctico de precisión para corregir la alineación axial, combinado con programas personalizados de ejercicios terapéuticos y estiramientos que fortalecen la musculatura asimétrica.',
      whatsappMsg: 'Hola Spine Clínica, me interesa programar una cita para evaluación de Escoliosis.',
    },
    {
      id: 'lumbalgia',
      title: 'Dolor Lumbar / Lumbalgia',
      subtitle: 'Tensión y rigidez en la espalda baja',
      description: 'El dolor lumbar es la molestia musculoesquelética más común del mundo. Puede originarse por levantar objetos pesados inadecuadamente, malas posturas al sentarse, debilidad en el core o desgaste crónico de las articulaciones facetarias.',
      symptoms: 'Espasmos en la espalda baja, dolor sordo y constante, dificultad para levantarse de una silla o agacharse.',
      howWeTreat: 'Combinamos Magnetoterapia para desinflamar rápidamente, Tecarterapia para relajar las fibras musculares tensas y Ajuste Quiropráctico para restablecer el movimiento óptimo de la pelvis y lumbares.',
      whatsappMsg: 'Hola Spine Clínica, me gustaría agendar una evaluación para tratar un Dolor Lumbar constante.',
    },
    {
      id: 'cervicalgia',
      title: 'Cervicalgia',
      subtitle: 'Dolor persistente de cuello y hombros',
      description: 'Frecuentemente provocado por estrés, posturas deficientes en el trabajo frente al computador (síndrome de cuello de texto) o contracturas musculares severas. Si no se trata, puede provocar dolor de cabeza crónico e irradiación a brazos.',
      symptoms: 'Rigidez en el cuello, dolor sordo localizado, hormigueo en brazos o dedos, incapacidad para girar el cuello.',
      howWeTreat: 'Aplicamos Fisioterapia de alta frecuencia (Tecarterapia) para reducir la tensión muscular profunda, seguido de ajustes vertebrales para liberar los nervios comprimidos en el cuello.',
      whatsappMsg: 'Hola Spine Clínica, quiero agendar una evaluación por un fuerte dolor de cuello (Cervicalgia).',
    },
    {
      id: 'ciatica',
      title: 'Ciática',
      subtitle: 'Compresión del nervio más largo del cuerpo',
      description: 'Se refiere al dolor que se irradia a lo largo del trayecto del nervio ciático, el cual se ramifica desde la espalda baja, pasa por los glúteos y desciende por cada pierna. Generalmente es causado por una hernia discal o espolón óseo.',
      symptoms: 'Dolor quemante que corre por la pierna, hormigueo constante, debilidad al flexionar el pie o caminar.',
      howWeTreat: 'La Descompresión Vertebral computarizada es el tratamiento estándar de oro para la ciática, ya que reduce la presión del disco sobre la raíz del nervio ciático de forma mecánica y controlada.',
      whatsappMsg: 'Hola Spine Clínica, sufro de dolor ciático y me gustaría agendar una cita de evaluación.',
    },
    {
      id: 'adormecimiento',
      title: 'Adormecimiento de Extremidades',
      subtitle: 'Pérdida de sensibilidad y hormigueo en brazos o piernas',
      description: 'Cuando hay un desalineamiento o compresión discal en la columna cervical o lumbar, los nervios que van hacia los brazos o piernas quedan atrapados. Esta interferencia nerviosa causa parestesia (sensación de adormecimiento u hormigueo).',
      symptoms: 'Sensación de adormecimiento, pérdida temporal de fuerza para sujetar objetos o caminar, hormigueo en manos/pies.',
      howWeTreat: 'Buscamos la raíz de la compresión nerviosa mediante evaluación física, realizamos tracciones y ajustes específicos para descomprimir el nervio y reestablecer la conductividad nerviosa normal.',
      whatsappMsg: 'Hola Spine Clínica, siento adormecimiento constante en mis extremidades y busco una evaluación.',
    },
  ]

  const [activeTab, setActiveTab] = useState('hernia')

  const handleWhatsAppBooking = (msg) => {
    window.open(`https://wa.me/51900000000?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em]">Padecimientos</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-primary mt-2">
            Dolencias Comunes que Tratamos
          </h2>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="text-dark/70 font-light mt-4 text-base sm:text-lg">
            Aprende a identificar qué le está pasando a tu cuerpo. Te ayudamos a entender la causa y te ofrecemos soluciones clínicas eficaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 no-scrollbar"
          >
            {padecimientos.map((pad) => (
              <button
                key={pad.id}
                onClick={() => setActiveTab(pad.id)}
                className={`py-4 px-6 rounded-2xl text-left transition-all duration-300 border flex items-center justify-between shrink-0 lg:shrink w-[240px] lg:w-full cursor-pointer hover:scale-[1.02] hover:-translate-y-0.5 shadow-sm hover:shadow-md ${activeTab === pad.id
                    ? 'bg-primary border-primary text-white shadow-xl shadow-primary/10'
                    : 'bg-white border-slate-100 hover:border-slate-300 text-primary'
                  }`}
              >
                <div>
                  <h3 className="font-heading font-extrabold text-sm sm:text-base">{pad.title}</h3>
                  <p className={`text-[10px] sm:text-xs mt-0.5 font-light ${activeTab === pad.id ? 'text-slate-200' : 'text-slate-400'}`}>
                    {pad.title === 'Escoliosis' ? 'Desviación' : 'Compresión'}
                  </p>
                </div>
                <ArrowRight className={`h-4 w-4 transition-transform ${activeTab === pad.id ? 'translate-x-1' : 'opacity-30'}`} />
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 min-h-[380px]"
          >
            <AnimatePresence mode="wait">
              {padecimientos.map((pad) => {
                if (pad.id !== activeTab) return null
                return (
                  <motion.div
                    key={pad.id}
                    initial={{ opacity: 0, scale: 0.96, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -15 }}
                    transition={{ type: "spring", stiffness: 120, damping: 12 }}
                    className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/60 shadow-xl text-left space-y-6 flex flex-col justify-between h-full card-hover-move"
                  >
                    <div>

                      <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-1">
                        {pad.subtitle}
                      </span>

                      <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-primary">
                        {pad.title}
                      </h3>
                      <div className="w-8 h-1 bg-secondary rounded-full mt-3 mb-6" />

                      <p className="text-dark/80 font-light text-sm sm:text-base leading-relaxed">
                        {pad.description}
                      </p>

                      <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                        <HelpCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-bold text-primary">¿Cómo se siente? (Síntomas):</h4>
                          <p className="text-xs sm:text-sm text-dark/70 font-light mt-1">{pad.symptoms}</p>
                        </div>
                      </div>

                      <div className="mt-4 p-4 rounded-2xl bg-secondary/5 border border-secondary/10 flex items-start gap-3">
                        <Sparkles className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-bold text-primary">¿Cómo lo corregimos en Spine?:</h4>
                          <p className="text-xs sm:text-sm text-dark/70 font-light mt-1">{pad.howWeTreat}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 mt-6 flex justify-end">
                      <button
                        onClick={() => handleWhatsAppBooking(pad.whatsappMsg)}
                        className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-95 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-secondary/20 flex items-center justify-center gap-2 cursor-pointer text-sm hover:scale-105 active:scale-95 transition-all"
                      >
                        <Calendar className="h-4 w-4" />
                        Agendar Cita de Evaluación
                      </button>
                    </div>

                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
