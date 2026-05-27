import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Crown } from 'lucide-react';
import SectionLabel from './SectionLabel';
import { EngineerModal, LabModal } from './PurchaseModal';

const plans = [
  {
    id: 'engineer',
    name: 'Engineer',
    badge: 'Early Access',
    price: '1 000 ₽',
    features: [
      'Локальная лицензия на 1 ПК',
      'Все калькуляторы ЭМС',
      'Испытания и шаблоны',
      'Справочники и нормы',
      'AI-помощник',
      'Журнал работ',
      'Офлайн работа',
      'Обновления 1 год',
    ],
    cta: 'Купить Engineer',
    ctaStyle: 'bg-warning text-void hover:bg-warning/90 hover:shadow-[0_0_30px_rgba(242,201,76,0.2)]',
    highlight: false,
  },
  {
    id: 'lab',
    name: 'Lab',
    badge: 'Для лабораторий',
    features: [
      'Всё из Engineer',
      'Управление оборудованием',
      'Многопользовательская работа',
      'Кастомизация шаблонов',
      'Приоритетная поддержка',
      'Интеграция с системами',
      'Расширенная аналитика',
      'Выделенный менеджер',
    ],
    cta: 'Оставить заявку',
    ctaStyle: 'border border-cyan/30 text-cyan hover:bg-cyan/10 hover:border-cyan/50',
    highlight: true,
  },
];

export default function LicenseSection() {
  const [modal, setModal] = useState(null); // 'engineer' | 'lab' | null

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
          Выберите <span className="text-gradient-blue">доступ</span>
        </motion.h2>
        <p className="text-data/40 text-lg mb-16 max-w-2xl">
          Два тарифа для разных задач — от личного использования до лаборатории
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
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
                  <div className="flex items-center gap-3 mb-3">
                    {plan.highlight && <Crown className="w-4 h-4 text-violet" />}
                    <span className={`font-mono text-[10px] uppercase tracking-widest ${plan.id === 'engineer' ? 'text-warning/60' : 'text-data/40'}`}>
                      {plan.badge}
                    </span>
                  </div>
                  <div className="flex items-end gap-3 flex-wrap">
                    <h3 className="font-heading font-black text-3xl text-white">{plan.name}</h3>
                    {plan.price && (
                      <span className="font-heading font-bold text-xl text-warning mb-0.5">{plan.price}</span>
                    )}
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
                    Получить доступ
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

      {modal === 'engineer' && <EngineerModal onClose={() => setModal(null)} />}
      {modal === 'lab' && <LabModal onClose={() => setModal(null)} />}
    </section>
  );
}