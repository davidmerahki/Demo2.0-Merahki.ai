import { motion } from 'framer-motion';
import { useState } from 'react';
import { pageVariants, pageTransition } from '@utils/motion';
import useDemoStore from '@store/useDemoStore';
import { Rocket, CheckCircle2, Calendar, Zap, ArrowRight, Sparkles, Search, TrendingUp, AlertCircle } from 'lucide-react';
import Badge from '@components/ui/Badge';
import Card from '@components/ui/Card';
import Button from '@components/ui/Button';
import ScheduleButton from '@components/ui/ScheduleButton';
import { AnimatedBlob, GradientOverlay, merahkiAnimations } from '@utils/merahkiComponents';
import { momentsCopy } from '@data/momentsCopy';

const Moment7 = () => {
  const { direction } = useDemoStore();
  const copy = momentsCopy.moment7;
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Exclusiones (costos adicionales)
  const exclusions = [
    'Suscripciones de CRM/LMS',
    'Inversión en ADS y campañas',
    'Créditos adicionales por consulta',
    'Desarrollos particulares de infraestructura'
  ];

  // Planes de implementación
  const plans = [
    {
      id: 'diagnostic',
      name: 'Diagnóstico',
      icon: Search,
      duration: '2 semanas',
      price: '$3,000',
      priceNote: 'Abonables a cualquier paquete',
      features: [
        'Audit educativo completo',
        'Mapa de casos de uso',
        'Análisis de audiencias ICP',
        'Recomendaciones estratégicas',
        '1 sesión de presentación'
      ],
      highlight: false,
      color: 'accent'
    },
    {
      id: 'express',
      name: 'ELG Express',
      icon: Zap,
      duration: '4 semanas',
      price: '$12,000',
      priceNote: 'Incluye diagnóstico',
      features: [
        'Todo en Diagnóstico',
        'Roadmap 30/60/90 días',
        'Blueprint de academia',
        'Prototipo funcional',
        'Plan de contenidos',
        '2 sesiones de estrategia'
      ],
      highlight: false,
      color: 'primary'
    },
    {
      id: 'accelerator',
      name: 'ELG Accelerator',
      icon: Rocket,
      duration: '12 semanas',
      price: '$48,000',
      priceNote: 'Implementación completa',
      features: [
        'Todo en Express',
        'Implementación end-to-end',
        'Integración CRM/LMS',
        'Capacitación del equipo',
        'Soporte continuo 90 días',
        'Revisión quincenal',
        'Dashboard de métricas'
      ],
      highlight: true,
      color: 'success'
    }
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
      <AnimatedBlob color="success" size="md" position="bottom-right" delay={300} />
      <GradientOverlay direction="to-b" opacity="default" />

      {/* Modal de Contacto */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card p-8 max-w-md w-full"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gradient mb-2">
                ¡Excelente elección!
              </h3>
              <p className="text-sm text-foreground/70">
                Plan seleccionado: <strong>{selectedPlan?.name}</strong>
              </p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-foreground/80 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground focus:border-primary-500 focus:outline-none"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground/80 mb-2">
                  Email corporativo
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground focus:border-primary-500 focus:outline-none"
                  placeholder="tu@empresa.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground/80 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground focus:border-primary-500 focus:outline-none"
                  placeholder="Nombre de tu empresa"
                />
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowModal(false)}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  alert('¡Gracias! Te contactaremos pronto.');
                  setShowModal(false);
                }}
                className="flex-1"
              >
                Enviar
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}

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
          
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-6">
            {copy.description}
          </p>
          
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500/20 to-success-500/20 border border-primary-500/30 rounded-full">
            <Rocket className="w-5 h-5 text-primary-400" />
            <p className="text-sm md:text-base font-semibold text-gradient">
              {copy.copy}
            </p>
          </div>
        </motion.div>

        {/* ROI Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: merahkiAnimations.easing }}
          className="mb-12"
        >
          <div className="glass-card p-6 max-w-2xl mx-auto text-center border-primary-500/30">
            <div className="flex items-center justify-center gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-primary-400" />
              <h3 className="text-xl font-heading font-semibold text-foreground">
                ROI Promedio: 372% en 7 meses
              </h3>
            </div>
            <p className="text-sm text-foreground/70">
              86% de empresas reporta ROI positivo • 96% recupera la inversión
            </p>
            <Badge variant="accent" className="mt-3">
              Forrester Consulting 2024
            </Badge>
          </div>
        </motion.div>

        {/* Planes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: merahkiAnimations.easing }}
        >
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 text-center">
            Elige tu Plan
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const colorClasses = {
                accent: 'from-accent-500/10 to-accent-600/10 border-accent-500/30',
                primary: 'from-primary-500/10 to-primary-600/10 border-primary-500/30',
                success: 'from-success-500/10 to-success-600/10 border-success-500/30'
              };
              const iconColors = {
                accent: 'text-accent-400',
                primary: 'text-primary-400',
                success: 'text-success-400'
              };
              
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  className="relative pt-6"
                >
                  {plan.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                      <Badge gradient className="shadow-glow-md">
                        <Sparkles className="w-3 h-3" />
                        Más Popular
                      </Badge>
                    </div>
                  )}
                  
                  <Card 
                    glass={false}
                    className={`
                      h-full bg-gradient-to-br ${colorClasses[plan.color]}
                      ${plan.highlight ? 'scale-105 shadow-glow-lg' : ''}
                      transition-all duration-300 hover:scale-105
                    `}
                  >
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className={`w-14 h-14 rounded-full bg-${plan.color}-500/20 mx-auto mb-4 flex items-center justify-center`}>
                        <Icon className={`w-7 h-7 ${iconColors[plan.color]}`} />
                      </div>
                      <h4 className="text-2xl font-heading font-bold text-gradient mb-2">
                        {plan.name}
                      </h4>
                      <p className="text-xs text-foreground/60 mb-4">
                        {plan.duration}
                      </p>
                      <div className="mb-2">
                        <p className="text-4xl font-bold text-foreground">
                          {plan.price}
                        </p>
                      </div>
                      <p className="text-xs text-foreground/50 italic">
                        {plan.priceNote}
                      </p>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2.5 mb-6 min-h-[200px]">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-4 h-4 ${iconColors[plan.color]} flex-shrink-0 mt-0.5`} />
                          <p className="text-sm text-foreground/80 leading-snug">{feature}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <Button
                      variant={plan.highlight ? 'primary' : 'outline'}
                      onClick={() => {
                        setSelectedPlan(plan);
                        setShowModal(true);
                      }}
                      className="w-full"
                    >
                      Comenzar Ahora
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          
          {/* Notas de Exclusión */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-4 bg-white/5 border-white/10">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-foreground/60 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-foreground/70 mb-2">
                    Costos adicionales no incluidos:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {exclusions.map((exclusion, idx) => (
                      <p key={idx} className="text-xs text-foreground/60">
                        • {exclusion}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: merahkiAnimations.easing }}
          className="mt-12 text-center"
        >
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border-primary-500/30">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-left">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  ¿Necesitas más información?
                </h3>
                <p className="text-sm text-foreground/70">
                  Agenda una sesión de 30 minutos para resolver tus dudas
                </p>
              </div>
              <Button
                variant="primary"
                onClick={() => {
                  setSelectedPlan({ name: 'Consulta Personalizada' });
                  setShowModal(true);
                }}
              >
                Agendar Llamada
                <Calendar className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* CTA - Agenda una Reunión */}
        <ScheduleButton delay={0.8} className="mt-8" />
      </div>
    </motion.div>
  );
};

export default Moment7;
