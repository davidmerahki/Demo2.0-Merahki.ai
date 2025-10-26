/**
 * Copy y datos para los 9 momentos del demo
 * Basado en insights finales v3
 */

export const momentsCopy = {
  // Momento 1 - La Realidad Actual
  moment1: {
    badge: 'Momento 1',
    title: 'La Realidad Actual',
    subtitle: 'Tus leads llegan... pero se van',
    description: 'Tus leads de outbound, inbound, orgánico y referidos llegan a un lugar. Usualmente es una landing page que intenta convertirlos o un canal como WhatsApp. Pero la tasa de conversión es baja y, peor aún, el 95% de los productos que se lanzan al mercado fracasan, y solo 1 de cada 10 usuarios permanece activo después de 12 semanas.',
    insight: 'La mayoría de empresas aún dependen de "enviar links" (docs, tutoriales) como soporte post-click. El consumo pasivo y fuera de contexto no cambia el comportamiento.',
    kpis: ['CTR→CVR', '% Activación día 1-10', 'TTV actual'],
    visual: 'Embudo roto con gotas cayendo',
    copy: 'Tráfico sí. Aprendizaje aplicado: no.'
  },

  // Momento 2 - Por Qué Se Van
  moment2: {
    badge: 'Momento 2',
    title: 'Por Qué Se Van',
    subtitle: 'El problema no es tráfico, es aprendizaje aplicado',
    description: 'El 55% de usuarios que abandonan tu producto lo hacen porque NUNCA ENTENDIÓ CÓMO USARLO O PARA QUÉ ERA. Además, según Colombia Edtech, los tutoriales y documentación no son suficientes pues en el 67% de los casos el orden de estos contenidos no corresponden a los casos de uso específicos del usuario.',
    insight: '9 de cada 10 leads, atraídos por tus increíbles ads, se irán porque no entienden cómo utilizar tu solución. Sí, tienes documentación y tutoriales; ese es el problema: creer que tirar links resuelve la brecha de entendimiento.',
    kpis: ['% Aha moment ≤7 días', '% Feature adoption clave', 'DAU/WAU a 12 semanas'],
    visual: 'Curva de supervivencia 12 semanas + Link dumping vs Learning',
    copy: 'Perdemos 9/10... por no enseñar.',
    differentiation: 'Contenido informativo vs. recorridos educativos con práctica (micro-tareas, checklists, quizzes, simulaciones)'
  },

  // Momento 3 - Qué Cambia con Customer Education
  moment3: {
    badge: 'Momento 3',
    title: 'Qué Cambia con Customer Education',
    subtitle: 'ROI 372% en 7 meses (Forrester 2024)',
    description: 'Las organizaciones que implementan programas de educación para clientes ven un ROI promedio del 372% y recuperan su inversión en solo 7 meses. El 86% reporta ROI positivo.',
    insight: 'Forrester Consulting (2024) validó el impacto: +38.3% en adopción, +35% en LTV, +28.9% en win rates, +26.2% en CSAT, -28.1% en ciclo de ventas. No es contenido, es un motor de ingresos.',
    impactRanges: {
      adoption: '+38.3%',
      csat: '+26.2%',
      ltv: '+35%',
      support: '-15.5%',
      winRate: '+28.9%',
      retention: '+22.2%',
      roi: '372%'
    },
    paybackPeriod: '7 meses',
    source: 'Forrester Consulting 2024',
    kpis: ['ROI 372%', 'LTV +35%', 'Win Rate +28.9%', 'Retención +22.2%'],
    visual: 'Split-screen Antes/Después con badges animados + sello Forrester',
    copy: 'ROI 372%. Validado por Forrester.'
  },

  // Momento 4 - Cómo Funciona
  moment4: {
    badge: 'Momento 4',
    title: 'Cómo Funciona (ELG en Acción)',
    subtitle: 'Ciclo de ventas -28.1% más rápido',
    components: [
      'Open Onboarding Academies diseñadas desde los intereses de aprendizaje de los ICPs',
      'Lead Scoring educativo: temas vistos, profundidad, casos de uso más probables',
      'Product placement educativo: demostramos de forma práctica cómo el software resuelve necesidades',
      'Integración total de datos con tu CRM y dashboards',
      'Arquitectura en Amazon AWS con Amazon Bedrock y Amazon QuickSight para analítica conversacional'
    ],
    journey: [
      'Anuncio',
      'Academia',
      'Ruta personalizada por interés',
      'Señales',
      'Scoring',
      'CRM',
      'Sales Assist',
      'In-App Guides'
    ],
    insight: 'La educación reduce el ciclo de ventas en 28.1% (Forrester 2024) porque los prospectos llegan educados. El scoring considera progreso, evaluación, engagement y eventos de producto para determinar el next best action.',
    salesImpact: {
      winRate: '+28.9%',
      salesCycle: '-28.1%',
      source: 'Forrester 2024'
    },
    kpis: ['Win Rate +28.9%', 'Ciclo -28.1%', 'PQLs generados', 'Caso de uso identificado'],
    visual: 'Mapa del recorrido + Mock NLQ QuickSight',
    copy: 'Prospectos educados cierran 28.9% más.',
    nlqExample: '¿Qué casos de uso son más relevantes en los leads de esta estrategia?'
  },

  // Momento 5 - Del Interés al Valor
  moment5: {
    badge: 'Momento 5',
    title: 'Del Interés al Valor',
    subtitle: 'Adopción +38.3%, Engagement +30.7%',
    description: 'Tras el paso por la academia, ya conocemos el caso de uso. Tu equipo comercial ejecuta un onboarding más efectivo porque el cliente ya entiende para qué sirve tu solución.',
    insight: 'Forrester 2024 validó: +38.3% en adopción de producto y +30.7% en engagement. Los usuarios ven In-App Tour Guides para completar 3-5 jobs-to-be-done críticos y llegar a su aha moment más rápido.',
    result: 'Usuarios activos por más tiempo y por más semanas, porque entienden el valor desde el día 1.',
    adoptionImpact: {
      adoption: '+38.3%',
      engagement: '+30.7%',
      source: 'Forrester 2024'
    },
    kpis: ['Adopción +38.3%', 'Engagement +30.7%', 'JTBD completados', 'Retención 12 semanas'],
    visual: 'Playbook de ventas → In-App tours → Checklist JTBD → Aha! → TTV',
    copy: 'Adopción +38.3%. Engagement +30.7%.',
    multiplier: '6×'
  },

  // Momento 6 - De Lead a Advocate
  moment6: {
    badge: 'Momento 6',
    title: 'De Lead a Advocate',
    subtitle: 'Retención +22.2%, CSAT +26.2%',
    description: 'Tendrás trazabilidad de extremo a extremo: Lead → New Customer → Advocate. Un cliente educado compra con confianza (+26.2% CSAT) y permanece más tiempo (+22.2% retención).',
    insight: 'Forrester 2024 validó: +22.2% en retención con programas formalizados y +26.2% en CSAT. Los modelos de atribución incluyen influencia educativa (no sólo último click). Advocacy medido por referidos, UGC, comunidad y participación.',
    retentionImpact: {
      retention: '+22.2%',
      csat: '+26.2%',
      support: '-15.5%',
      tickets: '-7.2%',
      source: 'Forrester 2024'
    },
    kpis: ['Retención +22.2%', 'CSAT +26.2%', 'Soporte -15.5%', 'Net Dollar Retention'],
    visual: 'Vista 360° del usuario: fuentes → contenidos → features → tickets → NPS → referidos',
    copy: 'Retención +22.2%. CSAT +26.2%.'
  },

  // Momento 7 - Call to Action
  moment7: {
    badge: 'Momento 7',
    title: 'Activa tu Estrategia ELG',
    subtitle: 'ROI 372% en 7 meses',
    description: 'Inicia ya tu estrategia de Education-Led Growth Marketing con Merahki.ai. El 86% de las empresas reporta ROI positivo, y el 96% al menos recupera la inversión (Forrester 2024).',
    deliverables: [
      'Mapa de casos de uso',
      'Blueprint de academia',
      'Plan de contenidos',
      'Integraciones CRM',
      'KPIs y métricas',
      'Timeline 30/60/90'
    ],
    businessCase: {
      roi: '372%',
      payback: '7 meses',
      positiveROI: '86%',
      breakEven: '96%',
      source: 'Forrester 2024'
    },
    governance: 'Gobernanza con SoaP (Strategy on a Page), dueño único por iniciativa, semáforos (rojo/ámbar/verde) y revisiones quincenales.',
    kpis: ['ROI 372%', 'Payback 7 meses', 'Rutas publicadas', 'Primeros PQLs'],
    visual: 'Modal CTA con entregables + SoaP widget + sello Forrester',
    copy: 'ROI 372% en 7 meses. ¿Empezamos?'
  },

  // Momento 8 - Evita Seguir Quemando Leads
  moment8: {
    badge: 'Momento 8',
    title: 'Evita Seguir Quemando Leads',
    subtitle: 'O loops... o fuga',
    description: 'Evita seguir quemando leads y tolerando churn alto. Ya tienes clientes, pero solo algunos conocen el verdadero poder de tu producto.',
    insight: 'Entrega aprendizaje hoy a leads y clientes y mejora adquisición y retención. Tus academias te darán insights valiosos sobre intereses, casos de uso y problemas de tus usuarios potenciales.',
    loopPower: 'Loops de educación escalan cuando hay reinversión directa (nuevos learnings → más señales → mejor targeting → más valor). El contenido educativo no es una campaña única; se marketiza de forma continua (email, in-app, social, comunidad) para sostener el loop.',
    kpis: ['Growth multiplier del loop educativo', 'Reach mensual de contenidos', 'Engagement por segmento', 'Costo de adquisición por PQL'],
    visual: 'Contraste: sin educación (fuga) vs. con educación (loop activo y compuesto)',
    copy: 'O loops... o fuga.',
    cta: 'Aprovecha el impulso genuino por educarnos como motor de crecimiento de tu startup.'
  },

  // Momento 9 - Ask Merahki (Insights Conversacionales)
  moment9: {
    badge: 'Momento 9',
    title: 'Habla con tus Datos',
    subtitle: 'Insights conversacionales en segundos',
    description: 'Pregunta en lenguaje natural y obtén insights accionables al instante.',
    exampleQueries: [
      '¿Qué cohortes activaron más rápido tras el curso X?',
      '¿Qué contenido mueve NDR en cuentas 50-200 seats?',
      'Muéstrame outliers de tickets post-certificación.'
    ],
    features: [
      'Insight Cards: respuesta en lenguaje claro + gráfico sugerido + mini-explicación "por qué" + confianza (Low/Med/High)',
      'Acciones 1-click: Crear segmento, Agregar a Playbook, Enviar a CRM, Guardar insight',
      'Sugerencias de follow-up: comparar por industria, ver tendencia 12 semanas, explicar este gráfico'
    ],
    guardrails: 'Cada insight muestra fuente de datos (métrica/glosario) y fórmula; límite a columnas expuestas (no alucina fuera del esquema).',
    kpis: ['Time-to-Answer', '# Insights→Action', '# Segmentos creados', '% Uso de Ask por sesión'],
    visual: 'Panel lateral Ask Merahki con chat + Insight Cards',
    copy: 'Pregunta. Entiende. Actúa.',
    responseTime: '<1s'
  }
};

