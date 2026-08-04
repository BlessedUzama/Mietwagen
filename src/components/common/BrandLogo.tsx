import React from 'react';

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', showText = true }) => {
  return (
    <div className={`inline-flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* SVG Vector Crest Symbol */}
      <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 shadow-glow-blue border border-blue-400/30 group-hover:scale-105 transition-transform duration-300">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
        >
          {/* Shield/Emblem vector outline */}
          <path
            d="M20 4L32 9V18C32 26 26.5 32.5 20 35C13.5 32.5 8 26 8 18V9L20 4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-80"
          />
          {/* Stylized Speed/Vehicle Curve */}
          <path
            d="M13 22C15.5 17.5 24.5 17.5 27 22"
            stroke="url(#blue_gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Crown/Star Accent */}
          <circle cx="20" cy="13" r="2" fill="#2563EB" />
          <defs>
            <linearGradient id="blue_gradient" x1="13" y1="20" x2="27" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60A5FA" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
            OBAZEE CLEMENT
          </span>
          <span className="text-[10px] font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase leading-snug mt-0.5">
            MIETWAGEN
          </span>
        </div>
      )}
    </div>
  );
};
