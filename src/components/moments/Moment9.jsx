import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { pageVariants, pageTransition } from '@utils/motion';
import useDemoStore from '@store/useDemoStore';
import { MessageSquare, Send, TrendingUp, Users, Target, Zap, Download, Share2, Plus, RotateCcw } from 'lucide-react';
import Badge from '@components/ui/Badge';
import Card from '@components/ui/Card';
import Button from '@components/ui/Button';
import ScheduleButton from '@components/ui/ScheduleButton';
import { AnimatedBlob, GradientOverlay, merahkiAnimations } from '@utils/merahkiComponents';
import { momentsCopy } from '@data/momentsCopy';

const Moment9 = () => {
  const { direction } = useDemoStore();
  const copy = momentsCopy.moment9;
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Preguntas sugeridas
  const suggestedQuestions = [
    '¿Cuáles son los casos de uso más populares esta semana?',
    '¿Qué contenido genera más engagement?',
    'Muestra PQLs generados por educación',
    '¿Cómo está el TTV comparado con el mes pasado?'
  ];

  // Respuestas simuladas con insights
  const simulatedResponses = {
    'casos de uso': {
      text: 'Los casos de uso más populares esta semana son:',
      insights: [
        {
          id: 1,
          icon: Target,
          title: 'Automatización de Workflows',
          value: '45%',
          trend: '+12%',
          description: 'Engagement en contenido educativo',
          actions: ['Ver contenido', 'Crear segmento']
        },
        {
          id: 2,
          icon: Users,
          title: 'Integraciones API',
          value: '32%',
          trend: '+8%',
          description: 'Usuarios activos en este tema',
          actions: ['Ver usuarios', 'Exportar lista']
        }
      ]
    },
    'engagement': {
      text: 'El contenido con mayor engagement es:',
      insights: [
        {
          id: 1,
          icon: TrendingUp,
          title: 'Tutorial: API Webhooks',
          value: '89%',
          trend: '+15%',
          description: 'Tasa de completitud',
          actions: ['Ver métricas', 'Compartir']
        },
        {
          id: 2,
          icon: Zap,
          title: 'Guía: Onboarding Rápido',
          value: '76%',
          trend: '+22%',
          description: 'Engagement promedio',
          actions: ['Ver detalles', 'Duplicar']
        }
      ]
    },
    'pqls': {
      text: 'PQLs generados por educación en los últimos 30 días:',
      insights: [
        {
          id: 1,
          icon: Users,
          title: 'Total PQLs',
          value: '247',
          trend: '+34%',
          description: 'vs mes anterior',
          actions: ['Ver lista', 'Exportar a CRM']
        },
        {
          id: 2,
          icon: Target,
          title: 'Tasa de Conversión',
          value: '68%',
          trend: '+12%',
          description: 'PQL a cliente',
          actions: ['Ver embudo', 'Analizar']
        }
      ]
    },
    'ttv': {
      text: 'Análisis de Time to Value:',
      insights: [
        {
          id: 1,
          icon: TrendingUp,
          title: 'TTV Promedio',
          value: '2.8 días',
          trend: '-40%',
          description: 'Reducción vs mes pasado',
          actions: ['Ver gráfico', 'Comparar']
        },
        {
          id: 2,
          icon: Zap,
          title: 'Usuarios <24h',
          value: '45%',
          trend: '+18%',
          description: 'Alcanzan valor en 1 día',
          actions: ['Ver usuarios', 'Crear cohorte']
        }
      ]
    }
  };

  const handleSendMessage = (question) => {
    const userMessage = question || inputValue;
    if (!userMessage.trim()) return;

    // Agregar mensaje del usuario
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setInputValue('');
    setIsTyping(true);

    // Simular respuesta del asistente
    setTimeout(() => {
      // Buscar respuesta basada en palabras clave
      let response = {
        text: 'Entiendo tu pregunta. Aquí están los insights más relevantes:',
        insights: []
      };

      const lowerQuestion = userMessage.toLowerCase();
      if (lowerQuestion.includes('caso') || lowerQuestion.includes('popular')) {
        response = simulatedResponses['casos de uso'];
      } else if (lowerQuestion.includes('engagement') || lowerQuestion.includes('contenido')) {
        response = simulatedResponses['engagement'];
      } else if (lowerQuestion.includes('pql')) {
        response = simulatedResponses['pqls'];
      } else if (lowerQuestion.includes('ttv') || lowerQuestion.includes('valor')) {
        response = simulatedResponses['ttv'];
      }

      setMessages(prev => [...prev, { type: 'assistant', ...response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <motion.div
      custom={direction}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="w-full h-full flex items-center justify-center bg-background relative overflow-hidden"
    >
      {/* Efectos de fondo */}
      <AnimatedBlob color="accent" size="lg" position="top-left" delay={0} />
      <AnimatedBlob color="primary" size="md" position="bottom-right" delay={300} />
      <GradientOverlay direction="to-b" opacity="default" />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          {...merahkiAnimations.fadeInUp}
        >
          <Badge gradient className="mb-6">
            {copy.badge}
          </Badge>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gradient mb-4">
            {copy.title}
          </h2>
          
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-4">
            {copy.description}
          </p>
          
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500/10 border border-accent-500/30 rounded-full">
            <MessageSquare className="w-5 h-5 text-accent-400" />
            <p className="text-sm md:text-base font-semibold text-gradient">
              {copy.copy}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: merahkiAnimations.easing }}
            className="lg:col-span-2"
          >
            <Card className="h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground">
                      Ask Merahki
                    </h3>
                    <p className="text-xs text-foreground/60">Asistente de insights educativos</p>
                  </div>
                </div>
                {messages.length > 0 && (
                  <button
                    onClick={() => setMessages([])}
                    className="flex items-center gap-2 px-3 py-2 text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Nueva Conversación
                  </button>
                )}
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto py-4 space-y-4">
                {messages.length === 0 && (
                  <div className="text-center py-12">
                    <MessageSquare className="w-12 h-12 text-foreground/30 mx-auto mb-4" />
                    <p className="text-sm text-foreground/60 mb-6">
                      Pregunta cualquier cosa sobre tus datos educativos
                    </p>
                    <div className="space-y-2">
                      {suggestedQuestions.map((question, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          onClick={() => handleSendMessage(question)}
                          className="block w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-sm text-foreground/80 transition-all"
                        >
                          {question}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                <AnimatePresence mode="popLayout">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`
                        max-w-[80%] p-4 rounded-lg
                        ${message.type === 'user' 
                          ? 'bg-gradient-primary text-white' 
                          : 'bg-white/5 border border-white/10'
                        }
                      `}>
                        <p className="text-sm">{message.text}</p>
                        
                        {/* Insight Cards */}
                        {message.insights && message.insights.length > 0 && (
                          <div className="mt-4 space-y-3">
                            {message.insights.map((insight) => {
                              const Icon = insight.icon;
                              return (
                                <div
                                  key={insight.id}
                                  className="p-3 bg-white/5 border border-white/10 rounded-lg"
                                >
                                  <div className="flex items-start gap-3 mb-2">
                                    <div className="p-2 rounded-lg bg-primary-500/20">
                                      <Icon className="w-4 h-4 text-primary-400" />
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="text-sm font-semibold text-foreground mb-1">
                                        {insight.title}
                                      </h4>
                                      <div className="flex items-baseline gap-2 mb-1">
                                        <span className="text-2xl font-bold text-gradient">
                                          {insight.value}
                                        </span>
                                        <Badge variant="success" className="text-xs">
                                          {insight.trend}
                                        </Badge>
                                      </div>
                                      <p className="text-xs text-foreground/60">
                                        {insight.description}
                                      </p>
                                    </div>
                                  </div>
                                  
                                  {/* Quick Actions */}
                                  <div className="flex gap-2 mt-3">
                                    {insight.actions.map((action, idx) => (
                                      <button
                                        key={idx}
                                        className="px-3 py-1 text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all"
                                      >
                                        {action}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <div className="flex gap-1">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 rounded-full bg-foreground/40"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 rounded-full bg-foreground/40"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 rounded-full bg-foreground/40"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {/* Preguntas sugeridas después de respuesta */}
                {messages.length > 0 && !isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="pt-4 border-t border-white/10"
                  >
                    <p className="text-xs text-foreground/60 mb-3">Preguntas relacionadas:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {suggestedQuestions.slice(0, 4).map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleSendMessage(question)}
                          className="text-left px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-500/50 rounded-lg text-xs text-foreground/80 transition-all"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input Area */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Pregunta sobre tus datos..."
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder:text-foreground/40 focus:border-primary-500 focus:outline-none"
                  />
                  <Button
                    variant="primary"
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Quick Actions Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: merahkiAnimations.easing }}
            className="space-y-4"
          >
            <Card>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                Acciones Rápidas
              </h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4" />
                  Exportar Reporte
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Share2 className="w-4 h-4" />
                  Compartir Insights
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="w-4 h-4" />
                  Crear Dashboard
                </Button>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border-primary-500/30">
              <div className="text-center">
                <Zap className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  Insights en Tiempo Real
                </h4>
                <p className="text-xs text-foreground/70 mb-4">
                  Conecta tus datos para análisis instantáneo
                </p>
                <Button variant="primary" size="sm" className="w-full">
                  Conectar Ahora
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* CTA - Agenda una Reunión */}
        <ScheduleButton delay={0.7} className="mt-8" />
      </div>
    </motion.div>
  );
};

export default Moment9;
