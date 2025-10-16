import { motion } from 'framer-motion';
import { cn } from '@utils/cn';

const Toggle = ({
  checked,
  onChange,
  label,
  className,
}) => {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-warm-500 focus:ring-offset-2',
          checked ? 'bg-warm-500' : 'bg-cool-300'
        )}
      >
        <motion.span
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className={cn(
            'inline-block h-4 w-4 transform rounded-full bg-white shadow-lg',
            checked ? 'translate-x-6' : 'translate-x-1'
          )}
        />
      </button>
      {label && (
        <span className="text-sm font-medium text-cool-700">{label}</span>
      )}
    </div>
  );
};

export default Toggle;
