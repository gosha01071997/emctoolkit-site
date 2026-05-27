import React from 'react';

export default function ScanLine() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      <div 
        className="absolute left-0 right-0 h-[2px] animate-scanline"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(122,92,255,0.4) 20%, rgba(91,124,255,0.6) 50%, rgba(122,92,255,0.4) 80%, transparent 100%)',
          boxShadow: '0 0 20px 4px rgba(122,92,255,0.15)'
        }}
      />
    </div>
  );
}