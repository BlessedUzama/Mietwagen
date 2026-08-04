import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'dark' | 'light' | 'auto';
  glow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  variant = 'auto',
  glow = false,
}) => {
  const variantStyles = {
    dark: 'bg-slate-900/85 border-slate-800 text-white shadow-2xl backdrop-blur-2xl',
    light: 'bg-white/85 border-slate-200 text-slate-900 shadow-xl backdrop-blur-2xl',
    auto: 'bg-white/85 dark:bg-slate-900/85 border-slate-200 dark:border-slate-800/80 text-slate-900 dark:text-white shadow-xl backdrop-blur-2xl',
  };

  return (
    <div
      className={twMerge(
        clsx(
          'relative rounded-2xl border transition-all duration-300 p-6 md:p-8',
          variantStyles[variant],
          glow && 'shadow-glow-blue',
          className
        )
      )}
    >
      {children}
    </div>
  );
};
