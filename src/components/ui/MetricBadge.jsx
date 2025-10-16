import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@utils/cn';

/**
 * MetricBadge - Badge para mostrar métricas con tendencia
 * Usado para mostrar deltas y cambios porcentuales
 */
const MetricBadge = ({
  value,
  trend = 'neutral', // 'up' | 'down' | 'neutral'
  variant = 'default', // 'default' | 'success' | 'danger' | 'primary'
  size = 'md', // 'sm' | 'md' | 'lg'
  showIcon = true,
  className = '',
  animate = true,
  ...props
}) => {
  const variants = {
    default: {
      up: 'bg-white/10 text-foreground/80 border-white/20',
      down: 'bg-white/10 text-foreground/80 border-white/20',
      neutral: 'bg-white/10 text-foreground/80 border-white/20'
    },
    success: {
      up: 'bg-success-500/20 text-success-400 border-success-500/30',
      down: 'bg-danger-500/20 text-danger-400 border-danger-500/30',
      neutral: 'bg-white/10 text-foreground/80 border-white/20'
    },
    danger: {
      up: 'bg-danger-500/20 text-danger-400 border-danger-500/30',
      down: 'bg-success-500/20 text-success-400 border-success-500/30',
      neutral: 'bg-white/10 text-foreground/80 border-white/20'
    },
    primary: {
      up: 'bg-primary-500/20 text-primary-400 border-primary-500/30',
      down: 'bg-primary-500/20 text-primary-400 border-primary-500/30',
      neutral: 'bg-white/10 text-foreground/80 border-white/20'
    }
  };

  const sizes = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : null;
  const colorClass = variants[variant][trend];

  const Component = animate ? motion.span : 'span';
  const motionProps = animate ? {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: 'spring', stiffness: 400, damping: 17 }
  } : {};

  return (
    <Component
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-semibold border backdrop-blur-sm',
        sizes[size],
        colorClass,
        className
      )}
      {...motionProps}
      {...props}
    >
      {showIcon && TrendIcon && <TrendIcon className={iconSizes[size]} />}
      <span>{value}</span>
    </Component>
  );
};

export default MetricBadge;
