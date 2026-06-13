import { motion } from 'motion/react';
import { 
  AlertTriangle, 
  Lightbulb, 
  Zap, 
  BookOpen, 
  ClipboardList, 
  Puzzle, 
  AlertCircle, 
  UserMinus,
  HelpCircle, 
  Search, 
  MessageSquare, 
  Shield, 
  RefreshCw, 
  Cpu, 
  Rocket, 
  Brain, 
  CornerDownRight, 
  Heart,
  ChevronRight
} from 'lucide-react';
import { PROBLEM_ITEMS, FUTURE_ITEMS } from '../data';
import studentFuture from '../assets/images/student_future_1781386938139.jpg';

// Helper to resolve icon from string reference in data.ts
const getIcon = (name: string, className: string) => {
  switch(name) {
    case 'zap': return <Zap className={className} />;
    case 'book-open': return <BookOpen className={className} />;
    case 'clipboard-list': return <ClipboardList className={className} />;
    case 'puzzle': return <Puzzle className={className} />;
    case 'alert-circle': return <AlertCircle className={className} />;
    case 'user-minus': return <UserMinus className={className} />;
    case 'help-circle': return <HelpCircle className={className} />;
    case 'search': return <Search className={className} />;
    case 'message-square': return <MessageSquare className={className} />;
    case 'shield': return <Shield className={className} />;
    case 'refresh-cw': return <RefreshCw className={className} />;
    case 'cpu': return <Cpu className={className} />;
    case 'rocket': return <Rocket className={className} />;
    case 'brain': return <Brain className={className} />;
    case 'corner-down-right': return <CornerDownRight className={className} />;
    case 'heart': return <Heart className={className} />;
    default: return <HelpCircle className={className} />;
  }
};

