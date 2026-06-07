import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, ClipboardList, Wrench, Bot, NotebookPen } from 'lucide-react';
import SectionLabel from './SectionLabel';

const calculatorsImage = 'https://media.base44.com/images/public/69feffc36e31b5fb5f019912/59276cbba_generated_3eda7058.png';
const testsImage = 'https://media.base44.com/images/public/69feffc36e31b5fb5f019912/bebc87098_generated_bc320bc4.png';
const equipmentImage = 'https://media.base44.com/images/public/69feffc36e31b5fb5f019912/d71a7ca36_generated_f41c461b.png';
const aiImage = 'https://media.base44.com/images/public/69feffc36e31b5fb5f019912/e30e7ee2a_generated_7594bea1.png';
const journalImage = 'https://media.base44.com/images/public/69feffc36e31b5fb5f019912/ac5a31aae_generated_018e51c2.png';

const tabs = [
{ id: 'calculators', icon: Calculator, label: 'Калькуляторы' },
{ id: 'tests', icon: ClipboardList, label: 'Испытания' },
{ id: 'equipment', icon: Wrench, label: 'Оборудование' },
{ id: 'ai', icon: Bot, label: 'AI-помощник' },
{ id: 'journal', icon: NotebookPen, label: 'Журнал работ' }];


export default function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState('calculators');

  const activeLabel = tabs.find((t) => t.id === activeTab)?.label ?? '';

  return (
    <section id="showcase" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="03" label="Приложение" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-16">
          
          Интерфейс <span className="text-gradient-blue">EMC Toolkit</span>
        </motion.h2>

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) =>
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-sm font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
            activeTab === tab.id ?
            'bg-electric/15 border border-electric/30 text-electric' :
            'bg-navy/40 border border-white/[0.04] text-data/40 hover:text-data/70 hover:border-white/[0.08]'}`
            }>
            
              <tab.icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          )}
        </div>

        {/* Screenshot display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative">
          
          {/* Glow */}
          <div className="absolute inset-0 bg-electric/[0.04] blur-[60px] rounded-3xl scale-90" />

          {/* Window frame */}
          <div className="relative rounded-lg overflow-hidden border border-electric/15 glow-blue-strong">
            <div className="bg-navy/60 backdrop-blur-sm px-4 py-2 flex items-center gap-3 border-b border-white/[0.05]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
              <span className="font-mono text-[10px] text-data/30">
                EMC Toolkit — {activeLabel}
              </span>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-glow" />
                <span className="font-mono text-[9px] text-green-400/50 uppercase">Online</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'calculators' &&
              <motion.img
                key="calculators" src="https://media.base44.com/images/public/69feffc36e31b5fb5f019912/408f11a41___2026-05-17_221059.png"

                alt="Калькуляторы EMC/EMI — расчёты ЭМС в интерфейсе ЭМС Инструментарий"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-auto" />

              }
              {activeTab === 'tests' &&
              <motion.img
                key="tests" src="https://media.base44.com/images/public/69feffc36e31b5fb5f019912/ed1a74171___2026-05-01_213255.png"

                alt="Шаблоны испытаний ЭМС — схема стенда и протоколы в EMC Toolkit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-auto" />

              }
              {activeTab === 'equipment' &&
              <motion.img
                key="equipment" src="https://media.base44.com/images/public/69feffc36e31b5fb5f019912/602882586___2026-05-17_221249.png"

                alt="Оборудование ЭМС лаборатории — управление и калибровка в ЭМС Инструментарий"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-auto" />

              }
              {activeTab === 'ai' &&
              <motion.img
                key="ai" src="https://media.base44.com/images/public/69feffc36e31b5fb5f019912/ed9ac37a9___2026-05-01_213525___.png"

                alt="AI-помощник для инженера EMC/EMI — анализ проблем и рекомендации в EMC Toolkit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-auto" />

              }
              {activeTab === 'journal' &&
              <motion.img
                key="journal" src="https://media.base44.com/images/public/69feffc36e31b5fb5f019912/1f5777bd0_.png"

                alt="Журнал испытаний ЭМС — структурированные записи и хронология работ в ЭМС Инструментарий"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-auto" />

              }
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>);

}