import { motion } from 'framer-motion';
import { BookOpen, Route, Signal, Brain, Database, Users, Rocket, Target } from 'lucide-react';
import useDemoStore from '@store/useDemoStore';
import { cn } from '@utils/cn';

const LoopCanvas = () => {
  const { currentMoment } = useDemoStore();

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

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-cool-200 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <h4 className="text-xs font-bold text-cool-800 uppercase tracking-wide">
              Education-Led Growth Loop
            </h4>
            <p className="text-xs text-cool-500">
              Arquitectura del sistema
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-warm-500 animate-pulse-glow" />
              <span className="text-xs text-cool-600">Activo</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-cool-300" />
              <span className="text-xs text-cool-600">Inactivo</span>
            </div>
          </div>
        </div>

        {/* Loop Diagram */}
        <div className="flex items-center justify-between gap-2">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const isActive = activeNodes.some(n => n.id === node.id);
            const isCurrentFocus = node.moment === currentMoment;

            return (
              <div key={node.id} className="flex items-center gap-2">
                {/* Node */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: isCurrentFocus ? 1.1 : 1, 
                    opacity: isActive ? 1 : 0.4 
                  }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "relative flex flex-col items-center gap-1.5 p-3 rounded-lg transition-all cursor-pointer group",
                    isActive ? 'bg-warm-50 hover:bg-warm-100' : 'bg-cool-50',
                    isCurrentFocus && 'ring-2 ring-warm-500 ring-offset-2'
                  )}
                >
                  {/* Pulse indicator for current focus */}
                  {isCurrentFocus && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 bg-warm-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  )}

                  <div className={cn(
                    "p-2 rounded-lg transition-colors",
                    isActive ? 'bg-warm-500 text-white' : 'bg-cool-200 text-cool-500'
                  )}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={cn(
                    "text-xs font-medium transition-colors",
                    isActive ? 'text-cool-800' : 'text-cool-500'
                  )}>
                    {node.label}
                  </span>

                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full mb-2 hidden group-hover:block">
                    <div className="bg-cool-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      Momento {node.moment}
                    </div>
                  </div>
                </motion.div>

                {/* Arrow connector */}
                {index < nodes.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0.2 }}
                    className={cn(
                      "flex-shrink-0 w-6 h-0.5 transition-colors",
                      isActive ? 'bg-warm-500' : 'bg-cool-300'
                    )}
                  >
                    <div className={cn(
                      "w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 float-right",
                      isActive ? 'border-l-warm-500' : 'border-l-cool-300'
                    )} />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tech Stack */}
        <div className="mt-3 pt-3 border-t border-cool-200">
          <div className="flex items-center justify-center gap-6 text-xs text-cool-500">
            <span className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-cool-400" />
              AWS Bedrock
            </span>
            <span className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-cool-400" />
              QuickSight
            </span>
            <span className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-cool-400" />
              CRM Integration
            </span>
            <span className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-cool-400" />
              In-App SDK
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoopCanvas;
