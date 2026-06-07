import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, Cpu, FlaskConical, LineChart } from 'lucide-react';
import SectionLabel from './SectionLabel';

const roles = [
  {
    icon: BriefcaseBusiness,
    title: 'Laboratory Manager',
    value: 'Получает управляемый контур для EMC laboratory management: оборудование, калибровки, статусы работ и единый порядок подготовки испытаний.',
    focus: 'Готовность лаборатории, загрузка команды, снижение операционного хаоса.',
  },
  {
    icon: Cpu,
    title: 'Chief Engineer',
    value: 'Стандартизирует инженерные практики, расчёты EMC/EMI и подготовку протоколов между специалистами и проектами.',
    focus: 'Единая методическая база и контроль качества инженерных решений.',
  },
  {
    icon: FlaskConical,
    title: 'EMC Engineer',
    value: 'Быстрее выполняет EMC calculations, готовит EMI testing, ищет нормы и фиксирует рабочие заметки без переключения между инструментами.',
    focus: 'Меньше ручного поиска, повторного ввода и несвязанных Excel-файлов.',
  },
  {
    icon: LineChart,
    title: 'Technical Director',
    value: 'Видит платформу для масштабирования лабораторной экспертизы, внедрения единого процесса и сохранения критичных знаний внутри компании.',
    focus: 'Управляемость, преемственность знаний и готовность к росту нагрузки.',
  },
];

export default function RoleBenefitsSection() {
  return (
    <section id="roles" className="relative py-24 lg:py-32" aria-labelledby="roles-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="06" label="Who benefits" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <h2 id="roles-title" className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Ценность EMC Toolkit зависит от <span className="text-gradient-blue">роли в лаборатории</span>
          </h2>
          <p className="text-data/45 text-lg leading-relaxed">
            EMC Toolkit используют руководители лабораторий, chief engineers, EMC/EMI engineers и technical directors,
            которым нужен единый процесс EMC test preparation и управления инженерными знаниями.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {roles.map((role, i) => (
            <motion.article
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="p-6 h-full border border-white/[0.06] rounded-sm bg-navy/40 hover:border-electric/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-sm bg-violet/10 border border-violet/20 flex items-center justify-center mb-5">
                <role.icon className="w-5 h-5 text-violet" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-3">{role.title}</h3>
              <p className="text-data/55 text-sm leading-relaxed mb-4">{role.value}</p>
              <p className="font-mono text-[11px] uppercase tracking-widest text-data/35">{role.focus}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
