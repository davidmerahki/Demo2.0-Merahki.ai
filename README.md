# Merahki Demo - Education-Led Growth

Demo interactiva que demuestra cómo Education-Led Growth (ELG) transforma el tráfico en valor capturado.

## 🚀 Stack Tecnológico

- **React 18+** - Framework UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Styling con tema personalizado Merahki
- **Zustand** - Gestión de estado global
- **Framer Motion** - Animaciones y transiciones
- **Recharts** - Visualización de datos
- **Lottie** - Animaciones complejas

## 📦 Instalación

```bash
npm install
```

## 🏃 Desarrollo

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 📐 Arquitectura

### Componentes Core
- **DemoController**: Gestión de navegación y modos (Presentador/Self-Serve)
- **BusinessHUD**: KPIs persistentes en tiempo real
- **LoopCanvas**: Diagrama ELG interactivo (footer)

### 9 Momentos de la Demo
1. **M1**: La Realidad Actual (Shock de Fuga)
2. **M2**: Por Qué Se Van
3. **M3**: Qué Cambia con Customer Education
4. **M4**: Cómo Funciona (ELG en Acción)
5. **M5**: Del Interés al Valor (Onboarding 6x)
6. **M6**: De Lead a Advocate (Trazabilidad 360°)
7. **M7**: Habla con tus Datos (Ask Merahki)
8. **M8**: CTA (Diagnóstico ELG Express)
9. **M9**: No Sigas Quemando Leads (Loop Compuesto)

## 🎨 Principios de Diseño

- **Transiciones**: 300-450ms con easing `cubic-bezier(.22, .61, .36, 1)`
- **Metáfora Espacial**: Izquierda = pasado, Derecha = futuro
- **Feedback Visual**: Pérdidas (vibración + rojo), Ganancias (cálido + verde)
- **Interactividad**: Cada escena incluye una micro-interacción de 10s

## 📊 Datos

Los datos de la demo se gestionan mediante JSON seeds por industria (`fintech.json`, `saas_b2b.json`) con rangos de KPIs y deltas esperados.
