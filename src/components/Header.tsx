import { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import heroStudent from '../assets/images/hero_student_1781386925102.jpg';
import eduversumLogo from '../assets/images/eduversum_logo_1781386912599.jpg';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'El Problema vs El Futuro', href: '#comparativa' },
    { name: 'Antes vs Después', href: '#antes-despues' },
    { name: 'El Destino', href: '#el-destino' },
    { name: 'Autodiagnóstico', href: '#quiz' },
  ];

  return (
    <header className="relative w-full z-40 overflow-hidden">
      {/* Top Background Aura Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-[20%] right-10 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl -z-10" />

      {/* Navigation Menu */}
      <nav className="max-w-7xl mx-auto mt-4 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between border border-brand-cyan/25 backdrop-blur-md bg-slate-950/65 rounded-2xl shadow-xl shadow-brand-cyan/5">
        <div className="flex items-center gap-3">
          <img 
            src={eduversumLogo} 
            alt="Eduversum Logo" 
            className="w-10 h-10 rounded-xl border border-white/10 shadow-lg shadow-brand-cyan/10"
            referrerPolicy="no-referrer"
          />
          <div>
            <span className="font-display font-bold text-xl tracking-tight text-white block">
              EDUVERSUM
            </span>
            <span className="text-[9px] tracking-widest text-brand-yellow block font-medium uppercase">
              Pensar. Comprender. Transformar.
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-cyan group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Action Button & Waitlist Tag */}
        <div className="hidden lg:flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-brand-cyan inline-block"></span>
            PRÓXIMAMENTE
          </span>
          <a
            href="#contacto"
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-brand-cyan to-brand-green text-gray-950 hover:brightness-110 transition duration-200 shadow-md shadow-brand-cyan/20 flex items-center gap-1.5"
          >
            Únete a la Lista <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center gap-3">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
            PRÓXIMAMENTE
          </span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-400 hover:text-white focus:outline-none"
            id="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gray-950 border-b border-white/10 px-4 py-6 flex flex-col gap-4 relative z-50 text-center"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-300 hover:text-white block py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 block w-full text-center px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-brand-cyan to-brand-green text-gray-950"
          >
            Únete a la Lista de Espera
          </a>
        </motion.div>
      )}

      {/* Hero Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
        
        {/* Floating Puzzle Pieces Illustration */}
        <div className="absolute top-1/4 left-10 w-8 h-8 opacity-25 -rotate-12 animate-float-slow text-brand-yellow">
          🧩
        </div>
        <div className="absolute bottom-1/4 right-[45%] w-12 h-12 opacity-30 rotate-45 animate-float-fast text-brand-cyan">
          🧩
        </div>
        <div className="absolute top-12 right-[10%] w-6 h-6 opacity-20 rotate-12 animate-float-slow text-brand-pink">
          🧩
        </div>

        {/* Left: Text Statements */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 select-none text-center lg:text-left">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-brand-yellow font-mono shadow-inner"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
              REVOLUCIÓN EDUCATIVA INDEPENDIENTE
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-display font-extrabold tracking-tight text-white leading-tight uppercase"
            >
              No formamos estudiantes que memorizan.
              <span className="block mt-4 text-brand-cyan font-extrabold relative">
                Formamos pensadores
              </span>
              <span className="block mt-1 font-hand text-brand-yellow text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl lowercase italic tracking-wide drop-shadow-[0_4px_12px_rgba(252,211,77,0.3)] select-none">
                que transforman.
              </span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans"
          >
            No preparamos para el examen ICFES. <span className="text-brand-cyan font-bold">Preparamos el pensamiento</span> que el ICFES y PISA necesitan. Porque no prometemos un puntaje alto —eso, por lógica, llega solo cuando entiendes, conectas y razonas, no cuando repites de memoria.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a 
              href="#comparativa"
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-2xl font-bold bg-gradient-to-r from-brand-cyan via-brand-cyan to-brand-pink text-gray-950 hover:scale-105 transition-all duration-200 shadow-lg shadow-brand-cyan/20 cursor-pointer"
            >
              Explorar Comparativa
            </a>
            <a 
              href="#quiz"
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-2xl font-bold border border-brand-cyan/35 text-brand-cyan bg-brand-cyan/5 hover:bg-brand-cyan/15 hover:border-brand-cyan/60 hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              Medir mi Mentalidad
            </a>
          </motion.div>
        </div>

        {/* Right: Portal / Interactive visual displaying high tech curly student */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Neon Circle Glow Outer Frame */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan via-purple-600 to-brand-yellow rounded-full blur-2xl opacity-30 animate-pulse" />
          
          <div className="relative w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-brand-cyan/30 bg-gray-950 p-1 project-portal-glow">
            <img 
              src={heroStudent} 
              alt="Estudiante pensador de Eduversum" 
              className="w-full h-full object-cover rounded-full select-none"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay Brain Connections Badge */}
            <div className="absolute bottom-6 right-6 bg-gray-900/90 border border-white/15 px-3 py-2 rounded-2xl flex items-center gap-2 shadow-xl backdrop-blur-md">
              <div className="p-1 rounded-lg bg-pink-500/10">
                <Brain className="w-5 h-5 text-brand-pink" />
              </div>
              <div className="text-left font-mono">
                <span className="text-[10px] text-gray-400 block line-height-1">Cognición Activa</span>
                <span className="text-[11px] font-bold text-white block">Sinape-Minds™</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </header>
  );
}