// Tesis del loop ELG (para intro/footer)
export const elgLoop = {
  thesis: 'Education-Led Growth (ELG) es un loop de adquisición que se suma a los loops de marketing existentes. La diferencia: el descubrimiento ocurre a través de contenidos y recorridos educativos que resuelven problemas del usuario; el product placement se inserta inteligentemente en el contexto del caso de uso (no en una venta directa).',
  
  elements: [
    'Entrada de audiencia',
    'Consumo de aprendizaje',
    'Señales de intención (engagement + temas/casos de uso)',
    'Recomendación de next best action (PQL/MQL)',
    'Onboarding guiado',
    'Aha moment',
    'Valor capturado',
    'Advocacy',
    'Re-alimentación de audiencia'
  ],
  
  architecture: [
    'Open Onboarding Academies',
    'In-App Guides',
    'Integración CRM',
    'Observabilidad de datos (AWS + Bedrock + QuickSight)',
    'Scoring e insights accionables'
  ]
};

// KPIs por momento (para BusinessHUD)
export const kpisByMoment = {
  1: ['ctr_cvr', 'activation_d1_10', 'ttv'],
  2: ['aha_7days', 'feature_adoption', 'dau_wau_12w'],
  3: ['adoption', 'csat', 'ltv', 'support', 'ttv'],
  4: ['pqls', 'sales_velocity', 'use_case_identified', 'scoring_precision'],
  5: ['ttv', 'jtbd_completion', 'retention_12w', 'expansion_rate'],
  6: ['referrals_1000', 'ugc_month', 'participation_rate', 'ndr'],
  7: ['ttd', 'routes_published', 'integrations_ready', 'first_pqls'],
  8: ['growth_multiplier', 'content_reach', 'engagement_segment', 'cac_pql'],
  9: ['time_to_answer', 'insights_to_action', 'segments_created', 'ask_usage']
};

export default momentsCopy;
