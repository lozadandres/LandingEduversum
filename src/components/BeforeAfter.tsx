import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { XCircle, CheckCircle2, Sparkles, ChevronsRight, HelpCircle } from 'lucide-react';
import studentBefore from '../assets/images/student_before_1781386954102.jpg';
import studentAfter from '../assets/images/student_after_1781386967022.jpg';
import { BEFORE_QUESTIONS, AFTER_QUESTIONS } from '../data';

export default function BeforeAfter() {
  const [transformationProgress, setTransformationProgress] = useState(100); // 0 (Stressed) to 100 (Empowered)
  const [activeTab, setActiveTab] = useState<'both' | 'before' | 'after'>('both');

  const getEmpowermentStatus = () => {
    if (transformationProgress < 30) return { label: 'Mentalidad Tradicional Pasiva', color: 'text-brand-red', bg: 'bg-brand-red/10 border-brand-red/20' };
    if (transformationProgress < 75) return { label: 'Pensador en Transición', color: 'text-brand-yellow', bg: 'bg-brand-yellow/10 border-brand-yellow/20' };
    return { label: 'Líder Transformador Eduversum', color: 'text-brand-green', bg: 'bg-brand-green/10 border-brand-green/20' };
  };

  const status = getEmpowermentStatus();

  return (
    <section id="antes-despues" className="border-y border-white/5 bg-gray-950/20 py-24 select-none scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 relative">
          <span className="text-xs font-mono font-bold text-center text-brand-yellow tracking-widest block mb-2">
            EL PROCESO TRANSFORMADOR
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-black tracking-tight text-white uppercase"
          >
            Antes <span className="text-gray-500 font-normal">vs</span> Después
          </motion.h2>
          <p className="mt-3 text-gray-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            &ldquo;Imagina un estudiante que no te pregunta <strong>&iquest;esto entra en el examen?</strong>, sino <strong>&iquest;por qué ocurre?, &iquest;dónde más puedo aplicarlo?, &iquest;qué puedo crear con esto?</strong>. Ese estudiante no solo piensa mejor. Vive mejor. Y sí: también obtiene mejores resultados en el ICFES. Pero ese es un efecto secundario, no el objetivo.&rdquo;
          </p>

          {/* Interactive Controller Slider Bar */}
          <div className="mt-8 max-w-md mx-auto bg-gray-900 border border-white/5 p-4 rounded-2xl shadow-xl">
            <div className="flex justify-between text-xs font-mono text-gray-400 mb-2">
              <span className="flex items-center gap-1"><XCircle className="w-3.5 h-3.5 text-brand-red" /> Memorización</span>
              <span className="font-bold text-white uppercase">{transformationProgress}% Eduversum</span>
              <span className="flex items-center gap-1">Comprensión <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" /></span>
            </div>
            
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={transformationProgress} 
              onChange={(e) => setTransformationProgress(Number(e.target.value))}
              className="w-full accent-brand-green cursor-pointer h-2 bg-gray-800 rounded-lg appearance-none"
            />
            
            <div className={`mt-3 py-1.5 px-3 rounded-lg text-center font-mono text-xs font-bold border transition-colors ${status.bg} ${status.color}`}>
              {status.label}
            </div>
          </div>
        </div>

        {/* Comparative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: ANTES (Memorización Pasiva) */}
          <motion.div 
            style={{ opacity: (100 - transformationProgress + 20) / 100 }}
            className="lg:col-span-5 cyber-panel-red rounded-3xl p-6 relative overflow-hidden"
          >
            {/* ANTES RED BADGE */}
            <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full text-xs font-bold bg-brand-red text-white uppercase">
              ANTES
            </div>

            <div className="flex flex-col items-center">
              {/* Image box */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg mb-6 bg-gray-950">
                <img 
                  src={studentBefore} 
                  alt="Estudiante estresado del antes" 
                  className="w-full h-full object-cover select-none filter contrast-125"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-red-950/20 mix-blend-color-burn" />
              </div>

              {/* Red-outlined typical questions box */}
              <div className="w-full space-y-3">
                {BEFORE_QUESTIONS.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between p-3.5 rounded-xl border border-brand-red/20 bg-brand-red/5 text-gray-200 text-sm font-semibold hover:bg-brand-red/10 transition-colors"
                  >
                    <span>{item.question}</span>
                    <XCircle className="w-5 h-5 text-brand-red flex-shrink-0" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* MIDDLE: GOLDEN TRANSFORMATION FLOW GRAPHIC */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-6 select-none">
            {/* Pulsing Transformation Sparkle Button */}
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Instantly transform to 100% or reset if already at 100
                setTransformationProgress(transformationProgress === 100 ? 0 : 100);
              }}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-brand-yellow to-amber-500 border-2 border-white/20 flex items-center justify-center text-gray-950 shadow-xl shadow-brand-yellow/30 hover:shadow-brand-yellow/50 transition cursor-pointer relative z-10"
              title="Click para alternar evolución"
            >
              <Sparkles className="w-7 h-7 text-gray-900 animate-spin" style={{ animationDuration: '12s' }} />
            </motion.button>
            <div className="hidden lg:flex flex-col items-center mt-4">
              <span className="text-[10px] font-mono text-gray-500 font-bold uppercase tracking-widest">
                EVOLUCIÓN
              </span>
              <div className="flex gap-1 mt-2 text-brand-yellow">
                <ChevronsRight className="w-6 h-6 animate-pulse" />
              </div>
            </div>
          </div>

          {/* RIGHT: DESPUÉS (Comprensión Transformativa) */}
          <motion.div 
            style={{ opacity: (transformationProgress + 20) / 100 }}
            className="lg:col-span-5 cyber-panel-green rounded-3xl p-6 relative overflow-hidden"
          >
            {/* DESPUÉS GREEN BADGE */}
            <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full text-xs font-bold bg-brand-green text-white uppercase">
              DESPUÉS
            </div>

            <div className="flex flex-col items-center">
              {/* Image box */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg mb-6 bg-gray-950">
                <img 
                  src={studentAfter} 
                  alt="Estudiante feliz del después" 
                  className="w-full h-full object-cover select-none filter contrast-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-950/20 mix-blend-color-burn" />
              </div>

              {/* Green-outlined typical questions box */}
              <div className="w-full space-y-3">
                {AFTER_QUESTIONS.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between p-3.5 rounded-xl border border-brand-green/20 bg-brand-green/5 text-gray-100 text-sm font-semibold hover:bg-brand-green/10 transition-colors"
                  >
                    <span>{item.question}</span>
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
