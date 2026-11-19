import { Boxes, Headset, Package, ShieldCheck, Truck, Users, CircleDollarSign } from 'lucide-react';
import type { PartnerSectionData } from '../../types';

const icons = {
  truck: Truck,
  shield: ShieldCheck,
  boxes: Boxes,
  users: Users,
  coins: CircleDollarSign,
  headset: Headset,
};

export default function Partner({ data }: { data: PartnerSectionData }) {
  return (
    <section id={data.id} className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-4 pt-12 sm:px-8 sm:pb-6 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="hero-in flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#16324f]">
            <span className="h-[3px] w-7 bg-[#8d1d2c]" />
            {data.eyebrow}
          </p>
          <h2 className="hero-in mt-4 text-3xl font-extrabold leading-tight text-[#16324f] sm:text-4xl" style={{ animationDelay: '0.08s' }}>
            {data.title}
            <span className="block text-[#8d1d2c]">{data.title_accent}</span>
          </h2>
          <p className="hero-in mt-4 max-w-xl text-sm leading-relaxed text-[#3d4d60] sm:text-base" style={{ animationDelay: '0.16s' }}>
            {data.text}
          </p>
          <ul className="mt-8 grid sm:grid-cols-3">
            {data.points.map((point, index) => {
              const Icon = icons[point.icon as keyof typeof icons] ?? Package;
              const edge = index % 3 === 2 ? '' : 'sm:border-r sm:border-[#e6e8ee]';
              const row = index < 3 ? 'border-b border-[#e6e8ee]' : '';
              return (
                <li key={point.title} className={`hero-in px-4 py-5 ${edge} ${row}`} style={{ animationDelay: `${0.08 * index}s` }}>
                  <span className="grid h-12 w-12 place-items-center rounded-xl text-white" style={{ background: point.color }}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="mt-3 block text-sm font-bold text-[#16324f]">{point.title}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-[#5c6b7a]">{point.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hero-in relative" style={{ animationDelay: '0.2s' }}>
          <img src={data.image} alt={data.image_alt} className="h-[420px] w-full rounded-[28px] object-cover sm:h-[520px]" />
          <div className="absolute bottom-8 left-0 top-8 flex w-12 flex-col items-center justify-between rounded-r-xl bg-[#8d1d2c] py-4 text-white sm:w-14">
            <Package className="h-5 w-5" />
            <span className="h-8 w-px bg-white/70" />
            <span className="text-[11px] font-semibold tracking-wide [writing-mode:vertical-rl] rotate-180">{data.ribbon}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
