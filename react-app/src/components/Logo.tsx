import React, { useId } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBadge?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showBadge = false 
}) => {
  const uid = useId().replace(/:/g, '');
  const sizeMap = {
    sm: 'w-7 h-7 sm:w-8 sm:h-8',
    md: 'w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11',
    lg: 'w-12 h-12 sm:w-14 sm:h-14',
    xl: 'w-16 h-16 sm:w-20 sm:h-20'
  };

  const ids = {
    crest: `${uid}crest`,
    gold: `${uid}gold`,
    petal: `${uid}petal`,
    leaf: `${uid}leaf`,
  };

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 group ${className}`}>
      <div className={`relative rounded-full bg-white shadow-sm p-1 flex items-center justify-center border-2 border-amber-400 ${sizeMap[size]}`}>
        <svg 
          viewBox="0 0 120 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
        >
          <defs>
            <linearGradient id={ids.crest} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF9933" />
              <stop offset="50%" stopColor="#FF6A00" />
              <stop offset="100%" stopColor="#CC4400" />
            </linearGradient>
            <linearGradient id={ids.gold} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FCD34D" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id={ids.petal} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF7E54" />
              <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>
            <linearGradient id={ids.leaf} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22C55E" />
              <stop offset="100%" stopColor="#15803D" />
            </linearGradient>
          </defs>

          {/* Gold Decorative Inner Ring */}
          <circle cx="60" cy="60" r="54" fill="#FFFDF8" stroke={`url(#${ids.gold})`} strokeWidth="3" />
          <circle cx="60" cy="60" r="48" fill="none" stroke="#FF9933" strokeWidth="1" strokeDasharray="3 3" opacity="0.75" />

          {/* Saffron & Green Lotus Flower */}
          <g transform="translate(60, 62) scale(0.92)">
            {/* Base Green Leaves */}
            <path d="M-36 12 C-26 12 -12 18 0 20 C12 18 26 12 36 12 C28 22 14 26 0 26 C-14 26 -28 22 -36 12 Z" fill={`url(#${ids.leaf})`} />
            <path d="M-22 15 C-12 18 0 19 0 23 C0 19 12 18 22 15 C14 21 0 24 0 24 C0 24 -14 21 -22 15 Z" fill="#166534" opacity="0.6" />

            {/* Outer Lower Saffron Petals */}
            <path d="M-34 4 C-38 -12 -24 -24 -14 -18 C-18 -8 -20 2 -26 10 C-30 8 -32 6 -34 4 Z" fill={`url(#${ids.petal})`} opacity="0.9" />
            <path d="M34 4 C38 -12 24 -24 14 -18 C18 -8 20 2 26 10 C30 8 32 6 34 4 Z" fill={`url(#${ids.petal})`} opacity="0.9" />

            {/* Side Petals */}
            <path d="M-26 8 C-32 -8 -18 -30 -4 -20 C-9 -8 -11 4 -18 14 C-22 12 -24 10 -26 8 Z" fill={`url(#${ids.crest})`} />
            <path d="M26 8 C32 -8 18 -30 4 -20 C9 -8 11 4 18 14 C22 12 24 10 26 8 Z" fill={`url(#${ids.crest})`} />

            {/* Central Inner Petals */}
            <path d="M-15 12 C-18 -12 -6 -36 0 -42 C6 -36 18 -12 15 12 C10 16 -10 16 -15 12 Z" fill={`url(#${ids.petal})`} />
            
            {/* Central Highlight Petal */}
            <path d="M-7 12 C-10 -6 0 -38 0 -42 C0 -38 10 -6 7 12 C4 14 -4 14 -7 12 Z" fill="#FFA366" />
            <path d="M0 -42 L0 14" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />

            {/* Center Stamen Glow */}
            <circle cx="0" cy="12" r="3" fill="#FBBF24" />
          </g>
        </svg>
      </div>

      {showBadge && (
        <span className="absolute -bottom-1 -right-1 bg-[#ff7e54] text-white font-black text-[8px] px-1.5 py-0.2 rounded-full uppercase tracking-tighter shadow">
          JMS
        </span>
      )}
    </div>
  );
};

export default Logo;
