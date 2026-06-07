import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

const steps = [
  {
    title: 'Demonstration',
    text: 'Показываем EMC Toolkit на типовых сценариях лаборатории: подготовка теста, расчёты, стандарты, оборудование и журнал.',
  },
  {
    title: 'License selection',
    text: 'Подбираем Engineer, Lab или Enterprise в зависимости от числа пользователей, роли команды и требований внедрения.',
  },
  {
    title: 'Installation',
    text: 'Передаём desktop application и инструкции для установки в рабочей среде лаборатории, включая offline deployment.',
  },
  {
    title: 'Configuration',
    text: 'Настраиваем структуру шаблонов, справочников и оборудования под лабораторный процесс заказчика.',
  },
  {
    title: 'Team onboarding',
    text: 'Обучаем инженеров работе с EMC calculations, EMI testing workflows, журналом и лабораторными справочниками.',
  },
  {
    title: 'Support',
    text: 'Сопровождаем внедрение, отвечаем на вопросы команды и передаём обновления в рамках выбранного формата лицензии.',
  },
];

export default function ImplementationSection() {
  return (
    <section id="implementation" className="relative py-24 lg:py-32" aria-labelledby="implementation-title">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-violet/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="07" label="Implementation process" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <h2 id="implementation-title" className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Внедрение без риска для <span className="text-gradient-blue">текущей работы лаборатории</span>
          </h2>
          <p className="text-data/45 text-lg leading-relaxed">
            Процесс внедрения EMC Toolkit прозрачен: сначала демонстрация и выбор лицензии, затем установка,
            настройка, обучение команды и сопровождение.
          </p>
        </motion.div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="relative p-6 border border-white/[0.06] rounded-sm bg-navy/40"
            >
              <div className="font-mono text-[11px] text-electric/60 uppercase tracking-widest mb-3">
                Step {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-2">{step.title}</h3>
              <p className="text-data/45 text-sm leading-relaxed">{step.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
