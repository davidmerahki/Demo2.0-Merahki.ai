import { motion } from 'framer-motion';
import { useState } from 'react';
import { pageVariants, pageTransition } from '@utils/motion';
import useDemoStore from '@store/useDemoStore';
import { User, GraduationCap, Target, MessageSquare, Star, TrendingUp, Award, CheckCircle2 } from 'lucide-react';
import Badge from '@components/ui/Badge';
import Card from '@components/ui/Card';
import { AnimatedBlob, GradientOverlay, merahkiAnimations } from '@utils/merahkiComponents';
import { momentsCopy } from '@data/momentsCopy';

const Moment6 = () => {
  const { direction } = useDemoStore();
  const copy = momentsCopy.moment6;
  const [showAttribution, setShowAttribution] = useState(true);
  const selectedUser = 'user1'; // Usuario por defecto

  // Timeline de usuario con atribución educativa
  const userTimeline = {
    user1: {
      name: 'María González',
      company: 'TechCorp SaaS',
      stage: 'Advocate',
      events: [
        { 
          id: 1, 
          date: 'Día 1', 
          icon: User, 
          title: 'Registro inicial',
          description: 'Llegó desde campaña LinkedIn',
          type: 'acquisition',
          educationImpact: null
        },
        { 
          id: 2, 
          date: 'Día 2', 
          icon: GraduationCap, 
          title: 'Completó Academy',
          description: 'Módulo: "Automatización de Workflows"',
          type: 'education',
          educationImpact: '+35% engagement'
        },
        { 
          id: 3, 
          date: 'Día 4', 
          icon: Target, 
          title: 'Primera activación',
          description: 'Creó su primer workflow automatizado',
          type: 'activation',
          educationImpact: 'Atribuido a educación'
        },
        { 
          id: 4, 
          date: 'Día 7', 
          icon: MessageSquare, 
          title: 'Contacto con Sales',
          description: 'PQL calificado - Score: 85/100',
          type: 'sales',
          educationImpact: 'Contexto educativo compartido'
        },
        { 
          id: 5, 
          date: 'Día 14', 
          icon: CheckCircle2, 
          title: 'Conversión a cliente',
          description: 'Plan Enterprise - $12k ARR',
          type: 'conversion',
          educationImpact: 'Ciclo 40% más corto'
        },
        { 
          id: 6, 
          date: 'Día 30', 
          icon: Star, 
          title: 'Caso de éxito',
          description: 'Publicó testimonio en LinkedIn',
          type: 'advocacy',
          educationImpact: 'Menciona contenido educativo'
        },
        { 
          id: 7, 
          date: 'Día 45', 
          icon: Award, 
          title: 'Referido generado',
          description: 'Invitó a 3 colegas de su industria',
          type: 'referral',
          educationImpact: 'Compartió recursos educativos'
        }
      ],
      metrics: {
        ttv: '2.3 días',
        conversionRate: '85%',
        ltv: '$48k',
        nps: 9
      }
    }
  };

  const currentUser = userTimeline[selectedUser];

  const getEventColor = (type) => {
    const colors = {
      acquisition: 'primary',
      education: 'secondary',
      activation: 'success',
      sales: 'accent',
      conversion: 'success',
      advocacy: 'primary',
      referral: 'secondary'
    };
    return colors[type] || 'primary';
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
      <AnimatedBlob color="primary" size="lg" position="top-left" delay={0} />
      <AnimatedBlob color="secondary" size="md" position="bottom-right" delay={300} />
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
          
          <div className="inline-block px-6 py-3 bg-primary-500/10 border border-primary-500/30 rounded-full">
            <p className="text-sm md:text-base font-semibold text-gradient">
              {copy.copy}
            </p>
          </div>
        </motion.div>

        {/* Toggle de Atribución */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: merahkiAnimations.easing }}
          className="flex justify-center mb-8"
        >
          <div className="glass-card p-2 inline-flex gap-2">
            <button
              onClick={() => setShowAttribution(false)}
              className={`
                px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300
                ${!showAttribution 
                  ? 'bg-white/20 text-foreground' 
                  : 'text-foreground/60 hover:text-foreground/80'
                }
              `}
            >
              Vista Estándar
            </button>
            <button
              onClick={() => setShowAttribution(true)}
              className={`
                px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300
                ${showAttribution 
                  ? 'bg-gradient-primary text-white' 
                  : 'text-foreground/60 hover:text-foreground/80'
                }
              `}
            >
              Con Atribución Educativa
            </button>
          </div>
        </motion.div>

        {/* User Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: merahkiAnimations.easing }}
          className="glass-card p-6 mb-8"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  {currentUser.name}
                </h3>
                <p className="text-sm text-foreground/60">{currentUser.company}</p>
                <Badge className="mt-2" variant="success">
                  {currentUser.stage}
                </Badge>
              </div>
            </div>
            
            {/* Métricas */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-right">
                <p className="text-xs text-foreground/60">TTV</p>
                <p className="text-lg font-bold text-success-400">{currentUser.metrics.ttv}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-foreground/60">LTV</p>
                <p className="text-lg font-bold text-primary-400">{currentUser.metrics.ltv}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-foreground/60">Conv. Rate</p>
                <p className="text-lg font-bold text-accent-400">{currentUser.metrics.conversionRate}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-foreground/60">NPS</p>
                <p className="text-lg font-bold text-secondary-400">{currentUser.metrics.nps}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline 360° */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: merahkiAnimations.easing }}
        >
          <h3 className="text-xl font-heading font-semibold text-foreground mb-6 text-center">
            Recorrido Completo del Usuario
          </h3>
          
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-success-500" />
            
            {/* Eventos */}
            <div className="space-y-6">
              {currentUser.events.map((event, index) => {
                const Icon = event.icon;
                const color = getEventColor(event.type);
                
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    className="relative pl-20"
                  >
                    {/* Icono en la línea */}
                    <div className={`
                      absolute left-4 -translate-x-1/2 w-8 h-8 rounded-full 
                      bg-${color}-500/20 border-2 border-${color}-500
                      flex items-center justify-center
                    `}>
                      <Icon className={`w-4 h-4 text-${color}-400`} />
                    </div>
                    
                    {/* Contenido del evento */}
                    <Card className="relative">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <p className="text-xs font-semibold text-foreground/60 uppercase">
                              {event.date}
                            </p>
                            <Badge variant={color} className="text-xs">
                              {event.type}
                            </Badge>
                          </div>
                          <h4 className="text-base font-semibold text-foreground mb-1">
                            {event.title}
                          </h4>
                          <p className="text-sm text-foreground/70">
                            {event.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Atribución educativa */}
                      {showAttribution && event.educationImpact && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 pt-3 border-t border-white/10"
                        >
                          <div className="flex items-center gap-2">
                            <GraduationCap className="w-4 h-4 text-secondary-400" />
                            <p className="text-xs font-semibold text-secondary-400">
                              Impacto Educativo:
                            </p>
                            <p className="text-xs text-foreground/70">
                              {event.educationImpact}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Insight Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: merahkiAnimations.easing }}
          className="mt-8 glass-card p-6 border-l-4 border-success-500"
        >
          <div className="flex items-start gap-3">
            <TrendingUp className="w-6 h-6 text-success-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                Trazabilidad Completa
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {copy.insight}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Moment6;
