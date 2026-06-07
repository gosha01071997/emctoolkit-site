import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Menu, X, Send } from 'lucide-react';

const TELEGRAM_URL = 'https://t.me/EMCinstrumentarii';

const navLinks = [
  { label: 'Возможности', href: '#features' },
  { label: 'Приложение', href: '#showcase' },
  { label: 'Лицензии', href: '#pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-void/80 backdrop-blur-xl border-b border-electric/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-md bg-electric/10 border border-electric/20 flex items-center justify-center group-hover:bg-electric/20 transition-colors">
            <Zap className="w-4 h-4 text-electric" />
          </div>
          <span className="font-heading font-bold text-base tracking-tight text-white">
            EMC <span className="text-electric">Toolkit</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-data/60 hover:text-electric transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-data/40 hover:text-electric transition-colors"
          >
            <Send className="w-3 h-3" />
            Telegram
          </a>
          <a
            href="https://t.me/EMCinstrumentarii"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2 bg-warning/10 border border-warning/30 text-warning font-heading font-semibold text-sm rounded-sm hover:bg-warning/20 hover:border-warning/50 transition-all"
          >
            Оставить заявку
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-data/60 hover:text-white transition-colors"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-navy/95 backdrop-blur-xl border-b border-electric/10 px-6 py-6 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-mono text-sm uppercase tracking-widest text-data/70 hover:text-electric transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-data/50 hover:text-electric transition-colors"
          >
            <Send className="w-4 h-4" />
            Telegram
          </a>
          <a
            href="https://t.me/EMCinstrumentarii"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center px-5 py-2.5 bg-warning/10 border border-warning/30 text-warning font-heading font-semibold text-sm rounded-sm"
          >
            Оставить заявку
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}