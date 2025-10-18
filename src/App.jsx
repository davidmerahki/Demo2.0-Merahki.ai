import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import useDemoStore from '@store/useDemoStore';
import { cn } from '@utils/cn';
import MainNav from '@components/core/MainNav';
import DemoController from '@components/core/DemoController';
import BusinessHUD from '@components/core/BusinessHUD';
import LoopCanvas from '@components/core/LoopCanvas';
import GrowthLanding from '@components/pages/GrowthLanding';
import VirtualizationLanding from '@components/pages/VirtualizationLanding';
import Moment1 from '@components/moments/Moment1';
import Moment2 from '@components/moments/Moment2';
import Moment3 from '@components/moments/Moment3';
import Moment4 from '@components/moments/Moment4';
import Moment5 from '@components/moments/Moment5';
import Moment6 from '@components/moments/Moment6';
import Moment7 from '@components/moments/Moment7';
import Moment8 from '@components/moments/Moment8';
import Moment9 from '@components/moments/Moment9';

function App() {
  const { currentMoment } = useDemoStore();
  const [currentPage, setCurrentPage] = useState('demo');

  const moments = {
    1: Moment1,
    2: Moment2,
    3: Moment3,
    4: Moment4,
    5: Moment5,
    6: Moment6,
    7: Moment7,
    8: Moment8,
    9: Moment9,
  };

  const CurrentMoment = moments[currentMoment];

  // Renderizar landing pages
  if (currentPage === 'growth') {
    return (
      <>
        <MainNav currentPage={currentPage} onNavigate={setCurrentPage} />
        <GrowthLanding />
      </>
    );
  }

  if (currentPage === 'virtualization') {
    return (
      <>
        <MainNav currentPage={currentPage} onNavigate={setCurrentPage} />
        <VirtualizationLanding />
      </>
    );
  }

  // Renderizar demo interactivo
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Efectos de fondo globales */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow animate-delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow animate-delay-500" />
      </div>

      {/* Main Navigation */}
      <MainNav currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Demo Navigation & Controls */}
      <div className="mt-16 sm:mt-20">
        <DemoController />
      </div>

      {/* Business KPIs HUD */}
      <BusinessHUD />

      {/* Main Content Area */}
      <main className={cn(
        "relative z-10 transition-all duration-300",
        "pt-20 sm:pt-24 px-3 sm:px-6",
        currentMoment >= 4 && currentMoment <= 9 
          ? "pb-32 sm:pb-40" 
          : "pb-16 sm:pb-32"
      )}>
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <CurrentMoment key={currentMoment} />
          </AnimatePresence>
        </div>
      </main>

      {/* ELG Loop Diagram */}
      <LoopCanvas />
    </div>
  );
}

export default App;
