import React from 'react';

interface KopruSoftLogoProps {
  className?: string;       // Sizing for the container
  iconSize?: string;        // Sizing for the SVG icon (e.g. 'h-10 w-10')
  showText?: boolean;       // Show or hide wordmark "KöprüSoft"
  variant?: 'light' | 'dark'; // 'light' is for light BG (dark text), 'dark' is for dark BG (white text)
  textClassName?: string;   // Extra text classes (e.g. 'text-xl')
}

export default function KopruSoftLogo({
  className = 'flex items-center gap-3',
  iconSize = 'h-11 w-11',
  showText = true,
  variant = 'light',
  textClassName = 'text-xl sm:text-2xl'
}: KopruSoftLogoProps) {
  
  const textColor = variant === 'light' ? 'text-slate-900' : 'text-white';
  const brandBlueColor = 'text-brand-blue'; // Bright brand blue

  return (
    <div className={`${className} select-none`}>
      {/* PERFECTLY VECTORIZED KÖPRÜSOFT "K" ICON */}
      <svg 
        className={`${iconSize} flex-shrink-0`}
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main royal-to-sky gradient for K stem */}
          <linearGradient id="k-stem-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          {/* Glowing sky-to-royal gradient for the "Köprü" (bridge) arc */}
          <linearGradient id="k-bridge-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="60%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>

          {/* Subtle drop shadow filter for the bridge arc to make it pop over the "K" base */}
          <filter id="logo-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#0f172a" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* 1. Base "K" stem: Solid left column */}
        <rect 
          x="18" 
          y="15" 
          width="18" 
          height="90" 
          rx="5.5" 
          fill="url(#k-stem-grad)" 
        />

        {/* 2. Top-Right Diagonal arm of the "K" */}
        <path 
          d="M36 50 L102 17 H81 L36 44 Z" 
          fill="url(#k-stem-grad)" 
        />

        {/* 3. Bottom-Right Diagonal leg of the "K" */}
        <path 
          d="M36 70 L98 103 H78 L36 76 Z" 
          fill="url(#k-stem-grad)" 
        />

        {/* 4. The Iconic "Köprü" (Bridge Curve/Arc) that cuts through the center of K */}
        <path 
          d="M10 82 C 28 50, 75 35, 108 58 C 84 52, 45 61, 18 96 Z" 
          fill="url(#k-bridge-grad)" 
          filter="url(#logo-shadow)"
        />
      </svg>

      {/* WORDMARK WORD "KöprüSoft" */}
      {showText && (
        <span className={`font-display font-extrabold tracking-tight leading-none flex items-center ${textClassName} ${textColor}`}>
          Köprü<span className={`${brandBlueColor}`}>Soft</span>
        </span>
      )}
    </div>
  );
}
