import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#8C4A6E] text-white pt-12 pb-0 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          <div className="md:col-span-4 space-y-6 flex flex-col items-center md:items-start text-center md:text-left">

            <div className="w-36 h-36 rounded-full bg-white flex items-center justify-center p-3 shadow-md">
              <img
                src="https://spine.pe/wp-content/uploads/2023/06/logo-color-white-bg.svg"
                alt="Spine Clínica"
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-sm font-light leading-relaxed max-w-sm text-gray-100">
              Somos SPINE CLINICA, un equipo de especialistas en la prevención y corrección de problemas de la columna vertebral
            </p>


            <div className="flex items-center space-x-3">
              <span className="text-sm font-bold text-white mr-1">Síguenos en:</span>


              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform shadow-sm">
                <svg className="w-4 h-4 fill-[#8C4A6E]" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>


              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform shadow-sm">
                <svg className="w-4 h-4 fill-none stroke-[#8C4A6E]" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>


              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform shadow-sm">
                <svg className="w-4 h-4 fill-[#8C4A6E]" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
              </a>


              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform shadow-sm">
                <svg className="w-4 h-4 fill-[#8C4A6E]" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>


            <div className="flex items-center gap-2 pt-2">
              <div className="bg-white rounded-lg p-2 h-14 w-24 flex items-center justify-center shadow-sm">
                <img
                  src="https://lifecolumna.com/wp-content/uploads/2024/11/logo-uni-feevale.svg"
                  alt="Universidade Feevale"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="bg-white rounded-lg p-2 h-14 w-28 flex items-center justify-center shadow-sm">
                <img
                  src="https://spine.pe/wp-content/uploads/2025/10/ica-logo.png"
                  alt="International Chiropractors Association"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="bg-white rounded-lg p-2 h-14 w-20 flex items-center justify-center shadow-sm">
                <img
                  src="https://lifecolumna.com/wp-content/uploads/2024/11/logo-asociacion-quiropractico.jpg"
                  alt="Asociación de Quiróprácticos del Perú"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>


          <div className="md:col-span-4 space-y-6">
            <h4 className="text-base font-bold uppercase tracking-wide">CONTÁCTANOS</h4>

            <div className="space-y-5 text-sm font-light">

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-white">Ubicación</p>
                  <p className="text-gray-200">Av. del Pinar 134 – Oficina 801</p>
                  <p className="text-gray-200">Chacarilla – Santiago de Surco</p>
                </div>
              </div>


              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-white">Horario de atención</p>
                  <p className="text-gray-200">Lun - Mie - Vie</p>
                  <p className="text-gray-200">9:00 am a 1:00 pm - 3:00 pm a 7:30 pm</p>
                  <p className="text-gray-200 mt-2">Mar - Jue</p>
                  <p className="text-gray-200">2:00 pm a 7:30 pm</p>
                  <p className="text-gray-200 mt-2">Sábados</p>
                  <p className="text-gray-200">9:00 am a 1:00 pm</p>
                </div>
              </div>


              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-white">Correo electrónico</p>
                  <a href="mailto:spineclinicalima@gmail.com" className="text-gray-200 hover:underline">
                    spineclinicalima@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className="md:col-span-4 space-y-4">
            <h4 className="text-base font-bold uppercase tracking-wide">PROBLEMAS DE LA COLUMNA VERTEBRAL</h4>
            <ul className="text-sm space-y-2.5 font-light">
              {[
                "Hernia Discal",
                "Escoliosis",
                "Dolor Lumbar",
                "Artrosis",
                "Adormecimientos",
                "Dolor de Cabeza: Migrañas",
                "Dolor Cervical",
                "Dolor Dorsal",
                "Mareos y Vértigos",
                "Problemas Posturales"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 border-b border-white/20 pb-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 inline-block flex-shrink-0"></span>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-amber-200 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>


      <div className="bg-[#793D5E] py-3 text-center text-xs text-gray-200 font-light border-t border-white/10">
        <p>
          Todos los derechos reservados. SPINE PERU | <a href="#politicas" className="underline hover:text-white">Políticas de privacidad</a>
        </p>
      </div>
    </footer>
  )
}