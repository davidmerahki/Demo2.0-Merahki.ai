import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '@utils/motion';
import useDemoStore from '@store/useDemoStore';

const Moment3 = () => {
  const { direction } = useDemoStore();

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
      {/* Efectos de fondo con blobs animados */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow animate-delay-500" />
      
      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background pointer-events-none" />

      {/* Contenido principal */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="badge mb-6 mx-auto">
            <span className="text-sm font-semibold text-gradient">Momento 3</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gradient mb-6">
            Qué Cambia con Customer Education
          </h2>
          
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed mb-8">
            Split-Screen Antes/Después • Selector de Industria
          </p>

          {/* Card de ejemplo con glass morphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 md:p-8 max-w-2xl mx-auto hover:scale-[1.02] hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-danger-500 mb-2">Antes</div>
                <p className="text-sm text-foreground/60">Sin educación</p>
              </div>
              
              <div className="h-16 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />
              
              <div className="text-center">
                <div className="text-4xl font-bold text-success-500 mb-2">Después</div>
                <p className="text-sm text-foreground/60">Con ELG</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Moment3;
