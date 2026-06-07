import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Check, Smartphone } from 'lucide-react';

const HERO_MOCKUP = 'https://media.base44.com/images/public/69feffc36e31b5fb5f019912/2b42c1006_generated_1d8da414.png';

const TRUST_POINTS = [
  'EMC/EMI laboratory software',
  'Офлайн deployment',
  'CISPR / IEC / MIL-STD',
  'Подготовка EMC test',
  'Учёт оборудования',
  'Журнал лаборатории',
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" aria-labelledby="hero-title">
      {/* Left status bar */}
      <div className="hidden lg:flex fixed left-0 top-0 bottom-0 w-12 flex-col items-center justify-center z-10 border-r border-white/[0.03]">
        <div className="writing-mode-vertical font-mono text-[10px] text-electric/30 tracking-[0.3em] uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>
          EMC TOOLKIT v2.4.0 — ALL SYSTEMS OPERATIONAL
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10">
            
            {/* System tag */}
            <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 border border-electric/20 rounded-sm bg-electric/5">
              <div className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse-glow" />
              <span className="font-mono text-[11px] text-electric/70 uppercase tracking-widest">
                Engineering Platform for EMC / EMI Laboratories
              </span>
            </div>

            {/* Headline */}
            <h1 id="hero-title" className="font-heading font-black text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.05] tracking-tight text-white mb-6">
              <span className="text-gradient-blue">EMC Toolkit</span>
              <span className="block mt-2 text-white">Инженерная платформа для EMC/EMI лабораторий</span>
            </h1>

            {/* Subheadline */}
            <p className="text-data/60 text-lg leading-relaxed mb-6 max-w-lg">
              EMC Toolkit — офлайн EMC laboratory software для подготовки испытаний, инженерных EMC calculations,
              поиска EMC standards, управления оборудованием и сохранения лабораторных знаний в единой среде.
            </p>

            {/* Trust points */}
            <div className="mb-10 flex max-w-xl flex-wrap gap-x-4 gap-y-2">
              {TRUST_POINTS.map((point) => (
                <div key={point} className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-data/45">
                  <Check className="h-3 w-3 text-electric/45" strokeWidth={1.6} />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://t.me/EMCinstrumentarii"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-warning text-void font-heading font-bold text-sm rounded-sm hover:bg-warning/90 transition-all hover:shadow-[0_0_30px_rgba(242,201,76,0.2)]">
                Request laboratory demonstration
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-electric/30 text-electric font-heading font-semibold text-sm rounded-sm hover:bg-electric/10 hover:border-electric/50 transition-all">
                View capabilities
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>

            {/* Tech stats */}
            <div className="mt-12 flex flex-wrap gap-6 sm:gap-8">
              {[
                { value: 'Offline', label: 'Deployment' },
                { value: 'EMC/EMI', label: 'Workflows' },
                { value: 'Lab', label: 'Management' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading font-bold text-xl text-white">{stat.value}</div>
                  <div className="font-mono text-[10px] text-data/40 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
              {/* Mobile app in development chip */}
              <div className="flex items-center gap-2 px-3 py-1.5 border border-data/10 rounded-sm bg-white/[0.02] self-center">
                <Smartphone className="w-3 h-3 text-data/30" />
                <span className="font-mono text-[10px] text-data/30 uppercase tracking-widest leading-none">
                  Моб. приложение<br />в разработке
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative">
            
            {/* Glow behind mockup */}
            <div className="absolute inset-0 bg-electric/[0.06] blur-[80px] rounded-full scale-90" />
            
            {/* Main mockup frame */}
            <div className="relative rounded-lg overflow-hidden border border-electric/20 glow-blue-strong bg-navy/80">
              {/* Window bar */}
              <div className="bg-navy/60 backdrop-blur-sm px-4 py-3 flex items-center gap-3 border-b border-white/[0.05]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <span className="font-mono text-[10px] text-data/30 uppercase tracking-wider">EMC Toolkit Laboratory Console</span>
              </div>
              <img
                src={HERO_MOCKUP}
                alt="EMC Toolkit engineering platform dashboard for EMC and EMI laboratory workflow"
                className="w-full h-auto"
              />
            </div>

            {/* Floating indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-4 -left-4 lg:-left-8 bg-navy/90 backdrop-blur-md border border-electric/20 rounded-sm px-4 py-3 glow-blue">
              <div className="font-mono text-[10px] text-electric uppercase tracking-widest mb-1">Lab workflow</div>
              <div className="text-white font-heading font-bold text-lg">Единая среда</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -top-4 -right-2 lg:-right-6 bg-navy/90 backdrop-blur-md border border-warning/20 rounded-sm px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-warning animate-pulse-glow" />
                <span className="font-mono text-[10px] text-warning uppercase tracking-widest">Offline ready</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border border-electric/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-1.5 bg-electric/50 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
