import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ShinyBordersButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'whatsapp' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const ShinyBordersButton: React.FC<ShinyBordersButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 active:scale-[0.98] whitespace-nowrap';

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white shadow-glow-blue hover:shadow-blue-500/50 border border-blue-400/30',
    whatsapp:
      'bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white shadow-glow-green hover:shadow-emerald-500/50 border border-emerald-400/30',
    outline:
      'bg-slate-900/60 dark:bg-slate-900/80 text-slate-100 border border-slate-700 hover:border-slate-500 hover:bg-slate-800/80 backdrop-blur-md',
    ghost:
      'bg-transparent text-slate-700 dark:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3.5 text-base gap-2.5 font-semibold',
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={twMerge(
        clsx(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )
      )}
      {...props}
    >
      {/* Animated Light Sweep Effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

      {icon && <span className="relative z-10 shrink-0 transition-transform duration-300 group-hover:scale-110">{icon}</span>}
      <span className="relative z-10 inline-flex items-center gap-1.5 whitespace-nowrap">{children}</span>
    </motion.button>
  );
};
