import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Presentation, User } from 'lucide-react';
import useDemoStore from '@store/useDemoStore';
import Toggle from '@components/ui/Toggle';
import Button from '@components/ui/Button';
import { cn } from '@utils/cn';

const DemoController = () => {
  const {
    currentMoment,
    isPresenterMode,
    togglePresenterMode,
    nextMoment,
    prevMoment,
  } = useDemoStore();

  const momentTitles = [
    'La Realidad Actual',
    'Por Qué Se Van',
    'Qué Cambia con Customer Education',
    'Cómo Funciona',
    'Del Interés al Valor',
    'De Lead a Advocate',
    'Habla con tus Datos',
    'CTA: Diagnóstico ELG',
    'No Sigas Quemando Leads',
  ];

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo y Título */}
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-heading font-bold text-gradient">
              Merahki.ai
            </h1>
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />
            <div className="flex flex-col">
              <span className="text-xs text-foreground/60 font-medium">
                Momento {currentMoment} de 9
              </span>
              <span className="text-sm font-semibold text-foreground">
                {momentTitles[currentMoment - 1]}
              </span>
            </div>
          </div>

          {/* Controles Centrales */}
          <div className="flex items-center gap-4">
            {/* Navegación */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevMoment}
                disabled={currentMoment === 1}
                className="p-2"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              {/* Progress Bar */}
              <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentMoment / 9) * 100}%` }}
                  transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                />
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={nextMoment}
                disabled={currentMoment === 9}
                className="p-2"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Separador */}
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />

            {/* Toggle Modo */}
            <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-2 border border-white/10">
              <div className="flex items-center gap-2">
                <Presentation className={cn(
                  "w-4 h-4 transition-colors",
                  isPresenterMode ? "text-primary-500" : "text-foreground/40"
                )} />
                <span className={cn(
                  "text-sm font-medium transition-colors",
                  isPresenterMode ? "text-primary-500" : "text-foreground/60"
                )}>
                  Presentador
                </span>
              </div>
              
              <Toggle
                checked={!isPresenterMode}
                onChange={togglePresenterMode}
              />
              
              <div className="flex items-center gap-2">
                <User className={cn(
                  "w-4 h-4 transition-colors",
                  !isPresenterMode ? "text-primary-500" : "text-foreground/40"
                )} />
                <span className={cn(
                  "text-sm font-medium transition-colors",
                  !isPresenterMode ? "text-primary-500" : "text-foreground/60"
                )}>
                  Self-Serve
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DemoController;
