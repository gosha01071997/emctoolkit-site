import React from 'react';

const technicalLabels = [
  { label: 'CISPR 25', className: 'left-[6%] top-[18%]' },
  { label: 'IEC 61000', className: 'right-[12%] top-[15%]' },
  { label: 'MIL-STD-461', className: 'left-[27%] top-[30%]' },
  { label: 'RE102', className: 'right-[30%] top-[34%]' },
  { label: 'RS103', className: 'left-[14%] top-[58%]' },
  { label: 'BCI', className: 'right-[7%] top-[48%]' },
  { label: 'ESD', className: 'left-[4%] top-[82%]' },
  { label: 'Radiated Emission', className: 'right-[16%] top-[76%]' },
  { label: 'Conducted Emission', className: 'left-[38%] top-[72%]' },
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

        {/* Calibrated measurement grid and scale ticks */}
        <g opacity="0.035" stroke="#5B7CFF" strokeWidth="1" transform="translate(86 72)">
          <path d="M0 0H438M0 56H438M0 112H438M0 168H438M0 224H438" />
          <path d="M0 0V224M73 0V224M146 0V224M219 0V224M292 0V224M365 0V224M438 0V224" />
          <path d="M0 238H438" strokeWidth="1.4" />
          <path d="M0 230v16M73 234v8M146 230v16M219 234v8M292 230v16M365 234v8M438 230v16" />
        </g>

        {/* Left hero antenna radiation pattern, partially outside the viewport */}
        <g opacity="0.044" stroke="url(#emcLine)" strokeWidth="1.25" transform="translate(-126 98)">
          <circle cx="230" cy="260" r="76" />
          <circle cx="230" cy="260" r="132" />
          <circle cx="230" cy="260" r="190" />
          <path d="M230 70V452M38 260H422M94 124l272 272M366 124 94 396" opacity="0.7" />
          <path d="M230 260 C208 154 270 95 324 142 C382 194 337 292 230 260Z" />
          <path d="M230 260 C118 235 82 151 149 119 C223 84 281 162 230 260Z" />
          <path d="M230 260 C254 365 190 426 136 378 C78 327 123 229 230 260Z" />
          <path d="M230 260 C342 283 377 368 310 400 C236 435 178 357 230 260Z" />
          <path d="M186 260h88M230 216v88" strokeWidth="1.8" />
        </g>

        {/* Right hero measurement antenna contour and signal propagation lines */}
        <g opacity="0.045" stroke="#34D3E5" strokeWidth="1.35" transform="translate(1038 48)">
          <path d="M210 38v354" />
          <path d="M88 120c72-44 172-44 244 0M70 182c88-58 192-58 280 0M54 248c104-78 220-78 324 0" />
          <path d="M210 392l-84 160h168L210 392Z" />
          <path d="M142 552h136M172 488h76" />
          <path d="M16 95c102 42 145 112 164 206M404 95c-102 42-145 112-164 206" strokeDasharray="8 12" />
          <circle cx="210" cy="306" r="18" />
        </g>

        {/* Laboratory receiver / LISN front panel draft */}
        <g opacity="0.038" stroke="#5B7CFF" strokeWidth="1.15" transform="translate(866 252)">
          <path d="M0 0h332v172H0Z" />
          <path d="M24 28h148v44H24ZM24 102h104M24 126h72" />
          <circle cx="246" cy="86" r="48" />
          <circle cx="246" cy="86" r="28" />
          <path d="M220 86h52M246 60v52M196 28h100M196 144h100" />
          <path d="M0 18h332M48 0v18M284 0v18" opacity="0.65" />
        </g>

        {/* Spectrum analyzer graph between sections */}
        <g opacity="0.046" stroke="#5B7CFF" strokeWidth="1.15" transform="translate(164 574)">
          <path d="M0 170H438M0 0V170" />
          <path d="M34 142L58 141L73 135L93 142L114 119L132 141L159 139L178 91L195 140L214 128L231 137L252 52L270 141L293 134L316 16L334 138L361 116L386 139L418 130" />
          <path d="M32 40H420M32 82H420M32 124H420" opacity="0.55" strokeDasharray="5 10" />
          <path d="M86 170V0M174 170V0M262 170V0M350 170V0" opacity="0.45" strokeDasharray="5 10" />
          <path d="M252 28v136M316 28v136" opacity="0.7" />
        </g>

        {/* Oscilloscope waveform crossing current composition without becoming a foreground image */}
        <g opacity="0.043" stroke="#34D3E5" strokeWidth="1.45" transform="translate(700 658)">
          <path d="M-52 96H566" opacity="0.45" />
          <path d="M-52 18V176M52 18V176M156 18V176M260 18V176M364 18V176M468 18V176" opacity="0.35" strokeDasharray="4 13" />
          <path d="M-52 96C-12 96-10 38 31 38S74 154 115 154S156 38 198 38S240 154 281 154S322 38 364 38S406 154 447 154S488 96 566 96" />
          <path d="M-20 42h56M-20 150h56M508 42h56M508 150h56" opacity="0.65" />
        </g>

        {/* RF response curve and pass/fail mask, right lower edge */}
        <g opacity="0.044" stroke="#7A5CFF" strokeWidth="1.2" transform="translate(1038 720)">
          <path d="M0 220H430M0 0V220" />
          <path d="M28 174C72 172 82 92 126 92S178 166 220 132S260 38 306 48S340 154 402 80" />
          <path d="M36 54H392M36 128H392M36 202H392" opacity="0.48" strokeDasharray="7 10" />
          <path d="M116 0V220M294 0V220" opacity="0.55" />
          <path d="M116 44h178v118H116Z" opacity="0.55" />
        </g>

        {/* Polarization chart and directional pattern */}
        <g opacity="0.04" transform="translate(596 106)">
          <circle cx="170" cy="170" r="154" stroke="#34D3E5" strokeWidth="1.15" />
          <circle cx="170" cy="170" r="94" stroke="#34D3E5" strokeWidth="1.05" />
          <circle cx="170" cy="170" r="40" stroke="#34D3E5" strokeWidth="1" />
          <path d="M170 16V324M16 170h308M61 61l218 218M279 61 61 279" stroke="#34D3E5" strokeWidth="1" opacity="0.7" />
          <path d="M170 170m-92 0a92 92 0 1 0 184 0a92 92 0 1 0-184 0" stroke="#5B7CFF" strokeWidth="8" strokeDasharray="150 70 52 90" opacity="0.76" />
          <ellipse cx="170" cy="170" rx="132" ry="46" stroke="#7A5CFF" strokeWidth="1.1" transform="rotate(-28 170 170)" />
          <ellipse cx="170" cy="170" rx="132" ry="46" stroke="#7A5CFF" strokeWidth="1.1" transform="rotate(28 170 170)" />
          <circle cx="170" cy="170" r="112" fill="url(#polarGlow)" opacity="0.16" />
        </g>

        {/* Field vectors on lower-left boundary */}
        <g opacity="0.038" stroke="#5B7CFF" strokeWidth="1.15" transform="translate(-44 878)">
          <path d="M0 88c64-58 128-58 192 0s128 58 192 0s128-58 192 0" />
          <path d="M32 28c64 58 128 58 192 0s128-58 192 0s128 58 192 0" />
          <path d="M82 70l42 0M124 70l-14-10M124 70l-14 10" />
          <path d="M270 44l42 0M312 44l-14-10M312 44l-14 10" />
          <path d="M456 70l42 0M498 70l-14-10M498 70l-14 10" />
        </g>
      </svg>

      <div className="absolute inset-0 font-mono text-[10px] tracking-[0.32em] text-cyan/[0.025] uppercase select-none">
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
