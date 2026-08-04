import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BentoGridCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  className?: string;
  accentColor?: 'blue' | 'emerald' | 'amber' | 'purple';
}

export const BentoGridCard: React.FC<BentoGridCardProps> = ({
  icon,
  title,
  description,
  badge,
  className,
  accentColor = 'blue',
}) => {
  const accentClasses = {
    blue: 'border-blue-500/20 hover:border-blue-500/40 text-blue-400 bg-blue-500/10',
    emerald: 'border-emerald-500/20 hover:border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
    amber: 'border-amber-500/20 hover:border-amber-500/40 text-amber-400 bg-amber-500/10',
    purple: 'border-purple-500/20 hover:border-purple-500/40 text-purple-400 bg-purple-500/10',
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={twMerge(
        clsx(
          'relative p-6 md:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden',
          'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg hover:shadow-2xl',
          'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700',
          className
        )
      )}
    >
      {/* Background Accent Glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-20 bg-blue-500 pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <div className={clsx('p-3.5 rounded-xl border', accentClasses[accentColor])}>
            {icon}
          </div>
          {badge && (
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              {badge}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
