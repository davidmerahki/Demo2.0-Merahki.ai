import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Zap, Target, BookOpen, BarChart3 } from 'lucide-react';
import Button from '@components/ui/Button';
import TrustedCompanies from '@components/ui/TrustedCompanies';
import { AnimatedBlob, GradientOverlay } from '@utils/merahkiComponents';

const GrowthLanding = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'ROI 372%',
      description: 'Retorno comprobado en 7 meses según Forrester 2024',
    },
    {
      icon: Users,
      title: 'Adopción +38%',
      description: 'Más usuarios activos y comprometidos con tu producto',
    },
    {
      icon: Zap,
      title: 'TTV -70%',
      description: 'Reduce el tiempo hasta el primer valor significativo',
    },
    {
      icon: Target,
      title: 'Win Rate +29%',
      description: 'Prospectos educados cierran más rápido y mejor',
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Efectos de fondo */}
      <AnimatedBlob color="primary" size="lg" position="top-left" delay={0} />
      <AnimatedBlob color="secondary" size="md" position="bottom-right" delay={300} />
      <GradientOverlay direction="to-b" opacity="default" />

      {/* Hero Section */}
      <section className="relative z-10 pt-24 sm:pt-32 pb-12 sm:pb-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
                <BookOpen className="w-4 h-4 text-primary-400" />
                <span className="text-xs sm:text-sm font-semibold text-primary-400">
                  Education-Led Growth
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gradient mb-4 sm:mb-6">
                Convierte tráfico en crecimiento sostenible
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed mb-6 sm:mb-8">
                Education-Led Growth (ELG) es el loop de adquisición que transforma visitantes en usuarios activos. 
                <span className="text-foreground font-semibold"> No es contenido. Es valor que escala.</span>
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="glass-card p-3 sm:p-4 rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold text-primary-400 mb-1">
                    9 de 10
                  </div>
                  <div className="text-xs sm:text-sm text-foreground/60">
                    leads se van por falta de educación
                  </div>
                </div>
                <div className="glass-card p-3 sm:p-4 rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold text-success-400 mb-1">
                    55%
                  </div>
                  <div className="text-xs sm:text-sm text-foreground/60">
                    del churn en primeros 10 días
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button variant="primary" size="lg" className="group">
                  Ver Demo Interactiva
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Hablar con Experto
                </Button>
              </div>

              {/* Social Proof */}
              <div className="mt-6 sm:mt-8 flex items-center gap-4 text-xs sm:text-sm text-foreground/60">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center text-white text-xs font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span>
                  <strong className="text-foreground">500+ empresas</strong> ya impulsan su crecimiento con ELG
                </span>
              </div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Main Card */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary-500/20 rounded-xl">
                    <BarChart3 className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      Impacto Medido
                    </h3>
                    <p className="text-sm text-foreground/60">
                      Forrester 2024
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-4">
                  {[
                    { label: 'ROI Programa', value: '372%', color: 'primary' },
                    { label: 'Adopción', value: '+38.3%', color: 'success' },
                    { label: 'Win Rate', value: '+28.9%', color: 'success' },
                    { label: 'Retención', value: '+22.2%', color: 'success' },
                  ].map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                    >
                      <span className="text-sm text-foreground/70">
                        {metric.label}
                      </span>
                      <span className={`text-lg font-bold ${
                        metric.color === 'primary' ? 'text-primary-400' : 'text-success-400'
                      }`}>
                        {metric.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full border-2 border-success-500/50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success-500 animate-pulse" />
                  <span className="text-xs font-semibold text-success-400">
                    Validado por Forrester
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Carousel */}
      <TrustedCompanies />

      {/* Benefits Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gradient mb-4">
              Por qué Education-Led Growth
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-3xl mx-auto">
              Transforma tu estrategia de adquisición con educación contextual que convierte y retiene
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-3 bg-primary-500/20 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-foreground/60">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GrowthLanding;