export default function ProblemFuture() {
  return (
    <section id="comparativa" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-24 select-none">
      
      {/* Dynamic Header */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-display font-black tracking-tight text-white uppercase"
        >
          Diagnóstico de la Educación <span className="text-stroke-cyan text-brand-cyan">Actual</span>
        </motion.h2>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-sm leading-relaxed">
          Hoy en día, el examen del <span className="text-brand-cyan font-bold">ICFES</span> no premia la memoria, premia la capacidad de razonar. Compara las dinámicas obstructivas de la repetición inercial frente a las capacidades integradas que siembra la metodología disruptiva de Eduversum.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Column: EL PROBLEMA (HOY) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between cyber-panel-red rounded-3xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden"
        >
          {/* Neon warning aura */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-2xl -z-10" />

          <div>
            {/* Column Header */}
            <div className="flex items-center gap-3 border-b border-brand-red/10 pb-4 mb-6">
              <div className="p-2.5 rounded-lg bg-brand-red/15 text-brand-red">
                <AlertTriangle className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-white text-lg tracking-wide uppercase">
                  EL PROBLEMA
                </h3>
                <span className="text-xs font-mono text-brand-red/80 font-bold uppercase tracking-widest">
                  (SITUACIÓN HOY EN DÍA)
                </span>
              </div>
            </div>

            <div className="mb-6 p-4 rounded-2xl bg-brand-red/5 border border-brand-red/20 text-xs italic text-gray-300 leading-relaxed font-sans">
              &ldquo;Hoy, la mayoría de los estudiantes aprenden para memorizar, no para pensar. Responden rápido, pero no comprenden profundo. Aprueban exámenes, pero no transfieren lo aprendido a la vida real. Y lo peor: están dejando de pensar por sí mismos. En el ICFES, eso se paga caro: porque el examen no premia la memoria, premia la capacidad de razonar.&rdquo;
            </div>

            {/* List items */}
            <div className="space-y-4">
              {PROBLEM_ITEMS.map((item) => (
                <div 
                  key={item.id}
                  className="flex items-start gap-4 p-3 rounded-2xl bg-white/2 hover:bg-white/5 border border-white/5 hover:border-brand-red/10 transition duration-200 group"
                  title="Foco de memorización inercial"
                >
                  <div className="mt-1 flex-shrink-0 text-brand-red/80 group-hover:text-brand-red group-hover:brightness-125 transition-all">
                    {getIcon(item.iconName, "w-5 h-5")}
                  </div>
                  <span className="text-gray-300 text-sm font-medium leading-relaxed group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Crimson Red Final Warning Banner */}
          <div className="mt-10 p-4 border border-brand-red bg-brand-red/10 rounded-2xl flex items-center justify-center gap-3 text-center">
            <AlertTriangle className="w-5 h-5 text-brand-red animate-pulse flex-shrink-0" />
            <span className="font-display font-extrabold text-brand-red text-xs sm:text-sm tracking-wider uppercase select-none">
              ESTAMOS DEJANDO DE ENSEÑAR A PENSAR.
            </span>
          </div>
        </motion.div>


        {/* Right Column: EL FUTURO (DESPUÉS DE EDUVERSUM) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between cyber-panel-green rounded-3xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden"
        >
          {/* Neon success aura */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-brand-green/5 rounded-full blur-2xl -z-10" />

          {/* Column Header */}
          <div className="flex items-center gap-3 border-b border-brand-green/10 pb-4 mb-6">
            <div className="p-2.5 rounded-lg bg-brand-green/15 text-brand-green">
              <Lightbulb className="w-6 h-6 text-brand-green" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-white text-lg tracking-wide uppercase">
                EL FUTURO
              </h3>
              <span className="text-xs font-mono text-brand-green/80 font-bold uppercase tracking-widest">
                (DESPUÉS DE EDUVERSUM)
              </span>
            </div>
          </div>

          {/* Grid with features and Student Image integrated */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Features list */}
            <div className="md:col-span-7 space-y-3.5">
              <div className="mb-4 p-4 rounded-2xl bg-brand-green/5 border border-brand-green/20 text-xs italic text-gray-300 leading-relaxed font-sans">
                &ldquo;Estamos construyendo un espacio donde se aprende a preguntar, investigar, argumentar con evidencia, conectar ideas de distintas áreas y aplicar el conocimiento para transformar su comunidad. Eso, sin quererlo, también mejora cualquier examen.&rdquo;
              </div>

              <span className="text-xs font-mono text-gray-400 font-semibold block mb-2 italic">
                Imagina un estudiante que:
              </span>
              
              {FUTURE_ITEMS.map((item) => {
                // Determine highlight color class in Tailwind
                let colorClass = 'text-white';
                if (item.highlightType === 'yellow') colorClass = 'text-brand-yellow font-bold';
                else if (item.highlightType === 'cyan') colorClass = 'text-brand-cyan font-bold';
                else if (item.highlightType === 'purple') colorClass = 'text-purple-400 font-bold';
                else if (item.highlightType === 'orange') colorClass = 'text-amber-400 font-bold';
                else if (item.highlightType === 'blue') colorClass = 'text-blue-400 font-bold';
                else if (item.highlightType === 'pink') colorClass = 'text-brand-pink font-bold';
                else if (item.highlightType === 'green') colorClass = 'text-brand-green font-bold';

                return (
                  <div 
                    key={item.id}
                    className="flex items-start gap-3 p-2.5 rounded-xl bg-white/2 hover:bg-white/5 border border-white/5 hover:border-brand-green/15 transition duration-150 group"
                  >
                    <div className="mt-0.5 flex-shrink-0 text-brand-green/85 group-hover:scale-110 transition-transform">
                      {getIcon(item.iconName, "w-4 h-4")}
                    </div>
                    <span className="text-gray-300 text-xs font-medium leading-relaxed">
                      {item.leadText}
                      {item.highlightText && (
                        <span className={colorClass}>
                          {item.highlightText}
                        </span>
                      )}
                      {item.endText}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Student Future Image Overlay Card */}
            <div className="md:col-span-5 h-full flex flex-col justify-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group/card bg-gray-950">
                <img 
                  src={studentFuture} 
                  alt="Estudiante del futuro con tablet" 
                  className="w-full aspect-[4/5] object-cover group-hover/card:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glassmorphic Tag */}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent">
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-2 rounded-xl text-center">
                    <span className="text-[10px] font-mono text-brand-green font-bold block tracking-wider">MÉTODO COMPRENSIVO</span>
                    <span className="text-[11px] font-bold text-white block mt-0.5">Creativo &amp; Autónomo</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
