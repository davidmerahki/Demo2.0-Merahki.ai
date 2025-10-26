import { motion } from 'framer-motion';
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
    'La Realidad Actual', // M1: Shock de Fuga
    'Por Qué Se Van', // M2: Urgencia
    'Qué Cambia con Customer Education', // M3: Credibilidad
    'Cómo Funciona (ELG en Acción)', // M4: Lógica del Sistema
    'Del Interés al Valor', // M5: Onboarding 6×
    'De Lead a Advocate', // M6: Trazabilidad 360°
    'Activa tu Estrategia ELG', // M7: CTA
    'Evita Seguir Quemando Leads', // M8: O loops... o fuga
    'Habla con tus Datos', // M9: Ask Merahki
  ];

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-4">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-2">
            {/* Logo compacto */}
            <a 
              href="https://merahki.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <h1 className="text-lg font-heading font-bold text-gradient">
                Merahki.ai
              </h1>
            </a>
            
            {/* Navegación móvil */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevMoment}
                disabled={currentMoment === 1}
                className="p-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex flex-col items-center min-w-[60px]">
                <span className="text-xs text-foreground/60 font-medium">
                  {currentMoment}/9
                </span>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={nextMoment}
                disabled={currentMoment === 9}
                className="p-1.5"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Progress bar móvil */}
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-1">
            <motion.div
              className="h-full bg-gradient-primary"
              initial={{ width: 0 }}
              animate={{ width: `${(currentMoment / 9) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
            />
          </div>
          
          {/* Título del momento - móvil */}
          <p className="text-xs text-foreground/80 font-medium text-center truncate">
            {momentTitles[currentMoment - 1]}
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Logo y Título */}
          <div className="flex items-center gap-4">
            <a 
              href="https://merahki.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <h1 className="text-2xl font-heading font-bold text-gradient">
                Merahki.ai
              </h1>
            </a>
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

          {/* Controles Centrales - Desktop */}
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
