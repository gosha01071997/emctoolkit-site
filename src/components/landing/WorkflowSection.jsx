import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

const workflows = [
  {
    task: 'Preparation of EMC test',
    before: 'Инженер собирает методику, расчёты, параметры стенда и протокол из разных Excel и документов.',
    after: 'Подготовка испытания ведётся в едином рабочем контуре: расчёты, шаблон, заметки и статус связаны с задачей.',
    outcome: 'Сокращается время подготовки и снижается риск пропуска обязательных шагов.',
  },
  {
    task: 'Searching standards',
    before: 'Нормы CISPR, IEC, MIL-STD и внутренние методики ищутся вручную по папкам и PDF.',
    after: 'Справочная информация и рабочие зависимости доступны из одного инженерного интерфейса.',
    outcome: 'Инженеры быстрее находят релевантную информацию для EMC test preparation.',
  },
  {
    task: 'Equipment management',
    before: 'Статус приборов, калибровка и расположение оборудования ведутся в отдельных таблицах.',
    after: 'Парк оборудования, отметки калибровки и лабораторные статусы хранятся централизованно.',
    outcome: 'Руководитель лаборатории видит готовность средств испытаний до начала работы.',
  },
  {
    task: 'Protocol preparation',
    before: 'Результаты испытаний и инженерные заметки переносятся вручную между журналами и отчётами.',
    after: 'Журнал работ фиксирует расчёты, тестовые события и комментарии в структурированном виде.',
    outcome: 'Уменьшается ручной перенос данных и повышается прослеживаемость лабораторной работы.',
  },
  {
    task: 'Knowledge transfer to new engineers',
    before: 'Практические знания остаются у отдельных специалистов и передаются устно.',
    after: 'Шаблоны, справочники, расчёты и история работ формируют единый контекст для команды.',
    outcome: 'Новые EMC/EMI engineers быстрее входят в лабораторный процесс.',
  },
];

export default function WorkflowSection() {
  return (
    <section id="workflow" className="relative py-24 lg:py-32" aria-labelledby="workflow-title">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="03" label="Workflow transformation" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <h2 id="workflow-title" className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            От разрозненных файлов к <span className="text-gradient-blue">управляемому лабораторному процессу</span>
          </h2>
          <p className="text-data/45 text-lg leading-relaxed">
            EMC Toolkit меняет не отдельную операцию, а последовательность работы лаборатории: подготовку,
            расчёты, поиск EMC standards, оборудование, протоколирование и передачу знаний.
          </p>
        </motion.div>

        <div className="space-y-4">
          {workflows.map((item, i) => (
            <motion.article
              key={item.task}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="grid lg:grid-cols-[1fr_auto_1fr] gap-4 items-stretch rounded-sm border border-white/[0.06] bg-navy/35 p-4 lg:p-5"
            >
              <div className="border border-destructive/15 bg-destructive/[0.04] rounded-sm p-5">
                <h3 className="font-heading font-bold text-white mb-2">Before EMC Toolkit: {item.task}</h3>
                <p className="text-data/45 text-sm leading-relaxed">{item.before}</p>
              </div>

              <div className="hidden lg:flex items-center justify-center px-2">
                <ArrowRight className="w-5 h-5 text-electric/50" />
              </div>

              <div className="border border-electric/20 bg-electric/[0.04] rounded-sm p-5">
                <h3 className="font-heading font-bold text-white mb-2">After EMC Toolkit</h3>
                <p className="text-data/55 text-sm leading-relaxed mb-3">{item.after}</p>
                <p className="font-mono text-[11px] uppercase tracking-widest text-electric/65">Outcome: {item.outcome}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
