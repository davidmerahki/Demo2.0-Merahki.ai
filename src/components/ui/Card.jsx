import { motion } from 'framer-motion';
import { cn } from '@utils/cn';

const Card = ({
  children,
  className,
  hover = true,
  glass = true,
  onClick,
  ...props
}) => {
  const baseStyles = glass 
    ? 'glass-card p-6 md:p-8' 
    : 'bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md';
  
  const Component = onClick || hover ? motion.div : 'div';
  
  const motionProps = (onClick || hover) ? {
    whileHover: { 
      scale: 1.02, 
      y: -8,
      backgroundColor: glass ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.08)',
      borderColor: 'rgba(255, 255, 255, 0.2)'
    },
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 17 
    },
  } : {};

  return (
    <Component
      className={cn(
        baseStyles,
        'transition-all duration-300',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;
