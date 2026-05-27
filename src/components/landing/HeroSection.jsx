import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Smartphone } from 'lucide-react';

const HERO_MOCKUP = 'https://media.base44.com/images/public/69feffc36e31b5fb5f019912/2b42c1006_generated_1d8da414.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
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
                Desktop Application
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.05] tracking-tight text-white mb-6">
              <span className="text-gradient-blue">ЭМС Инструментарий</span>{' '}
              для EMC/EMI инженеров
            </h1>

            {/* Subheadline */}
            <p className="text-data/60 text-lg leading-relaxed mb-10 max-w-lg">
              ЭМС Инструментарий — офлайн-программа для EMC/EMI инженеров и ЭМС лабораторий.
              Расчёты ЭМС, подготовка испытаний, журнал работ, управление оборудованием,
              EMC/EMI справочники и AI-помощник в одной системе.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://t.me/EMCinstrumentarii"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-warning text-void font-heading font-bold text-sm rounded-sm hover:bg-warning/90 transition-all hover:shadow-[0_0_30px_rgba(242,201,76,0.2)]">
                Получить доступ
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-electric/30 text-electric font-heading font-semibold text-sm rounded-sm hover:bg-electric/10 hover:border-electric/50 transition-all">
                
                Смотреть возможности
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>

            {/* Tech stats */}
            <div className="mt-12 flex flex-wrap gap-6 sm:gap-8">
              {[
              { value: 'Offline', label: 'Работа' },
              { value: '3–5×', label: 'Быстрее' },
              { value: 'AI', label: 'Помощник' }].
              map((stat) =>
              <div key={stat.label}>
                  <div className="font-heading font-bold text-xl text-white">{stat.value}</div>
                  <div className="font-mono text-[10px] text-data/40 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              )}
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
            <div className="absolute inset-0 bg-electric/[0.06] blur-[80px] rounded-full scale-75" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-violet/[0.04] blur-[60px] rounded-full" />
            
            {/* Mockup frame */}
            <div className="relative rounded-lg overflow-hidden border border-electric/15 glow-blue">
              <div className="bg-navy/50 px-4 py-2 flex items-center gap-2 border-b border-white/[0.05]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <span className="font-mono text-[10px] text-data/30 ml-3">EMC Toolkit — Main Dashboard</span>
              </div>
              <img src="https://media.base44.com/images/public/69feffc36e31b5fb5f019912/1517dea65___2026-05-17_221033.png"

              alt="Интерфейс ЭМС Инструментарий — главная панель EMC Toolkit с анализатором спектра и панелью ЭМС испытаний"
              className="w-full h-auto" />
              
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] text-data/20 uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}>
            
            <ChevronDown className="w-4 h-4 text-electric/30" />
          </motion.div>
        </div>
      </motion.div>
    </section>);

}