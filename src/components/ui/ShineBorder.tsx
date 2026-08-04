import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ShineBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: string[];
  borderRadius?: number;
}

export const ShineBorder: React.FC<ShineBorderProps> = ({
  children,
  className,
  color = ['#2563EB', '#10B981', '#6366F1'],
  borderRadius = 16,
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          'relative p-[1px] rounded-2xl overflow-hidden group transition-all duration-300',
          className
        )
      )}
      style={{ borderRadius: `${borderRadius}px` }}
    >
      {/* Conic Gradient Shine Effect */}
      <div
        className="absolute -inset-[150%] opacity-40 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_8s_linear_infinite] pointer-events-none"
        style={{
          background: `conic-gradient(from 0deg, ${color.join(', ')})`,
        }}
      />

      {/* Main Content Container */}
      <div
        className="relative z-10 w-full h-full bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-xl rounded-[calc(100%-1px)]"
        style={{ borderRadius: `${borderRadius - 1}px` }}
      >
        {children}
      </div>
    </div>
  );
};
