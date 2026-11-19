import { Mail, MapPin, Phone } from 'lucide-react';
import type { FooterData, SocialLink } from '../../types';

function SocialIcon({ icon }: { icon: string }) {
  const common = { viewBox: '0 0 24 24', className: 'h-4 w-4', fill: 'currentColor', 'aria-hidden': true as const };
  if (icon === 'facebook') {
    return <svg {...common}><path d="M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>;
  }
  if (icon === 'instagram') {
    return <svg {...common}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>;
  }
  if (icon === 'linkedin') {
    return <svg {...common}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" /></svg>;
  }
  return <svg {...common}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
}

function Socials({ items }: { items: SocialLink[] }) {
  return (
    <div className="flex gap-2">
      {items.map((item) => (
        <a key={item.name} href={item.href} aria-label={item.name} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-md border border-white/40 text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#0c2348]">
          <SocialIcon icon={item.icon} />
        </a>
      ))}
    </div>
  );
}

const heading = 'inline-flex items-center gap-3 bg-[#8d1d2c] px-4 py-2 text-sm font-bold text-white';

export default function Footer({ data }: { data: FooterData }) {
  return (
    <footer className="relative overflow-hidden bg-[#0c2348] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 40%, #7aa0c8 0 1px, transparent 1.6px), radial-gradient(circle at 70% 30%, #7aa0c8 0 1px, transparent 1.6px)', backgroundSize: '22px 22px' }} />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-8 sm:py-10 lg:grid-cols-[1.1fr_0.9fr_1fr]">
        <div>
          <img src={data.logo} alt={data.logo_alt} className="h-16 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80">{data.description}</p>
          <a href={data.phone_href} className="mt-6 inline-flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-md bg-[#8d1d2c]"><Phone className="h-5 w-5" /></span>
            <span>
              <span className="block text-xs text-white/70">{data.call_label}</span>
              <span className="font-bold">{data.phone}</span>
            </span>
          </a>
        </div>
        <div>
          <p className={heading} style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 100%, 0 100%)' }}>
            {data.links_title} <span aria-hidden>{data.link_mark}</span>
          </p>
          <ul className="mt-5 grid gap-3 text-sm">
            {data.links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="inline-flex items-center gap-2 text-white/85 transition hover:text-white">{data.link_mark} {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className={heading} style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 100%, 0 100%)' }}>
            {data.contact_title} <span aria-hidden>{data.link_mark}</span>
          </p>
          <ul className="mt-5 grid gap-4 text-sm">
            <li className="flex gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-[#8d1d2c]"><MapPin className="h-4 w-4" /></span><span className="max-w-[220px] leading-relaxed">{data.address}</span></li>
            <li className="flex items-center gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-[#8d1d2c]"><Mail className="h-4 w-4" /></span><a href={data.email_href}>{data.email}</a></li>
            <li className="flex items-center gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-[#8d1d2c]"><Phone className="h-4 w-4" /></span><a href={data.contact_phone_href}>{data.contact_phone}</a></li>
          </ul>
        </div>
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/30 px-5 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>{data.copyright}</p>
        <Socials items={data.socials} />
      </div>
    </footer>
  );
}
