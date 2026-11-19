import { Monitor, PackageCheck, Ship, Truck } from 'lucide-react';
import type { ProcessSectionData } from '../../types';

const icons = { quote: Monitor, book: PackageCheck, track: Ship, delivery: Truck };

export default function Process({ data }: { data: ProcessSectionData }) {
  return (
    <section id={data.id} className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]" style={{ backgroundImage: 'radial-gradient(#d5dde8 1px, transparent 1px)', backgroundSize: '14px 14px' }} />
      <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="hero-in flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#16324f]">
          <span className="h-[3px] w-8 bg-[#8d1d2c]" />
          <span className="h-2 w-2 rounded-full bg-[#8d1d2c]" />
          {data.eyebrow}
        </p>
        <h2 className="hero-in mt-3 text-center text-3xl font-extrabold text-[#16324f] sm:text-4xl" style={{ animationDelay: '0.08s' }}>
          {data.title} <span className="text-[#8d1d2c]">{data.title_accent}</span>
        </h2>
        <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <span className="pointer-events-none absolute left-[12%] right-[12%] top-12 hidden border-t-2 border-dashed border-[#16324f]/50 lg:block" />
          {data.steps.map((step, index) => {
            const Icon = icons[step.icon as keyof typeof icons] ?? Monitor;
            return (
              <li key={step.number} className="hero-in relative text-center" style={{ animationDelay: `${0.12 * index}s` }}>
                <div className="relative mx-auto h-24 w-24">
                  <span className="grid h-24 w-24 place-items-center rounded-full border border-[#e6eaf0] bg-white text-[#16324f] shadow-[0_8px_24px_rgba(22,50,79,0.06)] transition duration-300 hover:-translate-y-1 hover:scale-105">
                    <Icon className="h-8 w-8" strokeWidth={1.6} />
                  </span>
                  <span className="absolute -right-1 -top-1 grid h-8 w-8 place-items-center rounded-full bg-[#8d1d2c] text-xs font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-bold text-[#16324f]">{step.title}</h3>
                <span className="mx-auto mt-2 block h-[3px] w-8 rounded-full bg-[#8d1d2c]" />
                <p className="mx-auto mt-3 max-w-[220px] text-sm leading-relaxed text-[#5c6b7a]">{step.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
