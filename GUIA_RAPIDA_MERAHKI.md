# 🚀 Guía Rápida: Estilo Merahki.ai en React

## 📦 Componentes UI Actualizados

### Button
```jsx
import Button from '@components/ui/Button';

// Botón principal con gradiente
<Button variant="primary" size="md">
  Acción Principal
</Button>

// Botón secundario con glass effect
<Button variant="secondary" size="lg">
  Acción Secundaria
</Button>

// Otros variantes
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Peligro</Button>
<Button variant="success">Éxito</Button>
```

### Card
```jsx
import Card from '@components/ui/Card';

// Card con glass morphism (default)
<Card>
  <h3>Título</h3>
  <p>Contenido</p>
</Card>

// Card sin hover effect
<Card hover={false}>
  Contenido estático
</Card>

// Card sin glass effect
<Card glass={false}>
  Contenido con fondo alternativo
</Card>

// Card clickeable
<Card onClick={() => console.log('Click!')}>
  Card interactiva
</Card>
```

### Badge
```jsx
import Badge from '@components/ui/Badge';

// Badge con gradiente
<Badge gradient>Momento 3</Badge>

// Badge con colores
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="danger">Danger</Badge>

// Badge con trend
<Badge trend="up" variant="success">+25%</Badge>
<Badge trend="down" variant="danger">-10%</Badge>
```

## 🎨 Utilidades de Merahki

### Importar utilidades
```jsx
import {
  merahkiAnimations,
  AnimatedBlob,
  GradientOverlay,
  GradientDivider,
  Section,
  GradientTitle,
  ResponsiveGrid,
  createParticleCanvas
} from '@utils/merahkiComponents';
```

### Animaciones con Framer Motion
```jsx
import { motion } from 'framer-motion';
import { merahkiAnimations } from '@utils/merahkiComponents';

// Fade in con slide up
<motion.div
  initial={merahkiAnimations.fadeInUp.initial}
  animate={merahkiAnimations.fadeInUp.animate}
  transition={merahkiAnimations.fadeInUp.transition}
>
  Contenido
</motion.div>

// Scale in
<motion.div
  initial={merahkiAnimations.scaleIn.initial}
  animate={merahkiAnimations.scaleIn.animate}
  transition={merahkiAnimations.scaleIn.transition}
>
  Contenido
</motion.div>

// Hover effect
<motion.div
  whileHover={merahkiAnimations.hoverSpring}
>
  Card interactiva
</motion.div>

// Con viewport (anima al hacer scroll)
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={merahkiAnimations.viewport}
  transition={{ duration: 0.6, ease: merahkiAnimations.easing }}
>
  Contenido
</motion.div>
```

### Blobs Animados
```jsx
import { AnimatedBlob } from '@utils/merahkiComponents';

<div className="relative">
  {/* Blob púrpura arriba izquierda */}
  <AnimatedBlob 
    color="primary" 
    size="md" 
    position="top-left" 
    delay={0} 
  />
  
  {/* Blob rosa abajo derecha */}
  <AnimatedBlob 
    color="secondary" 
    size="lg" 
    position="bottom-right" 
    delay={300} 
  />
  
  {/* Blob azul centrado */}
  <AnimatedBlob 
    color="accent" 
    size="md" 
    position="center" 
    delay={500} 
  />
  
  {/* Contenido */}
</div>
```

### Overlay con Gradiente
```jsx
import { GradientOverlay } from '@utils/merahkiComponents';

<div className="relative">
  <GradientOverlay direction="to-b" opacity="default" />
  {/* Contenido */}
</div>
```

### Separador con Gradiente
```jsx
import { GradientDivider } from '@utils/merahkiComponents';

{/* Horizontal */}
<GradientDivider orientation="horizontal" />

{/* Vertical */}
<div className="flex items-center space-x-4">
  <span>Antes</span>
  <GradientDivider orientation="vertical" className="h-16" />
  <span>Después</span>
</div>
```

### Section Container
```jsx
import { Section } from '@utils/merahkiComponents';

<Section>
  <h2>Título de la sección</h2>
  <p>Contenido con padding y max-width automáticos</p>
</Section>

{/* Sin padding */}
<Section noPadding>
  Contenido sin padding
</Section>
```

### Título con Gradiente
```jsx
import { GradientTitle } from '@utils/merahkiComponents';

<GradientTitle as="h1" size="lg">
  Título Principal
</GradientTitle>

<GradientTitle as="h2" size="md">
  Subtítulo
</GradientTitle>

<GradientTitle as="h3" size="sm">
  Título Pequeño
</GradientTitle>
```

### Grid Responsive
```jsx
import { ResponsiveGrid } from '@utils/merahkiComponents';

<ResponsiveGrid cols={3} gap={6}>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</ResponsiveGrid>
```

