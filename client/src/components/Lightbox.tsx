// Design: Neo-Tokyo Cyberpunk — neon cyan borders, dark overlay, Orbitron font
import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { url: string; id: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ images, currentIndex, isOpen, onClose, onNext, onPrev }: LightboxProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") onNext();
    if (e.key === "ArrowLeft") onPrev();
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-[#00f0ff] hover:text-white transition-colors duration-300"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 z-10 font-[Orbitron] text-[#00f0ff] text-sm tracking-[0.2em]">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Previous button */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-2 md:left-6 z-10 p-2 text-[#00f0ff]/60 hover:text-[#00f0ff] transition-all duration-300 hover:drop-shadow-[0_0_10px_#00f0ff]"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-2 md:right-6 z-10 p-2 text-[#00f0ff]/60 hover:text-[#00f0ff] transition-all duration-300 hover:drop-shadow-[0_0_10px_#00f0ff]"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-[90vw] max-h-[90vh] z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]?.url}
              alt={`Portfolio image ${currentIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain border border-[#00f0ff]/30"
              style={{
                boxShadow: "0 0 30px rgba(0, 240, 255, 0.15), 0 0 60px rgba(0, 240, 255, 0.05)"
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
