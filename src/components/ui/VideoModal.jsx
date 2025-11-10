import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { merahkiAnimations } from '@utils/merahkiComponents';
import { useEffect } from 'react';

const VideoModal = ({ isOpen, onClose, videoUrl, title = "Video" }) => {
  // Cerrar con tecla ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      // Prevenir scroll del body cuando el modal está abierto
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, ease: merahkiAnimations.easing }}
          className="relative w-full max-w-5xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botón de cerrar */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 transition-all duration-300 z-10 group"
            aria-label="Cerrar video"
          >
            <X className="w-5 h-5 text-foreground group-hover:text-primary-400 transition-colors" />
          </button>

          {/* Contenedor del video con aspect ratio 16:9 */}
          <div className="relative w-full glass-card overflow-hidden" style={{ paddingTop: '56.25%' }}>
            <iframe
              src={videoUrl}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title={title}
              loading="lazy"
            />
          </div>

          {/* Título del video */}
          {title && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-center"
            >
              <p className="text-lg font-heading font-semibold text-gradient">
                {title}
              </p>
            </motion.div>
          )}

          {/* Hint para cerrar */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-sm text-foreground/50 mt-4"
          >
            Presiona <kbd className="px-2 py-1 bg-white/10 rounded text-xs">ESC</kbd> o haz clic fuera para cerrar
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;
