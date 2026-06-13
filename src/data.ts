import { AlertOctagon, HelpCircle, Search, MessageSquare, Shield, RefreshCw, Cpu, Brain, Rocket, CornerDownRight, Heart } from 'lucide-react';

export interface ProblemItem {
  id: string;
  text: string;
  iconName: string;
}

export interface FutureItem {
  id: string;
  leadText: string;
  highlightText: string;
  endText?: string;
  highlightType: 'yellow' | 'cyan' | 'purple' | 'orange' | 'blue' | 'pink' | 'green' | 'default';
  iconName: string;
}

export interface BeforeAfterItem {
  id: string;
  question: string;
}

export interface DestinationItem {
  id: string;
  title: string;
  iconName: string;
  summary: string;
  description: string;
  color: string;
}

export interface BadgeItem {
  id: string;
  title: string;
  iconName: string;
  color: string;
}

export const PROBLEM_ITEMS: ProblemItem[] = [
  { id: 'p1', text: 'Responden rápido por inercia, pero sin pensamiento profundo.', iconName: 'zap' },
  { id: 'p2', text: 'Memorización ciega sin comprensión de los conceptos.', iconName: 'book-open' },
  { id: 'p3', text: 'Aprendemos únicamente para pasar un examen, no para la vida real.', iconName: 'clipboard-list' },
  { id: 'p4', text: 'No transferimos el conocimiento estructurado a nuevos retos complejos.', iconName: 'puzzle' },
  { id: 'p5', text: 'Aceptamos información sesgada o falsa de forma pasiva y sin cuestionar.', iconName: 'alert-circle' },
  { id: 'p6', text: 'No pensamos por nosotros mismos: dependemos de un guion preestablecido.', iconName: 'user-minus' }
];

export const FUTURE_ITEMS: FutureItem[] = [
  { id: 'f1', leadText: 'Formula ', highlightText: 'preguntas profundas.', highlightType: 'yellow', iconName: 'help-circle' },
  { id: 'f2', leadText: '', highlightText: 'Investiga ', endText: ' antes de emitir un juicio.', highlightType: 'cyan', iconName: 'search' },
  { id: 'f3', leadText: '', highlightText: 'Argumenta ', endText: ' con evidencia sólida e inductiva.', highlightType: 'purple', iconName: 'message-square' },
  { id: 'f4', leadText: 'Detecta información falsa y sesgos cognitivos.', highlightText: '', highlightType: 'default', iconName: 'shield' },
  { id: 'f5', leadText: '', highlightText: 'Aprende ', endText: ' de sus errores para iterar soluciones.', highlightType: 'orange', iconName: 'refresh-cw' },
  { id: 'f6', leadText: '', highlightText: 'Conecta ', endText: ' ideas críticas de distintas disciplinas.', highlightType: 'blue', iconName: 'cpu' },
  { id: 'f7', leadText: '', highlightText: 'Aplica ', endText: ' lo aprendido para transformar la realidad.', highlightType: 'yellow', iconName: 'rocket' },
  { id: 'f8', leadText: '', highlightText: 'Piensa ', endText: ' por sí mismo con total autonomía.', highlightType: 'pink', iconName: 'brain' },
  { id: 'f9', leadText: '', highlightText: 'Propone ', endText: ' soluciones innovadoras a problemas reales.', highlightType: 'orange', iconName: 'corner-down-right' },
  { id: 'f10', leadText: '', highlightText: 'Ayuda ', endText: ' a empoderar y transformar su comunidad.', highlightType: 'green', iconName: 'heart' }
];

export const BEFORE_QUESTIONS: BeforeAfterItem[] = [
  { id: 'b1', question: '¿Esto entra en el examen?' },
  { id: 'b2', question: 'Dígame la respuesta directa.' },
  { id: 'b3', question: 'Ya me la aprendí de memoria.' },
  { id: 'b4', question: '¿Para qué sirve esto en la hoja?' },
  { id: 'b5', question: 'Se me olvidó todo luego del examen.' }
];

export const AFTER_QUESTIONS: BeforeAfterItem[] = [
  { id: 'a1', question: '¿Por qué ocurre este fenómeno?' },
  { id: 'a2', question: '¿Cuáles son las evidencias científicas?' },
  { id: 'a3', question: '¿Cómo se relaciona con otras áreas?' },
  { id: 'a4', question: '¿Dónde más puedo aplicarlo en la vida real?' },
  { id: 'a5', question: '¿Qué puedo proponer o crear con esto?' }
];

