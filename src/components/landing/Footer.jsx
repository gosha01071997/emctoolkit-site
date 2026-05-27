import React from 'react';
import { Zap, Send, Mail } from 'lucide-react';

const TELEGRAM_URL = 'https://t.me/EMCinstrumentarii';
const EMAIL = null;

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] bg-void/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
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
                Beta / Early Access
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-data/40 hover:text-electric transition-colors"
            >
              <Send className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-wider">Telegram</span>
            </a>
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
    </footer>
  );
}