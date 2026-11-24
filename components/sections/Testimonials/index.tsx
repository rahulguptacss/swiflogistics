'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import type { TestimonialsSectionData } from '../../types';

const arrow = 'grid h-11 w-11 place-items-center rounded-lg bg-[#16324f] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#8d1d2c]';

export default function Testimonials({ data }: { data: TestimonialsSectionData }) {
  const [index, setIndex] = useState(0);
  const count = data.items.length;
  const go = (step: number) => setIndex((value) => (value + step + count) % count);

  useEffect(() => {
    const timer = window.setInterval(() => go(1), 3000);
    return () => window.clearInterval(timer);
  }, [count]);

  return (
    <section id={data.id} className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-16">
        <h2 className="text-center text-3xl font-extrabold text-[#16324f] sm:text-4xl">
          <span className="mb-3 flex items-center justify-center gap-2">
            <span className="h-[3px] w-8 bg-[#8d1d2c]" />
            <span className="h-2 w-2 rounded-full bg-[#8d1d2c]" />
            <span className="h-[3px] w-8 bg-[#8d1d2c]" />
          </span>
          {data.title} <span className="text-[#8d1d2c]">{data.title_accent}</span>
        </h2>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[280px_1fr]">
          <div className="relative mx-auto w-full max-w-[280px]">
            <span className="absolute -left-4 top-8 h-24 w-16 rounded-3xl bg-[#16324f]" />
            <span className="absolute -bottom-4 -left-3 h-16 w-20 rounded-3xl bg-[#16324f]" />
            <div className="relative h-80 overflow-hidden rounded-[28px]">
              <div className="flex h-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
                {data.items.map((item) => (
                  <img key={item.name} src={item.image} alt={item.image_alt} className="h-80 w-full shrink-0 object-cover" />
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
              {data.items.map((item) => (
                <blockquote key={item.name} className="w-full shrink-0 rounded-[28px] border border-[#eef1f5] bg-white px-6 py-8 sm:px-10">
                  <span className="text-5xl font-serif leading-none text-[#8d1d2c]">{data.quote_mark}</span>
                  <p className="mt-2 text-lg leading-relaxed text-[#24364a] sm:text-xl">{item.quote}</p>
                  <footer className="mt-6 border-l-4 border-[#8d1d2c] pl-4">
                    <p className="font-bold text-[#16324f]">{item.name}</p>
                    <p className="text-sm text-[#5c6b7a]">{item.role}</p>
                  </footer>
                  <div className="mt-3 flex gap-1 pl-4 text-[#e2b007]">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star key={star} className={`h-4 w-4 ${star < item.stars ? 'fill-[#e2b007]' : 'fill-transparent text-[#e2b007]'}`} />
                    ))}
                  </div>
                </blockquote>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button type="button" aria-label={data.prev_label} onClick={() => go(-1)} className={arrow}>
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button type="button" aria-label={data.next_label} onClick={() => go(1)} className={arrow}>
                <ChevronRight className="h-5 w-5" />
              </button>
              <span className="hidden h-[2px] w-16 bg-[#8d1d2c] sm:block" />
              <div className="flex gap-2">
                {data.items.map((person, dot) => (
                  <button key={person.name} type="button" aria-label={person.name} onClick={() => setIndex(dot)} className={`h-12 w-12 overflow-hidden rounded-full border-2 transition ${dot === index ? 'border-[#8d1d2c]' : 'border-transparent opacity-80'}`}>
                    <img src={person.image} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
