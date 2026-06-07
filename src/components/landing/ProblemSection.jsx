import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, FolderOpen, AlertTriangle, Clock, Search, Layers } from 'lucide-react';
import SectionLabel from './SectionLabel';
import CornerBrackets from './CornerBrackets';

const problems = [
  { icon: FileSpreadsheet, title: 'Excel files', desc: 'Формулы, версии и результаты испытаний расходятся между локальными таблицами' },
  { icon: FolderOpen, title: 'Scattered standards', desc: 'CISPR, IEC, MIL-STD, протоколы и шаблоны хранятся в разных папках и форматах' },
  { icon: AlertTriangle, title: 'Manual calculations', desc: 'Ручные EMC calculations повышают риск ошибок в уровнях, единицах и исходных данных' },
  { icon: Clock, title: 'Equipment tracking issues', desc: 'Калибровка, статус и расположение приборов не всегда видны до начала испытаний' },
  { icon: Search, title: 'Inconsistent test preparation', desc: 'Подготовка EMC/EMI testing зависит от личного опыта инженера и набора локальных файлов' },
  { icon: Layers, title: 'Knowledge fragmentation', desc: 'Рабочие заметки, журналы и методические решения не формируют общую базу лаборатории' },
];

export default function ProblemSection() {
  return (
    <section className="relative py-24 lg:py-32" aria-labelledby="problems-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="02" label="Laboratory problems" />
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4"
        >
          <span id="problems-title">Что мешает EMC/EMI лаборатории работать предсказуемо</span>
        </motion.h2>
        <p className="text-data/40 text-lg mb-16 max-w-2xl">
          Before state типичной EMC laboratory: Excel files, scattered standards, manual calculations, equipment tracking issues и inconsistent test preparation.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <CornerBrackets className="p-6 h-full bg-navy/40 backdrop-blur-sm border border-white/[0.04] rounded-sm hover:border-electric/20 hover:bg-navy/60 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-destructive/10 border border-destructive/20 flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/15 transition-colors">
                    <item.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white mb-1.5">{item.title}</h3>
                    <p className="text-data/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </CornerBrackets>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}