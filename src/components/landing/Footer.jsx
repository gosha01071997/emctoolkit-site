import React, { useState } from 'react';
import { FileText, Mail, Send, Zap } from 'lucide-react';
import { LabModal } from './PurchaseModal';

const EMAIL = 'goshakondratev777@gmail.com';
const TELEGRAM_HANDLE = '@EMCinstrumentarii';
const TELEGRAM_URL = 'https://t.me/EMCinstrumentarii';

export default function Footer() {
  const [modal, setModal] = useState(null);

  return (
    <footer className="relative border-t border-white/[0.04] bg-void/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Logo, version & tagline */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-md bg-electric/10 border border-electric/20 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-electric" />
              </div>
              <span className="font-heading font-bold text-sm tracking-tight text-white">
                EMC <span className="text-electric">Toolkit</span>
              </span>
            </div>
            <p className="font-mono text-[10px] text-data/25 uppercase tracking-widest mb-1.5">
              Offline desktop platform for EMC engineers
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-warning/60 animate-pulse-glow" />
              <span className="font-mono text-[10px] text-data/25 uppercase tracking-widest">
                Профессиональная лицензия
              </span>
            </div>
          </div>

          {/* Contacts */}
          <div className="w-full lg:flex-1 lg:max-w-3xl px-5 py-4 border border-white/[0.06] rounded-sm bg-navy/30">
            <p className="font-mono text-[10px] text-data/30 uppercase tracking-widest mb-2">Контакты</p>
            <p className="text-data/55 text-sm leading-relaxed mb-4 lg:whitespace-nowrap">
              По вопросам демонстрации, лицензирования и внедрения EMC Toolkit для лабораторий.
            </p>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-5">
              <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex max-w-full items-center gap-2 text-data/50 hover:text-electric transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span className="min-w-0 font-mono text-xs whitespace-nowrap">Email: {EMAIL}</span>
                </a>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex max-w-full items-center gap-2 text-data/50 hover:text-electric transition-colors"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span className="min-w-0 font-mono text-xs whitespace-nowrap">Telegram: {TELEGRAM_HANDLE}</span>
                </a>
              </div>
              <button
                onClick={() => setModal('lab')}
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-sm border border-violet/30 px-4 py-2 font-mono text-xs text-violet transition-colors hover:border-violet/50 hover:bg-violet/10"
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">Оставить заявку</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] text-data/20 uppercase tracking-widest">
            © {new Date().getFullYear()} EMC Toolkit. Все права защищены.
          </span>
          <span className="font-mono text-[10px] text-data/20 uppercase tracking-widest">
            ЭМС Инструментарий
          </span>
        </div>
      </div>
      {modal === 'lab' && <LabModal onClose={() => setModal(null)} />}
    </footer>
  );
}
