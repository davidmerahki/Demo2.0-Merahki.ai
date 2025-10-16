import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '@utils/motion';
import useDemoStore from '@store/useDemoStore';

const Moment9 = () => {
  const { direction } = useDemoStore();

  return (
    <motion.div
      custom={direction}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="w-full h-full flex items-center justify-center"
    >
      <div className="text-center">
        <h2 className="text-display-md text-gradient-warm mb-4">
          Momento 9
        </h2>
        <p className="text-xl text-cool-600">
          No Sigas Quemando Leads
        </p>
        <p className="text-sm text-cool-500 mt-4">
          Loop Compuesto • Multiplicador • Slider 'b'
        </p>
      </div>
    </motion.div>
  );
};

export default Moment9;
