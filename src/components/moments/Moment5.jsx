import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { pageVariants, pageTransition } from '@utils/motion';
import useDemoStore from '@store/useDemoStore';
import { CheckCircle2, Circle, Zap, Clock, Sparkles } from 'lucide-react';
import Badge from '@components/ui/Badge';
import Card from '@components/ui/Card';
import { AnimatedBlob, GradientOverlay, merahkiAnimations } from '@utils/merahkiComponents';
import { momentsCopy } from '@data/momentsCopy';

const Moment5 = () => {
  const { direction } = useDemoStore();
  const copy = momentsCopy.moment5;
  const [completedJTBD, setCompletedJTBD] = useState([]);
  const [showAha, setShowAha] = useState(false);
  const [ttv, setTtv] = useState(14); // Días

  // JTBD (Jobs To Be Done)
  const jtbdList = [
    { id: 1, task: 'Conectar primera fuente de datos', impact: 4 },
    { id: 2, task: 'Crear primer dashboard personalizado', impact: 3 },
    { id: 3, task: 'Configurar alertas automáticas', impact: 2 },
    { id: 4, task: 'Invitar miembros del equipo', impact: 2 },
    { id: 5, task: 'Completar primer análisis de datos', impact: 3 }
  ];

  // Calcular TTV basado en tareas completadas
  useEffect(() => {
    const completionRate = completedJTBD.length / jtbdList.length;
    const newTTV = 14 - (completionRate * 11.7); // De 14 días a 2.3 días (70% reducción)
    setTtv(newTTV);
    
    // Mostrar Aha! cuando se completan todas las tareas
    if (completedJTBD.length === jtbdList.length && !showAha) {
      setShowAha(true);
      setTimeout(() => setShowAha(false), 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completedJTBD]);

  const toggleJTBD = (id) => {
    setCompletedJTBD(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const completionPercentage = (completedJTBD.length / jtbdList.length) * 100;

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
      <AnimatedBlob color="success" size="lg" position="top-left" delay={0} />
      <AnimatedBlob color="primary" size="md" position="bottom-right" delay={300} />
      <GradientOverlay direction="to-b" opacity="default" />

      {/* Animación Aha! */}
      <AnimatePresence>
        {showAha && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 0.6, repeat: 2 }}
                className="text-8xl"
              >
                🎉
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <p className="text-4xl font-heading font-bold text-gradient">
                  ¡Aha Moment!
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
          
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-success-500/10 border border-success-500/30 rounded-full">
            <Sparkles className="w-5 h-5 text-success-400" />
            <p className="text-sm md:text-base font-semibold text-gradient">
              {copy.copy}
            </p>
          </div>
        </motion.div>

        {/* Cronómetro TTV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: merahkiAnimations.easing }}
          className="glass-card p-6 max-w-3xl mx-auto mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-primary-400" />
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Time to Value
              </h3>
            </div>
            <motion.div
              key={ttv.toFixed(1)}
              initial={{ scale: 1.2, color: '#22c55e' }}
              animate={{ scale: 1, color: '#ffffff' }}
              className="text-right"
            >
              <p className="text-4xl font-bold text-gradient">
                {ttv.toFixed(1)}
              </p>
              <p className="text-sm text-foreground/60">días</p>
            </motion.div>
          </div>
          
          {/* Barra de progreso */}
          <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-success-500 to-primary-500"
              initial={{ width: 0 }}
              animate={{ width: `${completionPercentage}%` }}
              transition={{ duration: 0.5, ease: merahkiAnimations.easing }}
            />
          </div>
          
          <div className="flex justify-between mt-2 text-xs text-foreground/50">
            <span>14 días (sin educación)</span>
            <span>2.3 días (con ELG)</span>
          </div>
        </motion.div>

        {/* Checklist JTBD */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Lista de tareas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: merahkiAnimations.easing }}
          >
            <Card>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Jobs To Be Done
              </h3>
              <p className="text-sm text-foreground/60 mb-6">
                Completa estas tareas críticas para alcanzar tu Aha Moment
              </p>
              
              <div className="space-y-3">
                {jtbdList.map((jtbd, index) => {
                  const isCompleted = completedJTBD.includes(jtbd.id);
                  
                  return (
                    <motion.div
                      key={jtbd.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      onClick={() => toggleJTBD(jtbd.id)}
                      className={`
                        p-4 rounded-lg border-2 cursor-pointer transition-all duration-300
                        ${isCompleted 
                          ? 'bg-success-500/10 border-success-500/50' 
                          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                        }
                      `}
                    >
                      <div className="flex items-start gap-3">
                        {isCompleted ? (
                          <CheckCircle2 className="w-6 h-6 text-success-400 flex-shrink-0" />
                        ) : (
                          <Circle className="w-6 h-6 text-foreground/40 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <p className={`
                            text-sm font-medium
                            ${isCompleted ? 'text-foreground line-through' : 'text-foreground/80'}
                          `}>
                            {jtbd.task}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <Zap className="w-3 h-3 text-primary-400" />
                            <p className="text-xs text-foreground/50">
                              Impacto: {'★'.repeat(jtbd.impact)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          {/* Resultados */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: merahkiAnimations.easing }}
          >
            <Card glass={false} className="bg-gradient-to-br from-success-500/10 to-primary-500/10 border-success-500/20 h-full">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Impacto del Onboarding Educativo
              </h3>
              
              <div className="space-y-6">
                {/* Progreso */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-foreground/70">Progreso</p>
                    <p className="text-2xl font-bold text-gradient">
                      {completionPercentage.toFixed(0)}%
                    </p>
                  </div>
                  <p className="text-xs text-foreground/50">
                    {completedJTBD.length} de {jtbdList.length} tareas completadas
                  </p>
                </div>

                {/* Multiplicador */}
                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-primary-400" />
                    <p className="text-sm font-semibold text-foreground">
                      Multiplicador de Efectividad
                    </p>
                  </div>
                  <p className="text-4xl font-bold text-gradient mb-1">
                    {copy.multiplier}
                  </p>
                  <p className="text-xs text-foreground/60">
                    vs onboarding tradicional
                  </p>
                </div>

                {/* Insight */}
                <div className="p-4 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/30 rounded-lg">
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {copy.result}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Moment5;
