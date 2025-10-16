# Sistema de Diseño Merahki.ai

## 🎨 Paleta de Colores

### Colores Principales
```css
/* Primary - Purple */
primary-500: #a855f7  /* Color principal */
primary-600: #9333ea
primary-700: #7e22ce

/* Secondary - Pink */
secondary-500: #ec4899  /* Color secundario */
secondary-600: #db2777

/* Accent - Blue */
accent-500: #3b82f6  /* Color de acento */
accent-600: #2563eb

/* Base */
background: #0a0a0f  /* Fondo oscuro principal */
foreground: #ffffff  /* Texto principal */
```

### Degradados
```css
/* Principal */
bg-gradient-primary: linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #3b82f6 100%)

/* Secundario */
bg-gradient-secondary: linear-gradient(135deg, #8b5cf6 0%, #d946ef 50%, #6366f1 100%)

/* Oscuro */
bg-gradient-dark: linear-gradient(180deg, #0a0a0f 0%, #1a0a2e 100%)

/* Radial */
bg-gradient-radial: radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)
```

## ✨ Efectos Visuales

### Glass Morphism
```jsx
<div className="glass-card">
  {/* Contenido */}
</div>
```

### Glow Effects
```jsx
<div className="shadow-glow-sm">Glow pequeño</div>
<div className="shadow-glow-md">Glow medio</div>
<div className="shadow-glow-lg">Glow grande</div>
<div className="shadow-glow-pink">Glow rosa</div>
<div className="shadow-glow-blue">Glow azul</div>
```

### Shimmer Effect
```jsx
<div className="shimmer">Efecto brillante</div>
```

## 🎬 Animaciones

### Animaciones de Entrada
```jsx
<div className="animate-fadeIn">Fade In</div>
<div className="animate-slideUp">Slide Up</div>
<div className="animate-slideDown">Slide Down</div>
<div className="animate-slideLeft">Slide Left</div>
<div className="animate-slideRight">Slide Right</div>
<div className="animate-scaleIn">Scale In</div>
```

### Animaciones Continuas
```jsx
<div className="animate-float">Flotación</div>
<div className="animate-glow">Glow pulsante</div>
<div className="animate-pulse-slow">Pulse lento</div>
<div className="animate-spin-slow">Rotación lenta</div>
```

### Delays
```jsx
<div className="animate-slideUp animate-delay-100">Delay 100ms</div>
<div className="animate-slideUp animate-delay-200">Delay 200ms</div>
<div className="animate-slideUp animate-delay-300">Delay 300ms</div>
```

### Framer Motion (Configuración Recomendada)
```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ 
    duration: 0.6, 
    ease: [0.16, 1, 0.3, 1]  // Easing Merahki
  }}
>
  Contenido
</motion.div>

// Hover con spring physics
<motion.div
  whileHover={{ 
    scale: 1.02, 
    y: -8,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 17 
    }
  }}
>
  Card interactiva
</motion.div>
```

## 🔤 Tipografía

### Fuentes
- **Body**: Inter (font-sans)
- **Headings**: Sora (font-heading)

### Escala Responsive
```jsx
<h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold">
  Título H1
</h1>

<h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
  Título H2
</h2>

<h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold">
  Título H3
</h3>

<p className="text-base md:text-lg leading-relaxed">
  Texto de cuerpo
</p>
```

### Texto con Gradiente
```jsx
<h1 className="text-gradient">
  Título con gradiente
</h1>
```

## 🔘 Componentes

### Botones
```jsx
// Botón Principal
<button className="btn-primary">
  Acción Principal
</button>

// Botón Secundario
<button className="btn-secondary">
  Acción Secundaria
</button>
```

### Cards
```jsx
// Card con Glass Effect
<div className="glass-card p-6 md:p-8 hover:scale-[1.02] hover:-translate-y-2 transition-all duration-300">
  <h3 className="text-xl font-heading font-semibold mb-4">Título</h3>
  <p className="text-foreground/80">Contenido de la card</p>
</div>
```

### Badges
```jsx
<div className="badge">
  <Icon className="w-4 h-4 text-primary-500" />
  <span className="text-sm font-semibold text-gradient">Badge</span>
</div>
```

### Section Container
```jsx
<section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-8">
  {/* Contenido de la sección */}
</section>
```

## 🎯 Efectos de Fondo

### Gradient Overlays
```jsx
<div className="relative">
  {/* Overlay principal */}
  <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background pointer-events-none" />
  
  {/* Blobs de color animados */}
  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-pulse-slow" />
  <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/30 rounded-full blur-3xl animate-pulse-slow animate-delay-500" />
  
  {/* Contenido */}
</div>
```

## 🎨 Partículas Flotantes

### Características
- **Cantidad**: 30 partículas por canvas
- **Tamaño**: 1-3px con glow radial de 3x el tamaño
- **Colores**: #60a5fa, #9333ea, #a855f7, #3b82f6
- **Movimiento**: Velocidad 0.1-0.4
- **Opacidad**: Pulsante entre 0.1 y 0.6
- **Blend Mode**: `screen`

## 📱 Responsive Design

### Breakpoints
```javascript
sm: '640px'   // Móvil grande
md: '768px'   // Tablet
lg: '1024px'  // Desktop
xl: '1280px'  // Desktop grande
2xl: '1536px' // Desktop XL
```

### Mobile-First
```jsx
<div className="
  text-base      /* Móvil */
  md:text-lg     /* Tablet */
  lg:text-xl     /* Desktop */
  p-4            /* Móvil */
  md:p-6         /* Tablet */
  lg:p-8         /* Desktop */
">
  Contenido responsive
</div>
```

## 🎨 Transiciones

```jsx
// Transición estándar (350ms)
<div className="transition-standard">

// Transición Merahki (450ms con easing personalizado)
<div className="transition-merahki">

// Transición personalizada
<div className="transition-all duration-300 ease-out-quart">
```

## 💡 Tips de Implementación

1. **Usa clases de Tailwind**: Aprovecha las clases predefinidas (primary-500, glass-card, etc.)
2. **Framer Motion**: Usa `whileInView` para animaciones al scroll
3. **Mobile-First**: Diseña primero para móvil, luego agrega breakpoints
4. **Consistencia**: Usa los mismos valores de spacing, border-radius, etc.
5. **Performance**: Usa `will-change` solo cuando sea necesario
6. **Accessibility**: Mantén contraste adecuado y focus states visibles

## 🌐 Referencia

**URL**: https://merahki.ai

**Páginas clave**:
- `/` - Home con hero selector
- `/growth-marketing` - Landing completa
- `/virtualizacion` - Landing de servicios

---

**Última actualización**: Implementado en Demo 2.0 ELG
