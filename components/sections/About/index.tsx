import { Truck } from 'lucide-react';
import type { AboutSectionData } from '../../types';

export default function About({ data }: { data: AboutSectionData }) {
  return (
    <section id={data.id} className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.86fr_1.14fr]">
        <img
          src={data.image}
          alt={data.image_alt}
          className="hero-in h-72 w-full rounded-[28px] object-cover sm:h-[420px]"
        />
        <div className="relative">
          <p className="hero-in flex items-center gap-3 text-sm font-semibold text-[#8d1d2c]" style={{ animationDelay: '0.1s' }}>
            <span className="h-[2px] w-8 bg-[#8d1d2c]" />
            {data.eyebrow}
          </p>
          <h2 className="hero-in mt-4 text-3xl font-bold leading-tight text-[#16324f] sm:text-4xl lg:text-[42px]" style={{ animationDelay: '0.18s' }}>
            {data.title}
            <span className="block text-[#8d1d2c]">{data.title_accent}</span>
          </h2>
          <p className="hero-in mt-4 max-w-xl text-[15px] leading-relaxed text-[#24364a]" style={{ animationDelay: '0.28s' }}>
            {data.text}
          </p>
          <div className="hero-in mt-8 hidden justify-end md:flex lg:mt-4" style={{ animationDelay: '0.38s' }}>
            <div className="w-48 text-center">
              <div className="relative mx-auto h-28 w-40">
                <svg viewBox="0 0 160 110" className="absolute inset-0 h-full w-full text-[#8d1d2c]" aria-hidden>
                  {[-62, -44, -26, -10].map((angle) => (
                    <ellipse key={`l${angle}`} cx="18" cy="72" rx="11" ry="4.2" fill="currentColor" transform={`rotate(${angle} 80 78)`} />
                  ))}
                  {[62, 44, 26, 10].map((angle) => (
                    <ellipse key={`r${angle}`} cx="142" cy="72" rx="11" ry="4.2" fill="currentColor" transform={`rotate(${angle} 80 78)`} />
                  ))}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
                  <Truck className="h-6 w-6 text-[#8d1d2c]" />
                  <p className="mt-1 text-4xl font-extrabold leading-none tracking-tight text-[#16324f]">{data.badge_value}</p>
                </div>
              </div>
              <p className="relative z-10 -mt-2 inline-block bg-[#8d1d2c] px-4 py-1.5 text-[11px] font-semibold tracking-wide text-white shadow-sm" style={{ clipPath: 'polygon(10px 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 10px 100%, 0 50%)' }}>
                {data.badge_label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
