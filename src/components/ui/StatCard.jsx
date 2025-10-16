import { motion } from 'framer-motion';
import { cn } from '@utils/cn';
import { merahkiAnimations } from '@utils/merahkiComponents';

/**
 * StatCard - Componente para mostrar estadísticas con animación
 * Usado en múltiples momentos del demo
 */
const StatCard = ({
  icon: Icon,
  label,
  value,
  prefix = '',
  suffix = '',
  trend = null, // 'up' | 'down' | null
  trendValue = null,
  variant = 'default', // 'default' | 'success' | 'danger' | 'primary'
  className = '',
  delay = 0,
  ...props
}) => {
  const variants = {
    default: {
      bg: 'bg-white/5',
      border: 'border-white/10',
      iconBg: 'bg-white/10',
      iconColor: 'text-foreground/70',
      textColor: 'text-foreground'
    },
    success: {
      bg: 'bg-success-500/5',
      border: 'border-success-500/20',
      iconBg: 'bg-success-500/20',
      iconColor: 'text-success-400',
      textColor: 'text-foreground'
    },
    danger: {
      bg: 'bg-danger-500/5',
      border: 'border-danger-500/20',
      iconBg: 'bg-danger-500/20',
      iconColor: 'text-danger-400',
      textColor: 'text-foreground'
    },
    primary: {
      bg: 'bg-primary-500/5',
      border: 'border-primary-500/20',
      iconBg: 'bg-primary-500/20',
      iconColor: 'text-primary-400',
      textColor: 'text-foreground'
    }
  };

  const style = variants[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: merahkiAnimations.easing }}
      className={cn(
        'p-4 rounded-lg border transition-all duration-300',
        'hover:scale-[1.02] hover:-translate-y-1',
        style.bg,
        style.border,
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className={cn('p-2 rounded-lg', style.iconBg)}>
              <Icon className={cn('w-5 h-5', style.iconColor)} />
            </div>
          )}
          <div>
            <p className="text-xs text-foreground/60 font-medium mb-1">
              {label}
            </p>
            <p className={cn('text-2xl font-bold', style.textColor)}>
              {prefix}{value}{suffix}
            </p>
          </div>
        </div>
        
        {trend && trendValue && (
          <div className={cn(
            'text-sm font-semibold px-2 py-1 rounded',
            trend === 'up' ? 'text-success-400 bg-success-500/10' : 'text-danger-400 bg-danger-500/10'
          )}>
            {trend === 'up' ? '↑' : '↓'} {trendValue}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default StatCard;
