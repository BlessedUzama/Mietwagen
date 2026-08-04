import React from 'react';
import { motion } from 'framer-motion';

export const GridGlowBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dynamic Animated Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.25]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.4) 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Pulsing Neon Blue/Violet Ambient Aura 1 */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: ['-10%', '5%', '-10%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-teal-400/10 blur-[130px]"
      />

      {/* Pulsing Emerald/WhatsApp Accent Aura 2 */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
          y: ['0%', '15%', '0%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-emerald-500/25 via-teal-600/15 to-transparent blur-[140px]"
      />

      {/* Radial Vignette Overlay for Depth */}
      <div className="absolute inset-0 bg-radial-vignette from-transparent via-slate-50/40 dark:via-slate-950/60 to-slate-50 dark:to-slate-950" />
    </div>
  );
};
