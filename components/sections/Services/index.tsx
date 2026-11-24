import { Container, Headset, Package, Plane, Ship, TrainFront, Truck, Warehouse } from 'lucide-react';
import type { ServicesSectionData } from '../../types';

const icons = {
  ship: Ship,
  truck: Truck,
  plane: Plane,
  train: TrainFront,
  warehouse: Warehouse,
  package: Package,
  crane: Container,
  headset: Headset,
};

export default function Services({ data }: { data: ServicesSectionData }) {
  return (
    <section id={data.id} className="bg-[#f6f7fb]">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-16">
        <p className="hero-in flex items-center justify-center gap-3 text-sm font-semibold text-[#8d1d2c]">
          <span className="h-[2px] w-8 bg-[#8d1d2c] sm:w-12" />
          {data.eyebrow}
          <span className="h-[2px] w-8 bg-[#8d1d2c] sm:w-12" />
        </p>
        <h2 className="hero-in mt-3 text-center text-3xl font-extrabold text-[#16324f] sm:text-4xl" style={{ animationDelay: '0.08s' }}>
          {data.title}
        </h2>
        <p className="hero-in mx-auto mt-3 max-w-2xl text-center text-sm text-[#5d6b7c] sm:text-base" style={{ animationDelay: '0.14s' }}>
          {data.lead}
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {data.items.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons] ?? Package;
            return (
              <li key={item.title} className="hero-in" style={{ animationDelay: `${0.08 * index}s` }}>
                <a href={item.href} className="group block">
                  <div className="overflow-hidden rounded-[22px]">
                    <img
                      src={item.image}
                      alt={item.image_alt}
                      className="h-44 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-48"
                    />
                  </div>
                  <div className="relative z-10 -mt-7 mx-3 flex items-center gap-3 rounded-2xl bg-white px-3 py-3 shadow-[0_10px_24px_rgba(22,50,79,0.12)] transition duration-300 group-hover:-translate-y-1">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#8d1d2c] text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1 text-[15px] font-bold text-[#16324f]">{item.title}</span>
                    <span className="text-lg font-semibold tracking-tighter text-[#16324f]" aria-hidden>»</span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
