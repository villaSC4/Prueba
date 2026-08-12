import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, User, ArrowRight } from 'lucide-react'
import { blogData } from '../data/spineData'

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const categories = ['Todos', 'Ergonomía', 'Tratamientos', 'Salud Infantil', 'Ejercicios']

  const filteredPosts = blogData.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="bg-slate-50 min-h-screen text-slate-800 font-sans pb-20">
      {/* 1. Page Banner Hero */}
      <div className="relative bg-[#8C4A6E] text-white pt-36 pb-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://spine.pe/wp-content/uploads/2023/05/clinica-spine.jpg"
            alt="Blog Fondo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="inline-block bg-white/10 backdrop-blur-md text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest border border-amber-300/30">
            Consejos de Especialistas
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-widest uppercase">
            Salud y Bienestar
          </h1>
          <p className="text-sm md:text-base text-slate-100 font-light max-w-2xl mx-auto leading-relaxed">
            Explora artículos, hábitos recomendados y consejos ergonómicos escritos por nuestro equipo médico para cuidar de tu columna.
          </p>
        </div>
      </div>

      {/* 2. Controls (Search & Filter) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 flex flex-col md:flex-row gap-6 justify-between items-center">
        {/* Category Buttons */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#8C4A6E] text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Buscar artículos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-[#8C4A6E] transition-colors"
          />
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
        </div>
      </div>

      {/* 3. Blog List Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl shadow-md border border-slate-200/50 overflow-hidden flex flex-col h-full group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-amber-400 text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow space-y-4">
                  {/* Meta data */}
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-extrabold text-[#8C4A6E] group-hover:text-amber-600 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-sm font-light leading-relaxed flex-grow">
                    {post.summary}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => {
                        const text = encodeURIComponent(`Hola Spine Clínica, me gustaría leer más información sobre el artículo: "${post.title}".`)
                        window.open(`https://wa.me/51986858574?text=${text}`, '_blank')
                      }}
                      className="text-xs font-bold text-secondary hover:text-primary transition-colors flex items-center gap-1 group/btn cursor-pointer"
                    >
                      Solicitar lectura completa
                      <ArrowRight className="h-3.5 w-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200/50 max-w-md mx-auto">
            <p className="text-slate-500 font-light text-base">No se encontraron artículos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </section>
  )
}
