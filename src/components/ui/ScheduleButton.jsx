import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Button from './Button';
import { merahkiAnimations } from '@utils/merahkiComponents';

const ScheduleButton = ({ delay = 0.7, className = '' }) => {
  const handleScheduleClick = () => {
    window.open('https://reuniones.clientify.com/#/davidmerahki/1a1?v2=true', '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: merahkiAnimations.easing }}
      className={`flex justify-center ${className}`}
    >
      <Button
        variant="primary"
        size="lg"
        onClick={handleScheduleClick}
        className="group"
      >
        <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
        Agenda una Reunión
      </Button>
    </motion.div>
  );
};

export default ScheduleButton;