### Canvas de Partículas
```jsx
import { useEffect, useRef } from 'react';
import { createParticleCanvas } from '@utils/merahkiComponents';

function MyComponent() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const cleanup = createParticleCanvas(canvasRef, 30);
    return cleanup;
  }, []);
  
  return (
    <div className="relative h-screen">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />
      {/* Contenido */}
    </div>
  );
}
```

## 🎨 Clases de TailwindCSS Personalizadas

### Colores
```jsx
// Primary (Purple)
className="bg-primary-500 text-primary-500 border-primary-500"

// Secondary (Pink)
className="bg-secondary-500 text-secondary-500 border-secondary-500"

// Accent (Blue)
className="bg-accent-500 text-accent-500 border-accent-500"

// Background y Foreground
className="bg-background text-foreground"
```

### Gradientes
```jsx
// Gradiente de fondo
className="bg-gradient-primary"
className="bg-gradient-secondary"
className="bg-gradient-dark"

// Texto con gradiente
className="text-gradient"
```

### Efectos
```jsx
// Glass morphism
className="glass-card"

// Glow effects
className="shadow-glow-sm"
className="shadow-glow-md"
className="shadow-glow-lg"
className="shadow-glow-pink"
className="shadow-glow-blue"

// Shimmer
className="shimmer"

// Badge
className="badge"
```

### Animaciones
```jsx
// Entrada
className="animate-fadeIn"
className="animate-slideUp"
className="animate-slideDown"
className="animate-slideLeft"
className="animate-slideRight"
className="animate-scaleIn"

// Continuas
className="animate-float"
className="animate-glow"
className="animate-pulse-slow"
className="animate-spin-slow"

// Con delays
className="animate-slideUp animate-delay-100"
className="animate-slideUp animate-delay-200"
className="animate-slideUp animate-delay-300"
```

### Transiciones
```jsx
// Transición estándar (350ms)
className="transition-standard"

// Transición Merahki (450ms con easing personalizado)
className="transition-merahki"

// Transición completa
className="transition-all duration-300 ease-out-quart"
```

## 📐 Estructura de Página Típica

```jsx
import { motion } from 'framer-motion';
import { 
  AnimatedBlob, 
  GradientOverlay, 
  Section, 
  GradientTitle,
  merahkiAnimations 
} from '@utils/merahkiComponents';
import Card from '@components/ui/Card';
import Button from '@components/ui/Button';
import Badge from '@components/ui/Badge';

function MyPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Efectos de fondo */}
      <AnimatedBlob color="primary" size="lg" position="top-left" />
      <AnimatedBlob color="secondary" size="md" position="bottom-right" delay={300} />
      <GradientOverlay direction="to-b" opacity="default" />
      
      {/* Contenido */}
      <Section>
        <motion.div
          initial={merahkiAnimations.fadeInUp.initial}
          animate={merahkiAnimations.fadeInUp.animate}
          transition={merahkiAnimations.fadeInUp.transition}
        >
          <Badge gradient className="mb-6 mx-auto">Nuevo</Badge>
          
          <GradientTitle as="h1" size="lg" className="mb-6">
            Título Principal
          </GradientTitle>
          
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed mb-8 text-center">
            Descripción del contenido
          </p>
          
          <div className="flex justify-center gap-4">
            <Button variant="primary" size="lg">
              Acción Principal
            </Button>
            <Button variant="secondary" size="lg">
              Acción Secundaria
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: merahkiAnimations.easing }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-xl font-heading font-semibold mb-4">Card 1</h3>
              <p className="text-foreground/70">Contenido</p>
            </Card>
            <Card>
              <h3 className="text-xl font-heading font-semibold mb-4">Card 2</h3>
              <p className="text-foreground/70">Contenido</p>
            </Card>
            <Card>
              <h3 className="text-xl font-heading font-semibold mb-4">Card 3</h3>
              <p className="text-foreground/70">Contenido</p>
            </Card>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}

export default MyPage;
```

## 🎯 Tips Importantes

1. **Siempre usa `bg-background`** como fondo principal
2. **Texto principal**: `text-foreground`, secundario: `text-foreground/70`
3. **Títulos**: usa `font-heading font-bold` con `text-gradient`
4. **Animaciones**: usa `merahkiAnimations.easing` para consistencia
5. **Cards**: usa `glass-card` o el componente `Card`
6. **Botones**: usa el componente `Button` con variantes
7. **Spacing**: mobile-first con `py-12 px-4 lg:py-20 lg:px-8`
8. **Blobs**: siempre con `pointer-events-none` si están en el fondo

## 📚 Recursos

- **Documentación completa**: `DESIGN_SYSTEM.md`
- **Referencia web**: https://merahki.ai
- **Componentes UI**: `src/components/ui/`
- **Utilidades**: `src/utils/merahkiComponents.jsx`
