import React from 'react';

export default function CornerBrackets({ children, className = '', glowColor = 'electric' }) {
  const colorMap = {
    electric: 'border-electric/30',
    violet: 'border-violet/30',
    cyan: 'border-cyan/30',
    warning: 'border-warning/30'
  };
  const borderClass = colorMap[glowColor] || colorMap.electric;

  return (
    <div className={`relative ${className}`}>
      {/* Top-left bracket */}
      <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${borderClass}`} />
      {/* Top-right bracket */}
      <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${borderClass}`} />
      {/* Bottom-left bracket */}
      <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${borderClass}`} />
      {/* Bottom-right bracket */}
      <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${borderClass}`} />
      {children}
    </div>
  );
}