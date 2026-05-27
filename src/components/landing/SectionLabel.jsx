import React from 'react';

export default function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-xs text-electric/60 tracking-widest uppercase">
        [{number}]
      </span>
      <div className="h-px w-8 bg-electric/20" />
      <span className="font-mono text-xs text-electric/60 tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}