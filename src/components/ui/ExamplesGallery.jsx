import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { merahkiAnimations } from '@utils/merahkiComponents';
import Badge from './Badge';
import Button from './Button';

const ExamplesGallery = ({ isOpen, onClose }) => {
  const examples = [
    {
      company: "HubSpot Academy",
      description: "Boletín mensual con historias inspiradoras, nuevas certificaciones, videos educativos y recursos para acelerar el crecimiento",
      image: "/examples/Hubspot.png",
      alt: "HubSpot Academy - Boletín educativo mensual October-November 2025 con cursos, certificaciones y playlists para dominar AEO y automatización"
    },
    {
      company: "Salesforce Trailblazer",
      description: "Academia + Comunidad = 7x crecimiento, 2x valor de contrato, 35% menos churn, 35% más adopción",
      image: "/examples/Salesforce.png",
      alt: "Salesforce - Education-Led Growth + Community-Led Growth genera resultados de negocio con Tableau, Devy, MuleSoft y Slack"
    },
    {
      company: "30X - Xtreme Sales",
      description: "Clase gratuita con Sasha Nicolai (Chief AI Officer) para enseñar cómo usar agentes de voz IA para cerrar citas y aumentar conversión",
      image: "/examples/1.png",
      alt: "30X Xtreme Sales - Clase gratuita sobre agentes de voz para cerrar citas, impartida por Sasha Nicolai Canal, Chief AI Officer"
    },
    {
      company: "Novo Nordisk",
      description: "Programa 'Cambiando la Diabetes en niños': +350 niños educados, +430 profesionales capacitados, +11 alianzas estratégicas",
      image: "/examples/3.png",
      alt: "Novo Nordisk - Programa educativo 'Cambiando la Diabetes en niños' con Escuelas Familiares de Diabetes Tipo 1 en Colombia"
    },
    {
      company: "PMI Bogotá",
      description: "XII Congreso de Gerencia de Proyectos: Panel sobre cómo la IA impulsa sostenibilidad y transforma la gestión de proyectos",
      image: "/examples/2.png",
      alt: "PMI Bogotá - Panel de expertos sobre Inteligencia Artificial, sostenibilidad y gestión de proyectos en el XII Congreso"
    },
    {
      company: "Fundación Bolívar Davivienda",
      description: "Plataforma Aflora: +300 organizaciones sociales fortaleciendo su liderazgo con rutas de formación en estrategia, proyectos y mercadeo",
      image: "/examples/4.png",
      alt: "Fundación Bolívar Davivienda - Plataforma Aflora para fortalecer capacidades de gestión en organizaciones sociales sin ánimo de lucro"
    },
    {
      company: "Operation Smile",
      description: "15+ años transformando sistemas de salud en 12 países de Latinoamérica, capacitando líderes locales y acercando cirugías de calidad",
      image: "/examples/5.png",
      alt: "Operation Smile - Programa de fortalecimiento de sistemas de salud en Latinoamérica y el Caribe liderado por Indiana Siu"
    }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, ease: merahkiAnimations.easing }}
          className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto glass-card p-6 md:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botón de cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 transition-all duration-300 z-10"
            aria-label="Cerrar galería"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="mb-4">Ejemplos Reales</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gradient mb-3">
              Seguro has visto Education-Led Growth
            </h2>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Estas organizaciones ya están usando estrategias educativas para crecer, educar y transformar.
            </p>
          </div>

          {/* Grid de ejemplos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: merahkiAnimations.easing
                }}
                className="group"
              >
                <div className="glass-card overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-primary-500/50 hover:shadow-glow-md">
                  {/* Imagen */}
                  <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 overflow-hidden flex items-center justify-center">
                    <motion.img
                      src={example.image}
                      alt={example.alt}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        // Usar placeholder si la imagen no está disponible
                        e.target.src = '/examples/placeholder.svg';
                        e.target.onerror = null; // Prevenir loop infinito
                      }}
                    />
                  </div>

                  {/* Contenido */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg md:text-xl font-heading font-bold text-gradient mb-2">
                      {example.company}
                    </h3>
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed flex-1">
                      {example.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg md:text-xl text-foreground/80 mb-6 font-medium">
              ¿Listo para implementar Education-Led Growth en tu organización?
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open('https://reuniones.clientify.com/#/davidmerahki/1a1?v2=true', '_blank')}
              className="inline-flex items-center gap-2"
            >
              Agenda una Consultoría Gratuita
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExamplesGallery;
