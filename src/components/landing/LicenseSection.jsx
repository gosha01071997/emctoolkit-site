import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Crown } from 'lucide-react';
import SectionLabel from './SectionLabel';
import { LabModal } from './PurchaseModal';

const plans = [
  {
    id: 'engineer',
    name: 'ENGINEER',
    price: '15 000 ₽ / год',
    description: 'Для индивидуального инженера ЭМС.',
    features: [
      'Все калькуляторы ЭМС',
      'Испытания и шаблоны',
      'Справочники и нормы',
      'Учёт оборудования',
      'Журнал работ',
      'AI-помощник',
      'Офлайн работа',
      'Обновления в течение года',
    ],
    cta: 'Получить доступ',
    ctaStyle: 'border border-electric/30 text-electric hover:bg-electric/10 hover:border-electric/50',
    highlight: false,
  },
  {
    id: 'lab',
    name: 'LAB',
    badge: 'Рекомендуемый выбор',
    price: 'По запросу',
    description: 'Для испытательных лабораторий.',
    features: [
      'Всё из Engineer',
      'Работа команды инженеров',
      'Общая база данных оборудования',
      'Настройка шаблонов',
      'Обучение сотрудников',
      'Приоритетная поддержка',
    ],
    cta: 'Запросить условия',
    ctaStyle: 'bg-violet text-white hover:bg-violet/90 hover:shadow-[0_0_30px_rgba(122,92,255,0.22)]',
    highlight: true,
  },
  {
    id: 'enterprise',
    name: 'ENTERPRISE',
    price: 'Индивидуально',
    description: 'Для предприятий и испытательных центров.',
    features: [
      'Всё из Lab',
      'Индивидуальная адаптация',
      'Дополнительные модули по запросу',
      'Внедрение под задачи предприятия',
      'Персональные условия сопровождения',
    ],
    cta: 'Обсудить внедрение',
    ctaStyle: 'border border-cyan/30 text-cyan hover:bg-cyan/10 hover:border-cyan/50',
    highlight: false,
  },
];

export default function LicenseSection() {
  const [modal, setModal] = useState(null); // 'lab' | 'enterprise' | null

  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-violet/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="05" label="Лицензии" />
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4"
        >
          Выберите формат <span className="text-gradient-blue">лицензирования</span>
        </motion.h2>
        <p className="text-data/40 text-lg mb-16 max-w-2xl">
          От индивидуального инженера до испытательной лаборатории и предприятия.
        </p>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-sm overflow-hidden ${plan.highlight ? 'glow-violet' : ''}`}
            >
              {plan.highlight && (
                <div className="absolute -inset-1 bg-gradient-to-b from-violet/10 via-transparent to-transparent rounded-sm" />
              )}

              <div className={`relative p-8 h-full flex flex-col bg-navy/50 backdrop-blur-sm border ${
                plan.highlight ? 'border-violet/20' : 'border-white/[0.06]'
              }`}>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3 min-h-4">
                    {plan.highlight && <Crown className="w-4 h-4 text-violet" />}
                    {plan.badge && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-violet/70">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-heading font-black text-3xl text-white">{plan.name}</h3>
                    <div className={`font-heading font-bold text-2xl ${plan.highlight ? 'text-violet' : 'text-warning'}`}>{plan.price}</div>
                    <p className="text-data/45 text-sm leading-relaxed">{plan.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-violet' : 'text-electric'}`} />
                      <span className="text-data/70 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                {plan.id === 'engineer' ? (
                  <a
                    href="https://t.me/EMCinstrumentarii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 font-heading font-bold text-sm rounded-sm transition-all duration-300 ${plan.ctaStyle}`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                ) : (
                  <button
                    onClick={() => setModal(plan.id)}
                    className={`group inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 font-heading font-bold text-sm rounded-sm transition-all duration-300 ${plan.ctaStyle}`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 max-w-4xl font-mono text-[11px] text-data/25 leading-relaxed border-t border-white/[0.03] pt-6"
        >
          Онлайн-оплата через ЮKassa будет подключена после завершения регистрации магазина.
          Сейчас заявки принимаются через форму и Telegram.
        </motion.p>
      </div>

      {modal === 'lab' && <LabModal onClose={() => setModal(null)} planName="Lab" />}
      {modal === 'enterprise' && <LabModal onClose={() => setModal(null)} planName="Enterprise" />}
    </section>
  );
}