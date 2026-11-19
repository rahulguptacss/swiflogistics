'use client';

import { useEffect, useRef, useState } from 'react';
import { Globe, Package, Trophy, Users } from 'lucide-react';
import type { StatsSectionData } from '../../types';

const icons = { package: Package, users: Users, globe: Globe, trophy: Trophy };

function Counter({ value }: { value: string }) {
  const match = value.match(/^([\d,]+)(.*)$/);
  const target = match ? Number(match[1].replace(/,/g, '')) : 0;
  const suffix = match ? match[2] : value;
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;
      const start = performance.now();
      const duration = 1600;
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrent(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{current.toLocaleString('en-US')}{suffix}</span>;
}

export default function Stats({ data }: { data: StatsSectionData }) {
  return (
    <section id={data.id} className="bg-white">
      <div className="mx-auto max-w-6xl px-5 pb-12 pt-2 sm:px-8 sm:pb-16 sm:pt-4">
        <div className="relative overflow-hidden rounded-[28px]">
          <img src={data.image} alt={data.image_alt} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[#0c2348]/55" />
          <ul className="relative grid grid-cols-2 gap-3 p-3 sm:gap-4 sm:p-6 lg:grid-cols-4 lg:p-8">
            {data.items.map((item) => {
              const Icon = icons[item.icon as keyof typeof icons] ?? Package;
              return (
                <li key={item.label} className="flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-3 py-4 text-white backdrop-blur-md sm:gap-4 sm:px-4 sm:py-5">
                  <Icon className="h-8 w-8 shrink-0 text-[#8d1d2c]" />
                  <span className="h-10 w-px bg-white/40" />
                  <span>
                    <span className="block text-lg font-bold leading-none sm:text-2xl"><Counter value={item.value} /></span>
                    <span className="mt-1 block text-xs text-white/85 sm:text-sm">{item.label}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
