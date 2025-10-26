import { motion } from 'framer-motion';
import { useState } from 'react';
import { pageVariants, pageTransition } from '@utils/motion';
import useDemoStore from '@store/useDemoStore';
import { TrendingDown, TrendingUp, Zap, RefreshCw } from 'lucide-react';
import Badge from '@components/ui/Badge';
import Card from '@components/ui/Card';
import ScheduleButton from '@components/ui/ScheduleButton';
import { AnimatedBlob, GradientOverlay, merahkiAnimations } from '@utils/merahkiComponents';
import { momentsCopy } from '@data/momentsCopy';

const Moment8 = () => {
  const { direction } = useDemoStore();
  const [retentionRate, setRetentionRate] = useState(0.4); // 'b' en la fórmula 1/(1-b)
  const copy = momentsCopy.moment8;

  // Calcular multiplicador del loop: 1/(1-b)
  const calculateMultiplier = (b) => {
    if (b >= 1) return Infinity;
    return 1 / (1 - b);
  };

  const multiplier = calculateMultiplier(retentionRate);
  const displayMultiplier = multiplier === Infinity ? '∞' : multiplier.toFixed(2);

  // Simular crecimiento en 12 meses
  const calculateGrowth = (months, hasEducation) => {
    if (!hasEducation) {
      // Sin educación: crecimiento lineal bajo
      return Array.from({ length: months }, (_, i) => ({
        month: i,
        value: 100 + (i * 5) // Crecimiento lineal 5% por mes
      }));
    }
    // Con educación: crecimiento compuesto
    return Array.from({ length: months }, (_, i) => ({
      month: i,
      value: 100 * Math.pow(1 + (retentionRate * 0.5), i) // Crecimiento compuesto
    }));
  };

  const withoutEducation = calculateGrowth(12, false);
  const withEducation = calculateGrowth(12, true);

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
      <AnimatedBlob color="primary" size="lg" position="top-left" delay={0} />
      <AnimatedBlob color="secondary" size="lg" position="bottom-right" delay={300} />
      <AnimatedBlob color="accent" size="md" position="center" delay={500} />
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
          
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-danger-500/20 to-primary-500/20 border border-primary-500/30 rounded-full">
            <p className="text-sm md:text-base font-semibold text-gradient">
              {copy.copy}
            </p>
          </div>
        </motion.div>

        {/* Slider de Retención */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: merahkiAnimations.easing }}
          className="glass-card p-6 max-w-3xl mx-auto mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <RefreshCw className="w-5 h-5 text-primary-400" />
              <label className="text-sm font-semibold text-foreground/80">
                Tasa de Retención del Loop (b)
              </label>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-gradient">
                {(retentionRate * 100).toFixed(0)}%
              </span>
            </div>
          </div>
          
          <input
            type="range"
            min="0"
            max="0.9"
            step="0.05"
            value={retentionRate}
            onChange={(e) => setRetentionRate(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-4
              [&::-webkit-slider-thumb]:h-4
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-gradient-primary
              [&::-webkit-slider-thumb]:shadow-glow-md
              [&::-webkit-slider-thumb]:cursor-pointer"
          />
          
          <div className="flex justify-between mt-2 text-xs text-foreground/50">
            <span>0% (Sin reinversión)</span>
            <span>90% (Loop fuerte)</span>
          </div>
          
          {/* Multiplicador */}
          <div className="mt-6 p-4 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/30 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-foreground/60 mb-1">Multiplicador del Loop</p>
                <p className="text-sm text-foreground/70">Fórmula: 1 / (1 - b)</p>
              </div>
              <motion.div
                key={displayMultiplier}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="text-4xl font-bold text-gradient"
              >
                {displayMultiplier}×
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Comparación Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Sin Educación */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: merahkiAnimations.easing }}
          >
            <Card glass={false} hover={false} className="bg-danger-500/5 border-danger-500/20 h-full">
              <div className="flex items-start gap-3 mb-4">
                <TrendingDown className="w-6 h-6 text-danger-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-heading font-semibold text-danger-400 mb-2">
                    Sin Educación
                  </h3>
                  <p className="text-sm text-foreground/70">
                    Fuga constante de leads
                  </p>
                </div>
              </div>
              
              {/* Gráfico simplificado */}
              <div className="relative h-32 mb-4">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.path
                    d={`M 0,${100 - (withoutEducation[0].value - 100)} ${withoutEducation.map((d, i) => {
                      const x = (i / (withoutEducation.length - 1)) * 100;
                      const y = 100 - (d.value - 100);
                      return `L ${x},${y}`;
                    }).join(' ')}`}
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: merahkiAnimations.easing }}
                  />
                </svg>
              </div>
              
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <span className="text-danger-400">•</span>
                  <span>Crecimiento lineal bajo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-danger-400">•</span>
                  <span>CAC alto y constante</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-danger-400">•</span>
                  <span>Sin efecto compuesto</span>
                </li>
              </ul>
              
              <div className="mt-4 p-3 bg-danger-500/10 rounded-lg">
                <p className="text-xs text-foreground/60 mb-1">Crecimiento a 12 meses</p>
                <p className="text-2xl font-bold text-danger-400">
                  +{(withoutEducation[11].value - 100).toFixed(0)}%
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Con Educación */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: merahkiAnimations.easing }}
          >
            <Card glass={false} hover={false} className="bg-success-500/5 border-success-500/20 h-full">
              <div className="flex items-start gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-success-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-heading font-semibold text-success-400 mb-2">
                    Con Educación (Loop ELG)
                  </h3>
                  <p className="text-sm text-foreground/70">
                    Crecimiento compuesto
                  </p>
                </div>
              </div>
              
              {/* Gráfico simplificado */}
              <div className="relative h-32 mb-4">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.path
                    d={`M 0,${100 - (withEducation[0].value - 100)} ${withEducation.map((d, i) => {
                      const x = (i / (withEducation.length - 1)) * 100;
                      const y = Math.max(0, 100 - (d.value - 100));
                      return `L ${x},${y}`;
                    }).join(' ')}`}
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.2, ease: merahkiAnimations.easing }}
                  />
                </svg>
              </div>
              
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <span className="text-success-400">•</span>
                  <span>Crecimiento exponencial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-400">•</span>
                  <span>Reinversión de learnings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-400">•</span>
                  <span>Efecto multiplicador {displayMultiplier}×</span>
                </li>
              </ul>
              
              <div className="mt-4 p-3 bg-success-500/10 rounded-lg">
                <p className="text-xs text-foreground/60 mb-1">Crecimiento a 12 meses</p>
                <p className="text-2xl font-bold text-success-400">
                  +{(withEducation[11].value - 100).toFixed(0)}%
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Insight del Loop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: merahkiAnimations.easing }}
          className="glass-card p-6 max-w-3xl mx-auto border-l-4 border-primary-500"
        >
          <div className="flex items-start gap-3">
            <Zap className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                El Poder del Loop Educativo
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-3">
                {copy.loopPower}
              </p>
              <p className="text-sm text-foreground/60 italic">
                {copy.cta}
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

export default Moment8;
