import { useState } from 'react'
import { MapPin, Mail, Clock, Phone, Send, CheckCircle2, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    tratamiento: 'Evaluación General',
    mensaje: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simular el envío del formulario
    setTimeout(() => {
      setIsSubmitted(true)
    }, 600)
  }

  const handleWhatsAppBooking = () => {
    const msg = `Hola Spine Clínica, mi nombre es ${formData.nombre}. Deseo agendar una cita de evaluación para el tratamiento: ${formData.tratamiento}. Teléfono: ${formData.telefono}.`
    window.open(`https://wa.me/51900000000?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="contacto" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em] hover:text-primary transition-colors duration-300 cursor-default">Agendamiento</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-primary mt-2 hover:scale-[1.01] transition-transform duration-300 cursor-default">
            Contacto y Citas de Evaluación
          </h2>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="text-dark/70 font-light mt-4 text-base sm:text-lg">
            Estamos listos para ayudarte a recuperar el bienestar de tu columna. Contáctanos por formulario, visítanos o agenda directamente por WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Column (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/40 space-y-6 text-left card-hover-move">
              <h3 className="text-xl font-heading font-extrabold text-primary mb-4">Información de Contacto</h3>
              
              {/* Dirección */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/5 text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm sm:text-base">Dirección de la Clínica:</h4>
                  <p className="text-xs sm:text-sm text-dark/70 font-light mt-1">
                    Av. del Pinar 134 – Oficina 801, Chacarilla, Santiago de Surco, Lima, Perú.
                  </p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary/5 text-secondary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm sm:text-base">Teléfono / WhatsApp:</h4>
                  <p className="text-xs sm:text-sm text-dark/70 font-light mt-1">
                    +51 900 000 000
                  </p>
                </div>
              </div>

              {/* Correo */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/5 text-emerald-500 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm sm:text-base">Correo Electrónico:</h4>
                  <p className="text-xs sm:text-sm text-dark/70 font-light mt-1">
                    spineclinicalima@gmail.com
                  </p>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex items-start gap-4 border-t border-slate-100 pt-5">
                <div className="p-3 rounded-xl bg-orange-500/5 text-orange-500 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-primary text-sm sm:text-base mb-2">Horarios de Atención:</h4>
                  <div className="grid grid-cols-2 gap-y-2 text-xs sm:text-sm">
                    <span className="text-dark/80 font-medium">Lun - Mié - Vie:</span>
                    <span className="text-dark/70 font-light">9:00 am - 1:00 pm<br/>3:00 pm - 7:30 pm</span>
                    <span className="text-dark/80 font-medium">Mar - Jue:</span>
                    <span className="text-dark/70 font-light">2:00 pm - 7:30 pm</span>
                    <span className="text-dark/80 font-medium">Sábados:</span>
                    <span className="text-dark/70 font-light">9:00 am - 1:00 pm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/50 bg-white h-[260px] relative">
              <iframe
                title="Ubicación de Spine Clínica en Chacarilla Surco"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7410313175276!2d-76.98064972403215!3d-12.129881888112527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7e1ee09825b%3A0xe54e66df9891cbb1!2sAv.%20del%20Pinar%20134%2C%20Santiago%20de%20Surco%2015037!5e0!3m2!1ses-419!2spe!4v1700000000000!5m2!1ses-419!2spe"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form Column (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-xl shadow-slate-100/40 relative flex flex-col justify-center min-h-[500px] card-hover-move"
          >
            {isSubmitted ? (
              <div className="text-center space-y-6 py-10 animate-fade-in">
                <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto shadow-inner shadow-accent/5">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-heading font-extrabold text-primary">¡Solicitud Recibida!</h3>
                  <p className="text-dark/70 font-light max-w-md mx-auto text-sm sm:text-base">
                    Gracias por tu confianza, <strong className="font-semibold text-primary">{formData.nombre}</strong>. Un especialista médico de Spine Clínica se comunicará contigo en breve para coordinar tu cita.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <button
                    onClick={handleWhatsAppBooking}
                    className="bg-accent hover:opacity-95 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all cursor-pointer text-sm"
                  >
                    Confirmar por WhatsApp ahora
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ nombre: '', telefono: '', email: '', tratamiento: 'Evaluación General', mensaje: '' })
                    }}
                    className="border border-slate-200 hover:bg-slate-50 text-primary font-semibold py-3 px-6 rounded-xl transition-all cursor-pointer text-sm"
                  >
                    Enviar otro formulario
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <h3 className="text-xl font-heading font-extrabold text-primary mb-2">Formulario de Reserva</h3>
                <p className="text-xs sm:text-sm text-dark/70 font-light mb-6">
                  Completa tus datos y nos pondremos en contacto contigo en menos de 2 horas.
                </p>

                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-xs font-bold text-primary uppercase tracking-wide mb-2">Nombre Completo</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Escribe tu nombre y apellido"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-secondary focus:bg-white rounded-xl py-3 px-4 text-sm outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Teléfono */}
                  <div>
                    <label htmlFor="telefono" className="block text-xs font-bold text-primary uppercase tracking-wide mb-2">Teléfono de Contacto</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Ej: +51 999 888 777"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-secondary focus:bg-white rounded-xl py-3 px-4 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Correo */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-primary uppercase tracking-wide mb-2">Correo Electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-secondary focus:bg-white rounded-xl py-3 px-4 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Tratamiento de interés */}
                <div>
                  <label htmlFor="tratamiento" className="block text-xs font-bold text-primary uppercase tracking-wide mb-2">Tratamiento de Interés</label>
                  <div className="relative">
                    <select
                      id="tratamiento"
                      name="tratamiento"
                      value={formData.tratamiento}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-secondary focus:bg-white rounded-xl py-3 px-4 text-sm outline-none transition-all appearance-none cursor-pointer text-dark/80"
                    >
                      <option value="Evaluación General">Evaluación de Columna General</option>
                      <option value="Sistema de Descompresión">Sistema de Descompresión Vertebral</option>
                      <option value="Ajuste Quiropráctico">Ajuste Quiropráctico Profesional</option>
                      <option value="Tecarterapia">Tecarterapia (Fisioterapia Alta Frecuencia)</option>
                      <option value="Magnetoterapia">Magnetoterapia</option>
                      <option value="Ejercicios Terapéuticos">Estiramientos y Ejercicios</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-xs font-bold text-primary uppercase tracking-wide mb-2">Comentarios (Opcional)</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="3"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos brevemente qué dolor o padecimiento presentas"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-secondary focus:bg-white rounded-xl py-3 px-4 text-sm outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-secondary/20 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer text-sm"
                >
                  <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  Agendar Cita de Evaluación
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  )
}
