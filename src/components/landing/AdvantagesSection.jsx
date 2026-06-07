import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

const stats = [
  { value: '3–5×', label: 'ускорение расчётов', desc: 'Автоматизация вместо ручных формул' },
  { value: '1', label: 'система вместо Excel', desc: 'Единая среда для всех данных' },
  { value: '100%', label: 'офлайн работа', desc: 'Не зависит от интернета' },
  { value: '<1с', label: 'доступ к данным', desc: 'Мгновенный поиск по всем справочникам' },
  { value: '−80%', label: 'меньше ошибок', desc: 'Валидация и шаблоны исключают промахи' },
  { value: '∞', label: 'норм в базе', desc: 'ГОСТ, CISPR, IEC и другие стандарты' },
];

export default function AdvantagesSection() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="04" label="Преимущества" />
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-16"
        >
          Цифры говорят <span className="text-gradient-blue">сами</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 border border-white/[0.04] rounded-sm bg-navy/30 hover:border-electric/15 transition-all duration-300"
            >
              <div className="font-heading font-black text-4xl lg:text-5xl text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-electric uppercase tracking-widest mb-2">
                {stat.label}
              </div>
              <p className="text-data/40 text-sm">{stat.desc}</p>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-electric/0 via-electric/20 to-electric/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}