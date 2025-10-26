import { motion } from 'framer-motion';
import { useState } from 'react';
import { pageVariants, pageTransition } from '@utils/motion';
import useDemoStore from '@store/useDemoStore';
import { Users, Heart, DollarSign, HeadphonesIcon, Clock } from 'lucide-react';
import Badge from '@components/ui/Badge';
import Card from '@components/ui/Card';
import ScheduleButton from '@components/ui/ScheduleButton';
import { AnimatedBlob, GradientOverlay, merahkiAnimations } from '@utils/merahkiComponents';

const Moment3 = () => {
  const { direction } = useDemoStore();
  const [selectedIndustry, setSelectedIndustry] = useState('saas_b2b');
  const [educationIntensity, setEducationIntensity] = useState(75);

  // Seeds de datos por industria
  const industryData = {
    saas_b2b: {
      name: 'SaaS B2B',
      before: {
        adoption: 25,
        csat: 3.2,
        ltv: 12000,
        support: 450,
        ttv: 14
      },
      after: {
        adoption: 65,
        csat: 4.5,
        ltv: 16000,
        support: 360,
        ttv: 2.3
      }
    },
    fintech: {
      name: 'Fintech',
      before: {
        adoption: 22,
        csat: 3.0,
        ltv: 15000,
        support: 520,
        ttv: 16
      },
      after: {
        adoption: 62,
        csat: 4.4,
        ltv: 20000,
        support: 390,
        ttv: 2.8
      }
    },
    ecommerce: {
      name: 'E-commerce',
      before: {
        adoption: 30,
        csat: 3.5,
        ltv: 8000,
        support: 380,
        ttv: 10
      },
      after: {
        adoption: 70,
        csat: 4.6,
        ltv: 11000,
        support: 280,
        ttv: 1.8
      }
    }
  };

  const currentData = industryData[selectedIndustry];
  
  // Calcular deltas basados en intensidad
  const calculateDelta = (before, after) => {
    const baseDelta = ((after - before) / before) * 100;
    return baseDelta * (educationIntensity / 100);
  };

  const kpis = [
    {
      key: 'adoption',
      label: 'Feature Adoption',
      icon: Users,
      suffix: '%',
      color: 'primary',
      inverse: false
    },
    {
      key: 'csat',
      label: 'CSAT Score',
      icon: Heart,
      decimals: 1,
      color: 'secondary',
      inverse: false
    },
    {
      key: 'ltv',
      label: 'Customer LTV',
      icon: DollarSign,
      prefix: '$',
      format: (val) => (val / 1000).toFixed(1) + 'k',
      color: 'accent',
      inverse: false
    },
    {
      key: 'support',
      label: 'Support Tickets',
      icon: HeadphonesIcon,
      suffix: '/mes',
      color: 'success',
      inverse: true
    },
    {
      key: 'ttv',
      label: 'Time to Value',
      icon: Clock,
      suffix: ' días',
      decimals: 1,
      color: 'success',
      inverse: true
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
      <AnimatedBlob color="secondary" size="md" position="bottom-right" delay={300} />
      <GradientOverlay direction="to-b" opacity="default" />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-6 sm:mb-12"
          {...merahkiAnimations.fadeInUp}
        >
          <Badge gradient className="mb-3 sm:mb-6">
            Momento 3
          </Badge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gradient mb-3 sm:mb-4 px-2">
            Qué Cambia con Customer Education
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-2 sm:mb-4 px-2">
            Si buscas aumentar adquisición, retención, LTV y usuarios que permanecen después de 12 semanas, necesitas estrategias de Customer Education.
          </p>
          
          <p className="text-xs sm:text-sm md:text-base text-foreground/60 max-w-2xl mx-auto px-2">
            Educar impacta Growth, Marketing, Ventas y CX. Reduce costos de soporte, acorta el ciclo de ventas y potencia el cross-sell.
          </p>
        </motion.div>

        {/* Selector de Industria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: merahkiAnimations.easing }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-8 px-2"
        >
          {Object.entries(industryData).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setSelectedIndustry(key)}
              className={`
                px-3 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-base font-semibold transition-all duration-300
                ${
                  selectedIndustry === key
                    ? 'bg-gradient-primary text-white shadow-glow-md'
                    : 'bg-white/5 text-foreground/70 hover:bg-white/10 border border-white/10'
                }
              `}
            >
              {data.name}
            </button>
          ))}
        </motion.div>

        {/* Split Screen Antes/Después */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-8">
          {/* ANTES - Lado Izquierdo (Pasado) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: merahkiAnimations.easing }}
          >
            <Card glass={false} hover={false} className="bg-danger-500/5 border-danger-500/20 p-4 sm:p-6">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-2xl font-heading font-bold text-danger-400 mb-1 sm:mb-2">
                  Sin Educación
                </h3>
                <p className="text-xs sm:text-sm text-foreground/60">Baseline actual</p>
              </div>
              
              <div className="space-y-2 sm:space-y-4">
                {kpis.map((kpi) => {
                  const Icon = kpi.icon;
                  const value = currentData.before[kpi.key];
                  // Mostrar "X" para Customer LTV
                  const displayValue = kpi.key === 'ltv' ? 'X' : (kpi.format ? kpi.format(value) : value.toFixed(kpi.decimals || 0));
                  
                  return (
                    <div key={kpi.key} className="flex items-center justify-between p-2 sm:p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="p-1.5 sm:p-2 rounded-lg bg-danger-500/20">
                          <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-danger-400" />
                        </div>
                        <span className="text-xs sm:text-sm text-foreground/70">{kpi.label}</span>
                      </div>
                      <span className="text-sm sm:text-lg font-bold text-foreground">
                        {kpi.key === 'ltv' ? displayValue : `${kpi.prefix || ''}${displayValue}${kpi.suffix || ''}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          {/* DESPUÉS - Lado Derecho (Futuro) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: merahkiAnimations.easing }}
          >
            <Card glass={false} hover={false} className="bg-success-500/5 border-success-500/20 p-4 sm:p-6">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-2xl font-heading font-bold text-success-400 mb-1 sm:mb-2">
                  Con Education-Led Growth
                </h3>
                <p className="text-xs sm:text-sm text-foreground/60">Impacto medido</p>
              </div>
              
              <div className="space-y-2 sm:space-y-4">
                {kpis.map((kpi) => {
                  const Icon = kpi.icon;
                  const beforeValue = currentData.before[kpi.key];
                  const afterValue = currentData.after[kpi.key];
                  const delta = calculateDelta(beforeValue, afterValue);
                  
                  // Determinar el valor a mostrar según el KPI
                  let displayValue;
                  if (kpi.key === 'ltv') {
                    displayValue = '6x';
                  } else if (kpi.key === 'support') {
                    displayValue = '-20%';
                  } else {
                    displayValue = `${delta > 0 ? '+' : ''}${Math.abs(delta).toFixed(0)}%`;
                  }
                  
                  return (
                    <div key={kpi.key} className="flex items-center justify-between p-2 sm:p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="p-1.5 sm:p-2 rounded-lg bg-success-500/20">
                          <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-success-400" />
                        </div>
                        <span className="text-xs sm:text-sm text-foreground/70">{kpi.label}</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <span className="text-sm sm:text-lg font-bold text-success-400">
                          {displayValue}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Slider de Intensidad */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: merahkiAnimations.easing }}
          className="glass-card p-4 sm:p-6 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <label className="text-xs sm:text-sm font-semibold text-foreground/80">
              Intensidad de Educación
            </label>
            <span className="text-base sm:text-lg font-bold text-gradient">
              {educationIntensity}%
            </span>
          </div>
          
          <input
            type="range"
            min="0"
            max="100"
            value={educationIntensity}
            onChange={(e) => setEducationIntensity(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-4
              [&::-webkit-slider-thumb]:h-4
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-gradient-primary
              [&::-webkit-slider-thumb]:shadow-glow-md
              [&::-webkit-slider-thumb]:cursor-pointer
              [&::-moz-range-thumb]:w-4
              [&::-moz-range-thumb]:h-4
              [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-gradient-primary
              [&::-moz-range-thumb]:border-0
              [&::-moz-range-thumb]:shadow-glow-md
              [&::-moz-range-thumb]:cursor-pointer"
          />
          
          <div className="flex justify-between mt-2 text-[10px] sm:text-xs text-foreground/50">
            <span>Sin educación</span>
            <span>Programa completo</span>
          </div>
          
          <p className="text-[10px] sm:text-xs text-center text-foreground/50 mt-3 sm:mt-4 italic">
            Rangos de impacto basados en implementaciones reales
          </p>
        </motion.div>
        
        {/* Mensaje de impacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: merahkiAnimations.easing }}
          className="mt-4 sm:mt-8 text-center px-2"
        >
          <p className="text-xs sm:text-sm md:text-base text-foreground/80 max-w-3xl mx-auto">
            <span className="font-semibold text-gradient">Impacto medido:</span> +30-40% adopción de funcionalidades, +20-30% CSAT, +25-35% LTV, -10-20% costos de soporte.
          </p>
        </motion.div>

        {/* CTA - Agenda una Reunión */}
        <ScheduleButton delay={0.7} className="mt-8" />
      </div>
    </motion.div>
  );
};

export default Moment3;
