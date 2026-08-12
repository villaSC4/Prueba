import { Sparkles, Ban, Activity, ActivityIcon } from 'lucide-react'

export default function BannerUrgencia() {
  return (
    <div className="relative bg-gradient-to-r from-primary to-[#1A365D] py-8 overflow-hidden">
      {/* Decorative pulse element */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,180,216,0.15),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          
          <div className="flex items-center gap-4 flex-col sm:flex-row">
            <div className="p-3 rounded-full bg-secondary/10 border border-secondary/20 text-secondary animate-bounce">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                ¿Sufres de Dolor de Columna Crónico?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-light mt-1">
                Descubre un enfoque de rehabilitación avanzado diseñado específicamente para ti.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10">
              <Ban className="h-5 w-5 text-secondary" />
              <span className="text-white text-sm font-semibold tracking-wide">Sin Cirugías</span>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10">
              <Ban className="h-5 w-5 text-secondary" />
              <span className="text-white text-sm font-semibold tracking-wide">Sin Medicamentos</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10">
              <Activity className="h-5 w-5 text-secondary" />
              <span className="text-white text-sm font-semibold tracking-wide">100% Indoloro</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
