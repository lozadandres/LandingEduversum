/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import ProblemFuture from './components/ProblemFuture';
import BeforeAfter from './components/BeforeAfter';
import DestinationGrid from './components/DestinationGrid';
import InteractiveQuiz from './components/InteractiveQuiz';
import FooterSection from './components/FooterSection';

export default function App() {
  return (
    <div className="mesh-bg min-h-screen text-white font-sans overflow-x-hidden selection:bg-brand-cyan selection:text-gray-900 scroll-smooth">
      {/* 1. Header / Hero and Brand Statement */}
      <Header />

      {/* 2. Analytical Diagnostic: El Problema (Hoy) vs El Futuro (Después) */}
      <ProblemFuture />

      {/* 3. Interactive Transition: Antes vs Después */}
      <BeforeAfter />

      {/* 4. Strategic Pillars: El Destino (Pensar para transformar) */}
      <DestinationGrid />

      {/* 5. Gamified Insight: Autodiagnóstico de Mentalidad */}
      <InteractiveQuiz />

      {/* 6. Philosophy & Final Badges waitlist */}
      <FooterSection />
    </div>
  );
}

