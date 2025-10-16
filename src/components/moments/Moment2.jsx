import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '@utils/motion';
import useDemoStore from '@store/useDemoStore';

const Moment2 = () => {
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
        <h2 className="text-display-md text-gradient-cool mb-4">
          Momento 2
        </h2>
        <p className="text-xl text-cool-600">
          Por Qué Se Van
        </p>
        <p className="text-sm text-cool-500 mt-4">
          Curva de Supervivencia • Link Dumping vs Learning
        </p>
      </div>
    </motion.div>
  );
};

export default Moment2;
