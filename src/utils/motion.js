// Motion System - Configuración centralizada para Framer Motion

// Easing estándar (Ease-Out Quart)
export const EASE_OUT_QUART = [0.22, 0.61, 0.36, 1];

// Duraciones estándar
export const DURATION = {
  fast: 0.2,
  standard: 0.35,
  slow: 0.5,
};

// Variantes de transición por dirección (Metáfora Espacial)
export const slideVariants = {
  // Entrada desde la izquierda (pasado/estado anterior)
  fromLeft: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
  },
  // Entrada desde la derecha (futuro/estado mejorado)
  fromRight: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  },
  // Fade simple
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  // Scale (para énfasis)
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
  },
};

// Transición estándar
export const standardTransition = {
  duration: DURATION.standard,
  ease: EASE_OUT_QUART,
};

// Animación de shake (para pérdidas/errores)
export const shakeAnimation = {
  x: [0, -8, 8, -8, 8, -4, 4, 0],
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
};

// Animación de pulso (para ganancias/éxitos)
export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 0.6,
    ease: EASE_OUT_QUART,
  },
};

// Animación de contador (count-up)
export const counterAnimation = {
  scale: [1.2, 1],
  opacity: [0.5, 1],
  transition: {
    duration: 0.6,
    ease: EASE_OUT_QUART,
  },
};

// Stagger para listas
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Configuración de página (para transiciones entre momentos)
export const pageTransition = {
  type: "tween",
  ease: EASE_OUT_QUART,
  duration: DURATION.standard,
};

export const pageVariants = {
  initial: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
};
