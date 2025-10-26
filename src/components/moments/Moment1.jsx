import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { pageVariants, pageTransition } from '@utils/motion';
import useDemoStore from '@store/useDemoStore';
import { TrendingDown, Users, MousePointerClick, Zap, Play, Pause, RotateCcw } from 'lucide-react';
import Badge from '@components/ui/Badge';
import StatCard from '@components/ui/StatCard';
import ScheduleButton from '@components/ui/ScheduleButton';
import { AnimatedBlob, GradientOverlay, merahkiAnimations } from '@utils/merahkiComponents';
import { momentsCopy } from '@data/momentsCopy';

const Moment1 = () => {
  const { direction } = useDemoStore();
  const [currentWeek, setCurrentWeek] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const copy = momentsCopy.moment1;

  // Datos granulares por cada semana (1-12)
  const activationData = {
    1: { active: 100, churned: 0, ctr: 3.2, cvr: 2.1, ttv: 14, users: 1000 },
    2: { active: 75, churned: 25, ctr: 3.0, cvr: 2.0, ttv: 14, users: 750 },
    3: { active: 58, churned: 42, ctr: 2.8, cvr: 1.9, ttv: 14, users: 580 },
    4: { active: 45, churned: 55, ctr: 2.6, cvr: 1.8, ttv: 14, users: 450 },
    5: { active: 35, churned: 65, ctr: 2.4, cvr: 1.7, ttv: 14, users: 350 },
    6: { active: 28, churned: 72, ctr: 2.3, cvr: 1.6, ttv: 14, users: 280 },
    7: { active: 22, churned: 78, ctr: 2.2, cvr: 1.5, ttv: 14, users: 220 },
    8: { active: 18, churned: 82, ctr: 2.1, cvr: 1.4, ttv: 14, users: 180 },
    9: { active: 15, churned: 85, ctr: 2.0, cvr: 1.3, ttv: 14, users: 150 },
    10: { active: 12, churned: 88, ctr: 1.9, cvr: 1.2, ttv: 14, users: 120 },
    11: { active: 11, churned: 89, ctr: 1.8, cvr: 1.2, ttv: 14, users: 110 },
    12: { active: 10, churned: 90, ctr: 1.8, cvr: 1.1, ttv: 14, users: 100 }
  };

  const currentData = activationData[currentWeek];

  // Auto-play inicial
  useEffect(() => {
    if (!hasAutoPlayed) {
      const timer = setTimeout(() => {
        setIsPlaying(true);
        setHasAutoPlayed(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [hasAutoPlayed]);

  // Animación de auto-play (cada 2 segundos)
  useEffect(() => {
    if (isPlaying && currentWeek < 12) {
      const timer = setTimeout(() => {
        setCurrentWeek(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else if (currentWeek >= 12) {
      setIsPlaying(false);
    }
  }, [isPlaying, currentWeek]);

  const handlePlayPause = () => {
    if (currentWeek >= 12) {
      setCurrentWeek(1);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleReset = () => {
    setCurrentWeek(1);
    setIsPlaying(false);
  };

  return (
    <motion.div
      custom={direction}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="w-full h-full flex items-center justify-center bg-background relative overflow-hidden"
    >
      {/* Efectos de fondo */}
      <AnimatedBlob color="danger" size="lg" position="top-left" delay={0} />
      <AnimatedBlob color="primary" size="md" position="bottom-right" delay={300} />
      <GradientOverlay direction="to-b" opacity="default" />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          {...merahkiAnimations.fadeInUp}
        >
          <Badge gradient className="mb-6">
            {copy.badge}
          </Badge>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gradient mb-4">
            {copy.title}
          </h2>
          
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-4">
            {copy.description}
          </p>
          
          <div className="inline-block px-6 py-3 bg-danger-500/10 border border-danger-500/30 rounded-full">
            <p className="text-sm md:text-base font-semibold text-danger-400">
              {copy.copy}
            </p>
          </div>
        </motion.div>

        {/* Visualización de Embudo con Usuarios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: merahkiAnimations.easing }}
          className="glass-card p-6 max-w-4xl mx-auto mb-8"
        >
          {/* Header con controles */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                Semana {currentWeek} de 12
              </h3>
              <p className="text-xs text-foreground/60">
                {currentData.users} usuarios de 1,000 iniciales
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleReset}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                title="Reiniciar"
              >
                <RotateCcw className="w-4 h-4 text-foreground/60" />
              </button>
              <button
                onClick={handlePlayPause}
                className="p-2 rounded-lg bg-gradient-primary hover:opacity-90 transition-opacity"
                title={isPlaying ? 'Pausar' : 'Reproducir'}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 text-white" />
                ) : (
                  <Play className="w-4 h-4 text-white" />
                )}
              </button>
              <div className="flex items-center gap-2">
                <motion.span 
                  key={currentData.active}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  className={`text-2xl font-bold ${
                    currentData.active > 50 ? 'text-success-400' : 
                    currentData.active > 25 ? 'text-warning-400' : 
                    'text-danger-400'
                  }`}
                >
                  {currentData.active}%
                </motion.span>
                <span className="text-xs text-foreground/60">activos</span>
              </div>
            </div>
          </div>

          {/* Visualización de embudo con usuarios */}
          <div className="mb-6 p-8 bg-white/5 rounded-xl">
            <div className="space-y-3">
              {/* Representación visual del embudo */}
              <div className="flex items-center justify-center gap-4">
                {/* Usuarios Activos */}
                <motion.div 
                  className="flex flex-col items-center gap-2 flex-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-xs font-semibold text-success-400 uppercase tracking-wide">
                    Activos
                  </div>
                  <div className="w-full h-32 bg-gradient-to-br from-success-400/20 to-success-600/20 rounded-lg flex items-end justify-center overflow-visible relative">
                    <motion.div 
                      className="w-full bg-gradient-to-br from-success-400 to-success-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg absolute bottom-0"
                      initial={{ height: '100%' }}
                      animate={{ 
                        height: `${Math.max(40, currentData.active)}%`
                      }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="text-center py-2">
                        <div className="text-2xl leading-tight">{currentData.active}%</div>
                        <div className="text-[10px] opacity-90 mt-0.5">{currentData.users} usuarios</div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Separador con flecha */}
                <div className="flex flex-col items-center gap-2 text-foreground/40">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                {/* Usuarios Perdidos */}
                <motion.div 
                  className="flex flex-col items-center gap-2 flex-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="text-xs font-semibold text-danger-400 uppercase tracking-wide">
                    Perdidos
                  </div>
                  <div className="w-full h-32 bg-gradient-to-br from-danger-400/20 to-danger-600/20 rounded-lg flex items-end justify-center overflow-visible relative">
                    <motion.div 
                      className="w-full bg-gradient-to-br from-danger-400 to-danger-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg absolute bottom-0"
                      initial={{ height: '0%' }}
                      animate={{ 
                        height: `${Math.max(40, currentData.churned)}%`
                      }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="text-center py-2">
                        <div className="text-2xl leading-tight">{currentData.churned}%</div>
                        <div className="text-[10px] opacity-90 mt-0.5">{1000 - currentData.users} usuarios</div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Grid de puntos representativos (más compacto) */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1 justify-center max-w-2xl mx-auto">
                  {Array.from({ length: 50 }).map((_, index) => {
                    const isActive = index < Math.round((currentData.active / 100) * 50);
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{
                          scale: isActive ? 1 : 0.8,
                          opacity: isActive ? 1 : 0.3
                        }}
                        transition={{ 
                          duration: 0.8,
                          delay: index * 0.015,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className={`w-2.5 h-2.5 rounded-full ${
                          isActive 
                            ? 'bg-success-500' 
                            : 'bg-danger-500'
                        }`}
                      />
                    );
                  })}
                </div>
                <p className="text-center text-xs text-foreground/50 mt-3">
                  Cada punto representa 20 usuarios (1,000 total)
                </p>
              </div>
            </div>
          </div>

          {/* Slider mejorado */}
          <div className="mb-4">
            <input
              type="range"
              min="1"
              max="12"
              step="1"
              value={currentWeek}
              onChange={(e) => {
                setCurrentWeek(Number(e.target.value));
                setIsPlaying(false);
              }}
              className="w-full h-3 bg-white/10 rounded-full appearance-none cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-5
                [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-gradient-to-r
                [&::-webkit-slider-thumb]:from-danger-500
                [&::-webkit-slider-thumb]:to-danger-600
                [&::-webkit-slider-thumb]:shadow-lg
                [&::-webkit-slider-thumb]:shadow-danger-500/50
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-webkit-slider-thumb]:transition-transform
                [&::-webkit-slider-thumb]:hover:scale-110"
            />
            
            <div className="flex justify-between mt-2 text-xs text-foreground/50">
              <span>Semana 1 (100%)</span>
              <span>Semana 6 (28%)</span>
              <span>Semana 12 (10%)</span>
            </div>
          </div>
          
          {/* Barra de progreso mejorada */}
          <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-success-500 via-warning-500 to-danger-500"
              initial={{ width: '100%' }}
              animate={{ width: `${currentData.active}%` }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="absolute inset-0 flex items-center justify-between px-2">
              <span className="text-[10px] font-bold text-white drop-shadow-lg">
                {currentData.active}% Activos
              </span>
              <span className="text-[10px] font-bold text-white/80 drop-shadow-lg">
                {currentData.churned}% Perdidos
              </span>
            </div>
          </div>
          
          {/* Mensaje contextual */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWeek}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 text-center"
            >
              <p className="text-sm text-foreground/70">
                {currentWeek === 1 && "🎯 Inicio: Todos los usuarios están activos"}
                {currentWeek >= 2 && currentWeek <= 4 && "⚠️ Primeras semanas: Sin onboarding claro"}
                {currentWeek >= 5 && currentWeek <= 8 && "🚨 Fuga acelerada: No encuentran valor"}
                {currentWeek >= 9 && currentWeek <= 11 && "💔 Pérdida crítica: Solo los más persistentes quedan"}
                {currentWeek === 12 && "☠️ Resultado: 90% de churn en 12 semanas"}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <StatCard
            icon={MousePointerClick}
            label="CTR → CVR"
            value={`${currentData.ctr}% → ${currentData.cvr}%`}
            variant="danger"
            delay={0.3}
          />
          <StatCard
            icon={Users}
            label="Activación Semana 1-12"
            value={currentData.active}
            suffix="%"
            trend="down"
            trendValue={`-${currentData.churned}%`}
            variant="danger"
            delay={0.4}
          />
          <StatCard
            icon={Zap}
            label="Time to Value"
            value={currentData.ttv}
            suffix=" días"
            variant="danger"
            delay={0.5}
          />
        </div>

        {/* Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: merahkiAnimations.easing }}
          className="glass-card p-6 max-w-3xl mx-auto border-l-4 border-danger-500"
        >
          <div className="flex items-start gap-3">
            <TrendingDown className="w-6 h-6 text-danger-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                El Problema Real
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {copy.insight}
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA - Agenda una Reunión */}
        <ScheduleButton delay={0.7} className="mt-8" />
      </div>
    </motion.div>
  );
};

export default Moment1;
