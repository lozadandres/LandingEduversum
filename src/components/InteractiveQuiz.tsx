import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Star, Award, RotateCcw, ArrowRight } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data';

export default function InteractiveQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOptionIndex(optionIndex);
  };

  const handleNext = () => {
    if (selectedOptionIndex === null) return;
    
    const selectedScore = QUIZ_QUESTIONS[currentQuestionIndex].options[selectedOptionIndex].score;
    const updatedAnswers = [...answers, selectedScore];
    setAnswers(updatedAnswers);
    
    setSelectedOptionIndex(null);
    if (currentQuestionIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setQuizFinished(false);
    setSelectedOptionIndex(null);
  };

  // Calculate percentage representing a deep thinker profile
  const totalScore = answers.reduce((acc, curr) => acc + curr, 0);
  const maxPossible = QUIZ_QUESTIONS.length * 10;
  const thinkingIndex = Math.round((totalScore / maxPossible) * 100);

  const getDiagnostics = () => {
    if (thinkingIndex < 40) {
      return {
        title: "Pensador Rutinario Recitador",
        desc: "Tu mentalidad actual prioriza la asimilación mecánica y pasiva para complacer evaluaciones momentáneas. Sufres de vulnerabilidad al olvido acelerado y baja transferencia de ideas ante la vida real.",
        recommendation: "Te beneficiará enormemente el pilar INVESTIGA y CREA de Eduversum para despertar tu chispa proactiva y aprender a estructurar hipótesis autónomas."
      };
    } else if (thinkingIndex < 80) {
      return {
        title: "Explorador Crítico en Potencia",
        desc: "¡Felicidades! Tienes arraigados instintos de cuestionamiento activo. Sin embargo, en ocasiones el sistema te arrastra a memorizar y depender de pasos directos por miedo a equivocarte.",
        recommendation: "Nuestros pilares DEBATE y RESUELVE te darán la oratoria, elocuencia matemática y lógica requeridas para pulir tu mentalidad y consolidarte como líder."
      };
    } else {
      return {
        title: "Agente de Transformación Global",
        desc: "Posees una mentalidad sobresaliente y libre. Cuestionas las fuentes, analizas las evidencias pragmáticas de raíz y concibes soluciones innovadoras para problemas de tu entorno.",
        recommendation: "El pilar LIDERA y TRANSFORMA de Eduversum acelerará tu camino conectándote con un ecosistema robusto de pensadores que ya están cambiando el mundo real."
      };
    }
  };

  const diag = getDiagnostics();

  return (
    <section id="quiz" className="bg-gray-950/40 border-y border-white/5 py-24 select-none scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 text-brand-pink border border-brand-pink/20 mb-3">
            <Brain className="w-3.5 h-3.5 text-brand-pink" />
            AUTODIAGNÓSTICO COGNITIVO
          </span>
          <h2 className="text-3xl font-display font-black tracking-tight text-white uppercase">
            ¿Cuál es tu tipo de mentalidad?
          </h2>
          <p className="mt-3 text-gray-400 text-sm max-w-lg mx-auto">
            Mide en qué punto te encuentras: ¿Memorizar de forma automática o Pensar para transformar con autonomía crítica?
          </p>
        </div>

        {/* Dynamic Quiz Card */}
        <div className="cyber-panel-blue rounded-3xl p-6 sm:p-8 relative overflow-hidden min-h-[420px] flex flex-col justify-between">
          <div className="absolute top-0 right-10 w-48 h-48 bg-brand-pink/5 rounded-full blur-3xl -z-10" />

          <AnimatePresence mode="wait">
            {!quizFinished ? (
              <motion.div 
                key={currentQuestionIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6 flex flex-col justify-between h-full flex-grow"
              >
                <div>
                  {/* Progress info */}
                  <div className="flex justify-between text-xs font-mono text-gray-500 font-bold mb-4">
                    <span>PREGUNTA 0{currentQuestionIndex + 1} DE 0{QUIZ_QUESTIONS.length}</span>
                    <span className="text-brand-pink">AVANCE CODIFICADO</span>
                  </div>

                  {/* Question */}
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white leading-snug">
                    {QUIZ_QUESTIONS[currentQuestionIndex].question}
                  </h3>

                  {/* Options */}
                  <div className="space-y-3 mt-6">
                    {QUIZ_QUESTIONS[currentQuestionIndex].options.map((option, idx) => {
                      const isSelected = selectedOptionIndex === idx;
                      return (
                        <div
                          key={idx}
                          onClick={() => handleOptionSelect(idx)}
                          className={`cursor-pointer border p-4 rounded-xl text-left text-sm font-semibold leading-relaxed transition transition-all ${
                            isSelected 
                              ? 'border-brand-pink bg-brand-pink/10 text-white shadow-lg' 
                              : 'border-white/5 bg-white/2 text-gray-300 hover:bg-white/5 hover:border-white/10'
                          }`}
                        >
                          {option.text}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Next button */}
                <div className="mt-8 pt-4 flex justify-end border-t border-white/5">
                  <button
                    onClick={handleNext}
                    disabled={selectedOptionIndex === null}
                    className={`px-6 py-2.5 rounded-xl font-bold flex items-center gap-1.5 transition text-xs uppercase ${
                      selectedOptionIndex !== null
                        ? 'bg-brand-pink text-white hover:brightness-110 cursor-pointer shadow-lg shadow-brand-pink/20'
                        : 'bg-white/5 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Siguiente Pregunta <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 flex flex-col items-center justify-between h-full flex-grow"
              >
                <div className="space-y-6">
                  {/* Badge */}
                  <div className="p-4 rounded-full bg-brand-pink/15 text-brand-pink inline-block mb-2 animate-bounce">
                    <Award className="w-10 h-10 text-brand-pink" />
                  </div>

                  {/* Thinking score */}
                  <div>
                    <span className="text-xs font-mono font-bold text-gray-400 block tracking-widest uppercase">
                      ÍNDICE CONTEMPORÁNEO COGNITIVO
                    </span>
                    <h3 className="text-5xl font-display font-black text-white mt-1">
                      {thinkingIndex}% <span className="text-sm font-semibold text-brand-pink/90">PENSADOR</span>
                    </h3>
                  </div>

                  {/* Diagnostics Description */}
                  <div className="text-left bg-white/2 border border-white/5 p-5 rounded-2xl max-w-xl mx-auto space-y-3">
                    <h4 className="font-display font-extrabold text-base text-brand-pink uppercase tracking-wide">
                      Perfil: {diag.title}
                    </h4>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {diag.desc}
                    </p>
                    <div className="pt-2.5 border-t border-white/5 text-[11px] text-brand-yellow font-medium leading-relaxed">
                      <span className="font-bold uppercase tracking-wider block mb-1">RECOMIENDA EDUVERSUM:</span>
                      {diag.recommendation}
                    </div>
                  </div>
                </div>

                {/* Reset Trigger */}
                <div className="mt-10 pt-4 border-t border-white/5 w-full flex justify-center">
                  <button
                    onClick={resetQuiz}
                    className="px-6 py-2.5 rounded-xl font-bold bg-white text-gray-950 hover:bg-gray-100 transition mr-4 text-xs font-mono flex items-center gap-2 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" /> REINICIAR TEST
                  </button>
                  <a
                    href="#contacto"
                    className="px-6 py-2.5 rounded-xl font-bold bg-gradient-to-r from-brand-cyan to-brand-green text-gray-950 hover:brightness-110 transition text-xs font-mono flex items-center gap-1"
                  >
                    Únete a la Lista &rarr;
                  </a>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
