import React from 'react';
import { Car } from 'lucide-react';

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', showText = true }) => {
  return (
    <div className={`inline-flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Sleek Modern Car Mark Symbol */}
      <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-blue-600 to-slate-900 shadow-glow-indigo border border-indigo-400/30 group-hover:scale-105 transition-transform duration-300">
        <Car className="w-5 h-5 text-white" />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
            OBAZEE CLEMENT
          </span>
          <span className="text-[10px] font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase leading-snug mt-0.5">
            MIETWAGEN
          </span>
        </div>
      )}
    </div>
  );
};
