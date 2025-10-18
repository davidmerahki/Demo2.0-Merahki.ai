import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const TrustedCompanies = () => {
  // Logos de empresas (usando nombres como placeholder)
  const companies = [
    { name: 'Salesforce', color: '#00A1E0' },
    { name: 'HubSpot', color: '#FF7A59' },
    { name: 'Zendesk', color: '#03363D' },
    { name: 'Intercom', color: '#1F8DED' },
    { name: 'Stripe', color: '#635BFF' },
    { name: 'Shopify', color: '#96BF48' },
    { name: 'Atlassian', color: '#0052CC' },
    { name: 'Slack', color: '#4A154B' },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary-500/5 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="text-xs sm:text-sm text-foreground/60 uppercase tracking-wider font-semibold mb-2">
            Empresas que confían en nosotros
          </p>
          <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-foreground/90">
            Líderes de la industria que impulsan el crecimiento con educación
          </h3>
        </motion.div>

        {/* Carrusel de logos */}
        <div className="relative">
          {/* Gradient overlays para efecto fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Contenedor con scroll infinito */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 sm:gap-8 md:gap-12"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicamos el array para scroll infinito */}
              {[...companies, ...companies, ...companies].map((company, index) => (
                <motion.div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="glass-card px-6 py-4 sm:px-8 sm:py-6 rounded-xl hover:bg-white/10 transition-all duration-300 min-w-[140px] sm:min-w-[180px]">
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <Building2 
                        className="w-5 h-5 sm:w-6 sm:h-6 transition-colors"
                        style={{ color: company.color }}
                      />
                      <span 
                        className="text-sm sm:text-base font-semibold transition-colors"
                        style={{ color: company.color }}
                      >
                        {company.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { value: '500+', label: 'Empresas activas' },
            { value: '2M+', label: 'Usuarios educados' },
            { value: '372%', label: 'ROI promedio' },
            { value: '95%', label: 'Satisfacción' },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-card p-4 sm:p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-foreground/60">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
