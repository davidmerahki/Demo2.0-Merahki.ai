import { motion } from 'framer-motion';
import { cn } from '@utils/cn';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  onClick,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500/10 focus:ring-primary-500 backdrop-blur-sm',
    ghost: 'text-foreground/80 hover:bg-white/10 focus:ring-primary-500',
    danger: 'bg-danger-500 text-white hover:bg-danger-600 hover:shadow-glow-pink focus:ring-danger-500',
    success: 'bg-success-500 text-white hover:bg-success-600 hover:shadow-glow-md focus:ring-success-500',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 md:px-8 md:py-4 text-base',
    lg: 'px-8 py-4 md:px-10 md:py-5 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
