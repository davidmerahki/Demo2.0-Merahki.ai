import { cn } from '@utils/cn';
import { TrendingUp, TrendingDown } from 'lucide-react';

const Badge = ({
  children,
  variant = 'default',
  trend = null, // 'up' | 'down' | null
  gradient = false,
  className,
}) => {
  const baseStyles = 'badge';
  
  const variants = {
    default: 'bg-white/10 text-foreground/90 border-white/20',
    primary: 'bg-primary-500/20 text-primary-300 border-primary-500/30',
    secondary: 'bg-secondary-500/20 text-secondary-300 border-secondary-500/30',
    accent: 'bg-accent-500/20 text-accent-300 border-accent-500/30',
    success: 'bg-success-500/20 text-success-400 border-success-500/30',
    danger: 'bg-danger-500/20 text-danger-400 border-danger-500/30',
    warm: 'bg-warm-500/20 text-warm-300 border-warm-500/30',
    cool: 'bg-cool-500/20 text-cool-300 border-cool-500/30',
  };

  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : null;

  return (
    <span className={cn(
      baseStyles, 
      !gradient && variants[variant],
      gradient && 'bg-gradient-primary border-primary-500/30',
      className
    )}>
      {TrendIcon && <TrendIcon className="w-4 h-4" />}
      <span className={gradient ? 'text-gradient' : ''}>
        {children}
      </span>
    </span>
  );
};

export default Badge;
