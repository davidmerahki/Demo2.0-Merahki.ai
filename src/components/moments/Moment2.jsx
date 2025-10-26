import { motion } from 'framer-motion';
import { useState } from 'react';
import { pageVariants, pageTransition } from '@utils/motion';
import useDemoStore from '@store/useDemoStore';
import { AlertCircle, BookOpen, Link as LinkIcon, TrendingDown } from 'lucide-react';
import Badge from '@components/ui/Badge';
import Card from '@components/ui/Card';
import ScheduleButton from '@components/ui/ScheduleButton';
import { AnimatedBlob, GradientOverlay, merahkiAnimations } from '@utils/merahkiComponents';
import { momentsCopy } from '@data/momentsCopy';

const Moment2 = () => {
  const { direction } = useDemoStore();
  const [approach, setApproach] = useState('link_dumping'); // 'link_dumping' | 'learning_path'
  const copy = momentsCopy.moment2;

  // Datos de supervivencia por semana
  const survivalData = {
    link_dumping: [
      { week: 0, survival: 100 },
      { week: 1, survival: 45 },
      { week: 2, survival: 30 },
      { week: 4, survival: 18 },
      { week: 8, survival: 12 },
      { week: 12, survival: 10 }
    ],
    learning_path: [
      { week: 0, survival: 100 },
      { week: 1, survival: 85 },
      { week: 2, survival: 78 },
      { week: 4, survival: 70 },
      { week: 8, survival: 65 },
      { week: 12, survival: 60 }
    ]
  };

  const currentData = survivalData[approach];
  const isLearningPath = approach === 'learning_path';

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
      <AnimatedBlob color="danger" size="lg" position="top-right" delay={0} />
      <AnimatedBlob color="primary" size="md" position="bottom-left" delay={300} />
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

        {/* Toggle Link Dumping vs Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: merahkiAnimations.easing }}
          className="flex justify-center gap-4 mb-8"
        >
          <button
            onClick={() => setApproach('link_dumping')}
            className={`
              px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2
              ${
                approach === 'link_dumping'
                  ? 'bg-danger-500/20 text-danger-400 border-2 border-danger-500/50 shadow-glow-pink'
                  : 'bg-white/5 text-foreground/70 hover:bg-white/10 border-2 border-white/10'
              }
            `}
          >
            <LinkIcon className="w-5 h-5" />
            Link Dumping
          </button>
          
          <button
            onClick={() => setApproach('learning_path')}
            className={`
              px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2
              ${
                approach === 'learning_path'
                  ? 'bg-success-500/20 text-success-400 border-2 border-success-500/50 shadow-glow-md'
                  : 'bg-white/5 text-foreground/70 hover:bg-white/10 border-2 border-white/10'
              }
            `}
          >
            <BookOpen className="w-5 h-5" />
            Learning Path
          </button>
        </motion.div>

        {/* Curva de Supervivencia */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: merahkiAnimations.easing }}
          className="glass-card p-8 mb-8"
        >
          <h3 className="text-xl font-heading font-semibold text-foreground mb-6 text-center">
            Curva de Supervivencia - 12 Semanas
          </h3>
          
          {/* Gráfico simplificado */}
          <div className="relative h-64 mb-4">
            {/* Eje Y */}
            <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-foreground/50">
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
              <span>0%</span>
            </div>
            
            {/* Área del gráfico */}
            <div className="ml-12 h-full relative">
              {/* Líneas de referencia */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0, 25, 50, 75, 100].map((val) => (
                  <div key={val} className="h-px bg-white/10" />
                ))}
              </div>
              
              {/* Curva */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                  d={currentData.map((d, i) => {
                    const x = (i / (currentData.length - 1)) * 100;
                    const y = 100 - d.survival;
                    return i === 0 ? `M ${x},${y}` : `L ${x},${y}`;
                  }).join(' ')}
                  fill="none"
                  stroke={isLearningPath ? '#22c55e' : '#ef4444'}
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: merahkiAnimations.easing }}
                />
              </svg>
              
              {/* Puntos de datos */}
              {currentData.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    left: `${(i / (currentData.length - 1)) * 100}%`,
                    top: `${100 - d.survival}%`,
                    backgroundColor: isLearningPath ? '#22c55e' : '#ef4444',
                    boxShadow: `0 0 10px ${isLearningPath ? '#22c55e' : '#ef4444'}`,
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              ))}
            </div>
            
            {/* Eje X */}
            <div className="ml-12 mt-2 flex justify-between text-xs text-foreground/50">
              <span>Semana 0</span>
              <span>Semana 4</span>
              <span>Semana 8</span>
              <span>Semana 12</span>
            </div>
          </div>
          
          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center p-3 bg-white/5 rounded-lg">
              <p className="text-xs text-foreground/60 mb-1">Semana 1</p>
              <p className={`text-2xl font-bold ${isLearningPath ? 'text-success-400' : 'text-danger-400'}`}>
                {currentData[1].survival}%
              </p>
            </div>
            <div className="text-center p-3 bg-white/5 rounded-lg">
              <p className="text-xs text-foreground/60 mb-1">Semana 4</p>
              <p className={`text-2xl font-bold ${isLearningPath ? 'text-success-400' : 'text-danger-400'}`}>
                {currentData[3].survival}%
              </p>
            </div>
            <div className="text-center p-3 bg-white/5 rounded-lg">
              <p className="text-xs text-foreground/60 mb-1">Semana 8</p>
              <p className={`text-2xl font-bold ${isLearningPath ? 'text-success-400' : 'text-danger-400'}`}>
                {currentData[4].survival}%
              </p>
            </div>
            <div className="text-center p-3 bg-white/5 rounded-lg">
              <p className="text-xs text-foreground/60 mb-1">Semana 12</p>
              <p className={`text-2xl font-bold ${isLearningPath ? 'text-success-400' : 'text-danger-400'}`}>
                {currentData[5].survival}%
              </p>
            </div>
          </div>
        </motion.div>

        {/* Comparación */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Link Dumping */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: merahkiAnimations.easing }}
          >
            <Card glass={false} hover={false} className="bg-danger-500/5 border-danger-500/20 h-full">
              <div className="flex items-start gap-3 mb-4">
                <LinkIcon className="w-6 h-6 text-danger-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-heading font-semibold text-danger-400 mb-2">
                    Link Dumping
                  </h3>
                  <p className="text-sm text-foreground/70">
                    Envíar documentación y tutoriales sin contexto
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <TrendingDown className="w-4 h-4 text-danger-400 flex-shrink-0 mt-0.5" />
                  <span>Consumo pasivo sin aplicación práctica</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingDown className="w-4 h-4 text-danger-400 flex-shrink-0 mt-0.5" />
                  <span>No cambia comportamiento del usuario</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingDown className="w-4 h-4 text-danger-400 flex-shrink-0 mt-0.5" />
                  <span>90% de churn en 12 semanas</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Learning Path */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: merahkiAnimations.easing }}
          >
            <Card glass={false} hover={false} className="bg-success-500/5 border-success-500/20 h-full">
              <div className="flex items-start gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-success-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-heading font-semibold text-success-400 mb-2">
                    Learning Path
                  </h3>
                  <p className="text-sm text-foreground/70">
                    Recorridos educativos con práctica guiada
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-success-400 flex-shrink-0 mt-0.5" />
                  <span>Micro-tareas, checklists, quizzes</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-success-400 flex-shrink-0 mt-0.5" />
                  <span>Aprendizaje aplicado al caso de uso</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-success-400 flex-shrink-0 mt-0.5" />
                  <span>60% retención en 12 semanas</span>
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>

        {/* CTA - Agenda una Reunión */}
        <ScheduleButton delay={0.7} className="mt-8" />
      </div>
    </motion.div>
  );
};

export default Moment2;
