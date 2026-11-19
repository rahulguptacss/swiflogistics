'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { TeamSectionData } from '../../types';

export default function Team({ data }: { data: TeamSectionData }) {
  const count = data.items.length;
  const [index, setIndex] = useState(0);
  const [motion, setMotion] = useState(true);
  const [busy, setBusy] = useState(false);
  const slides = [...data.items, ...data.items];

  const next = () => {
    if (busy) return;
    setBusy(true);
    setMotion(true);
    setIndex((value) => Math.min(value + 1, count));
  };
  const prev = () => {
    if (busy) return;
    if (index === 0) {
      setMotion(false);
      setIndex(count);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setBusy(true);
          setMotion(true);
          setIndex(count - 1);
        });
      });
      return;
    }
    setBusy(true);
    setMotion(true);
    setIndex((value) => Math.max(value - 1, 0));
  };
  const settle = () => {
    if (index >= count) {
      setMotion(false);
      setIndex(0);
    }
    setBusy(false);
  };

  useEffect(() => {
    const timer = window.setInterval(next, 3000);
    return () => window.clearInterval(timer);
  }, [busy, index, count]);

  return (
    <section id={data.id} className="relative overflow-hidden bg-[#f7f9fc]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle at 20% 40%, #9bb7d4 0 1px, transparent 1.5px), radial-gradient(circle at 70% 30%, #9bb7d4 0 1px, transparent 1.5px)', backgroundSize: '18px 18px' }} />
      <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="hero-in flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#16324f]">
          <span className="h-[3px] w-8 bg-[#8d1d2c]" />
          <span className="h-2 w-2 rounded-full bg-[#8d1d2c]" />
          {data.eyebrow}
        </p>
        <h2 className="hero-in mt-3 text-center text-3xl font-extrabold text-[#16324f] sm:text-4xl" style={{ animationDelay: '0.08s' }}>
          {data.title} <span className="text-[#8d1d2c]">{data.title_accent}</span>
        </h2>
        <p className="hero-in mx-auto mt-3 max-w-2xl text-center text-sm text-[#5c6b7a]" style={{ animationDelay: '0.14s' }}>{data.lead}</p>

        <div className="relative mt-10">
          <button type="button" aria-label={data.prev_label} onClick={prev} className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#8d1d2c] text-white shadow-lg transition hover:scale-105 lg:grid">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="overflow-hidden">
            <ul
              className={`team-track flex ${motion ? 'transition-transform duration-700 ease-in-out' : ''}`}
              style={{ transform: `translateX(calc(${index} * var(--team-step) * -1))` }}
              onTransitionEnd={settle}
            >
              {slides.map((person, slide) => {
                const spot = slide % count;
                const current = index % count;
                const center = (index + 1) % count;
                const featured = spot === current ? 'ring-2 ring-[#8d1d2c] sm:ring-0' : '';
                const centered = spot === center ? 'sm:ring-2 sm:ring-[#8d1d2c]' : '';
                return (
                  <li key={`${person.name}-${slide}`} className="w-full shrink-0 px-2 sm:w-1/3">
                    <article className={`mb-4 overflow-hidden rounded-[24px] bg-white transition duration-500 hover:-translate-y-1 ${featured} ${centered}`}>
                      <img src={person.image} alt={person.image_alt} className="h-52 w-full object-cover object-top transition duration-700 hover:scale-105 sm:h-60" />
                      <div className="px-4 pb-6 pt-4 text-center">
                        <h3 className="text-lg font-bold text-[#16324f]">{person.name}</h3>
                        <p className="mt-1 text-sm text-[#5c6b7a]">{person.role}</p>
                        <span className="mx-auto mt-3 block h-[3px] w-10 rounded-full bg-[#8d1d2c]" />
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
          <button type="button" aria-label={data.next_label} onClick={next} className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#8d1d2c] text-white shadow-lg transition hover:scale-105 lg:grid">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 lg:hidden">
          <button type="button" aria-label={data.prev_label} onClick={prev} className="grid h-10 w-10 place-items-center rounded-full bg-[#8d1d2c] text-white"><ChevronLeft className="h-4 w-4" /></button>
          <button type="button" aria-label={data.next_label} onClick={next} className="grid h-10 w-10 place-items-center rounded-full bg-[#8d1d2c] text-white"><ChevronRight className="h-4 w-4" /></button>
        </div>
        <div className="mt-5 flex justify-center gap-2">
          {data.items.map((person, dot) => (
            <button key={person.name} type="button" aria-label={person.name} onClick={() => { if (busy) return; setMotion(true); setIndex(dot); }} className={`h-2.5 w-2.5 rounded-full transition ${dot === index % count ? 'bg-[#8d1d2c]' : 'bg-[#c5c9d1]'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
