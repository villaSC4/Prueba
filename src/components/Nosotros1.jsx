import { useState } from 'react'
import { motion as m, AnimatePresence as Ap } from 'framer-motion'
import { Play, Calendar, HelpCircle, X } from 'lucide-react'
import SpineMap from './SpineMap'

export default function Nosotros() {
    return (
        <section id="nosotros" className="w-full bg-white text-slate-800 font-sans overflow-hidden">

            {/* 1. HERO BANNER PRINCIPAL (Animado y adaptado) */}
            <div className="relative bg-[#8C4A6E] text-white pt-36 md:pt-44 pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-20 transition-transform duration-1000 hover:scale-105">
                    <img
                        src="https://spine.pe/wp-content/uploads/2023/06/nosotros-spine.jpg"
                        alt="Nosotros Fondo"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto space-y-4 animate-fade-in-up">
                    <span className="inline-block bg-white/10 backdrop-blur-md text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest border border-amber-300/30">
                        Conoce nuestra Historia
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-widest uppercase">
                        NOSOTROS
                    </h1>
                    <p className="text-sm md:text-base text-slate-100 font-light max-w-2xl mx-auto leading-relaxed">
                        Más de 9 años de experiencia cuidando, mejorando y optimizando tu estado de salud de manera natural y segura.
                    </p>
                </div>
            </div>

            {/* 2. SOMOS SPINE CLÍNICA (Con tarjeta de imagen interactiva) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    <div className="lg:col-span-7 space-y-6">
                        <div>
                            <span className="text-[#8C4A6E] text-xs font-bold uppercase tracking-widest bg-[#8C4A6E]/10 px-3.5 py-1.5 rounded-full">
                                ESPECIALISTAS EN COLUMNA VERTEBRAL
                            </span>
                        </div>

                        <h2 className="text-2xl md:text-4xl font-extrabold text-[#8C4A6E] leading-tight">
                            Somos SPINE CLÍNICA
                        </h2>

                        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                            Un equipo de especialistas en la prevención y corrección de problemas de la columna vertebral. Nuestros doctores cuentan con títulos en las mejores universidades de quiropráctica a nivel mundial y participan regularmente en seminarios internacionales para difundir las últimas novedades en el Perú.
                        </p>

                        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                            Gracias a nuestra alta especialización, atendemos a familias enteras: desde niños hasta personas mayores, personas con hernia discal y pacientes operados de la columna.
                        </p>

                        <div className="pt-2 flex items-center gap-4">
                            <img
                                src="https://spine.pe/wp-content/uploads/2023/06/logo-color-full.svg"
                                alt="Spine Logo Color"
                                className="h-14 w-auto object-contain hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white group cursor-pointer">
                            <img
                                src="https://spine.pe/wp-content/uploads/2023/06/nosotros-somos-spine.jpg"
                                alt="Somos Spine Clínica"
                                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>

                </div>
            </div>

            {/* 3. COLUMNA VERTEBRAL SANA + 4 PILARES DINÁMICOS */}
            <div className="bg-[#8C4A6E] text-white py-14 px-4 sm:px-6 lg:px-8 border-t border-b border-white/10">
                <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
                    <p className="text-lg md:text-xl font-light leading-relaxed">
                        Una columna vertebral sana permite el buen funcionamiento de tu cerebro, el órgano encargado de controlar todos los procesos de tu organismo.
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-amber-300">
                        ¡Cuida de tu columna y verás cómo cambia tu vida!
                    </p>
                </div>

                {/* Pilares interactivos con Hover en Iconos */}
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-6 border-t border-white/20">

                    <div className="flex flex-col items-center space-y-3 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                        <div className="w-16 h-16 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                            <svg className="w-12 h-12 stroke-white fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </div>
                        <p className="text-sm font-semibold max-w-[150px]">Profesionales titulados</p>
                    </div>

                    <div className="flex flex-col items-center space-y-3 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                        <div className="w-16 h-16 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                            <svg className="w-12 h-12 stroke-white fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918" />
                            </svg>
                        </div>
                        <p className="text-sm font-semibold max-w-[180px]">Participación en seminarios internacionales</p>
                    </div>

                    <div className="flex flex-col items-center space-y-3 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                        <div className="w-16 h-16 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                            <svg className="w-12 h-12 stroke-white fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.297-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>
                        </div>
                        <p className="text-sm font-semibold max-w-[170px]">Equipos de tecnología avanzada</p>
                    </div>

                    <div className="flex flex-col items-center space-y-3 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                        <div className="w-16 h-16 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                            <svg className="w-12 h-12 fill-white group-hover:fill-amber-300 transition-colors" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        </div>
                        <p className="text-sm font-semibold max-w-[160px]">Más de 9 años de experiencia</p>
                    </div>

                </div>
            </div>

            {/* 4. BANNER CALL TO ACTION (Botones con efecto de escala) */}
            <div className="relative bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://spine.pe/wp-content/uploads/2023/05/clinica-spine.jpg"
                        alt="Consulta Médica Spine"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-[#8C4A6E]/80 mix-blend-multiply" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                    <h3 className="text-xl md:text-3xl font-extrabold leading-snug tracking-wide">
                        Te mereces una vida plena sin dolor. Te ofrecemos un trato individualizado y profesional que conecta contigo y te ayuda a lograr la calidad de vida que te hace disfrutar sin importar tu edad
                    </h3>

                    <div className="flex flex-wrap justify-center gap-4 pt-2">
                        <a
                            href="https://wa.me/51900000000?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white text-[#8C4A6E] font-bold px-7 py-3.5 rounded-md text-sm hover:bg-amber-100 hover:scale-105 active:scale-95 transition-all shadow-lg uppercase tracking-wide"
                        >
                            AGENDA UNA CITA
                        </a>

                        <a
                            href="/#tratamientos"
                            className="bg-transparent text-white border-2 border-white font-bold px-7 py-3.5 rounded-md text-sm hover:bg-white hover:text-[#8C4A6E] hover:scale-105 active:scale-95 transition-all uppercase tracking-wide"
                        >
                            VER TRATAMIENTOS
                        </a>
                    </div>
                </div>
            </div>

            {/* 5. LOS 3 PILARES: CIENCIA, ARTE Y FILOSOFÍA (Tarjetas elevadas al Hover) */}
            <div className="bg-white py-16 md:py-20 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl md:text-4xl font-extrabold text-[#8C4A6E]">
                            Los 3 Pilares de la Quiropráctica
                        </h2>
                        <p className="text-slate-500 text-sm mt-2 font-light">
                            Fundamentos en los que se basa la atención médica de excelencia en Spine Clínica
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Tarjeta 1 */}
                        <div className="bg-slate-50 p-8 rounded-2xl border-t-4 border-[#8C4A6E] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group card-hover-move">
                            <h3 className="text-xl font-bold text-[#8C4A6E] group-hover:text-amber-600 transition-colors">
                                CIENCIA
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed font-light mt-3">
                                Basada en la anatomía y neurología del sistema nervioso central para analizar cómo la columna afecta la salud global del organismo.
                            </p>
                        </div>

                        {/* Tarjeta 2 */}
                        <div className="bg-slate-50 p-8 rounded-2xl border-t-4 border-amber-400 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group card-hover-move">
                            <h3 className="text-xl font-bold text-[#8C4A6E] group-hover:text-amber-600 transition-colors">
                                ARTE
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed font-light mt-3">
                                Por el largo aprendizaje y destreza de años que requiere la realización del ajuste vertebral específico de manera precisa y segura.
                            </p>
                        </div>

                        {/* Tarjeta 3 */}
                        <div className="bg-slate-50 p-8 rounded-2xl border-t-4 border-[#8C4A6E] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group card-hover-move">
                            <h3 className="text-xl font-bold text-[#8C4A6E] group-hover:text-amber-600 transition-colors">
                                FILOSOFÍA
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed font-light mt-3">
                                Reconoce la visión integral del ser humano y la asombrosa capacidad de auto-regeneración innata de la que dispone nuestro cuerpo.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* 6. MISIÓN Y VISIÓN (Tarjetas Interactivas) */}
            <div className="bg-slate-50 py-16 md:py-20 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <div className="bg-white p-8 rounded-2xl border-l-4 border-[#8C4A6E] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 card-hover-move">
                            <h3 className="text-xl font-bold text-[#8C4A6E] uppercase">Nuestra Misión</h3>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                                Nuestra misión es educar e inspirar a tantas personas como sea posible sobre el extraordinario potencial que tiene el cuerpo. La quiropráctica nos ayuda a expresar este potencial, haciendo a las personas responsables de su propia salud.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-l-4 border-amber-400 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 card-hover-move">
                            <h3 className="text-xl font-bold text-[#8C4A6E] uppercase">Nuestra Visión</h3>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                                Creemos firmemente que cuando el Sistema Nervioso funciona sin interferencias podemos lograr una salud óptima, sin necesidad de agentes externos agresivos ni medicamentos de por vida.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* 7. SISTEMA NERVIOSO INTERACTIVO */}
            <SpineMap />

        </section>
    )
}