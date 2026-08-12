import Contacto from './Contacto'

export default function ContactoPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Banner Hero */}
      <div className="relative bg-[#8C4A6E] text-white pt-36 pb-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://spine.pe/wp-content/uploads/2023/05/icon-horario.png"
            alt="Contacto Fondo"
            className="w-full h-full object-contain object-left-top"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="inline-block bg-white/10 backdrop-blur-md text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest border border-amber-300/30">
            Agenda tu cita
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-widest uppercase">
            Contáctanos
          </h1>
          <p className="text-sm md:text-base text-slate-100 font-light max-w-2xl mx-auto leading-relaxed">
            Resuelve tus dudas o solicita una cita de evaluación hoy mismo. Estamos listos para atenderte.
          </p>
        </div>
      </div>

      {/* Render the core Contact section */}
      <div className="-mt-10 relative z-20">
        <Contacto />
      </div>
    </div>
  )
}
