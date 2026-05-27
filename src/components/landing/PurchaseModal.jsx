import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Send, ArrowRight } from 'lucide-react';

const TELEGRAM_BOT_URL = 'https://t.me/EMCinstrumentarii';

function FormInput({ label, id, type = 'text', placeholder, value, onChange, required }) {
  return (
    <div>
      <label htmlFor={id} className="block font-mono text-[10px] text-data/50 uppercase tracking-widest mb-1.5">
        {label}{required && <span className="text-electric ml-1">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-3 py-2.5 bg-void/60 border border-white/[0.08] rounded-sm text-white text-sm placeholder-data/30 focus:outline-none focus:border-electric/40 focus:bg-void/80 transition-all font-mono"
      />
    </div>
  );
}

async function sendToTelegram(data) {
  const BOT_TOKEN = import.meta.env.VITE_TG_BOT_TOKEN;
  const CHAT_ID = import.meta.env.VITE_TG_CHAT_ID;
  if (!BOT_TOKEN || !CHAT_ID) return true; // fallback: just show success
  const text = Object.entries(data).map(([k, v]) => `<b>${k}:</b> ${v || '—'}`).join('\n');
  const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' }),
  });
  return res.ok;
}

export function EngineerModal({ onClose }) {
  const [form, setForm] = useState({ name: '', email: '', telegram: '', comment: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await sendToTelegram({ '📦 Тариф': 'Engineer (1000₽)', '👤 Имя': form.name, '📧 Email': form.email, '✈️ Telegram': form.telegram, '💬 Комментарий': form.comment });
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <ModalShell onClose={onClose} title="Покупка EMC Toolkit Engineer">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center text-center py-8 gap-4">
            <div className="w-14 h-14 rounded-full bg-electric/10 border border-electric/20 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-electric" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white">Заявка отправлена</h3>
            <p className="text-data/50 text-sm leading-relaxed max-w-xs">Мы свяжемся с вами в Telegram или по email и отправим инструкцию по оплате и получению лицензии.</p>
            <button onClick={onClose} className="mt-4 px-6 py-2.5 border border-white/[0.08] text-data/60 font-mono text-xs rounded-sm hover:border-white/20 hover:text-white transition-all">Закрыть</button>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit} className="space-y-4">
            <p className="text-data/50 text-sm leading-relaxed pb-1">Оставьте данные для покупки Engineer версии. Мы свяжемся с вами и отправим инструкцию по оплате.</p>
            <FormInput label="Имя" id="eng-name" placeholder="Иван Петров" value={form.name} onChange={set('name')} required />
            <FormInput label="Email" id="eng-email" type="email" placeholder="ivan@lab.ru" value={form.email} onChange={set('email')} required />
            <FormInput label="Telegram" id="eng-tg" placeholder="@username" value={form.telegram} onChange={set('telegram')} />
            <div>
              <label htmlFor="eng-comment" className="block font-mono text-[10px] text-data/50 uppercase tracking-widest mb-1.5">Комментарий</label>
              <textarea id="eng-comment" placeholder="Дополнительная информация..." value={form.comment} onChange={set('comment')} rows={3}
                className="w-full px-3 py-2.5 bg-void/60 border border-white/[0.08] rounded-sm text-white text-sm placeholder-data/30 focus:outline-none focus:border-electric/40 transition-all font-mono resize-none" />
            </div>
            <div className="pt-2 flex gap-3">
              <button type="submit" disabled={loading}
                className="group flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-warning text-void font-heading font-bold text-sm rounded-sm hover:bg-warning/90 transition-all disabled:opacity-60">
                {loading ? 'Отправка...' : 'Отправить заявку'}
                {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />}
              </button>
              <button type="button" onClick={onClose} className="px-5 py-3 border border-white/[0.08] text-data/60 font-mono text-xs rounded-sm hover:border-white/20 hover:text-white transition-all">Закрыть</button>
            </div>
            <p className="text-data/30 text-[11px] font-mono pt-1">* Онлайн-оплата через ЮKassa будет подключена позднее.</p>
          </motion.form>
        )}
      </AnimatePresence>
    </ModalShell>
  );
}

