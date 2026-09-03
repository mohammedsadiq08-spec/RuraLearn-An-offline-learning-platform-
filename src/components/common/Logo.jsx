import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ size = 'default', showText = true, className = '' }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      {/* Precision Double-Roof SVG Icon matching brand identity */}
      <div
        className={`shrink-0 flex items-center justify-center ${
          isLarge ? 'w-10 h-10' : isSmall ? 'w-6 h-6' : 'w-8 h-8'
        }`}
      >
        <svg viewBox="0 0 100 80" fill="none" className="w-full h-full">
          {/* Outer Chevron / Roof */}
          <path
            d="M12 46 L50 12 L88 46"
            stroke="#12432d"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner Nested Chevron / Roof */}
          <path
            d="M26 48 L50 26 L74 48"
            stroke="#12432d"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-black tracking-[0.22em] text-[#12432d] uppercase leading-none font-sans ${
              isLarge ? 'text-2xl' : isSmall ? 'text-sm' : 'text-lg'
            }`}
          >
            RURALEARN
          </span>
          <span className="text-[9px] font-semibold text-emerald-700 tracking-wider uppercase mt-0.5">
            Offline Learning
          </span>
        </div>
      )}
    </Link>
  );
}
