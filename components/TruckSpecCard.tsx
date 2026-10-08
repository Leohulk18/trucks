import { ArrowUpRight, Check } from 'lucide-react';
import { fleet, Language, copy } from '@/data/site';

export default function TruckSpecCard({ language }: { language: Language }) {
  const t = copy[language];
  return (
    <div className="grid gap-8 border border-[#c9c4b9] bg-[#f7f6f2] p-5 md:grid-cols-[.9fr_1.1fr] md:p-8">
      <div>
        <div className="relative h-[270px] overflow-hidden bg-[#d8d2c5] md:h-[380px]">
          <img src={fleet.image} alt="Construction truck concept image" className="image-cover mix-blend-multiply grayscale-[.2]" />
          <div className="absolute left-4 top-4 z-10 bg-[var(--blue)] px-3 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-white">ZOINK / CONCEPT</div>
          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 text-[10px] font-bold uppercase tracking-[.12em] text-white"><span className="h-2 w-2 rounded-full bg-[var(--blue-bright)]" /> Reference image — replace with company photography</div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {['Dump body', 'Rear gate', 'Hydraulics'].map((item, index) => <div key={item} className="relative h-16 overflow-hidden bg-[#d8d2c5]"><img src={['https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80'][index]} alt={`${item} detail concept`} className="image-cover grayscale" /><span className="absolute inset-x-1 bottom-1 text-center text-[8px] font-bold uppercase tracking-widest text-white drop-shadow">{item}</span></div>)}
        </div>
      </div>
      <div>
        <div className="flex items-start justify-between gap-4 border-b border-[#c9c4b9] pb-5"><div><p className="eyebrow text-[#77736b]">Primary configuration</p><h3 className="display mt-2 text-[42px] leading-[.9]">{language === 'es' ? fleet.spanishName : fleet.name}</h3></div><div className="rounded-full border border-[var(--blue)] p-2 text-[var(--blue)]"><ArrowUpRight size={17} /></div></div>
        <div className="mt-4 mb-5 flex gap-2 bg-[#e7e5de] p-3 text-[11px] leading-4 text-[#646159]"><Check size={16} className="mt-0.5 shrink-0 text-[var(--blue)]" /><span>{t.specNote}. “6 × 12” is a working label; confirm the intended body and chassis configuration before publishing specs.</span></div>
        <div>{fleet.details.map(([label, value]) => <div className="spec-row" key={label}><span>{label}</span><span className={value.includes('confirm') || value.includes('Confirm') ? 'text-[#a56820]' : ''}>{value}</span></div>)}</div>
      </div>
    </div>
  );
}