export const DESTINATION_ITEMS: DestinationItem[] = [
  {
    id: 'd1',
    title: 'INVESTIGA',
    iconName: 'search',
    summary: 'Aprende a indagar con rigor',
    description: 'En Eduversum los estudiantes no solo asimilan datos. Formulan hipótesis, buscan fuentes primarias fiables, detectan sesgos y construyen conocimiento sólido mediante experimentación activa.',
    color: 'from-cyan-500/20 to-blue-500/10 hover:border-cyan-500/50 text-cyan-400'
  },
  {
    id: 'd2',
    title: 'CREA',
    iconName: 'pencil-ruler',
    summary: 'Construye el mañana',
    description: 'De consumidores a creadores interactivos. Desde prototipos robóticos hasta modelos de negocio responsables, dotamos a las personas de las herramientas técnicas y conceptuales para materializar sus ideas.',
    color: 'from-amber-500/20 to-orange-500/10 hover:border-amber-500/50 text-amber-400'
  },
  {
    id: 'd3',
    title: 'DEBATE',
    iconName: 'users',
    summary: 'Contrastación constructiva de ideas',
    description: 'Fomentamos seminarios socráticos y debates estructurados. El objetivo no es ganar, sino contrastar argumentos con rigor ético, escuchar con atención y comprender múltiples dimensiones de un problema.',
    color: 'from-purple-500/20 to-pink-500/10 hover:border-purple-500/50 text-purple-400'
  },
  {
    id: 'd4',
    title: 'LIDERA',
    iconName: 'crown',
    summary: 'Liderazgo humilde y empático',
    description: 'Formamos líderes que inspiran desde la acción. Aprenden a comunicar ideas con elocuencia, de manera persuasiva, asertiva y movilizan activamente a equipos de trabajo colaborativo.',
    color: 'from-emerald-500/20 to-teal-500/10 hover:border-emerald-500/50 text-emerald-400'
  },
  {
    id: 'd5',
    title: 'RESUELVE',
    iconName: 'calculator',
    summary: 'Enfoque algorítmico y matemático',
    description: 'Modelado y resolución de problemas complejos y abstractos. Dominan las ciencias exactas para descomponer desafíos globales en pequeñas piezas ejecutables que son resolubles en la práctica.',
    color: 'from-blue-600/20 to-indigo-600/10 hover:border-blue-500/50 text-blue-400'
  },
  {
    id: 'd6',
    title: 'TRANSFORMA',
    iconName: 'globe',
    summary: 'Evoluciona tu ecosistema',
    description: 'El destino final de la educación es el impacto ecológico y social positivo. Diseñan e implementan proyectos socioambientales directos que transforman sus vecindarios y colegios.',
    color: 'from-green-500/20 to-emerald-600/10 hover:border-green-500/50 text-green-400'
  }
];

export const BOTTOM_BADGES: BadgeItem[] = [
  { id: 'b_critical', title: 'PENSAMIENTO CRÍTICO', iconName: 'brain', color: 'text-purple-400 border-purple-500/20 bg-purple-500/5 shadow-purple-500/10' },
  { id: 'b_connection', title: 'CONEXIÓN DE IDEAS', iconName: 'network', color: 'text-pink-400 border-pink-500/20 bg-pink-500/5 shadow-pink-500/10' },
  { id: 'b_life', title: 'APRENDIZAJE PARA LA VIDA', iconName: 'rocket', color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5 shadow-cyan-500/10' },
  { id: 'b_adapt', title: 'ADAPTACIÓN AL CAMBIO', iconName: 'refresh-cw', color: 'text-yellow-400 border-yellow-500/20 bg-yellow-500/5 shadow-yellow-500/10' },
  { id: 'b_impact', title: 'IMPACTO EN SU ENTORNO', iconName: 'users-round', color: 'text-orange-400 border-orange-500/20 bg-orange-500/5 shadow-orange-500/10' }
];

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number; // 0 = Memorizador, 10 = Pensador
    explanation: string;
  }[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Cuando te enfrentas a un tema nuevo en clase o trabajo, ¿cuál es tu primera prioridad?",
    options: [
      {
        text: "Apuntar exactamente las diapositivas o palabras del profesor para memorizarlas tal cual antes del examen.",
        score: 0,
        explanation: "Mentalidad orientada a la respuesta rápida e inercia académica. Fomenta el olvido post-examen."
      },
      {
        text: "Cuestionar el origen del tema, formular preguntas profundas y descubrir cómo se conecta con la vida real.",
        score: 10,
        explanation: "Mentalidad Eduversum: Pensar para comprender, transformando memorización pasiva en conocimiento práctico."
      }
    ]
  },
  {
    id: 2,
    question: "Si cometes un error grave al resolver un problema complejo, ¿cómo actúas?",
    options: [
      {
        text: "Te frustras, buscas la respuesta directa sugerida por otro o prefieres que te digan 'el paso a paso' sin reflexionar.",
        score: 0,
        explanation: "Falta de transferencia cognitiva y evitación del error. Limita el desarrollo del razonamiento autónomo."
      },
      {
        text: "Analizas el proceso erróneo, detectas la falla y la usas de andamiaje para conectar ideas de distintas áreas.",
        score: 10,
        explanation: "Ves el error como combustible cognitivo, una oportunidad científica para reformular tus hipótesis."
      }
    ]
  },
  {
    id: 3,
    question: "Al investigar una noticia, dato o afirmación popular de internet, ¿qué pasos tomas?",
    options: [
      {
        text: "La compartes o aceptas como verdad absoluta directamente si encaja con tu opinión inicial, sin buscar evidencias claras.",
        score: 0,
        explanation: "Aceptación sin filtro de información externa. Una debilidad extendida ante contenidos sesgados o falsos."
      },
      {
        text: "Buscas evidencias, analizas múltiples perspectivas con pensamiento crítico, descartando sesgos y noticias falsas.",
        score: 10,
        explanation: "Investigación autónoma con asertividad científica. La piedra angular del liderazgo informado contemporáneo."
      }
    ]
  }
];
