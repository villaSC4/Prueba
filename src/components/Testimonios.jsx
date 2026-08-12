import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react'

export default function Testimonios() {
  const reviews = [
    {
      name: 'Carlos Mendoza',
      condition: 'Hernia Discal & Ciática',
      avatar: 'CM',
      rating: 5,
      comment: 'Llegué a Spine Clínica con un dolor lumbar que no me dejaba caminar ni dormir. Llevaba meses tomando pastillas. Después del tratamiento con el sistema de descompresión computarizado, el dolor desapareció casi por completo. ¡He recuperado mi vida!',
      date: 'Hace 2 meses',
    },
    {
      name: 'Raquel Torres',
      condition: 'Cervicalgia & Migraña Tensional',
      avatar: 'RT',
      rating: 5,
      comment: 'Sufría de constantes dolores de cabeza y rigidez extrema en el cuello. Desde la primera sesión de tecarterapia y los ajustes quiroprácticos sentí un alivio enorme. La atención de los terapeutas es muy profesional y humana.',
      date: 'Hace 3 semanas',
    },
    {
      name: 'Dr. Alejandro Ruiz',
      condition: 'Lumbalgia Crónica (Colega Médico)',
      avatar: 'AR',
      rating: 5,
      comment: 'Como médico, investigo la base científica antes de someterme a cualquier terapia. La descompresión vertebral computarizada de Spine cuenta con evidencia clínica excelente. Llevé mi tratamiento de lumbalgia aquí con excelentes resultados.',
      date: 'Hace 1 mes',
    },
    {
      name: 'María Fe Loli',
      condition: 'Escoliosis & Dolor Postural',
      avatar: 'ML',
      rating: 5,
      comment: 'Llevo años batallando con malas posturas y escoliosis que me causaba fatiga constante. Las sesiones personalizadas de ejercicios terapéuticos y quiropraxia me ayudaron a fortalecer mi espalda y caminar derecha y sin dolor.',
      date: 'Hace 2 meses',
    },
  ]

  return (
    <section id="opiniones" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Overview / Banner */}
        <div className="glass-panel p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 max-w-4xl mx-auto mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-black text-2xl">
              G
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="font-bold text-primary ml-2 text-lg">5.0 / 5</span>
              </div>
              <p className="text-sm text-dark/70 mt-1 font-light">
                Valoración media de nuestros pacientes en Google Maps.
              </p>
            </div>
          </div>
          <div className="text-center md:text-right shrink-0">
            <h4 className="font-heading font-extrabold text-2xl text-primary leading-none">112+ Reseñas</h4>
            <span className="inline-flex items-center gap-1.5 text-xs text-accent font-bold mt-2 px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Verificadas 100% Reales
            </span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em]">Prueba Social</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-primary mt-2">
            Lo que Dicen Nuestros Pacientes
          </h2>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between card-hover-move"
            >
              <div className="absolute top-6 right-8 text-slate-200/80">
                <MessageSquareQuote className="h-10 w-10 stroke-[1.5]" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-dark/80 font-light text-sm sm:text-base leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between border-t border-slate-200/50 pt-5 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
                    {rev.avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-primary text-sm sm:text-base leading-none">
                      {rev.name}
                    </h4>
                    <span className="text-[10px] sm:text-xs text-secondary font-semibold mt-1.5 block">
                      Paciente de: {rev.condition}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 font-light shrink-0">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google Reviews */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary text-sm border-b-2 border-primary hover:border-secondary pb-1 transition-colors"
          >
            Ver más opiniones en Google Reviews
          </a>
        </div>

      </div>
    </section>
  )
}
