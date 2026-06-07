import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileSearch, ShieldCheck, WifiOff } from 'lucide-react';
import SectionLabel from './SectionLabel';

const proofPoints = [
  {
    icon: WifiOff,
    title: 'Offline operation',
    text: 'Калькуляторы, подготовка испытаний, справочники и журнал работают без постоянного подключения к интернету.',
  },
  {
    icon: Database,
    title: 'Unified engineering environment',
    text: 'Рабочие данные EMC/EMI лаборатории объединены в одном desktop application вместо набора Excel-файлов и папок.',
  },
  {
    icon: FileSearch,
    title: 'Centralized standards access',
    text: 'Справочные материалы по CISPR, IEC, MIL-STD, CE, RE, CS, RS и BCI доступны из интерфейса продукта.',
  },
  {
    icon: ShieldCheck,
    title: 'Implementation outcomes',
    text: 'После внедрения команда получает единый порядок подготовки EMC tests, контроля оборудования и фиксации инженерной информации.',
  },
];

export default function ProofSection() {
  return (
    <section className="relative py-24 lg:py-32" aria-labelledby="proof-title">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="05" label="Proof / Results" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <h2 id="proof-title" className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Проверяемые результаты без <span className="text-gradient-blue">неподтверждённых метрик</span>
          </h2>
          <p className="text-data/45 text-lg leading-relaxed">
            EMC Toolkit описывает ценность через наблюдаемые изменения в лабораторной работе: доступность данных,
            прослеживаемость, офлайн-работу и единый порядок подготовки испытаний.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {proofPoints.map((point, i) => (
            <motion.article
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative p-6 border border-white/[0.06] rounded-sm bg-navy/40 hover:border-electric/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-sm bg-electric/10 border border-electric/20 flex items-center justify-center mb-5">
                <point.icon className="w-5 h-5 text-electric" />
              </div>
              <h3 className="font-heading font-bold text-white text-base mb-2">{point.title}</h3>
              <p className="text-data/45 text-sm leading-relaxed">{point.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
