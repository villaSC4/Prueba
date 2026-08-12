import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldAlert, Activity, PhoneCall } from 'lucide-react'

const vertebraeData = {
  'C1': {
    region: 'Región Cervical',
    badgeClass: 'bg-primary border-primary-dark',
    textClass: 'text-primary',
    organs: [
      { name: 'Cerebro', img: 'https://spine.pe/wp-content/uploads/2023/06/o-cer.png' },
      { name: 'Todo el organismo', img: '' }
    ],
    symptoms: [
      'Dolores de cabeza recurrentes y migrañas intensas',
      'Sensación de cansancio constante o fatiga crónica',
      'Falta de concentración e insomnio'
    ],
    y: 58
  },
  'C2': {
    region: 'Región Cervical',
    badgeClass: 'bg-primary border-primary-dark',
    textClass: 'text-primary',
    organs: [
      { name: 'Ojos', img: 'https://spine.pe/wp-content/uploads/2023/06/o-oj.png' },
      { name: 'Nervio óptico y auditivo', img: '' },
      { name: 'Glándula lagrimal y mucosa nasal', img: '' }
    ],
    symptoms: [
      'Sinusitis crónica o congestión nasal frecuente',
      'Alergias severas',
      'Problemas de visión y fatiga ocular'
    ],
    y: 73
  },
  'C3': {
    region: 'Región Cervical',
    badgeClass: 'bg-primary border-primary-dark',
    textClass: 'text-primary',
    organs: [
      { name: 'Membrana mucosa de la boca', img: 'https://spine.pe/wp-content/uploads/2023/06/o-muc.png' },
      { name: 'Glándula parótida y oído externo', img: '' }
    ],
    symptoms: [
      'Neuritis faciales o dolores punzantes en la cara',
      'Brotes de acné o problemas cutáneos',
      'Molestias en el oído externo'
    ],
    y: 88
  },
  'C4': {
    region: 'Región Cervical',
    badgeClass: 'bg-primary border-primary-dark',
    textClass: 'text-primary',
    organs: [
      { name: 'Nariz y fosas nasales', img: 'https://spine.pe/wp-content/uploads/2023/06/o-nar.png' },
      { name: 'Labios y boca', img: '' }
    ],
    symptoms: [
      'Catarros y resfriados frecuentes',
      'Fiebre del heno u obstrucción nasal constante',
      'Labios agrietados o resequedad bucal'
    ],
    y: 103
  },
  'C5': {
    region: 'Región Cervical',
    badgeClass: 'bg-primary border-primary-dark',
    textClass: 'text-primary',
    organs: [
      { name: 'Cuerdas vocales', img: 'https://spine.pe/wp-content/uploads/2023/06/o-cue.png' },
      { name: 'Glándulas del cuello y faringe', img: '' }
    ],
    symptoms: [
      'Dolor de garganta crónico',
      'Amigdalitis recurrente',
      'Ronquera o laringitis constante'
    ],
    y: 118
  },
  'C6': {
    region: 'Región Cervical',
    badgeClass: 'bg-primary border-primary-dark',
    textClass: 'text-primary',
    organs: [
      { name: 'Glándula tiroides', img: 'https://spine.pe/wp-content/uploads/2023/06/o-glan.png' },
      { name: 'Músculos del cuello, bíceps y hombros', img: '' }
    ],
    symptoms: [
      'Adormecimiento, hormigueo y dolor en los brazos',
      'Dolor rígido de hombros y cuello',
      'Debilidad en los bíceps'
    ],
    y: 133
  },
  'C7': {
    region: 'Región Cervical',
    badgeClass: 'bg-primary border-primary-dark',
    textClass: 'text-primary',
    organs: [
      { name: 'Extensores de la muñeca y manos', img: 'https://spine.pe/wp-content/uploads/2023/06/o-exte.png' }
    ],
    symptoms: [
      'Síndrome del túnel carpiano',
      'Dolor de muñecas y debilidad al sujetar objetos',
      'Adormecimiento en las manos y dedos'
    ],
    y: 148
  },

  'T1': {
    region: 'Región Torácica / Dorsal',
    badgeClass: 'bg-secondary border-secondary-dark',
    textClass: 'text-secondary',
    organs: [
      { name: 'Corazón', img: 'https://spine.pe/wp-content/uploads/2023/06/o-cor.png' }
    ],
    symptoms: [
      'Mal funcionamiento y arritmias leves del corazón',
      'Dolor difuso entre los omóplatos',
      'Dificultad respiratoria leve bajo esfuerzo'
    ],
    y: 168
  },
  'T2': {
    region: 'Región Torácica / Dorsal',
    badgeClass: 'bg-secondary border-secondary-dark',
    textClass: 'text-secondary',
    organs: [
      { name: 'Corazón', img: 'https://spine.pe/wp-content/uploads/2023/06/o-cor.png' }
    ],
    symptoms: [
      'Alteraciones funcionales del ritmo cardíaco',
      'Dolor de pecho de origen no cardíaco',
      'Tensión muscular en la parte alta de la espalda'
    ],
    y: 183
  },
  'T3': {
    region: 'Región Torácica / Dorsal',
    badgeClass: 'bg-secondary border-secondary-dark',
    textClass: 'text-secondary',
    organs: [
      { name: 'Pulmones y bronquios', img: 'https://spine.pe/wp-content/uploads/2023/06/o-pul.png' }
    ],
    symptoms: [
      'Bronquitis frecuente y tos seca crónica',
      'Mayor propensión a neumonías',
      'Asma o dificultades al respirar hondo'
    ],
    y: 198
  },
  'T4': {
    region: 'Región Torácica / Dorsal',
    badgeClass: 'bg-secondary border-secondary-dark',
    textClass: 'text-secondary',
    organs: [
      { name: 'Pulmones y vesícula biliar', img: 'https://spine.pe/wp-content/uploads/2023/06/o-pul.png' }
    ],
    symptoms: [
      'Congestión pulmonar recurrente',
      'Problemas en la vesícula biliar',
      'Pinchazos dolorosos en la caja torácica'
    ],
    y: 213
  },
  'T5': {
    region: 'Región Torácica / Dorsal',
    badgeClass: 'bg-secondary border-secondary-dark',
    textClass: 'text-secondary',
    organs: [
      { name: 'Estómago', img: 'https://spine.pe/wp-content/uploads/2023/06/o-estt.png' }
    ],
    symptoms: [
      'Indigestión, acidez y reflujo gástrico',
      'Pesadez estomacal después de comer',
      'Dolor localizado en la boca del estómago'
    ],
    y: 228
  },
  'T6': {
    region: 'Región Torácica / Dorsal',
    badgeClass: 'bg-secondary border-secondary-dark',
    textClass: 'text-secondary',
    organs: [
      { name: 'Vasos sanguíneos del abdomen', img: 'https://spine.pe/wp-content/uploads/2023/06/o-vas.png' }
    ],
    symptoms: [
      'Mala circulación en órganos abdominales',
      'Dolores difusos en el vientre',
      'Digestión lenta y fatiga estomacal'
    ],
    y: 243
  },
  'T7': {
    region: 'Región Torácica / Dorsal',
    badgeClass: 'bg-secondary border-secondary-dark',
    textClass: 'text-secondary',
    organs: [
      { name: 'Hígado', img: 'https://spine.pe/wp-content/uploads/2023/06/o-hig.png' }
    ],
    symptoms: [
      'Condiciones hepáticas funcionales',
      'Cansancio general por sobrecarga metabólica',
      'Dolores costales derechos'
    ],
    y: 258
  },
  'T8': {
    region: 'Región Torácica / Dorsal',
    badgeClass: 'bg-secondary border-secondary-dark',
    textClass: 'text-secondary',
    organs: [
      { name: 'Páncreas', img: 'https://spine.pe/wp-content/uploads/2023/06/o-pan.png' }
    ],
    symptoms: [
      'Úlceras gástricas o duodenales',
      'Gastritis recurrentes',
      'Fluctuaciones en los niveles de azúcar e indigestión'
    ],
    y: 273
  },
  'T9': {
    region: 'Región Torácica / Dorsal',
    badgeClass: 'bg-secondary border-secondary-dark',
    textClass: 'text-secondary',
    organs: [
      { name: 'Glándula suprarrenal', img: 'https://spine.pe/wp-content/uploads/2023/06/o-glasu.png' }
    ],
    symptoms: [
      'Alergias respiratorias y cutáneas',
      'Urticarias repentinas',
      'Respuesta alterada al estrés y cansancio muscular'
    ],
    y: 288
  },
  'T10': {
    region: 'Región Torácica / Dorsal',
    badgeClass: 'bg-secondary border-secondary-dark',
    textClass: 'text-secondary',
    organs: [
      { name: 'Intestino delgado', img: 'https://spine.pe/wp-content/uploads/2023/06/o-intd.png' }
    ],
    symptoms: [
      'Dolores cólicos causados por gases',
      'Mala absorción de nutrientes',
      'Distensión abdominal recurrente'
    ],
    y: 303
  },
  'T11': {
    region: 'Región Torácica / Dorsal',
    badgeClass: 'bg-secondary border-secondary-dark',
    textClass: 'text-secondary',
    organs: [
      { name: 'Riñón', img: 'https://spine.pe/wp-content/uploads/2023/06/o-rinn.png' }
    ],
    symptoms: [
      'Problemas en los riñones y retención de líquidos',
      'Molestias lumbares altas al despertar',
      'Fatiga renal leve'
    ],
    y: 318
  },
  'T12': {
    region: 'Región Torácica / Dorsal',
    badgeClass: 'bg-secondary border-secondary-dark',
    textClass: 'text-secondary',
    organs: [
      { name: 'Riñón y uréteres', img: 'https://spine.pe/wp-content/uploads/2023/06/o-rinn.png' }
    ],
    symptoms: [
      'Trastornos urinarios menores',
      'Problemas renales funcionales',
      'Dolor de espalda a nivel de la cintura'
    ],
    y: 333
  },

  'L1': {
    region: 'Región Lumbar / Sacro',
    badgeClass: 'bg-accent border-accent-dark',
    textClass: 'text-accent-dark',
    organs: [
      { name: 'Intestino grueso', img: 'https://spine.pe/wp-content/uploads/2023/06/o-intg.png' }
    ],
    symptoms: [
      'Estreñimiento crónico o colon irritable',
      'Colitis recurrente',
      'Gases y digestión irregular en el tracto final'
    ],
    y: 353
  },
  'L2': {
    region: 'Región Lumbar / Sacro',
    badgeClass: 'bg-accent border-accent-dark',
    textClass: 'text-accent-dark',
    organs: [
      { name: 'Vejiga', img: 'https://spine.pe/wp-content/uploads/2023/06/o-vej.png' },
      { name: 'Intestino grueso', img: 'https://spine.pe/wp-content/uploads/2023/06/o-intg.png' }
    ],
    symptoms: [
      'Síndrome premenstrual severo',
      'Trastornos de la vejiga e incontinencia leve',
      'Disfunción eréctil o impotencia de origen nervioso'
    ],
    y: 373
  },
  'L3': {
    region: 'Región Lumbar / Sacro',
    badgeClass: 'bg-accent border-accent-dark',
    textClass: 'text-accent-dark',
    organs: [
      { name: 'Vejiga', img: 'https://spine.pe/wp-content/uploads/2023/06/o-vej.png' },
      { name: 'Intestino grueso', img: 'https://spine.pe/wp-content/uploads/2023/06/o-intg.png' }
    ],
    symptoms: [
      'Irregularidad menstrual',
      'Debilidad en las rodillas y dolor articular',
      'Problemas de control en la vejiga'
    ],
    y: 393
  },
  'L4': {
    region: 'Región Lumbar / Sacro',
    badgeClass: 'bg-accent border-accent-dark',
    textClass: 'text-accent-dark',
    organs: [
      { name: 'Órganos sexuales', img: 'https://spine.pe/wp-content/uploads/2023/06/o-orse.png' },
      { name: 'Genitales externos', img: '' }
    ],
    symptoms: [
      'Mala circulación en las piernas y pies fríos',
      'Calambres nocturnos intensos en pantorrillas',
      'Dolores en la zona lumbar baja'
    ],
    y: 413
  },
  'L5/S': {
    region: 'Región Lumbar / Sacro',
    badgeClass: 'bg-accent border-accent-dark',
    textClass: 'text-accent-dark',
    organs: [
      { name: 'Intestino grueso', img: 'https://spine.pe/wp-content/uploads/2023/06/o-intg.png' },
      { name: 'Órganos sexuales', img: 'https://spine.pe/wp-content/uploads/2023/06/o-orse.png' },
      { name: 'Genitales externos', img: '' }
    ],
    symptoms: [
      'Ciática (dolor agudo que baja por el glúteo y la pierna)',
      'Hemorroides recurrentes',
      'Malestar crónico en el hueso sacro o coxis'
    ],
    y: 438
  }
}

