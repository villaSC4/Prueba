import { useState, useEffect } from 'react'
import { MessageSquare, X } from 'lucide-react'

export default function WhatsAppCTA() {
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 400)
    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const msg = 'Hola Spine Clínica, me gustaría agendar una cita de evaluación para mi columna.'
    window.open(`https://wa.me/51900000000?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end animate-float">


      {showTooltip && (
        <div className="mb-3 bg-white text-primary border border-slate-200/80 rounded-2xl p-4 shadow-xl max-w-xs text-left text-xs animate-fade-in relative flex items-start gap-2 shadow-slate-300/40">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-primary transition-colors cursor-pointer"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          <div className="shrink-0 mt-0.5 text-accent font-black">🟢</div>
          <div>
            <h5 className="font-bold text-[13px] leading-tight text-primary">¿Sufres dolor de columna?</h5>
            <p className="text-slate-500 font-light mt-1 leading-normal">
              Escríbenos ahora y programa tu cita de evaluación médica.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="text-secondary font-bold hover:underline mt-1.5 inline-block text-[11px] cursor-pointer"
            >
              Chatear en línea
            </button>
          </div>
        </div>
      )}


      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 group relative cursor-pointer"
        aria-label="Agendar por WhatsApp"
      >

        <span className="absolute inset-0 rounded-full border-4 border-[#25D366]/40 animate-ping group-hover:animate-none opacity-75" />


        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.209-1.363a9.923 9.923 0 0 0 4.8 1.246h.004c5.507 0 9.99-4.478 9.99-9.987C22.007 6.478 17.522 2 12.012 2Zm4.871 14.167c-.267.75-1.547 1.378-2.128 1.458-.49.068-.962.338-3.136-.56-2.784-1.15-4.577-3.982-4.717-4.167-.14-.185-1.136-1.51-1.136-2.883 0-1.373.717-2.048.974-2.324.257-.276.56-.346.748-.346.188 0 .376.002.539.01.168.008.397-.064.622.484.225.549.771 1.88.837 2.014.066.134.11.292.02.473-.09.18-.135.292-.27.45-.136.157-.285.35-.407.47-.136.133-.278.277-.12.548.157.271.697 1.147 1.492 1.857.945.843 1.745 1.103 1.992 1.228.247.125.39.103.535-.063.145-.165.621-.722.788-.97.168-.246.335-.205.564-.12.228.086 1.446.68 1.696.806.25.125.417.187.48.293.062.106.062.614-.205 1.364Z" />
        </svg>
      </button>

    </div>
  )
}
