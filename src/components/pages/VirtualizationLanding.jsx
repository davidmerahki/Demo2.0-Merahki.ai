import { motion } from 'framer-motion';
import { ArrowRight, Laptop, Globe, Users, Clock, Shield, Award } from 'lucide-react';
import Button from '@components/ui/Button';
import TrustedCompanies from '@components/ui/TrustedCompanies';
import { AnimatedBlob, GradientOverlay } from '@utils/merahkiComponents';

const VirtualizationLanding = () => {
  const features = [
    {
      icon: Globe,
      title: 'Academia Global',
      description: 'Contenido educativo accesible 24/7 desde cualquier lugar',
    },
    {
      icon: Users,
      title: 'Múltiples Audiencias',
      description: 'Clientes, partners y empleados en una sola plataforma',
    },
    {
      icon: Clock,
      title: 'Onboarding Automatizado',
      description: 'Rutas personalizadas que reducen TTV hasta 70%',
    },
    {
      icon: Shield,
      title: 'Certificaciones',
      description: 'Programas formales que aumentan retención +22%',
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Efectos de fondo */}
      <AnimatedBlob color="accent" size="lg" position="top-left" delay={0} />
      <AnimatedBlob color="primary" size="md" position="bottom-right" delay={300} />
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full mb-6">
                <Laptop className="w-4 h-4 text-accent-400" />
                <span className="text-xs sm:text-sm font-semibold text-accent-400">
                  Customer Education Platform
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gradient mb-4 sm:mb-6">
                Virtualiza tu estrategia de educación
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed mb-6 sm:mb-8">
                Plataforma completa de Customer Education que escala tu capacidad de enseñar.
                <span className="text-foreground font-semibold"> Academia + Rutas + Certificaciones + Analytics.</span>
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="glass-card p-3 sm:p-4 rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold text-accent-400 mb-1">
                    2M+
                  </div>
                  <div className="text-xs sm:text-sm text-foreground/60">
                    usuarios educados mensualmente
                  </div>
                </div>
                <div className="glass-card p-3 sm:p-4 rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold text-success-400 mb-1">
                    -15.5%
                  </div>
                  <div className="text-xs sm:text-sm text-foreground/60">
                    reducción en costos de soporte
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button variant="primary" size="lg" className="group">
                  Solicitar Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Ver Casos de Éxito
                </Button>
              </div>

              {/* Social Proof */}
              <div className="mt-6 sm:mt-8 flex items-center gap-4 text-xs sm:text-sm text-foreground/60">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent-400" />
                  <span>
                    <strong className="text-foreground">Líder en G2</strong> Customer Education
                  </span>
                </div>
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
                  <div className="p-3 bg-accent-500/20 rounded-xl">
                    <Laptop className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      Plataforma Todo-en-Uno
                    </h3>
                    <p className="text-sm text-foreground/60">
                      Intellum 2024
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {[
                    { label: 'Academia de Contenidos', icon: Globe, active: true },
                    { label: 'Rutas Personalizadas', icon: Users, active: true },
                    { label: 'Certificaciones', icon: Award, active: true },
                    { label: 'Analytics Avanzado', icon: Shield, active: true },
                  ].map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                      >
                        <div className="p-2 bg-accent-500/20 rounded-lg">
                          <Icon className="w-4 h-4 text-accent-400" />
                        </div>
                        <span className="text-sm text-foreground/90 font-medium">
                          {feature.label}
                        </span>
                        {feature.active && (
                          <div className="ml-auto w-2 h-2 rounded-full bg-success-500 animate-pulse" />
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full border-2 border-accent-500/50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                  <span className="text-xs font-semibold text-accent-400">
                    Implementación en 90 días
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Carousel */}
      <TrustedCompanies />

      {/* Features Section */}
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
              Todo lo que necesitas para educar a escala
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-3xl mx-auto">
              Una plataforma completa que unifica contenido, rutas, certificaciones y analytics
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-3 bg-accent-500/20 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-accent-400" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-foreground/60">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="glass-card p-8 sm:p-12 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gradient mb-4">
                ¿Listo para virtualizar tu educación?
              </h3>
              <p className="text-base sm:text-lg text-foreground/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Únete a 500+ empresas que ya educan a millones de usuarios con Merahki
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button variant="primary" size="lg" className="group">
                  Agendar Demo Personalizada
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Descargar Caso de Estudio
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VirtualizationLanding;
