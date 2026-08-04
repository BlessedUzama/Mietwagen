import React from 'react';
import { motion } from 'framer-motion';

export const GridGlowBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dynamic Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.2]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.5) 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Cyber Indigo/Sapphire Ambient Aura 1 */}
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.25, 0.45, 0.25],
          x: ['-8%', '4%', '-8%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-cyan-400/10 blur-[130px] dark:from-blue-600/40 dark:via-indigo-500/30"
      />

      {/* Conversion Emerald WhatsApp Accent Aura 2 */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.35, 0.15],
          y: ['0%', '12%', '0%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-emerald-500/20 via-teal-600/15 to-transparent blur-[140px]"
      />

      {/* Depth Vignette Gradient */}
      <div className="absolute inset-0 bg-radial-vignette from-transparent via-slate-50/50 dark:via-slate-950/70 to-slate-50 dark:to-slate-950" />
    </div>
  );
};
