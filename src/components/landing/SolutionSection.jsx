import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, FlaskConical, BookOpen, NotebookPen, Wrench, Bot, WifiOff } from 'lucide-react';
import SectionLabel from './SectionLabel';

const features = [
  { icon: Calculator, title: 'Калькуляторы ЭМС', desc: 'Быстрые расчёты помех, затухания, импеданса и других параметров', color: 'electric' },
  { icon: FlaskConical, title: 'Испытания и шаблоны', desc: 'Готовые структуры испытаний, этапы, заметки, статусы и контроль выполнения для работы по методикам ЭМС.', color: 'electric' },
  { icon: BookOpen, title: 'Справочники и нормы', desc: 'Единая база нормативных документов с быстрым поиском', color: 'violet' },
  { icon: NotebookPen, title: 'Журнал работ', desc: 'Автоматическое ведение лога всех испытаний и расчётов', color: 'violet' },
  { icon: Wrench, title: 'Управление оборудованием', desc: 'Учёт приборов, калибровки, состояние и расположение', color: 'cyan' },
  { icon: Bot, title: 'AI-помощник', desc: 'Интеллектуальный ассистент для анализа данных и рекомендаций', color: 'cyan' },
  { icon: WifiOff, title: 'Офлайн работа', desc: 'Полная функциональность без подключения к интернету', color: 'warning' },
];

const colorConfig = {
  electric: { bg: 'bg-electric/10', border: 'border-electric/20', text: 'text-electric', glow: 'group-hover:shadow-[0_0_20px_rgba(91,124,255,0.1)]', led: 'bg-electric' },
  violet: { bg: 'bg-violet/10', border: 'border-violet/20', text: 'text-violet', glow: 'group-hover:shadow-[0_0_20px_rgba(122,92,255,0.1)]', led: 'bg-violet' },
  cyan: { bg: 'bg-cyan/10', border: 'border-cyan/20', text: 'text-cyan', glow: 'group-hover:shadow-[0_0_20px_rgba(50,200,180,0.1)]', led: 'bg-cyan' },
  warning: { bg: 'bg-warning/10', border: 'border-warning/20', text: 'text-warning', glow: 'group-hover:shadow-[0_0_20px_rgba(242,201,76,0.1)]', led: 'bg-warning' },
};

export default function SolutionSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="02" label="Решение" />
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4"
        >
          Один инструмент для всей{' '}
          <span className="text-gradient-blue">ЭМС лаборатории</span>
        </motion.h2>
        <p className="text-data/40 text-lg mb-16 max-w-2xl">
          Все необходимые функции в единой десктопной системе
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((feature, i) => {
            const c = colorConfig[feature.color];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group relative p-5 bg-navy/40 backdrop-blur-sm border border-white/[0.04] rounded-sm hover:border-electric/15 transition-all duration-300 ${c.glow}`}
              >
                {/* Status LED */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${c.led} animate-pulse-glow`} />
                
                <div className={`w-10 h-10 rounded-sm ${c.bg} ${c.border} border flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-5 h-5 ${c.text}`} />
                </div>
                <h3 className="font-heading font-bold text-sm text-white mb-2">{feature.title}</h3>
                <p className="text-data/40 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}