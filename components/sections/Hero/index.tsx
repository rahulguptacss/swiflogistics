import type { HeroSectionData } from '../../types';

export default function Hero({ data }: { data: HeroSectionData }) {
  return (
    <section id={data.id}>
      <div className="relative h-[68svh] min-h-[320px] overflow-hidden lg:h-[calc(100svh-7.25rem)]">
        <img
          src={data.image}
          alt={data.image_alt}
          className="hero-zoom absolute inset-0 h-full w-full object-cover object-[72%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#083e86_0%,#083e86_32%,rgba(8,62,134,0.72)_48%,rgba(8,62,134,0.15)_68%,transparent_82%)]" />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 py-14 sm:px-8">
          <div className="max-w-xl text-white">
            <p className="hero-in flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm">
              <span className="h-[3px] w-8 bg-[#8d1d2c]" />
              {data.eyebrow}
            </p>
            <h1 className="hero-in mt-4 font-medium italic leading-tight" style={{ animationDelay: '0.12s' }}>
              <span className="block text-4xl sm:text-5xl lg:text-6xl">{data.title}</span>
              <span className="hero-banner mt-3 inline-block bg-[#8d1d2c] px-4 py-1.5 text-3xl sm:px-6 sm:text-5xl lg:text-6xl" style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 0 100%)' }}>
                {data.title_highlight}
              </span>
            </h1>
            <p className="hero-in mt-6 max-w-md text-sm leading-relaxed text-white/90 sm:text-base" style={{ animationDelay: '0.35s' }}>
              {data.lead}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
