import { motion } from 'framer-motion';

/**
 * Configuraciones de animación estándar de Merahki.ai
 */
export const merahkiAnimations = {
  // Easing personalizado Merahki
  easing: [0.16, 1, 0.3, 1],
  
  // Configuración de entrada estándar
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  },
  
  // Configuración de entrada con escala
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  },
  
  // Configuración de hover con spring
  hoverSpring: {
    scale: 1.02,
    y: -8,
    transition: { type: "spring", stiffness: 400, damping: 17 }
  },
  
  // Configuración de hover para botones
  hoverButton: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 17 }
  },
  
  // Configuración de viewport
  viewport: {
    once: true,
    margin: "-100px"
  }
};

/**
 * Componente de Blob animado para fondos
 */
export const AnimatedBlob = ({ 
  color = 'primary', 
  size = 'md', 
  position = 'top-left',
  delay = 0,
  className = '' 
}) => {
  const colors = {
    primary: 'bg-primary-500/20',
    secondary: 'bg-secondary-500/20',
    accent: 'bg-accent-500/20',
  };
  
  const sizes = {
    sm: 'w-64 h-64',
    md: 'w-96 h-96',
    lg: 'w-[600px] h-[600px]',
  };
  
  const positions = {
    'top-left': 'top-0 left-1/4',
    'top-right': 'top-0 right-1/4',
    'bottom-left': 'bottom-0 left-1/4',
    'bottom-right': 'bottom-0 right-1/4',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };
  
  const delays = {
    0: '',
    100: 'animate-delay-100',
    200: 'animate-delay-200',
    300: 'animate-delay-300',
    400: 'animate-delay-400',
    500: 'animate-delay-500',
  };
  
  return (
    <div 
      className={`
        absolute ${positions[position]} 
        ${sizes[size]} 
        ${colors[color]} 
        rounded-full blur-3xl animate-pulse-slow 
        ${delays[delay]}
        ${className}
      `} 
    />
  );
};

/**
 * Componente de Overlay con gradiente
 */
export const GradientOverlay = ({ 
  direction = 'to-b',
  opacity = 'default',
  className = '' 
}) => {
  const directions = {
    'to-b': 'bg-gradient-to-b',
    'to-t': 'bg-gradient-to-t',
    'to-r': 'bg-gradient-to-r',
    'to-l': 'bg-gradient-to-l',
  };
  
  const opacities = {
    light: 'from-background/60 via-background/40 to-background/20',
    default: 'from-background/80 via-background/60 to-background',
    heavy: 'from-background via-background/90 to-background/80',
  };
  
  return (
    <div 
      className={`
        absolute inset-0 
        ${directions[direction]} 
        ${opacities[opacity]} 
        pointer-events-none
        ${className}
      `} 
    />
  );
};

/**
 * Componente de Separador con gradiente
 */
export const GradientDivider = ({ 
  orientation = 'horizontal',
  className = '' 
}) => {
  if (orientation === 'horizontal') {
    return (
      <div className={`h-px w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent ${className}`} />
    );
  }
  
  return (
    <div className={`w-px h-full bg-gradient-to-b from-transparent via-foreground/20 to-transparent ${className}`} />
  );
};

/**
 * Componente de Sección con container estándar
 */
export const Section = ({ 
  children, 
  className = '',
  noPadding = false 
}) => {
  return (
    <section className={`
      max-w-7xl mx-auto 
      ${!noPadding && 'py-12 px-4 sm:px-6 lg:py-20 lg:px-8'}
      ${className}
    `}>
      {children}
    </section>
  );
};

/**
 * Componente de Título con gradiente
 */
export const GradientTitle = ({ 
  children, 
  as = 'h2',
  size = 'lg',
  className = '' 
}) => {
  const Component = as;
  
  const sizes = {
    sm: 'text-2xl md:text-3xl lg:text-4xl',
    md: 'text-3xl md:text-4xl lg:text-5xl',
    lg: 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
  };
  
  return (
    <Component className={`
      font-heading font-bold text-gradient 
      ${sizes[size]}
      ${className}
    `}>
      {children}
    </Component>
  );
};

/**
 * Componente de Grid responsive
 */
export const ResponsiveGrid = ({ 
  children, 
  cols = 3,
  gap = 6,
  className = '' 
}) => {
  const colsMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };
  
  return (
    <div className={`
      grid ${colsMap[cols]} gap-${gap}
      ${className}
    `}>
      {children}
    </div>
  );
};

/**
 * Componente de Partícula flotante (para canvas)
 */
export class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset();
    this.colors = ['#60a5fa', '#9333ea', '#a855f7', '#3b82f6'];
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  }
  
  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.5 + 0.1;
    this.targetX = Math.random() * this.canvas.width;
    this.targetY = Math.random() * this.canvas.height;
  }
  
  update() {
    // Movimiento suave hacia el target
    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;
    this.x += dx * 0.01;
    this.y += dy * 0.01;
    
    // Cambiar target aleatoriamente
    if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
      this.targetX = Math.random() * this.canvas.width;
      this.targetY = Math.random() * this.canvas.height;
    }
    
    // Pulsación de opacidad
    this.opacity += Math.sin(Date.now() * 0.001) * 0.01;
    this.opacity = Math.max(0.1, Math.min(0.6, this.opacity));
    
    // Mantener dentro del canvas
    if (this.x < 0 || this.x > this.canvas.width) this.reset();
    if (this.y < 0 || this.y > this.canvas.height) this.reset();
  }
  
  draw(ctx) {
    // Glow radial
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.size * 3
    );
    gradient.addColorStop(0, `${this.color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`);
    gradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
    ctx.fill();
  }
}

/**
 * Hook para crear canvas de partículas
 */
export const createParticleCanvas = (canvasRef, particleCount = 30) => {
  const canvas = canvasRef.current;
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  
  // Blend mode para efecto luminoso
  ctx.globalCompositeOperation = 'screen';
  
  const particles = Array.from({ length: particleCount }, () => new Particle(canvas));
  
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      particle.update();
      particle.draw(ctx);
    });
    
    requestAnimationFrame(animate);
  };
  
  animate();
  
  // Resize handler
  const handleResize = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };
  
  window.addEventListener('resize', handleResize);
  
  return () => {
    window.removeEventListener('resize', handleResize);
  };
};