export default function SpineMap() {
  const [selectedVert, setSelectedVert] = useState('T8')

  const handleVertebraClick = (code) => {
    setSelectedVert(code)
  }

  const activeData = vertebraeData[selectedVert]

  const handleWhatsAppQuery = (code) => {
    const text = encodeURIComponent(`Hola Spine Clínica, tengo molestias asociadas a la zona de la vértebra ${code} (${vertebraeData[code].region}). Deseo agendar una evaluación.`)
    window.open(`https://wa.me/51986858574?text=${text}`, '_blank')
  }

  const cervicalKeys = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7']
  const dorsalKeys = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12']
  const lumbarKeys = ['L1', 'L2', 'L3', 'L4', 'L5/S']

  return (
    <section id="columna-interactiva" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="flex justify-center">
            <img
              src="https://spine.pe/wp-content/uploads/2023/05/icon-titulo.png"
              alt="Icono Columna"
              className="h-12 w-auto object-contain"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-primary">
            El sistema nervioso controla todo
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-bold uppercase tracking-wider">
            Como los problemas en la columna pueden afectar tu cuerpo
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="hidden lg:flex lg:col-span-4 bg-white rounded-2xl shadow-md p-6 justify-center items-center relative min-h-[570px] border border-slate-200/50 card-hover-move"
          >
            <div className="relative w-[180px] h-[520px] select-none">

              <img
                src="https://spine.pe/wp-content/uploads/2023/06/spine-cuerpo-bg.png"
                alt="Silueta humana"
                className="w-full h-full object-contain opacity-25"
              />

              <img
                src="https://spine.pe/wp-content/uploads/2023/06/spine-bg-vertical.png"
                alt="Columna vertebral"
                className="absolute top-[50px] left-1/2 -translate-x-1/2 w-[60px] h-auto object-contain filter drop-shadow"
              />

              {Object.entries(vertebraeData).map(([code, data]) => {
                const isActive = code === selectedVert
                return (
                  <button
                    key={code}
                    onClick={() => handleVertebraClick(code)}
                    className="absolute left-[88px] -translate-x-1/2 w-4 h-4 rounded-full flex items-center justify-center cursor-pointer group focus:outline-none z-30"
                    style={{ top: `${data.y}px` }}
                    title={`Seleccionar vértebra ${code}`}
                  >

                    <div className={`absolute inset-0 rounded-full transition-all duration-300 ${isActive
                        ? 'bg-secondary/40 scale-150 animate-ping'
                        : 'bg-primary/20 scale-100 group-hover:scale-125'
                      }`} />

                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive
                        ? 'bg-secondary'
                        : 'bg-primary/65 group-hover:bg-primary'
                      }`} />
                  </button>
                )
              })}

              {activeData && (
                <div
                  className="absolute left-[92px] right-[-100px] border-t-2 border-dashed border-secondary/50 transition-all duration-300 flex items-center justify-end z-20 pointer-events-none"
                  style={{ top: `${activeData.y + 7}px` }}
                >
                  <div className="w-2 h-2 rounded-full bg-secondary -mr-1" />
                </div>
              )}

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-1 lg:col-span-4 bg-white rounded-2xl shadow-md p-6 border border-slate-200/50 card-hover-move"
          >
            <h3 className="text-lg font-heading font-bold text-primary mb-5 flex items-center gap-2">
              <Activity className="h-5 w-5 text-secondary" />
              Selecciona una vertebra:
            </h3>

            <div className="space-y-6">

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary border-b border-slate-200 pb-1">
                  Región Cervical (C1 - C7)
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cervicalKeys.map((code) => {
                    const isActive = code === selectedVert
                    return (
                      <button
                        key={code}
                        onClick={() => handleVertebraClick(code)}
                        className={`w-9 h-9 rounded font-bold text-xs flex items-center justify-center transition-all duration-200 cursor-pointer ${isActive
                            ? 'bg-primary text-white shadow-md shadow-primary/20 scale-105'
                            : 'bg-slate-50 text-primary hover:bg-primary hover:text-white border border-slate-200/60'
                          }`}
                      >
                        {code}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary border-b border-slate-200 pb-1">
                  Región Torácica / Dorsal (T1 - T12)
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {dorsalKeys.map((code) => {
                    const isActive = code === selectedVert
                    return (
                      <button
                        key={code}
                        onClick={() => handleVertebraClick(code)}
                        className={`w-9 h-9 rounded font-bold text-xs flex items-center justify-center transition-all duration-200 cursor-pointer ${isActive
                            ? 'bg-secondary text-white shadow-md shadow-secondary/20 scale-105'
                            : 'bg-slate-50 text-secondary hover:bg-secondary hover:text-white border border-slate-200/60'
                          }`}
                      >
                        {code}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-accent-dark border-b border-slate-200 pb-1">
                  Región Lumbar / Sacro (L1 - L5/S)
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {lumbarKeys.map((code) => {
                    const isActive = code === selectedVert
                    return (
                      <button
                        key={code}
                        onClick={() => handleVertebraClick(code)}
                        className={`w-14 h-9 rounded font-bold text-xs flex items-center justify-center transition-all duration-200 cursor-pointer ${isActive
                            ? 'bg-accent text-white shadow-md shadow-accent/20 scale-105'
                            : 'bg-slate-50 text-accent-dark hover:bg-accent hover:text-white border border-slate-200/60'
                          }`}
                      >
                        {code === 'L5/S' ? 'L5 / S' : code}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="col-span-1 lg:col-span-4 min-h-[460px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedVert}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 flex flex-col h-full space-y-6 card-hover-move"
              >

                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-extrabold text-lg shadow-md border-2 ${activeData.badgeClass}`}>
                    {selectedVert}
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-slate-800 text-lg leading-tight">
                      Vértebra {selectedVert}
                    </h4>
                    <p className={`text-xs font-bold uppercase tracking-wider mt-0.5 ${activeData.textClass}`}>
                      {activeData.region}
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-100" />

                <div className="space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Activity className="h-4 w-4 text-primary" />
                    Órganos Afectados:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {activeData.organs.map((organ, index) => (
                      <div
                        key={index}
                        className="bg-slate-50 text-slate-800 text-sm font-semibold py-2 px-4 rounded-full border border-slate-200/60 flex items-center gap-2"
                      >
                        <span>{organ.name}</span>
                        {organ.img && (
                          <img
                            src={organ.img}
                            alt={organ.name}
                            className="h-5 w-auto object-contain"
                            onError={(e) => { e.target.style.display = 'none' }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full h-px bg-slate-100" />

                <div className="space-y-3 flex-grow">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <ShieldAlert className="h-4 w-4 text-primary" />
                    Cómo influye en nuestro cuerpo:
                  </h5>
                  <ul className="space-y-2 pl-2">
                    {activeData.symptoms.map((symptom, index) => (
                      <li key={index} className="text-slate-600 font-light text-sm flex items-start gap-2 leading-relaxed">
                        <span className="text-secondary mt-1.5 inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleWhatsAppQuery(selectedVert)}
                  className="w-full bg-primary hover:bg-[#733E5E] text-white py-3.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 shadow-md shadow-primary/10 text-sm hover:scale-105 active:scale-95"
                >
                  <PhoneCall className="h-4 w-4" />
                  Consultar sobre esta zona
                </button>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  )
}
