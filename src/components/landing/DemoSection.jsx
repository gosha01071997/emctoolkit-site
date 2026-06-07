import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, CheckCircle, ArrowRight } from 'lucide-react';

// ── Calc logic ────────────────────────────────────────────────────────────────

const DB_FROM_UNITS = [
  { label: 'мкВ (µV)', value: 'uV' },
  { label: 'мВ (mV)',  value: 'mV' },
  { label: 'В (V)',    value: 'V'  },
  { label: 'мА (mA)',  value: 'mA' },
  { label: 'А (A)',    value: 'A'  },
  { label: 'мВт (mW)', value: 'mW' },
  { label: 'Вт (W)',   value: 'W'  },
];
const DB_TO_UNITS = [
  { label: 'дБмкВ (dBµV)', value: 'dBuV' },
  { label: 'дБмВ (dBmV)',  value: 'dBmV' },
  { label: 'дБВ (dBV)',    value: 'dBV'  },
  { label: 'дБм (dBm)',    value: 'dBm'  },
  { label: 'дБВт (dBW)',   value: 'dBW'  },
];

function calcDB(value, from, to) {
  const v = parseFloat(value);
  if (!isFinite(v) || v <= 0) return null;
  // convert to µV first
  const toUV = { uV: 1, mV: 1e3, V: 1e6, mA: 1e3, A: 1e6, mW: 1, W: 1e3 };
  const isVoltage = ['uV','mV','V'].includes(from);
  const isPower   = ['mW','W'].includes(from);
  let dBuV;
  if (isVoltage) {
    dBuV = 20 * Math.log10(v * toUV[from]);
  } else if (isPower) {
    // P → V across 50Ω: V=sqrt(P*50), then dBµV
    const vInUV = Math.sqrt(v * (isPower ? (from === 'mW' ? 1e-3 : 1) : 1) * 50) * 1e6;
    dBuV = 20 * Math.log10(vInUV);
  } else {
    // current: V=I*50, then dBµV
    const vInUV = v * toUV[from] * 50;
    dBuV = 20 * Math.log10(vInUV);
  }
  const convMap = {
    dBuV: 0,
    dBmV: -60,
    dBV:  -120,
    dBm:  dBuV - 107,       // dBm = dBµV - 107 (50Ω)
    dBW:  dBuV - 137,
  };
  if (to === 'dBm')  return dBuV - 107;
  if (to === 'dBW')  return dBuV - 137;
  if (to === 'dBuV') return dBuV;
  if (to === 'dBmV') return dBuV - 60;
  if (to === 'dBV')  return dBuV - 120;
  return null;
}

function calcVSWR(value, type) {
  const v = parseFloat(value);
  if (!isFinite(v)) return null;
  if (type === 'vswr_to_rl') {
    if (v < 1) return null;
    const Γ = (v - 1) / (v + 1);
    return { label: 'Return Loss (дБ)', result: -20 * Math.log10(Γ) };
  }
  if (type === 'rl_to_vswr') {
    if (v <= 0) return null;
    const Γ = Math.pow(10, -v / 20);
    return { label: 'VSWR', result: (1 + Γ) / (1 - Γ) };
  }
  if (type === 'vswr_to_mm') {
    if (v < 1) return null;
    const Γ = (v - 1) / (v + 1);
    return { label: 'Mismatch Loss (дБ)', result: -10 * Math.log10(1 - Γ * Γ) };
  }
  return null;
}

const CABLE_TYPES = [
  { label: 'RG-58 (0.195 дБ/м)',  loss: 0.195 },
  { label: 'RG-213 (0.066 дБ/м)', loss: 0.066 },
  { label: 'LMR-400 (0.022 дБ/м)',loss: 0.022 },
  { label: 'RG-174 (0.49 дБ/м)',  loss: 0.49  },
];

function calcCable(power_dBm, length_m, cableIdx) {
  const p = parseFloat(power_dBm);
  const l = parseFloat(length_m);
  if (!isFinite(p) || !isFinite(l) || l < 0) return null;
  const cable = CABLE_TYPES[cableIdx];
  const totalLoss = cable.loss * l;
  return { power_in: p, loss: totalLoss, power_out: p - totalLoss };
}

