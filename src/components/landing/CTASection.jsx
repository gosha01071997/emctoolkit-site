import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';
import { LabModal } from './PurchaseModal';


export default function CTASection() {
  const [modal, setModal] = useState(null); // 'lab' | null

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-electric/[0.04] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6">
            Начните использовать{' '}
            <span className="text-gradient-blue">EMC Toolkit</span>
          </h2>
          <p className="text-data/50 text-lg mb-3">
            Переведите вашу ЭМС лабораторию на новый уровень эффективности
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://t.me/EMCinstrumentarii"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-warning text-void font-heading font-bold text-sm rounded-sm hover:bg-warning/90 transition-all hover:shadow-[0_0_30px_rgba(242,201,76,0.2)]"
            >
              Получить доступ
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <button
              onClick={() => setModal('lab')}
              className="group inline-flex items-center gap-2 px-8 py-4 border border-violet/30 text-violet font-heading font-semibold text-sm rounded-sm hover:bg-violet/10 hover:border-violet/50 transition-all"
            >
              Оставить заявку на Lab
              <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {modal === 'lab' && <LabModal onClose={() => setModal(null)} />}
    </section>
  );
}
