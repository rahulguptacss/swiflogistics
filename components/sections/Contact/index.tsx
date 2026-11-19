'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Box, ChevronDown, Mail, MessageCircle, Phone, Truck, User } from 'lucide-react';
import type { ContactSectionData } from '../../types';

const field = 'flex h-12 items-center gap-3 rounded-xl border border-[#d9dee7] bg-white px-4 text-sm text-[#16324f]';

export default function Contact({ data }: { data: ContactSectionData }) {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState('');
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!box.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <section id={data.id} className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-[#16324f]">
          <span className="h-[3px] w-8 bg-[#8d1d2c]" />
          <Truck className="h-4 w-4 text-[#8d1d2c]" />
          {data.eyebrow}
          <span className="h-[3px] w-8 bg-[#8d1d2c]" />
        </p>
        <h2 className="mt-3 text-center text-3xl font-extrabold text-[#16324f] sm:text-4xl">
          {data.title} <span className="text-[#8d1d2c]">{data.title_accent}</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#5c6b7a]">{data.lead}</p>
        <span className="mx-auto mt-3 block h-[3px] w-12 rounded-full bg-[#8d1d2c]" />

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative pb-16 sm:pb-20">
            <img src={data.image} alt={data.image_alt} className="aspect-[5/4] w-[84%] rounded-[28px] object-cover" />
            <img src={data.side_image} alt={data.side_alt} className="absolute bottom-0 right-0 aspect-[4/3] w-[52%] rounded-[22px] border-[6px] border-white object-cover shadow-lg" />
          </div>

          <form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="rounded-[28px] border border-[#8d1d2c]/40 p-5 sm:p-7">
            <h3 className="text-center text-2xl font-extrabold text-[#16324f]">{data.form_title}</h3>
            <span className="mx-auto mt-2 block h-[3px] w-16 rounded-full bg-[#8d1d2c]" />
            {sent ? <p className="mt-8 text-center font-semibold text-[#8d1d2c]">{data.success_message}</p> : (
              <div className="mt-6 grid gap-3">
                <label className={field}><User className="h-4 w-4 text-[#8d1d2c]" /><input required placeholder={data.name_placeholder} className="h-full w-full bg-transparent outline-none" /></label>
                <label className={field}><Mail className="h-4 w-4 text-[#8d1d2c]" /><input required type="email" placeholder={data.email_placeholder} className="h-full w-full bg-transparent outline-none" /></label>
                <label className={field}><Phone className="h-4 w-4 text-[#8d1d2c]" /><input required placeholder={data.phone_placeholder} className="h-full w-full bg-transparent outline-none" /></label>
                <div ref={box} className="relative">
                  <button type="button" className={`${field} w-full text-left`} onClick={() => setOpen((value) => !value)} aria-expanded={open}>
                    <Box className="h-4 w-4 shrink-0 text-[#8d1d2c]" />
                    <span className={`flex-1 ${service ? 'text-[#16324f]' : 'text-[#8b97a6]'}`}>{service || data.service_placeholder}</span>
                    <ChevronDown className={`h-4 w-4 text-[#8d1d2c] transition ${open ? 'rotate-180' : ''}`} />
                  </button>
                  <input required value={service} readOnly className="sr-only" tabIndex={-1} aria-hidden />
                  {open ? (
                    <ul className="absolute z-20 mt-2 max-h-56 w-full overflow-auto rounded-xl border border-[#d9dee7] bg-white py-1 shadow-lg">
                      {data.services.map((option) => (
                        <li key={option}>
                          <button
                            type="button"
                            className={`w-full px-4 py-2.5 text-left text-sm transition ${option === service ? 'bg-[#8d1d2c] text-white' : 'text-[#16324f] hover:bg-[#f6f1f2]'}`}
                            onClick={() => { setService(option); setOpen(false); }}
                          >
                            {option}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                <label className="flex items-start gap-3 rounded-xl border border-[#d9dee7] px-4 py-3 text-sm">
                  <MessageCircle className="mt-0.5 h-4 w-4 text-[#8d1d2c]" />
                  <textarea required placeholder={data.message_placeholder} className="min-h-24 w-full resize-none bg-transparent outline-none" />
                </label>
                <button type="submit" className="mt-2 flex h-12 items-center justify-center gap-3 rounded-xl bg-[#8d1d2c] text-sm font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5">
                  {data.button_text}
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-white text-[#8d1d2c]"><ArrowRight className="h-4 w-4" /></span>
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
