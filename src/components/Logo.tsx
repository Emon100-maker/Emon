import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = 'w-12 h-12', variant = 'dark' }) => {
  return (
    <div className={`flex items-center gap-3 ${variant === 'light' ? 'text-white' : 'text-slate-900'} group`}>
      <div className={`relative ${className} shrink-0`}>
        {/* Navy Shield Background */}
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl transition-transform group-hover:scale-110 duration-500">
          <path
            d="M50 5 L90 20 L90 50 C90 75 50 95 50 95 C50 95 10 75 10 50 L10 20 L50 5 Z"
            className="fill-[#0A2351] stroke-white stroke-[2]"
          />
          {/* Inner Radiant Lines (Stylized) */}
          <g opacity="0.2">
            <line x1="50" y1="50" x2="15" y2="15" stroke="white" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="85" y2="15" stroke="white" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="50" y2="10" stroke="white" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="10" y2="50" stroke="white" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="90" y2="50" stroke="white" strokeWidth="0.5" />
          </g>
          {/* Student Silhouette with Cap */}
          <g fill="white">
            <path d="M50 45 C45 45 40 48 40 55 C40 62 45 65 50 65 C55 65 60 62 60 55 C60 48 55 45 50 45 Z" />
            <path d="M35 75 C35 70 40 68 50 68 C60 68 65 70 65 75 L65 85 L35 85 Z" />
            {/* Mortarboard */}
            <path d="M50 35 L70 42 L50 49 L30 42 Z" />
            <rect x="48" y="42" width="4" height="6" />
            <rect x="30" y="42" width="1" height="8" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-black italic tracking-tighter ${variant === 'light' ? 'text-white' : 'text-[#0A2351]'}`}>
          TANVEER'S
        </span>
        <span className={`text-[8px] font-bold uppercase tracking-[0.15em] ${variant === 'light' ? 'text-blue-300' : 'text-blue-600'}`}>
          HSC Academic & Admission Care
        </span>
      </div>
    </div>
  );
};
