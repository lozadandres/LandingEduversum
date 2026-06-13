import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  PencilRuler, 
  Users, 
  Crown, 
  Calculator, 
  Globe, 
  Sparkles, 
  HelpCircle,
  X 
} from 'lucide-react';
import { DESTINATION_ITEMS, DestinationItem } from '../data';

// Helper to resolve icon based on data.ts setting
const getIcon = (name: string, className: string) => {
  switch (name) {
    case 'search': return <Search className={className} />;
    case 'pencil-ruler': return <PencilRuler className={className} />;
    case 'users': return <Users className={className} />;
    case 'crown': return <Crown className={className} />;
    case 'calculator': return <Calculator className={className} />;
    case 'globe': return <Globe className={className} />;
    default: return <Sparkles className={className} />;
  }
};

export default function DestinationGrid() {
  const [selectedPillar, setSelectedPillar] = useState<DestinationItem | null>(null);

  return (
    <section id="el-destino" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 select-none scroll-mt-24">
      
      {/* Title Block */}
      <div className="text-center mb-16">
        <span className="text-xs font-mono font-bold text-brand-green tracking-widest block mb-2">
          LA META COGNITIVA
        </span>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white uppercase"
        >
          EL DESTINO: PENSAR PARA <span className="text-brand-yellow font-extrabold relative drop-shadow-[0_2px_8px_rgba(252,211,77,0.2)]">TRANSFORMAR</span>
        </motion.h2>
        <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
          Haz clic en cada pilar eduversario para descubrir cómo guiamos a los estudiantes a integrar habilidades intelectuales profundas.
        </p>
      </div>

      {/* Grid containing the 6 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 items-stretch">
        {DESTINATION_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setSelectedPillar(item)}
            className={`cursor-pointer group flex flex-col justify-between rounded-2xl border border-white/5 bg-gradient-to-b ${item.color} p-5 transition-all duration-300 transform hover:-translate-y-1.5 shadow-lg relative overflow-hidden`}
          >
            {/* Subtle light glow on hover */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-white/2 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="space-y-4">
              {/* Header Icon */}
              <div className="flex justify-between items-center">
                <span className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors border border-white/5 text-current shadow-md">
                  {getIcon(item.iconName, "w-6 h-6")}
                </span>
                <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400">0{index + 1}</span>
              </div>

              {/* Text */}
              <div className="text-left mt-2">
                <h3 className="font-display font-extrabold text-base tracking-wide text-white uppercase group-hover:text-brand-yellow transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-gray-400 mt-1 line-clamp-2">
                  {item.summary}
                </p>
              </div>
            </div>

            {/* Click explore trigger */}
            <div className="text-left mt-4 text-[10px] font-mono text-brand-cyan group-hover:underline flex items-center gap-1">
              Ver Metodología &rarr;
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Modal for Selected Pillar */}
      <AnimatePresence>
        {selectedPillar && (
          <div className="fixed inset-0 bg-gray-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-gray-900 border border-white/10 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedPillar(null)}
                className="absolute top-5 right-5 p-1 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3.5 mb-6">
                <span className="p-3 bg-brand-yellow/10 rounded-2xl text-brand-yellow border border-brand-yellow/20">
                  {getIcon(selectedPillar.iconName, "w-7 h-7")}
                </span>
                <div>
                  <span className="text-[10px] font-mono text-brand-yellow font-bold uppercase tracking-wider block">PIlar de Aprendizaje</span>
                  <h3 className="font-display font-black text-2xl text-white tracking-tight uppercase">
                    {selectedPillar.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-brand-cyan text-sm font-semibold font-mono">
                  {selectedPillar.summary}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {selectedPillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex justify-end">
                <button
                  onClick={() => setSelectedPillar(null)}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-white text-gray-950 hover:bg-gray-100 transition"
                >
                  Entendido
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
