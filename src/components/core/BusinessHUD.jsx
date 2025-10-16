import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Users, Heart, DollarSign, HeadphonesIcon, Clock } from 'lucide-react';
import useDemoStore from '@store/useDemoStore';
import Badge from '@components/ui/Badge';
import AnimatedCounter from '@components/ui/AnimatedCounter';
import { cn } from '@utils/cn';
import { useEffect } from 'react';

const BusinessHUD = () => {
  const { kpis, calculateDeltas } = useDemoStore();

  useEffect(() => {
    calculateDeltas();
  }, [calculateDeltas]);

  const kpiConfig = [
    {
      key: 'adoption',
      label: 'Adoption',
      icon: Users,
      suffix: '%',
      color: 'warm',
    },
    {
      key: 'csat',
      label: 'CSAT',
      icon: Heart,
      decimals: 1,
      color: 'warm',
    },
    {
      key: 'ltv',
      label: 'LTV',
      icon: DollarSign,
      prefix: '$',
      format: (val) => (val / 1000).toFixed(1) + 'k',
      color: 'warm',
    },
    {
      key: 'support',
      label: 'Support',
      icon: HeadphonesIcon,
      suffix: ' tickets',
      color: 'success',
      inverse: true,
    },
    {
      key: 'ttv',
      label: 'TTV',
      icon: Clock,
      suffix: ' días',
      decimals: 1,
      color: 'success',
      inverse: true,
    },
  ];

  const getDeltaBadge = (delta, inverse = false) => {
    if (!delta) return null;
    
    const isPositive = inverse ? !delta.isPositive : delta.isPositive;
    const variant = isPositive ? 'success' : 'danger';
    const trend = isPositive ? 'up' : 'down';
    const sign = delta.percent > 0 ? '+' : '';

    return (
      <Badge variant={variant} trend={trend} className="text-xs">
        {sign}{delta.percent.toFixed(0)}%
      </Badge>
    );
  };

  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="fixed top-24 right-6 z-40 w-80"
    >
      <div className="glass-card p-5">
        {/* Header */}
        <div className="mb-4 pb-3 border-b border-white/10">
          <h3 className="text-sm font-heading font-bold text-gradient uppercase tracking-wide">
            Business Impact
          </h3>
          <p className="text-xs text-foreground/60 mt-1">
            KPIs en tiempo real
          </p>
        </div>

        {/* KPIs Grid */}
        <div className="space-y-3">
          {kpiConfig.map((config) => {
            const Icon = config.icon;
            const beforeValue = kpis.before[config.key];
            const afterValue = kpis.after[config.key];
            const delta = kpis.deltas?.[config.key];

            return (
              <motion.div
                key={config.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-merahki border border-white/5 hover:border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "p-2 rounded-lg",
                    config.color === 'warm' ? 'bg-primary-500/20' : 'bg-success-500/20'
                  )}>
                    <Icon className={cn(
                      "w-4 h-4",
                      config.color === 'warm' ? 'text-primary-400' : 'text-success-400'
                    )} />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/70 font-medium">
                      {config.label}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <AnimatedCounter
                        value={afterValue}
                        decimals={config.decimals || 0}
                        prefix={config.prefix || ''}
                        suffix={config.suffix || ''}
                        className="text-lg font-bold text-foreground"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  {getDeltaBadge(delta, config.inverse)}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-4 pt-3 border-t border-white/10">
          <p className="text-xs text-foreground/50 text-center">
            Comparado con baseline sin educación
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BusinessHUD;