export function LabModal({ onClose }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', telegram: '', seats: '', comment: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await sendToTelegram({ '📦 Тариф': 'Lab', '👤 Имя': form.name, '🏭 Компания': form.company, '📧 Email': form.email, '✈️ Telegram': form.telegram, '👥 Мест': form.seats, '💬 Комментарий': form.comment });
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <ModalShell onClose={onClose} title="Заявка на EMC Toolkit Lab">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center text-center py-8 gap-4">
            <div className="w-14 h-14 rounded-full bg-violet/10 border border-violet/20 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-violet" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white">Заявка отправлена</h3>
            <p className="text-data/50 text-sm leading-relaxed max-w-xs">Мы свяжемся с вами для обсуждения Lab версии и условий для вашей лаборатории.</p>
            <button onClick={onClose} className="mt-4 px-6 py-2.5 border border-white/[0.08] text-data/60 font-mono text-xs rounded-sm hover:border-white/20 hover:text-white transition-all">Закрыть</button>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit} className="space-y-4">
            <p className="text-data/50 text-sm leading-relaxed pb-1">Оставьте данные для обсуждения Lab версии.</p>
            <FormInput label="Имя" id="lab-name" placeholder="Иван Петров" value={form.name} onChange={set('name')} required />
            <FormInput label="Компания / Лаборатория" id="lab-company" placeholder="ООО Испытательный центр" value={form.company} onChange={set('company')} required />
            <FormInput label="Email" id="lab-email" type="email" placeholder="ivan@lab.ru" value={form.email} onChange={set('email')} required />
            <FormInput label="Telegram" id="lab-tg" placeholder="@username" value={form.telegram} onChange={set('telegram')} />
            <FormInput label="Количество рабочих мест" id="lab-seats" type="number" placeholder="5" value={form.seats} onChange={set('seats')} />
            <div>
              <label htmlFor="lab-comment" className="block font-mono text-[10px] text-data/50 uppercase tracking-widest mb-1.5">Комментарий</label>
              <textarea id="lab-comment" placeholder="Расскажите о ваших задачах..." value={form.comment} onChange={set('comment')} rows={3}
                className="w-full px-3 py-2.5 bg-void/60 border border-white/[0.08] rounded-sm text-white text-sm placeholder-data/30 focus:outline-none focus:border-violet/40 transition-all font-mono resize-none" />
            </div>
            <div className="pt-2 flex gap-3">
              <button type="submit" disabled={loading}
                className="group flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border border-cyan/30 text-cyan font-heading font-bold text-sm rounded-sm hover:bg-cyan/10 hover:border-cyan/50 transition-all disabled:opacity-60">
                {loading ? 'Отправка...' : 'Отправить заявку'}
                {!loading && <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />}
              </button>
              <button type="button" onClick={onClose} className="px-5 py-3 border border-white/[0.08] text-data/60 font-mono text-xs rounded-sm hover:border-white/20 hover:text-white transition-all">Закрыть</button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </ModalShell>
  );
}

function ModalShell({ children, onClose, title }) {
  return (
    <AnimatePresence>
      <motion.div key="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
        <div className="absolute inset-0 bg-void/80 backdrop-blur-md" />
        <motion.div initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25 }} onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md bg-navy border border-white/[0.08] rounded-sm shadow-2xl overflow-hidden">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-electric/40 to-transparent" />
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between mb-6">
              <h2 className="font-heading font-black text-lg text-white leading-tight pr-4">{title}</h2>
              <button onClick={onClose} className="w-7 h-7 rounded-sm bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-data/40 hover:text-white hover:bg-white/[0.08] transition-all flex-shrink-0">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            {children}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
