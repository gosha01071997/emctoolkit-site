import React from 'react';

export default function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Technical grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] animate-grid-shift"
        style={{
          backgroundImage: `
            linear-gradient(rgba(91,124,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91,124,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      {/* Radial glow center */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-electric/[0.03] blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-violet/[0.03] blur-[120px]" />
    </div>
  );
}