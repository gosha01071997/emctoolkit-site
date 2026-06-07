import React from 'react';

const technicalLabels = [
  { label: 'dB', className: 'left-[6%] top-[18%]' },
  { label: 'MHz', className: 'right-[12%] top-[15%]' },
  { label: 'GHz', className: 'left-[14%] top-[58%]' },
  { label: 'VSWR', className: 'right-[7%] top-[48%]' },
  { label: 'CISPR', className: 'left-[4%] top-[82%]' },
  { label: 'IEC', className: 'right-[21%] top-[76%]' },
  { label: 'MIL-STD', className: 'left-[28%] top-[31%]' },
  { label: 'E-Field', className: 'right-[31%] top-[33%]' },
  { label: 'H-Field', className: 'left-[40%] top-[72%]' },
  { label: 'BCI', className: 'right-[4%] top-[88%]' },
];

export default function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
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

      {/* EMC engineering drafting layer */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 1100"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="emcLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5B7CFF" />
            <stop offset="0.52" stopColor="#34D3E5" />
            <stop offset="1" stopColor="#7A5CFF" />
          </linearGradient>
          <radialGradient id="polarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#34D3E5" />
            <stop offset="1" stopColor="#5B7CFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Left hero antenna radiation pattern, partially outside the viewport */}
        <g opacity="0.065" stroke="url(#emcLine)" strokeWidth="1.3" transform="translate(-120 96)">
          <circle cx="230" cy="260" r="76" />
          <circle cx="230" cy="260" r="132" />
          <circle cx="230" cy="260" r="190" />
          <path d="M230 70V452M38 260H422M94 124l272 272M366 124 94 396" opacity="0.75" />
          <path d="M230 260 C208 154 270 95 324 142 C382 194 337 292 230 260Z" />
          <path d="M230 260 C118 235 82 151 149 119 C223 84 281 162 230 260Z" />
          <path d="M230 260 C254 365 190 426 136 378 C78 327 123 229 230 260Z" />
          <path d="M230 260 C342 283 377 368 310 400 C236 435 178 357 230 260Z" />
          <path d="M186 260h88M230 216v88" strokeWidth="2" />
        </g>

        {/* Right hero measurement antenna contour and signal propagation lines */}
        <g opacity="0.058" stroke="#34D3E5" strokeWidth="1.4" transform="translate(1038 48)">
          <path d="M210 38v354" />
          <path d="M88 120c72-44 172-44 244 0M70 182c88-58 192-58 280 0M54 248c104-78 220-78 324 0" />
          <path d="M210 392l-84 160h168L210 392Z" />
          <path d="M142 552h136M172 488h76" />
          <path d="M16 95c102 42 145 112 164 206M404 95c-102 42-145 112-164 206" strokeDasharray="8 12" />
          <circle cx="210" cy="306" r="18" />
        </g>

        {/* Spectrum analyzer graph between sections */}
        <g opacity="0.07" stroke="#5B7CFF" strokeWidth="1.15" transform="translate(164 574)">
          <path d="M0 170H438M0 0V170" />
          <path d="M34 142L58 141L73 135L93 142L114 119L132 141L159 139L178 91L195 140L214 128L231 137L252 52L270 141L293 134L316 16L334 138L361 116L386 139L418 130" />
          <path d="M32 40H420M32 82H420M32 124H420" opacity="0.55" strokeDasharray="5 10" />
          <path d="M86 170V0M174 170V0M262 170V0M350 170V0" opacity="0.45" strokeDasharray="5 10" />
        </g>

        {/* Oscilloscope waveform crossing current composition without becoming a foreground image */}
        <g opacity="0.052" stroke="#34D3E5" strokeWidth="1.5" transform="translate(700 658)">
          <path d="M-52 96H566" opacity="0.45" />
          <path d="M-52 18V176M52 18V176M156 18V176M260 18V176M364 18V176M468 18V176" opacity="0.35" strokeDasharray="4 13" />
          <path d="M-52 96C-12 96-10 38 31 38S74 154 115 154S156 38 198 38S240 154 281 154S322 38 364 38S406 154 447 154S488 96 566 96" />
          <path d="M-20 42h56M-20 150h56M508 42h56M508 150h56" opacity="0.65" />
        </g>

        {/* RF response curve and pass/fail mask, right lower edge */}
        <g opacity="0.06" stroke="#7A5CFF" strokeWidth="1.25" transform="translate(1038 720)">
          <path d="M0 220H430M0 0V220" />
          <path d="M28 174C72 172 82 92 126 92S178 166 220 132S260 38 306 48S340 154 402 80" />
          <path d="M36 54H392M36 128H392M36 202H392" opacity="0.48" strokeDasharray="7 10" />
          <path d="M116 0V220M294 0V220" opacity="0.55" />
          <path d="M116 44h178v118H116Z" opacity="0.55" />
        </g>

        {/* Polarization chart and electromagnetic field rings */}
        <g opacity="0.045" transform="translate(596 106)">
          <circle cx="170" cy="170" r="154" stroke="#34D3E5" strokeWidth="1.2" />
          <circle cx="170" cy="170" r="94" stroke="#34D3E5" strokeWidth="1.1" />
          <circle cx="170" cy="170" r="40" stroke="#34D3E5" strokeWidth="1" />
          <path d="M170 16V324M16 170h308M61 61l218 218M279 61 61 279" stroke="#34D3E5" strokeWidth="1" opacity="0.75" />
          <path d="M170 170m-92 0a92 92 0 1 0 184 0a92 92 0 1 0-184 0" stroke="#5B7CFF" strokeWidth="9" strokeDasharray="150 70 52 90" opacity="0.82" />
          <ellipse cx="170" cy="170" rx="132" ry="46" stroke="#7A5CFF" strokeWidth="1.1" transform="rotate(-28 170 170)" />
          <ellipse cx="170" cy="170" rx="132" ry="46" stroke="#7A5CFF" strokeWidth="1.1" transform="rotate(28 170 170)" />
          <circle cx="170" cy="170" r="112" fill="url(#polarGlow)" opacity="0.22" />
        </g>

        {/* Field vectors on lower-left boundary */}
        <g opacity="0.05" stroke="#5B7CFF" strokeWidth="1.2" transform="translate(-44 878)">
          <path d="M0 88c64-58 128-58 192 0s128 58 192 0s128-58 192 0" />
          <path d="M32 28c64 58 128 58 192 0s128-58 192 0s128 58 192 0" />
          <path d="M82 70l42 0M124 70l-14-10M124 70l-14 10" />
          <path d="M270 44l42 0M312 44l-14-10M312 44l-14 10" />
          <path d="M456 70l42 0M498 70l-14-10M498 70l-14 10" />
        </g>
      </svg>

      <div className="absolute inset-0 font-mono text-[10px] tracking-[0.32em] text-cyan/[0.045] uppercase select-none">
        {technicalLabels.map((item) => (
          <span key={`${item.label}-${item.className}`} className={`absolute ${item.className}`}>
            {item.label}
          </span>
        ))}
      </div>

      {/* Radial glow center */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-electric/[0.03] blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-violet/[0.03] blur-[120px]" />
    </div>
  );
}
