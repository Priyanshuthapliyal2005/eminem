import React, { useState, useEffect } from 'react';
import { X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MediaTip: React.FC = () => {
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    // Show tip after a delay on first visit
    const hasSeenTip = localStorage.getItem('hasSeenMediaTip');
    if (!hasSeenTip) {
      const timer = setTimeout(() => {
        setShowTip(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeTip = () => {
    setShowTip(false);
    localStorage.setItem('hasSeenMediaTip', 'true');
  };

  return (
    <AnimatePresence>
      {showTip && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          className="fixed top-32 right-4 z-50 max-w-sm bg-gradient-to-r from-red-900 to-black border border-red-600 border-opacity-50 rounded-xl p-4 shadow-2xl"
        >
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-white font-bold text-sm mb-1">🎵 Background Music Available</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Click anywhere to enable background audio controls and immersive video backgrounds. 
                Optimized for your device performance!
              </p>
            </div>
            <button 
              onClick={closeTip}
              className="text-gray-400 hover:text-white transition-colors ml-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="mt-3 pt-2 border-t border-red-600 border-opacity-30">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">Audio: Lose Yourself</span>
              <span className="text-red-400">Low volume</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MediaTip;
