import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({
  children,
  className,
}) => {
  return (
    <span
      className={twMerge(
        clsx(
          'bg-gradient-to-r from-blue-500 via-indigo-400 via-emerald-400 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-shift font-extrabold',
          className
        )
      )}
    >
      {children}
    </span>
  );
};
