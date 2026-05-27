import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionLabel from './SectionLabel';

const capabilities = [
  { title: 'dB / dBm / dBμV расчёты', sub: 'Инженерные EMC/EMI вычисления' },
  { title: 'Потери кабеля', sub: 'RG-58, LMR-400 и другие типы кабелей' },
  { title: 'BCI / Инжекция тока', sub: 'Подготовка и расчёты токовой инжекции' },
  { title: 'CE / RE испытания', sub: 'Кондуктивные и радиационные помехи' },
  { title: 'CS / RS испытания', sub: 'Устойчивость к воздействию ЭМ-помех' },
  { title: 'ГОСТ РВ 20.57.306', sub: 'Работа по военным EMC стандартам' },
  { title: 'IEC 61000', sub: 'Международные EMC/EMI стандарты' },
  { title: 'MIL-STD-461', sub: 'EMI/EMC испытания военной техники' },
  { title: 'Журнал EMC испытаний', sub: 'История, результаты и заметки' },
  { title: 'Учёт оборудования', sub: 'Калибровки, статусы и оборудование' },
  { title: 'AI-помощник EMC инженера', sub: 'Поиск причин проблем и подсказки' },
  { title: 'EMC/EMI справочник', sub: 'Термины, единицы и зависимости' },
];

const faqs = [
  {
    q: 'Что такое ЭМС Инструментарий?',
    a: 'ЭМС Инструментарий (EMC Toolkit) — это офлайн ПО для EMC/EMI инженеров и испытательных ЭМС лабораторий. Программа объединяет инженерные калькуляторы, шаблоны испытаний на электромагнитную совместимость, управление оборудованием, журнал работ, справочники и AI-помощника в одном приложении.',
  },
  {
    q: 'Для кого подходит EMC Toolkit?',
    a: 'EMC software предназначено для EMC инженеров и специалистов по электромагнитной совместимости, сотрудников испытательных ЭМС лабораторий, экспертов, работающих с ГОСТ РВ, IEC 61000, MIL-STD-461, а также команд, которые регулярно проводят испытания ЭМС и оформляют результаты.',
  },
  {
    q: 'Работает ли программа офлайн?',
    a: 'Да. ЭМС Инструментарий — полностью офлайн-приложение. Интернет не требуется для работы калькуляторов, подготовки испытаний ЭМС, справочников и журнала. Это обеспечивает независимость от соединения в полевых условиях и в закрытых ЭМС лабораториях.',
  },
  {
    q: 'Какие расчёты поддерживает EMC Toolkit?',
    a: 'Программа включает расчёты dB/dBm/dBμV, потерь кабеля, параметров BCI, уровней CE/RE и CS/RS, а также расчёты по типовым методикам испытаний на электромагнитную совместимость. Набор калькуляторов для EMC инженеров регулярно расширяется.',
  },
  {
    q: 'Можно ли использовать программу в лаборатории?',
    a: 'Да. Версия Lab специально разработана для ЭМС лабораторий: поддерживает многопользовательскую работу, управление парком оборудования, кастомизацию шаблонов испытаний ЭМС и интеграцию с лабораторными системами.',
  },
  {
    q: 'Чем отличается Engineer версия от Lab версии?',
    a: 'Engineer — лицензия на 1 ПК для EMC инженера. Включает все инструменты: калькуляторы ЭМС, шаблоны испытаний, справочники, AI-помощника и журнал работ. Lab — тариф для ЭМС лаборатории: многопользовательский доступ, управление оборудованием, приоритетная поддержка и выделенный менеджер.',
  },
];

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border border-white/[0.06] rounded-sm overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="font-heading font-semibold text-sm text-data/80">{item.q}</span>
        <ChevronDown
          className={`w-4 h-4 text-electric/50 flex-shrink-0 ml-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 border-t border-white/[0.04]">
          <p className="text-data/50 text-sm leading-relaxed pt-4">{item.a}</p>
        </div>
      )}
    </motion.div>
  );
}

export default function SEOSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-electric/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* "Who it's for" block */}
        <SectionLabel number="06" label="Аудитория" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight mb-4">
            Для кого создан{' '}
            <span className="text-gradient-blue">ЭМС Инструментарий</span>
          </h2>
          <p className="text-data/45 text-base leading-relaxed">
            ЭМС Инструментарий создан для инженеров EMC/EMI, испытательных лабораторий,
            специалистов по электромагнитной совместимости и команд, которые проводят испытания
            по ЭМС, работают с оборудованием, оформляют результаты и используют инженерные
            расчёты в ежедневной практике.
          </p>
        </motion.div>

        {/* Capabilities grid */}
        <SectionLabel number="07" label="Возможности EMC/EMI" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight mb-4">
            Поддерживаемые{' '}
            <span className="text-gradient-blue">EMC/EMI</span>{' '}
            задачи и стандарты
          </h2>
          <p className="text-data/45 text-base leading-relaxed max-w-3xl">
            EMC Toolkit (ЭМС Инструментарий) поддерживает инженерные расчёты, подготовку испытаний,
            ведение журналов и работу EMC/EMI лабораторий.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-24">
          {capabilities.map((cap, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group relative rounded-sm border border-white/[0.06] bg-navy/40 backdrop-blur-sm px-5 py-4 hover:border-electric/20 hover:bg-electric/[0.04] transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: '0 0 20px rgba(91,124,255,0.06)' }} />
              <h3 className="font-heading font-bold text-sm text-data/85 mb-1 leading-snug">{cap.title}</h3>
              <p className="font-mono text-[11px] text-data/35 leading-relaxed">{cap.sub}</p>
            </motion.article>
          ))}
        </div>

        {/* FAQ */}
        <SectionLabel number="08" label="Вопросы и ответы" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight mb-10"
        >
          Часто задаваемые вопросы
        </motion.h2>

        <div className="max-w-3xl space-y-2">
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}