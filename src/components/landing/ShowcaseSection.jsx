import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, ClipboardList, Wrench, Bot, NotebookPen } from 'lucide-react';
import SectionLabel from './SectionLabel';

const screenshots = {
  calculators: 'https://media.base44.com/images/public/69feffc36e31b5fb5f019912/408f11a41___2026-05-17_221059.png',
  tests: 'https://media.base44.com/images/public/69feffc36e31b5fb5f019912/ed1a74171___2026-05-01_213255.png',
  equipment: 'https://media.base44.com/images/public/69feffc36e31b5fb5f019912/602882586___2026-05-17_221249.png',
  ai: 'https://media.base44.com/images/public/69feffc36e31b5fb5f019912/ed9ac37a9___2026-05-01_213525___.png',
  journal: 'https://media.base44.com/images/public/69feffc36e31b5fb5f019912/1f5777bd0_.png',
};

const tabs = [
  {
    id: 'calculators',
    icon: Calculator,
    label: 'EMC calculations',
    alt: 'EMC calculations interface in EMC Toolkit for EMC and EMI engineers',
    task: 'Инженер рассчитывает уровни dB, dBm, dBµV, кабельные потери и параметры подготовки испытаний.',
    time: 'Экономия времени: меньше ручных формул и переключения между Excel-файлами.',
    risk: 'Снижение риска: меньше ошибок единиц измерения и копирования исходных данных.',
  },
  {
    id: 'tests',
    icon: ClipboardList,
    label: 'Test preparation',
    alt: 'EMC test preparation templates and protocol workflow in EMC Toolkit',
    task: 'Лаборатория готовит EMC/EMI testing scenario, этапы, стенд, заметки и контроль выполнения.',
    time: 'Экономия времени: быстрее собрать структуру испытания и повторно использовать шаблоны.',
    risk: 'Снижение риска: меньше пропущенных шагов при CE, RE, CS, RS и immunity testing.',
  },
  {
    id: 'equipment',
    icon: Wrench,
    label: 'Equipment management',
    alt: 'EMC laboratory equipment calibration and management in EMC Toolkit',
    task: 'Руководитель отслеживает оборудование, калибровку, состояние и доступность приборов.',
    time: 'Экономия времени: быстрее проверить готовность средств испытаний до запуска работ.',
    risk: 'Снижение риска: меньше ситуаций, когда прибор или калибровка обнаруживаются поздно.',
  },
  {
    id: 'ai',
    icon: Bot,
    label: 'Engineering assistant',
    alt: 'AI assistant for EMC and EMI engineering questions in EMC Toolkit',
    task: 'Инженер получает подсказки по рабочему контексту, терминам и инженерным вопросам.',
    time: 'Экономия времени: быстрее найти направление анализа без поиска по разрозненным источникам.',
    risk: 'Снижение риска: меньше потери контекста при передаче задачи между специалистами.',
  },
  {
    id: 'journal',
    icon: NotebookPen,
    label: 'Work journal',
    alt: 'EMC laboratory work journal with structured test records in EMC Toolkit',
    task: 'Команда фиксирует расчёты, события испытаний, рабочие заметки и хронологию лабораторных действий.',
    time: 'Экономия времени: быстрее восстановить историю работы и подготовить данные для протокола.',
    risk: 'Снижение риска: меньше неформальных записей, потерянных комментариев и несвязанных файлов.',
  },
];

export default function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState('calculators');
  const active = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <section id="showcase" className="relative py-24 lg:py-32" aria-labelledby="showcase-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="04" label="Product interface" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <h2 id="showcase-title" className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Скриншоты показывают <span className="text-gradient-blue">рабочие сценарии</span>, а не галерею функций
          </h2>
          <p className="text-data/45 text-lg leading-relaxed">
            Каждый экран EMC Toolkit связан с задачей лаборатории: что выполняется, где экономится время
            и какой операционный риск снижается.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="EMC Toolkit workflow screenshots">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-sm font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-electric/15 border border-electric/30 text-electric'
                  : 'bg-navy/40 border border-white/[0.04] text-data/40 hover:text-data/70 hover:border-white/[0.08]'
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6 items-start">
          <motion.aside
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="border border-white/[0.06] rounded-sm bg-navy/40 p-6"
          >
            <h3 className="font-heading font-bold text-xl text-white mb-4">{active.label}</h3>
            <div className="space-y-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-electric/60 mb-1">Task performed</p>
                <p className="text-data/55 text-sm leading-relaxed">{active.task}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-electric/60 mb-1">Time saved</p>
                <p className="text-data/55 text-sm leading-relaxed">{active.time}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-electric/60 mb-1">Risk reduced</p>
                <p className="text-data/55 text-sm leading-relaxed">{active.risk}</p>
              </div>
            </div>
          </motion.aside>

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
                <span className="font-mono text-[10px] text-data/30">EMC Toolkit — {active.label}</span>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-glow" />
                  <span className="font-mono text-[9px] text-green-400/50 uppercase">Offline</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.img
                  key={active.id}
                  src={screenshots[active.id]}
                  alt={active.alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-auto"
                />
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
