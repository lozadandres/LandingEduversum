import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  Network, 
  Rocket, 
  RefreshCw, 
  UsersRound, 
  Mail, 
  GraduationCap, 
  CheckCircle,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import pathOfFuture from '../assets/images/path_of_future_1781386978989.jpg';
import eduversumLogo from '../assets/images/eduversum_puzzle_logo_1781389336382.jpg';
import { BOTTOM_BADGES } from '../data';

const getBadgeIcon = (name: string, className: string) => {
  switch (name) {
    case 'brain': return <Brain className={className} />;
    case 'network': return <Network className={className} />;
    case 'rocket': return <Rocket className={className} />;
    case 'refresh-cw': return <RefreshCw className={className} />;
    case 'users-round': return <UsersRound className={className} />;
    default: return <Sparkles className={className} />;
  }
};

export default function FooterSection() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Estudiante');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Collect signups locally in localStorage
    const savedSignups = JSON.parse(localStorage.getItem('eduversum_signups') || '[]');
    const newSignup = { name, email, role, date: new Date().toISOString() };
    savedSignups.push(newSignup);
    localStorage.setItem('eduversum_signups', JSON.stringify(savedSignups));

    setSubmitted(true);
    setEmail('');
    setName('');
  };

  return (
    <footer id="contacto" className="relative pt-24 pb-12 overflow-hidden select-none bg-gray-950">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Philosophy & Path of Future Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 border-b border-white/5">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <span className="text-xs font-mono font-bold text-brand-cyan tracking-widest block uppercase">
              PROPÓSITO EVOLUCIONARIO
            </span>
            <blockquote className="text-xl sm:text-2xl font-display font-light text-gray-200 leading-relaxed italic pr-0 lg:pr-8">
              &ldquo;Eduversum no fue creado para ayudar a estudiantes a responder preguntas. Fue creado para ayudarles a enfrentar un mundo complejo, cambiante e incierto. Por eso, el futuro no pertenece a quienes memorizan más. Pertenece a quienes comprenden, adaptan, transfieren y transforman.&rdquo;
            </blockquote>
            
            {/* Split Callout */}
            <div className="p-1 rounded-2xl bg-gradient-to-r from-brand-cyan/20 to-brand-pink/10 border border-white/10 mt-6 max-w-lg mx-auto lg:mx-0">
              <div className="bg-gray-950 p-4 rounded-xl text-left">
                <span className="text-xs font-mono font-bold text-brand-pink tracking-wider block mb-1">PERTENECE A QUIENES</span>
                <span className="text-md sm:text-lg font-display font-black leading-tight tracking-tight uppercase">
                  <span className="text-brand-cyan">COMPRENDEN</span>,{" "}
                  <span className="text-brand-yellow">ADAPTAN</span>,{" "}
                  <span className="text-brand-green">TRANSFIEREN</span> Y{" "}
                  <span className="text-brand-pink">TRANSFORMAN.</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Horizon Landscape Graphics Backdrop */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl p-1 bg-gray-900 shadow-brand-yellow/5">
              <img 
                src={pathOfFuture} 
                alt="Montaña del futuro bajo red neuronal" 
                className="w-full aspect-video object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
              {/* Overlaid graphic lines for extra aesthetic */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-gray-950 to-transparent flex items-center justify-between">
                <span className="text-[10px] font-mono font-semibold text-brand-yellow tracking-widest uppercase">CONEXIÓN COSMO-DIGITAL</span>
                <span className="text-[10px] font-mono text-gray-400 font-bold">100% COGNITIVO</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Banner: The 5 Bottom Badges */}
        <div className="py-16 text-center select-none">
          <span className="text-xs font-mono font-bold text-gray-500 tracking-widest block uppercase mb-8">
            NUESTRAS CAPACIDADES CLAVE
          </span>
          <div className="flex flex-wrap justify-center gap-4">
            {BOTTOM_BADGES.map((badge) => (
              <motion.div
                key={badge.id}
                whileHover={{ scale: 1.05 }}
                className={`border px-5 py-3.5 rounded-2xl flex items-center gap-3 shadow-md ${badge.color} transition-all duration-200 select-none`}
              >
                <span className="flex-shrink-0">
                  {getBadgeIcon(badge.iconName, "w-5 h-5")}
                </span>
                <span className="font-display font-bold text-[11px] tracking-wider uppercase text-white select-none">
                  {badge.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Waitlist Registration Form Section */}
        <div className="max-w-xl mx-auto cyber-panel-blue rounded-3xl p-6 sm:p-8 text-center mt-6">
          <img 
            src={eduversumLogo} 
            alt="Eduversum Logo" 
            className="w-12 h-12 rounded-xl mx-auto mb-4 border border-white/10 hover:rotate-12 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
          <h4 className="text-xl font-display font-bold text-white uppercase tracking-tight">
            Únete a la lista de espera
          </h4>
          <p className="mt-2 text-gray-400 text-xs">
            Sé el primero en enterarte del lanzamiento de Eduversum y accede a material educativo exclusivo.
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="mt-6 space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="sr-only">Nombre completo</label>
                    <input 
                      type="text" 
                      placeholder="Tu nombre completo"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/2 border border-white/5 hover:border-white/10 focus:border-brand-cyan rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="sr-only">Rol</label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full bg-gray-900 border border-white/5 focus:border-brand-cyan rounded-xl px-4 py-2.5 text-xs text-gray-300 focus:outline-none cursor-pointer"
                    >
                      <option>Estudiante</option>
                      <option>Padre de familia</option>
                      <option>Educador / Docente</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <span className="absolute inset-y-0 left-4 flex items-center text-gray-500">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input 
                    type="email" 
                    placeholder="Introduce tu correo electrónico"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/2 border border-white/5 hover:border-white/10 focus:border-brand-cyan rounded-xl pl-11 pr-4 py-3 text-xs text-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold bg-gradient-to-r from-brand-cyan to-brand-green text-gray-950 font-mono text-xs uppercase hover:brightness-110 shadow-lg shadow-brand-cyan/10 transition cursor-pointer"
                >
                  Registrar mi email
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-5 border border-brand-green/20 bg-brand-green/5 rounded-2xl flex flex-col items-center gap-3"
              >
                <CheckCircle className="w-8 h-8 text-brand-green animate-bounce" />
                <div>
                  <h5 className="font-bold text-white text-sm">¡Registro exitoso en la espera, {name || 'Eduversario'}!</h5>
                  <p className="text-gray-400 text-[11px] mt-1">Te contactaremos muy pronto. Mientras tanto, sigue pensando, comprendiendo y transformando.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Legal Copyright Footer */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-600 font-mono gap-4">
          <span>&copy; {new Date().getFullYear()} EDUVERSUM. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <span className="hover:text-gray-400 cursor-pointer">Privacidad</span>
            <span className="hover:text-gray-400 cursor-pointer">Colegios Aliados</span>
            <span className="hover:text-gray-400 cursor-pointer">Innovación STEM</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
