import { create } from 'zustand';

/**
 * Zustand Store - Estado Global de la Demo
 * Gestiona: Momento actual, Modo, Industria, KPIs, y datos de interacción
 */
const useDemoStore = create((set, get) => ({
  // ============ NAVEGACIÓN Y MODO ============
  currentMoment: 1, // Momento actual (1-9)
  isPresenterMode: true, // true = Presentador, false = Self-Serve
  direction: 1, // Dirección de navegación (1 = adelante, -1 = atrás)

  setCurrentMoment: (moment) => set({ 
    currentMoment: moment,
    direction: moment > get().currentMoment ? 1 : -1
  }),
  
  togglePresenterMode: () => set((state) => ({ 
    isPresenterMode: !state.isPresenterMode 
  })),

  nextMoment: () => {
    const current = get().currentMoment;
    if (current < 9) {
      set({ currentMoment: current + 1, direction: 1 });
    }
  },

  prevMoment: () => {
    const current = get().currentMoment;
    if (current > 1) {
      set({ currentMoment: current - 1, direction: -1 });
    }
  },

  // ============ INDUSTRIA Y CONFIGURACIÓN ============
  selectedIndustry: 'saas_b2b', // 'saas_b2b' | 'fintech' | 'ecommerce'
  
  setIndustry: (industry) => set({ selectedIndustry: industry }),

  // ============ KPIs GLOBALES (BusinessHUD) ============
  // Datos basados en Forrester Consulting 2024 e Intellum 2024
  kpis: {
    // Estado "Antes" (baseline sin educación)
    before: {
      adoption: 35, // % usuarios que adoptan producto
      csat: 6.8, // Score CSAT (1-10)
      ltv: 15000, // LTV en USD
      support: 520, // Tickets mensuales
      salesCycle: 90, // Días ciclo de ventas
      ttv: 14, // Time to Value en días
      winRate: 18, // % tasa de cierre
      retention: 75, // % retención anual
      engagement: 42, // % engagement con producto
      roi: 0, // ROI del programa educativo
    },
    // Estado "Después" (con ELG - datos Forrester 2024)
    after: {
      adoption: 48.4, // +38.3% (Forrester 2024)
      csat: 8.6, // +26.2% (Forrester 2024)
      ltv: 20250, // +35% (Forrester 2024)
      support: 439, // -15.5% costos (Forrester 2024)
      salesCycle: 65, // -28.1% (Forrester 2024)
      ttv: 14, // Baseline (mejora en momentos específicos)
      winRate: 23.2, // +28.9% (Forrester 2024)
      retention: 91.7, // +22.2% con programas formalizados (Forrester 2024)
      engagement: 54.9, // +30.7% (Forrester 2024)
      roi: 372, // 372% ROI promedio (Forrester 2024)
    },
    // Deltas calculados
    deltas: {},
  },

  // Calcula los deltas entre Before y After
  calculateDeltas: () => {
    const { before, after } = get().kpis;
    const deltas = {};
    
    Object.keys(before).forEach(key => {
      const beforeVal = before[key];
      const afterVal = after[key];
      
      // Para métricas que deben bajar (support, salesCycle, ttv, churn)
      const shouldDecrease = ['support', 'salesCycle', 'ttv', 'churn'].includes(key);
      
      const percentChange = ((afterVal - beforeVal) / beforeVal) * 100;
      
      deltas[key] = {
        absolute: afterVal - beforeVal,
        percent: percentChange,
        isPositive: shouldDecrease ? percentChange < 0 : percentChange > 0,
      };
    });

    set((state) => ({
      kpis: { ...state.kpis, deltas }
    }));
  },

  // Actualiza KPIs dinámicamente (para interacciones)
  updateKPI: (stage, key, value) => set((state) => ({
    kpis: {
      ...state.kpis,
      [stage]: {
        ...state.kpis[stage],
        [key]: value,
      },
    },
  })),

  // ============ DATOS DE INTERACCIÓN POR MOMENTO ============
  momentData: {
    m1: {
      currentDay: 1, // Scrubber temporal
      leadsLost: 0,
    },
    m2: {
      currentWeek: 1, // Scrubber curva supervivencia
      selectedCard: null, // 'tutorials' | 'journeys'
    },
    m3: {
      educationIntensity: 50, // Slider 0-100
    },
    m4: {
      activeNode: null, // Nodo activo en el mapa
      nlqQuery: '',
      nlqResponse: null,
    },
    m5: {
      completedTasks: [], // IDs de tareas completadas
      ahaTriggered: false,
    },
    m6: {
      attributionEnabled: false, // Toggle de atribución
      selectedUser: null,
    },
    m7: {
      chatHistory: [],
      activeInsight: null,
    },
    m8: {
      ctaModalOpen: false,
    },
    m9: {
      reinvestmentRate: 0.3, // Slider 'b' (0-1)
      multiplier: 1.43, // Calculado: 1/(1-b)
    },
  },

  // Actualiza datos específicos de un momento
  updateMomentData: (moment, data) => set((state) => ({
    momentData: {
      ...state.momentData,
      [moment]: {
        ...state.momentData[moment],
        ...data,
      },
    },
  })),

  // ============ HELPERS ============
  // Calcula PQLs basado en progreso educativo
  calculatePQLs: () => {
    const { m5 } = get().momentData;
    const completionRate = m5.completedTasks.length / 5; // Asumiendo 5 tareas
    const basePQLs = 150;
    const pqls = Math.round(basePQLs * (1 + completionRate * 2));
    
    set((state) => ({
      kpis: {
        ...state.kpis,
        after: {
          ...state.kpis.after,
          pqls,
        },
      },
    }));
  },

  // Calcula multiplicador de crecimiento compuesto
  calculateMultiplier: (b) => {
    const multiplier = 1 / (1 - b);
    set((state) => ({
      momentData: {
        ...state.momentData,
        m9: {
          ...state.momentData.m9,
          reinvestmentRate: b,
          multiplier: parseFloat(multiplier.toFixed(2)),
        },
      },
    }));
  },

  // Reset completo del estado
  reset: () => set({
    currentMoment: 1,
    direction: 1,
    momentData: {
      m1: { currentDay: 1, leadsLost: 0 },
      m2: { currentWeek: 1, selectedCard: null },
      m3: { educationIntensity: 50 },
      m4: { activeNode: null, nlqQuery: '', nlqResponse: null },
      m5: { completedTasks: [], ahaTriggered: false },
      m6: { attributionEnabled: false, selectedUser: null },
      m7: { chatHistory: [], activeInsight: null },
      m8: { ctaModalOpen: false },
      m9: { reinvestmentRate: 0.3, multiplier: 1.43 },
    },
  }),
}));

export default useDemoStore;
