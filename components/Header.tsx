'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { company, copy, Language } from '@/data/site';

export default function Header({ language, setLanguage }: { language: Language; setLanguage: (language: Language) => void }) {
  const [open, setOpen] = useState(false);
  const t = copy[language];
  const ids = ['home', 'fleet', 'services', 'about', 'el-salvador', 'projects', 'contact'];

  return (
    <header className="absolute left-0 right-0 top-0 z-30 border-b border-white/15 text-white">
      <div className="section-wrap flex h-[76px] items-center justify-between gap-6">
        <a href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center bg-[var(--blue)] text-[13px] font-black tracking-[-.08em]">ZK</span>
          <span className="display text-[25px] leading-none tracking-[-.04em]">{company.name}</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {t.nav.map((label, index) => <a key={label} href={`#${ids[index]}`} className="text-[10px] font-bold uppercase tracking-[.12em] text-white/75 transition hover:text-white">{label}</a>)}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden border border-white/30 p-1 sm:flex">
            {(['en', 'es'] as Language[]).map((item) => <button key={item} onClick={() => setLanguage(item)} className={`px-2 py-1 text-[10px] font-bold uppercase tracking-widest ${language === item ? 'bg-white text-[var(--ink)]' : 'text-white/70'}`}>{item}</button>)}
          </div>
          <a href="#contact" className="hidden bg-[var(--blue)] px-4 py-3 text-[10px] font-bold uppercase tracking-[.12em] transition hover:bg-[#3e8fd9] sm:block">{t.requestQuote}</a>
          <button className="lg:hidden" aria-label="Open menu" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>
      {open && <div className="absolute left-0 right-0 top-[76px] border-b border-white/15 bg-[var(--charcoal)] p-5 lg:hidden"><nav className="grid gap-4">{t.nav.map((label, index) => <a key={label} href={`#${ids[index]}`} onClick={() => setOpen(false)} className="text-xs font-bold uppercase tracking-[.14em] text-white/80">{label}</a>)}</nav><div className="mt-5 flex items-center gap-3 border-t border-white/15 pt-4 sm:hidden">{(['en', 'es'] as Language[]).map((item) => <button key={item} onClick={() => setLanguage(item)} className={`px-2 py-1 text-[10px] font-bold uppercase tracking-widest ${language === item ? 'bg-white text-[var(--ink)]' : 'text-white/70'}`}>{item}</button>)}</div></div>}
    </header>
  );
}
