import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionLabel from './SectionLabel';

const capabilityGroups = [
  {
    title: 'EMC calculations',
    terms: 'dB, dBm, dBµV, cable loss, impedance, BCI preparation',
    text: 'EMC Toolkit includes engineering calculators for daily EMC calculations and EMI software workflows used by EMC engineers.',
  },
  {
    title: 'EMI testing and emissions',
    terms: 'Conducted emissions, radiated emissions, CE, RE',
    text: 'The platform supports preparation of conducted emissions and radiated emissions tasks with structured test context.',
  },
  {
    title: 'Immunity testing',
    terms: 'BCI, CS, RS, immunity testing',
    text: 'Engineers can organize immunity testing scenarios including BCI, conducted susceptibility and radiated susceptibility references.',
  },
  {
    title: 'EMC standards',
    terms: 'CISPR, IEC, MIL-STD, ГОСТ РВ',
    text: 'The standards environment centralizes working references for EMC standards used during EMC test preparation.',
  },
  {
    title: 'Equipment calibration',
    terms: 'Laboratory equipment, calibration, status, location',
    text: 'EMC Toolkit helps laboratories maintain equipment records, calibration awareness and readiness for testing work.',
  },
  {
    title: 'Laboratory workflow',
    terms: 'EMC laboratory management, journal, protocols, onboarding',
    text: 'The software connects calculations, standards, equipment and work journal into one EMC laboratory workflow.',
  },
];

const faqs = [
  {
    q: 'What is EMC Toolkit?',
    a: 'EMC Toolkit (ЭМС Инструментарий) is offline EMC software and EMI software for EMC/EMI laboratories. It combines EMC calculations, EMC test preparation, standards references, equipment management, laboratory journal workflows and an engineering assistant in one desktop application.',
  },
  {
    q: 'Who uses EMC Toolkit?',
    a: 'EMC Toolkit is used by EMC laboratory managers, chief engineers, technical directors, EMC/EMI engineers, certification laboratories and testing laboratories that need a structured engineering environment for EMC laboratory management.',
  },
  {
    q: 'What problems does EMC Toolkit solve?',
    a: 'The product reduces dependence on Excel files, scattered standards, manual calculations, inconsistent test preparation, disconnected equipment tracking and undocumented knowledge transfer between engineers.',
  },
  {
    q: 'How is deployment performed?',
    a: 'Deployment starts with a laboratory demonstration and license selection. After that, the desktop application is installed, configured for the laboratory workflow, introduced to engineers through onboarding and supported during operation.',
  },
  {
    q: 'Can the software work offline?',
    a: 'Yes. EMC Toolkit is designed as an offline desktop application. Core workflows such as EMC calculations, standards lookup, test preparation, equipment records and the work journal do not require continuous internet access.',
  },
  {
    q: 'How are updates delivered?',
    a: 'Updates are delivered within the selected license terms. The current commercial process accepts requests through the form and Telegram, and support provides update guidance for the installed environment.',
  },
  {
    q: 'Can laboratories customize the system?',
    a: 'Yes. Lab and Enterprise implementation can include configuration of templates, equipment structure, workflow conventions and onboarding materials to match the laboratory process.',
  },
  {
    q: 'What EMC standards are supported?',
    a: 'EMC Toolkit is built around working references for EMC standards and terminology including CISPR, IEC, MIL-STD and ГОСТ РВ contexts. Exact standards coverage and internal laboratory references are discussed during demonstration and configuration.',
  },
  {
    q: 'What EMC calculations are available?',
    a: 'The platform includes EMC calculations such as dB, dBm, dBµV conversions, cable loss, BCI preparation and other calculator workflows for EMC engineers. The calculator set can expand through updates.',
  },
  {
    q: 'What support is included?',
    a: 'Support includes implementation guidance, answers to product questions, update assistance and team onboarding depending on the selected Engineer, Lab or Enterprise license.',
  },
];

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="border border-white/[0.06] rounded-sm overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
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
    <section className="relative py-24 lg:py-32" aria-labelledby="capabilities-title">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-electric/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="09" label="EMC / EMI capabilities" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 max-w-3xl"
        >
          <h2 id="capabilities-title" className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            EMC / EMI capabilities for search engines and <span className="text-gradient-blue">AI retrieval</span>
          </h2>
          <p className="text-data/45 text-base leading-relaxed">
            EMC Toolkit is EMC laboratory software for EMC calculations, EMI testing, EMC standards access,
            equipment calibration tracking and laboratory workflow management. It is used by EMC engineers,
            certification laboratories and technical teams working with CISPR, IEC and MIL-STD contexts.
          </p>
        </motion.div>

        <div id="capabilities" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
          {capabilityGroups.map((cap, i) => (
            <motion.article
              key={cap.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group relative rounded-sm border border-white/[0.06] bg-navy/40 backdrop-blur-sm px-5 py-5 hover:border-electric/20 hover:bg-electric/[0.04] transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: '0 0 20px rgba(91,124,255,0.06)' }} />
              <h3 className="font-heading font-bold text-base text-data/90 mb-2 leading-snug">{cap.title}</h3>
              <p className="font-mono text-[11px] text-electric/50 leading-relaxed mb-3">{cap.terms}</p>
              <p className="text-data/45 text-sm leading-relaxed">{cap.text}</p>
            </motion.article>
          ))}
        </div>

        <SectionLabel number="10" label="FAQ" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight mb-10"
        >
          Frequently asked B2B questions
        </motion.h2>

        <div className="max-w-3xl space-y-2">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
