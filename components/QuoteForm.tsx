'use client';

import { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Language, copy } from '@/data/site';

export default function QuoteForm({ language }: { language: Language }) {
  const [sent, setSent] = useState(false);
  const t = copy[language];
  const labels = language === 'es' ? ['Nombre', 'Empresa', 'Teléfono', 'Correo electrónico', 'Ubicación del proyecto', 'Tipo de material', 'Cantidad estimada', 'Punto de recogida', 'Punto de entrega', 'Fecha solicitada', 'Descripción del proyecto'] : ['Name', 'Company', 'Phone', 'Email', 'Project location', 'Type of material', 'Estimated quantity', 'Pickup location', 'Delivery location', 'Requested date', 'Project description'];
  if (sent) return <div className="flex min-h-[400px] flex-col items-center justify-center border border-[#c9c4b9] bg-[#f7f6f2] p-8 text-center"><CheckCircle2 size={40} className="text-[var(--blue)]" /><h3 className="display mt-6 text-4xl">{language === 'es' ? 'Solicitud recibida.' : 'Request received.'}</h3><p className="mt-3 max-w-sm text-sm text-[#6b6860]">{language === 'es' ? 'Este formulario es un concepto. Conectaremos los datos a tu flujo de contacto cuando la información de ZOINK esté lista.' : 'This form is a concept. Connect the fields to your contact workflow when ZOINK information is ready.'}</p><button onClick={() => setSent(false)} className="mt-7 text-[10px] font-bold uppercase tracking-[.15em] text-[var(--blue)]">Send another request</button></div>;
  return <form className="grid gap-x-8 gap-y-3 border border-[#c9c4b9] bg-[#f7f6f2] p-6 md:grid-cols-2 md:p-8" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
    {labels.map((label, index) => index === labels.length - 1 ? <label key={label} className="md:col-span-2"><span className="eyebrow text-[#77736b]">{label}</span><textarea required className="input min-h-24 resize-y" placeholder={language === 'es' ? 'Cuéntanos lo esencial…' : 'Tell us what matters…'} /></label> : <label key={label} className={index === 4 ? 'md:col-span-2' : ''}><span className="eyebrow text-[#77736b]">{label}</span><input required className="input" type={index === 3 ? 'email' : index === 9 ? 'date' : 'text'} /></label>)}
    <div className="mt-4 flex flex-col items-start justify-between gap-5 border-t border-[#c9c4b9] pt-5 md:col-span-2 md:flex-row md:items-center"><span className="max-w-xs text-[10px] leading-4 text-[#77736b]">{language === 'es' ? 'Al enviar, un miembro del equipo podrá confirmar cobertura, capacidad y próximos pasos.' : 'A member of the team can confirm coverage, capacity, and next steps after submission.'}</span><button className="primary-link flex items-center gap-3" type="submit">{t.submit}<ArrowUpRight size={15} /></button></div>
  </form>;
}
