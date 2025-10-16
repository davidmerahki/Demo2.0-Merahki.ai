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
  kpis: {
    // Estado "Antes" (baseline)
    before: {
      adoption: 35, // % usuarios que adoptan
      csat: 6.5, // Score CSAT
      ltv: 12000, // LTV en USD
      support: 45, // Tickets por usuario/mes
      salesCycle: 90, // Días
      ttv: 21, // Time to Value en días
      cvr: 2.5, // Conversion Rate %
      activation: 28, // % activación en 7 días
      churn: 35, // % churn en 90 días
      pqls: 0, // Product Qualified Leads
    },
    // Estado "Después" (con ELG)
    after: {
      adoption: 68, // +94% mejora
      csat: 8.9, // +37% mejora
      ltv: 16800, // +40% mejora
      support: 18, // -60% reducción
      salesCycle: 45, // -50% reducción
      ttv: 3.5, // -83% reducción (6x)
      cvr: 8.2, // +228% mejora
      activation: 72, // +157% mejora
      churn: 12, // -66% reducción
      pqls: 0, // Se calcula dinámicamente
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
