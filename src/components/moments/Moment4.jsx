import { motion } from 'framer-motion';
import { useState } from 'react';
import { pageVariants, pageTransition } from '@utils/motion';
import useDemoStore from '@store/useDemoStore';
import { Megaphone, GraduationCap, Target, BarChart3, Database, Users, Smartphone, CheckCircle2, Image, Play } from 'lucide-react';
import Badge from '@components/ui/Badge';
import Card from '@components/ui/Card';
import ScheduleButton from '@components/ui/ScheduleButton';
import ExamplesGallery from '@components/ui/ExamplesGallery';
import VideoModal from '@components/ui/VideoModal';
import { AnimatedBlob, GradientOverlay, merahkiAnimations } from '@utils/merahkiComponents';
import { momentsCopy } from '@data/momentsCopy';

const Moment4 = () => {
  const { direction } = useDemoStore();
  const [activeNode, setActiveNode] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const copy = momentsCopy.moment4;

  // Nodos del journey ELG
  const journeyNodes = [
    { id: 1, icon: Megaphone, label: 'Anuncio', color: 'primary', description: 'Campañas dirigidas a ICPs' },
    { id: 2, icon: GraduationCap, label: 'Academia', color: 'secondary', description: 'Open Onboarding Academy' },
    { id: 3, icon: Target, label: 'Ruta por Interés', color: 'accent', description: 'Personalización por caso de uso' },
    { id: 4, icon: BarChart3, label: 'Señales', color: 'primary', description: 'Engagement + temas + eventos' },
    { id: 5, icon: Database, label: 'Scoring', color: 'secondary', description: 'Progreso + evaluación + intención' },
    { id: 6, icon: Users, label: 'CRM', color: 'accent', description: 'Integración total de datos' },
    { id: 7, icon: CheckCircle2, label: 'Sales Assist', color: 'success', description: 'Next best action' },
    { id: 8, icon: Smartphone, label: 'In-App Guides', color: 'primary', description: 'Tours y checklists JTBD' }
  ];

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
      <AnimatedBlob color="accent" size="md" position="bottom-right" delay={300} />
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
            {copy.subtitle}
          </p>
          
          <div className="inline-block px-6 py-3 bg-primary-500/10 border border-primary-500/30 rounded-full">
            <p className="text-sm md:text-base font-semibold text-gradient">
              {copy.copy}
            </p>
          </div>
        </motion.div>

        {/* Journey Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: merahkiAnimations.easing }}
          className="glass-card p-8 mb-8"
        >
          <h3 className="text-xl font-heading font-semibold text-foreground mb-6 text-center">
            Recorrido Education-Led Growth
          </h3>
          
          {/* Nodos del journey */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {journeyNodes.map((node, index) => {
              const Icon = node.icon;
              const isActive = activeNode === node.id;
              
              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                  onClick={() => {
                    if (node.id === 1) {
                      // Si es el nodo "Anuncio", abrir la galería
                      setIsGalleryOpen(true);
                    } else if (node.id === 2) {
                      // Si es el nodo "Academia", abrir el video
                      setIsVideoOpen(true);
                    } else {
                      setActiveNode(isActive ? null : node.id);
                    }
                  }}
                  className="cursor-pointer"
                >
                  <div className={`
                    p-4 rounded-lg border-2 transition-all duration-300 relative h-32 flex items-center justify-center
                    ${isActive 
                      ? `bg-${node.color}-500/20 border-${node.color}-500/50 shadow-glow-md` 
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    }
                  `}>
                    {/* Indicador de galería para el nodo "Anuncio" */}
                    {node.id === 1 && (
                      <div className="absolute top-2 right-2 bg-primary-500/20 border border-primary-500/40 rounded-full p-1">
                        <Image className="w-3 h-3 text-primary-400" />
                      </div>
                    )}
                    
                    {/* Indicador de video para el nodo "Academia" */}
                    {node.id === 2 && (
                      <div className="absolute top-2 right-2 bg-secondary-500/20 border border-secondary-500/40 rounded-full p-1">
                        <Play className="w-3 h-3 text-secondary-400" />
                      </div>
                    )}
                    
                    <div className="flex flex-col items-center text-center">
                      <div className={`
                        p-3 rounded-full mb-2
                        ${isActive ? `bg-${node.color}-500/30` : 'bg-white/10'}
                      `}>
                        <Icon className={`
                          w-6 h-6
                          ${isActive ? `text-${node.color}-400` : 'text-foreground/70'}
                        `} />
                      </div>
                      <p className={`
                        text-sm font-semibold
                        ${isActive ? 'text-foreground' : 'text-foreground/80'}
                      `}>
                        {node.label}
                      </p>
                      {node.id === 1 && (
                        <p className="text-xs text-primary-400 mt-1">Ver ejemplos</p>
                      )}
                      {node.id === 2 && (
                        <p className="text-xs text-secondary-400 mt-1">Ver video</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Descripción del nodo activo */}
          {activeNode && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-4 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/30 rounded-lg"
            >
              <p className="text-sm text-foreground/80">
                {journeyNodes.find(n => n.id === activeNode)?.description}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Componentes del Sistema */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {copy.components.slice(0, 4).map((component, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: merahkiAnimations.easing }}
            >
              <Card className="h-full">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary-500/20 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary-400" />
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {component}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* NLQ QuickSight Mock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: merahkiAnimations.easing }}
          className="glass-card p-6 border-l-4 border-accent-500"
        >
          <div className="flex items-start gap-3 mb-4">
            <Database className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                Analítica Conversacional (NLQ)
              </h3>
              <p className="text-sm text-foreground/70 mb-4">
                Pregunta en lenguaje natural y obtén insights accionables
              </p>
            </div>
          </div>
          
          {/* Ejemplo de query */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-3">
            <p className="text-sm text-foreground/60 mb-2">Ejemplo de pregunta:</p>
            <p className="text-base text-foreground font-medium">
              {copy.nlqExample}
            </p>
          </div>
          
          {/* Mock de respuesta */}
          <div className="bg-gradient-to-r from-success-500/10 to-accent-500/10 border border-success-500/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-success-400" />
              <p className="text-xs text-foreground/60">Respuesta en &lt;1s</p>
            </div>
            <p className="text-sm text-foreground/80 mb-3">
              Los casos de uso más relevantes esta semana son:
            </p>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-primary-400">•</span>
                <span><strong>Automatización de workflows</strong> - 45% de engagement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary-400">•</span>
                <span><strong>Integraciones API</strong> - 32% de engagement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-400">•</span>
                <span><strong>Reportes personalizados</strong> - 28% de engagement</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* CTA - Agenda una Reunión */}
        <ScheduleButton delay={0.7} className="mt-8" />
      </div>

      {/* Galería de Ejemplos */}
      <ExamplesGallery 
        isOpen={isGalleryOpen} 
        onClose={() => setIsGalleryOpen(false)} 
      />

      {/* Modal de Video */}
      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://player.vimeo.com/video/1135191150?h=a1b2c3d4e5&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1"
        title="Open Onboarding Academy - Merahki"
      />
    </motion.div>
  );
};

export default Moment4;
