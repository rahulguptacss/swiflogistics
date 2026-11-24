'use client';

import { useState } from 'react';
import { CircleHelp, Minus, Plus } from 'lucide-react';
import type { FaqSectionData } from '../../types';

export default function Faq({ data }: { data: FaqSectionData }) {
  const [open, setOpen] = useState(0);

  return (
    <section id={data.id} className="bg-white">
      <div className="mx-auto max-w-4xl px-5 py-8 sm:py-16">
        <p className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-[#8d1d2c]">
          <span className="h-[3px] w-8 bg-[#8d1d2c]" />
          <CircleHelp className="h-5 w-5" />
          {data.eyebrow}
          <span className="h-[3px] w-8 bg-[#8d1d2c]" />
        </p>
        <h2 className="mt-3 text-center text-3xl font-extrabold text-[#16324f] sm:text-4xl">
          {data.title} <span className="text-[#8d1d2c]">{data.title_accent}</span>
        </h2>
        <ul className="mt-10 grid gap-3">
          {data.items.map((item, index) => {
            const on = open === index;
            return (
              <li key={item.question} className={`overflow-hidden rounded-2xl transition ${on ? 'bg-white shadow-[0_8px_24px_rgba(22,50,79,0.06)]' : 'bg-[#f4f5f7]'}`}>
                <button type="button" aria-expanded={on} onClick={() => setOpen(on ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-[#16324f]">
                  {item.question}
                  <span className="text-lg font-semibold text-[#8d1d2c]">{on ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}</span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-[#5c6b7a]">{item.answer}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