const FREQ_BANDS = [
  { label: '30 МГц (IEC 61000-4-3)',  freq_MHz: 30  },
  { label: '80 МГц',                  freq_MHz: 80  },
  { label: '230 МГц',                 freq_MHz: 230 },
  { label: '1 ГГц',                   freq_MHz: 1000},
  { label: '3 ГГц',                   freq_MHz: 3000},
];

function calcField(power_dBm, dist_m, freqIdx, gain_dBi) {
  const p = parseFloat(power_dBm);
  const d = parseFloat(dist_m);
  const g = parseFloat(gain_dBi);
  if (!isFinite(p) || !isFinite(d) || d <= 0 || !isFinite(g)) return null;
  const P_W   = Math.pow(10, (p - 30) / 10);
  const G_lin = Math.pow(10, g / 10);
  // E = sqrt(30 * P * G) / d
  const E_Vm  = Math.sqrt(30 * P_W * G_lin) / d;
  const E_dBuVm = 20 * Math.log10(E_Vm * 1e6);
  return { E_Vm, E_dBuVm };
}

// ── Animated number ───────────────────────────────────────────────────────────

function AnimatedNumber({ value, decimals = 2 }) {
  const [display, setDisplay] = useState(value);
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const fromRef = useRef(value);

  useEffect(() => {
    const from = fromRef.current;
    const to   = value;
    const duration = 600;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startRef.current = null;
    const step = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const progress = Math.min((ts - startRef.current) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setDisplay(from + (to - from) * ease);
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
      else fromRef.current = to;
    };
    rafRef.current = requestAnimationFrame(step);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [value]);

  return <>{display.toFixed(decimals)}</>;
}

// ── Sub-calculators ───────────────────────────────────────────────────────────

function DBCalc() {
  const [val, setVal] = useState('100');
  const [from, setFrom] = useState('uV');
  const [to, setTo]     = useState('dBuV');
  const [result, setResult] = useState(null);

  const run = () => setResult(calcDB(val, from, to));
  const unitLabel = DB_TO_UNITS.find(u => u.value === to)?.label ?? to;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="font-mono text-[10px] uppercase tracking-widest text-data/40 block mb-1.5">Значение</label>
          <input
            type="number"
            value={val}
            onChange={e => setVal(e.target.value)}
            className="w-full bg-void/60 border border-white/[0.08] rounded-sm px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-electric/50 focus:bg-electric/[0.04] transition-all"
          />
        </div>
        <div>
          <label className="font-mono text-[10px] uppercase tracking-widest text-data/40 block mb-1.5">Из единицы</label>
          <select
            value={from}
            onChange={e => setFrom(e.target.value)}
            className="w-full bg-void/60 border border-white/[0.08] rounded-sm px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-electric/50 transition-all appearance-none"
          >
            {DB_FROM_UNITS.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="font-mono text-[10px] uppercase tracking-widest text-data/40 block mb-1.5">В единицу</label>
        <select
          value={to}
          onChange={e => setTo(e.target.value)}
          className="w-full bg-void/60 border border-white/[0.08] rounded-sm px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-electric/50 transition-all appearance-none"
        >
          {DB_TO_UNITS.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
        </select>
      </div>
      <CalcButton onClick={run} />
      <ResultDisplay result={result} unit={unitLabel} />
    </div>
  );
}

function VSWRCalc() {
  const [val, setVal] = useState('2');
  const [type, setType] = useState('vswr_to_rl');
  const [result, setResult] = useState(null);

  const TYPES = [
    { value: 'vswr_to_rl',  label: 'VSWR → Return Loss' },
    { value: 'rl_to_vswr',  label: 'Return Loss → VSWR' },
    { value: 'vswr_to_mm',  label: 'VSWR → Mismatch Loss' },
  ];

  const run = () => {
    const r = calcVSWR(val, type);
    setResult(r ? r.result : null);
  };

  const activeType = TYPES.find(t => t.value === type);
  const placeholder = type === 'vswr_to_rl' || type === 'vswr_to_mm' ? 'VSWR (напр. 2.0)' : 'Return Loss дБ (напр. 10)';
  const unit = type === 'rl_to_vswr' ? '' : 'дБ';

  return (
    <div className="space-y-4">
      <div>
        <label className="font-mono text-[10px] uppercase tracking-widest text-data/40 block mb-1.5">Режим расчёта</label>
        <div className="flex flex-col gap-1.5">
          {TYPES.map(t => (
            <button
              key={t.value}
              onClick={() => { setType(t.value); setResult(null); }}
              className={`text-left px-3 py-2 rounded-sm font-mono text-xs transition-all border ${
                type === t.value
                  ? 'bg-electric/10 border-electric/30 text-electric'
                  : 'border-white/[0.05] text-data/40 hover:text-data/70 hover:border-white/[0.1]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="font-mono text-[10px] uppercase tracking-widest text-data/40 block mb-1.5">Значение</label>
        <input
          type="number"
          value={val}
          placeholder={placeholder}
          onChange={e => setVal(e.target.value)}
          className="w-full bg-void/60 border border-white/[0.08] rounded-sm px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-electric/50 focus:bg-electric/[0.04] transition-all"
        />
      </div>
      <CalcButton onClick={run} />
      <ResultDisplay result={result} unit={unit} decimals={type === 'rl_to_vswr' ? 3 : 2} />
    </div>
  );
}

function CableCalc() {
  const [power, setPower] = useState('20');
  const [length, setLength] = useState('10');
  const [cableIdx, setCableIdx] = useState(0);
  const [result, setResult] = useState(null);

  const run = () => setResult(calcCable(power, length, cableIdx));

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="font-mono text-[10px] uppercase tracking-widest text-data/40 block mb-1.5">Мощность (дБм)</label>
          <input type="number" value={power} onChange={e => setPower(e.target.value)}
            className="w-full bg-void/60 border border-white/[0.08] rounded-sm px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-electric/50 transition-all" />
        </div>
        <div>
          <label className="font-mono text-[10px] uppercase tracking-widest text-data/40 block mb-1.5">Длина (м)</label>
          <input type="number" value={length} onChange={e => setLength(e.target.value)}
            className="w-full bg-void/60 border border-white/[0.08] rounded-sm px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-electric/50 transition-all" />
        </div>
      </div>
      <div>
        <label className="font-mono text-[10px] uppercase tracking-widest text-data/40 block mb-1.5">Тип кабеля</label>
        <select value={cableIdx} onChange={e => setCableIdx(Number(e.target.value))}
          className="w-full bg-void/60 border border-white/[0.08] rounded-sm px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-electric/50 transition-all appearance-none">
          {CABLE_TYPES.map((c, i) => <option key={i} value={i}>{c.label}</option>)}
        </select>
      </div>
      <CalcButton onClick={run} />
      {result && (
        <div className="bg-void/40 border border-white/[0.06] rounded-sm p-4 space-y-2">
          <div className="font-mono text-[10px] uppercase tracking-widest text-data/30 mb-3">Результат</div>
          <div className="flex justify-between">
            <span className="font-mono text-xs text-data/50">Потери кабеля</span>
            <span className="font-mono text-sm text-warning font-semibold">{result.loss.toFixed(2)} дБ</span>
          </div>
          <div className="flex justify-between">
            <span className="font-mono text-xs text-data/50">Мощность на выходе</span>
            <span className="font-mono text-sm text-cyan font-semibold">{result.power_out.toFixed(2)} дБм</span>
          </div>
          <div className="h-px bg-white/[0.04] my-1" />
          <div className="flex justify-between">
            <span className="font-mono text-xs text-data/50">На входе</span>
            <span className="font-mono text-sm text-data/70">{result.power_in.toFixed(2)} дБм</span>
          </div>
        </div>
      )}
    </div>
  );
}

function FieldCalc() {
  const [power, setPower] = useState('30');
  const [dist, setDist]   = useState('3');
  const [gain, setGain]   = useState('0');
  const [freqIdx, setFreqIdx] = useState(0);
  const [result, setResult]   = useState(null);

  const run = () => setResult(calcField(power, dist, freqIdx, gain));

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="font-mono text-[10px] uppercase tracking-widest text-data/40 block mb-1.5">Мощность (дБм)</label>
          <input type="number" value={power} onChange={e => setPower(e.target.value)}
            className="w-full bg-void/60 border border-white/[0.08] rounded-sm px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-electric/50 transition-all" />
        </div>
        <div>
          <label className="font-mono text-[10px] uppercase tracking-widest text-data/40 block mb-1.5">Расстояние (м)</label>
          <input type="number" value={dist} onChange={e => setDist(e.target.value)}
            className="w-full bg-void/60 border border-white/[0.08] rounded-sm px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-electric/50 transition-all" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="font-mono text-[10px] uppercase tracking-widest text-data/40 block mb-1.5">Усиление ант. (дБи)</label>
          <input type="number" value={gain} onChange={e => setGain(e.target.value)}
            className="w-full bg-void/60 border border-white/[0.08] rounded-sm px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-electric/50 transition-all" />
        </div>
        <div>
          <label className="font-mono text-[10px] uppercase tracking-widest text-data/40 block mb-1.5">Частота</label>
          <select value={freqIdx} onChange={e => setFreqIdx(Number(e.target.value))}
            className="w-full bg-void/60 border border-white/[0.08] rounded-sm px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-electric/50 transition-all appearance-none">
            {FREQ_BANDS.map((f, i) => <option key={i} value={i}>{f.label}</option>)}
          </select>
        </div>
      </div>
      <CalcButton onClick={run} />
      {result && (
        <div className="bg-void/40 border border-white/[0.06] rounded-sm p-4 space-y-2">
          <div className="font-mono text-[10px] uppercase tracking-widest text-data/30 mb-3">Напряжённость поля</div>
          <div className="flex items-end gap-2">
            <span className="font-mono text-3xl font-bold text-cyan"><AnimatedNumber value={result.E_dBuVm} /></span>
            <span className="font-mono text-sm text-data/50 mb-1">дБмкВ/м</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-mono text-xs text-data/50">В линейных единицах</span>
            <span className="font-mono text-sm text-data/70">{result.E_Vm.toFixed(4)} В/м</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Shared UI pieces ──────────────────────────────────────────────────────────

function CalcButton({ onClick }) {
  const [pressed, setPressed] = useState(false);
  const handle = () => {
    setPressed(true);
    onClick();
    setTimeout(() => setPressed(false), 300);
  };
  return (
    <motion.button
      onClick={handle}
      whileTap={{ scale: 0.97 }}
      className={`w-full flex items-center justify-center gap-2 py-3 rounded-sm font-heading font-bold text-sm transition-all duration-200 ${
        pressed
          ? 'bg-electric shadow-[0_0_40px_rgba(91,124,255,0.5)] text-white'
          : 'bg-gradient-to-r from-electric to-violet text-white hover:shadow-[0_0_30px_rgba(91,124,255,0.3)] hover:brightness-110'
      }`}
    >
      <Zap className="w-3.5 h-3.5" />
      Рассчитать
    </motion.button>
  );
}

function ResultDisplay({ result, unit, decimals = 2 }) {
  return (
    <AnimatePresence>
      {result !== null && isFinite(result) && (
        <motion.div
          key={result}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-void/40 border border-white/[0.06] rounded-sm p-4"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-data/30 mb-2">Результат</div>
          <div className="flex items-end gap-3">
            <span className="font-mono text-4xl font-bold text-cyan">
              <AnimatedNumber value={result} decimals={decimals} />
            </span>
            <span className="font-mono text-sm text-data/50 mb-1">{unit}</span>
          </div>
        </motion.div>
      )}
      {result !== null && !isFinite(result) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-destructive/10 border border-destructive/20 rounded-sm p-3 font-mono text-xs text-destructive/70"
        >
          Некорректные входные данные. Проверьте значения.
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

const TABS = [
  { id: 'db',    label: 'dB' },
  { id: 'vswr',  label: 'VSWR' },
  { id: 'cable', label: 'Кабель' },
  { id: 'field', label: 'Поле' },
];

const BENEFITS = [
  'Результат мгновенно — без интернета',
  'Все формулы верифицированы по стандартам',
  '16+ калькуляторов в полной версии',
];

export default function DemoSection() {
  const [activeTab, setActiveTab] = useState('db');

  return (
    <section id="demo" className="relative py-24 lg:py-32">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] bg-electric/[0.04] blur-[120px] rounded-full" />
        <div className="absolute w-[400px] h-[300px] bg-violet/[0.03] blur-[100px] rounded-full translate-x-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[11px] text-electric/60 uppercase tracking-widest">[03]</span>
          <div className="h-px w-8 bg-electric/20" />
          <span className="font-mono text-[11px] text-data/30 uppercase tracking-widest">Интерактивное демо</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight leading-[1.05] mb-6">
              Попробуйте{' '}
              <span className="text-gradient-blue">прямо сейчас</span>
            </h2>
            <p className="text-data/55 text-lg leading-relaxed mb-10 max-w-md">
              Реальный калькулятор из приложения. Введите значение и нажмите рассчитать.
            </p>

            <div className="space-y-3 mb-12">
              {BENEFITS.map((b) => (
                <div key={b} className="flex items-center gap-3 px-4 py-3 border border-white/[0.05] rounded-sm bg-navy/20 hover:bg-navy/40 transition-colors">
                  <CheckCircle className="w-4 h-4 text-cyan flex-shrink-0" />
                  <span className="font-mono text-sm text-data/65">{b}</span>
                </div>
              ))}
            </div>

            <a
              href="https://t.me/EMCinstrumentarii"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-warning text-void font-heading font-bold text-sm rounded-sm hover:bg-warning/90 transition-all hover:shadow-[0_0_30px_rgba(242,201,76,0.2)]"
            >
              Получить полный доступ
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Right — desktop window */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Glow behind window */}
            <div className="absolute -inset-4 bg-electric/[0.05] blur-[60px] rounded-2xl pointer-events-none" />

            {/* Window frame */}
            <div className="relative rounded-lg overflow-hidden border border-electric/15 glow-blue backdrop-blur-sm">
              {/* Title bar */}
              <div className="bg-navy/70 backdrop-blur-sm px-4 py-2.5 flex items-center gap-3 border-b border-white/[0.05]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <span className="font-mono text-[10px] text-data/30 ml-1">EMC Toolkit — Калькуляторы</span>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-warning/70 animate-pulse-glow" />
                  <span className="font-mono text-[9px] text-warning/50 uppercase tracking-wider">Offline</span>
                </div>
              </div>

              {/* Tab bar */}
              <div className="bg-navy/50 px-4 pt-3 pb-0 flex gap-1 border-b border-white/[0.04]">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-5 py-2 font-mono text-xs uppercase tracking-widest transition-all duration-200 rounded-t-sm ${
                      activeTab === tab.id
                        ? 'text-white bg-card border-t border-l border-r border-electric/20'
                        : 'text-data/40 hover:text-data/70'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="tab-indicator"
                        className="absolute bottom-0 left-0 right-0 h-px bg-electric"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Calc body */}
              <div className="bg-card/80 backdrop-blur-sm p-5">
                <AnimatePresence mode="wait">
                  {activeTab === 'db' && (
                    <motion.div key="db" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
                      <DBCalc />
                    </motion.div>
                  )}
                  {activeTab === 'vswr' && (
                    <motion.div key="vswr" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
                      <VSWRCalc />
                    </motion.div>
                  )}
                  {activeTab === 'cable' && (
                    <motion.div key="cable" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
                      <CableCalc />
                    </motion.div>
                  )}
                  {activeTab === 'field' && (
                    <motion.div key="field" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
                      <FieldCalc />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}