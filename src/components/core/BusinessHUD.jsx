import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, DollarSign, Target, Zap, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import useDemoStore from '@store/useDemoStore';
import AnimatedCounter from '@components/ui/AnimatedCounter';
import { cn } from '@utils/cn';
import { useEffect, useState } from 'react';

const BusinessHUD = () => {
  const { kpis, calculateDeltas } = useDemoStore();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    calculateDeltas();
  }, [calculateDeltas]);

  const kpiConfig = [
    {
      key: 'roi',
      label: 'ROI',
      icon: TrendingUp,
      suffix: '%',
      color: 'primary',
      highlight: true,
    },
    {
      key: 'ltv',
      label: 'LTV',
      icon: DollarSign,
      prefix: '$',
      format: (val) => (val / 1000).toFixed(1) + 'k',
      color: 'primary',
    },
    {
      key: 'winRate',
      label: 'Win Rate',
      icon: Target,
      suffix: '%',
      decimals: 1,
      color: 'success',
    },
    {
      key: 'retention',
      label: 'Retención',
      icon: ShieldCheck,
      suffix: '%',
      decimals: 1,
      color: 'success',
    },
    {
      key: 'engagement',
      label: 'Engagement',
      icon: Zap,
      suffix: '%',
      decimals: 1,
      color: 'success',
    },
  ];

  const getImpactText = (delta) => {
    if (!delta || !delta.isPositive) return null;
    const sign = delta.percent > 0 ? '+' : '';
    return `${sign}${Math.abs(delta.percent).toFixed(0)}%`;
  };

  return (
    <>
      {/* Desktop Version - Fixed Right */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="hidden lg:block fixed top-24 right-6 z-40 w-80"
      >
        <div className="glass-card p-5">
        {/* Header */}
        <div className="mb-4 pb-3 border-b border-white/10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-heading font-bold text-gradient uppercase tracking-wide">
              Business Impact
            </h3>
            <div className="px-2 py-1 bg-primary-500/20 rounded-full">
              <p className="text-[10px] font-bold text-primary-400 uppercase tracking-wide">
                Live
              </p>
            </div>
          </div>
          <p className="text-xs text-foreground/60">
            Métricas validadas por Forrester 2024
          </p>
        </div>

        {/* KPIs Grid */}
        <div className="space-y-3">
          {kpiConfig.map((config) => {
            const Icon = config.icon;
            const afterValue = kpis.after[config.key];
            const delta = kpis.deltas?.[config.key];

            return (
              <motion.div
                key={config.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-merahki border border-white/5 hover:border-white/10"
              >
                <div className={cn(
                  "p-2 rounded-lg",
                  config.color === 'primary' ? 'bg-primary-500/20' : 'bg-success-500/20'
                )}>
                  <Icon className={cn(
                    "w-4 h-4",
                    config.color === 'primary' ? 'text-primary-400' : 'text-success-400'
                  )} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-foreground/60 font-medium mb-0.5">
                    {config.label}
                  </p>
                  <div className="flex items-baseline gap-2">
                    {config.format ? (
                      <span className={cn(
                        "text-xl font-bold",
                        config.highlight ? 'text-primary-400' : 'text-foreground'
                      )}>
                        {config.prefix}{config.format(afterValue)}
                      </span>
                    ) : (
                      <AnimatedCounter
                        value={afterValue}
                        decimals={config.decimals || 0}
                        prefix={config.prefix || ''}
                        suffix={config.suffix || ''}
                        className={cn(
                          "text-xl font-bold",
                          config.highlight ? 'text-primary-400' : 'text-foreground'
                        )}
                      />
                    )}
                    {delta && delta.isPositive && (
                      <span className="text-sm font-semibold text-success-400">
                        {getImpactText(delta)}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-4 pt-3 border-t border-white/10">
          <div className="flex items-center justify-between text-xs">
            <p className="text-foreground/50">
              vs. baseline sin educación
            </p>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-success-500 animate-pulse" />
              <span className="text-foreground/60 font-medium">Tiempo real</span>
            </div>
          </div>
        </div>
      </div>
      </motion.div>

      {/* Mobile Version - Bottom Collapsible */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40">
        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full glass-card border-t border-white/10 px-4 py-2 flex items-center justify-between"
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-xs font-semibold text-foreground">Business Impact</span>
            <span className="text-xs text-foreground/60">ROI {kpis.after.roi}%</span>
          </div>
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-foreground/60" />
          ) : (
            <ChevronUp className="w-4 h-4 text-foreground/60" />
          )}
        </motion.button>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card border-t border-white/10 overflow-hidden"
            >
              <div className="p-4 max-h-[50vh] overflow-y-auto">
                {/* Header */}
                <div className="mb-3 pb-2 border-b border-white/10">
                  <p className="text-xs text-foreground/60">
                    Métricas validadas por Forrester 2024
                  </p>
                </div>

                {/* KPIs Grid - Compacto */}
                <div className="grid grid-cols-2 gap-2">
                  {kpiConfig.map((config) => {
                    const Icon = config.icon;
                    const afterValue = kpis.after[config.key];
                    const delta = kpis.deltas?.[config.key];

                    return (
                      <div
                        key={config.key}
                        className="flex flex-col gap-1 p-2 bg-white/5 rounded-lg border border-white/5"
                      >
                        <div className="flex items-center gap-1.5">
                          <div className={cn(
                            "p-1 rounded",
                            config.color === 'primary' ? 'bg-primary-500/20' : 'bg-success-500/20'
                          )}>
                            <Icon className={cn(
                              "w-3 h-3",
                              config.color === 'primary' ? 'text-primary-400' : 'text-success-400'
                            )} />
                          </div>
                          <p className="text-[10px] text-foreground/60 font-medium">
                            {config.label}
                          </p>
                        </div>
                        <div className="flex items-baseline gap-1">
                          {config.format ? (
                            <span className={cn(
                              "text-base font-bold",
                              config.highlight ? 'text-primary-400' : 'text-foreground'
                            )}>
                              {config.prefix}{config.format(afterValue)}
                            </span>
                          ) : (
                            <AnimatedCounter
                              value={afterValue}
                              decimals={config.decimals || 0}
                              prefix={config.prefix || ''}
                              suffix={config.suffix || ''}
                              className={cn(
                                "text-base font-bold",
                                config.highlight ? 'text-primary-400' : 'text-foreground'
                              )}
                            />
                          )}
                          {delta && delta.isPositive && (
                            <span className="text-xs font-semibold text-success-400">
                              {getImpactText(delta)}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Footer Note */}
                <div className="mt-3 pt-2 border-t border-white/10">
                  <p className="text-[10px] text-foreground/50 text-center">
                    vs. baseline sin educación
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default BusinessHUD;
