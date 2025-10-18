import { motion } from 'framer-motion';
import { BookOpen, Route, Signal, Brain, Database, Users, Rocket, Target } from 'lucide-react';
import useDemoStore from '@store/useDemoStore';
import { cn } from '@utils/cn';

const LoopCanvas = () => {
  const { currentMoment } = useDemoStore();

  // Solo mostrar en momentos 4-9 donde el loop es relevante
  const shouldShow = currentMoment >= 4 && currentMoment <= 9;

  const nodes = [
    { id: 1, label: 'Academia', icon: BookOpen, moment: 4 },
    { id: 2, label: 'Rutas', icon: Route, moment: 4 },
    { id: 3, label: 'Señales', icon: Signal, moment: 4 },
    { id: 4, label: 'Scoring', icon: Brain, moment: 4 },
    { id: 5, label: 'CRM', icon: Database, moment: 6 },
    { id: 6, label: 'Sales', icon: Users, moment: 5 },
    { id: 7, label: 'Guides', icon: Rocket, moment: 5 },
    { id: 8, label: 'Insights', icon: Target, moment: 7 },
  ];

  const activeNodes = nodes.filter(node => {
    if (currentMoment >= 4 && currentMoment <= 9) {
      return node.moment <= currentMoment;
    }
    return false;
  });

  // No renderizar si no debe mostrarse
  if (!shouldShow) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-0 left-0 right-0 z-30 bg-background/95 backdrop-blur-xl border-t border-white/10 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-2 sm:py-3">
        {/* Header compacto */}
        <div className="flex items-center justify-between mb-1.5 sm:mb-2">
          <div>
            <h4 className="text-[10px] sm:text-xs font-semibold text-foreground uppercase tracking-wide">
              ELG Loop
            </h4>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-success-500 animate-pulse" />
              <span className="text-xs text-foreground/60">Activo</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
              <span className="text-xs text-foreground/40">Inactivo</span>
            </div>
          </div>
        </div>

        {/* Loop Diagram - scroll horizontal en móvil */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex items-center justify-start sm:justify-between gap-1 sm:gap-1.5 min-w-max sm:min-w-0">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const isActive = activeNodes.some(n => n.id === node.id);
            const isCurrentFocus = node.moment === currentMoment;

            return (
              <div key={node.id} className="flex items-center gap-1.5">
                {/* Node */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: isCurrentFocus ? 1.05 : 1, 
                    opacity: isActive ? 1 : 0.3 
                  }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "relative flex flex-col items-center gap-0.5 sm:gap-1 p-1.5 sm:p-2 rounded-lg transition-all cursor-pointer group",
                    isActive ? 'bg-primary-500/10 hover:bg-primary-500/20' : 'bg-white/5',
                    isCurrentFocus && 'ring-1 sm:ring-2 ring-primary-500'
                  )}
                >
                  {/* Pulse indicator for current focus */}
                  {isCurrentFocus && (
                    <motion.div
                      className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary-500 rounded-full"
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  )}

                  <div className={cn(
                    "p-1 sm:p-1.5 rounded-lg transition-colors",
                    isActive ? 'bg-gradient-primary text-white' : 'bg-white/10 text-foreground/40'
                  )}>
                    <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <span className={cn(
                    "text-[9px] sm:text-[10px] font-medium transition-colors whitespace-nowrap",
                    isActive ? 'text-foreground' : 'text-foreground/40'
                  )}>
                    {node.label}
                  </span>

                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full mb-2 hidden group-hover:block z-50">
                    <div className="bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap">
                      Momento {node.moment}
                    </div>
                  </div>
                </motion.div>

                {/* Arrow connector */}
                {index < nodes.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0.2 }}
                    className="flex-shrink-0 flex items-center"
                  >
                    <div className={cn(
                      "w-2 sm:w-4 h-[1.5px] sm:h-[2px] transition-colors",
                      isActive ? 'bg-primary-500' : 'bg-white/20'
                    )} />
                    <div className={cn(
                      "w-0 h-0 border-t-[2px] sm:border-t-[3px] border-t-transparent border-b-[2px] sm:border-b-[3px] border-b-transparent border-l-[3px] sm:border-l-[4px]",
                      isActive ? 'border-l-primary-500' : 'border-l-white/20'
                    )} />
                  </motion.div>
                )}
              </div>
            );
          })}
          </div>
        </div>

        {/* Tech Stack - más compacto */}
        <div className="hidden sm:block mt-2 pt-2 border-t border-white/10">
          <div className="flex items-center justify-center gap-3 sm:gap-4 text-[9px] sm:text-[10px] text-foreground/50">
            <span className="flex items-center gap-0.5 sm:gap-1">
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-accent-500" />
              AWS Bedrock
            </span>
            <span className="flex items-center gap-0.5 sm:gap-1">
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-accent-500" />
              QuickSight
            </span>
            <span className="flex items-center gap-0.5 sm:gap-1">
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-accent-500" />
              CRM
            </span>
            <span className="flex items-center gap-0.5 sm:gap-1">
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-accent-500" />
              In-App SDK
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoopCanvas;
