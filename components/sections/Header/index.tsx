'use client';

import { useState } from 'react';
import { Mail, Menu, Phone, X, ArrowRight } from 'lucide-react';
import type { HeaderData, SocialLink } from '../../types';

function SocialIcon({ icon }: { icon: string }) {
  const common = { viewBox: '0 0 24 24', className: 'h-3.5 w-3.5', fill: 'currentColor', 'aria-hidden': true as const };
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
    <div className="flex items-center gap-2">
      {items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          aria-label={item.name}
          target="_blank"
          rel="noreferrer"
          className="grid h-7 w-7 place-items-center rounded-full border border-white/50 text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#8d1d2c]"
        >
          <SocialIcon icon={item.icon} />
        </a>
      ))}
    </div>
  );
}

const arrow = 'polygon(0 0, 82% 0, 100% 50%, 82% 100%, 0 100%)';

export default function Header({ data }: { data: HeaderData }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-[0_8px_24px_rgba(12,35,64,0.12)]">
      <div className="relative bg-white">
        <a
          href="#home"
          className="absolute inset-y-0 left-0 z-20 hidden w-[250px] items-center overflow-hidden bg-[#0b2344] pl-5 pr-10 lg:flex xl:w-[300px] xl:pl-8"
          style={{ clipPath: arrow }}
        >
          <img src={data.logo} alt={data.logo_alt} className="h-[92px] w-auto max-h-full object-contain xl:h-[108px]" />
        </a>

        <div className="header-drop flex items-center justify-between gap-4 bg-[#8d1d2c] px-4 py-2.5 text-white lg:pl-[230px] lg:pr-6 xl:pl-[280px] xl:pr-8">
          <a href="#home" className="lg:hidden">
            <img src={data.logo} alt={data.logo_alt} className="h-14 w-auto" />
          </a>
          <div className="hidden items-center gap-8 pl-10 text-[13px] md:flex xl:pl-16">
            <a href={data.email_href} className="group flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded bg-black/20 transition duration-300 group-hover:scale-105">
                <Mail className="h-4 w-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] text-white/75">{data.mail_label}</span>
                <span className="font-semibold">{data.email}</span>
              </span>
            </a>
            <a href={data.phone_href} className="group flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded bg-black/20 transition duration-300 group-hover:scale-105">
                <Phone className="h-4 w-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] text-white/75">{data.call_label}</span>
                <span className="font-semibold">{data.phone}</span>
              </span>
            </a>
          </div>
          <div className="ml-auto hidden items-center gap-3 text-[13px] sm:flex">
            <span>{data.social_label}</span>
            <Socials items={data.socials} />
          </div>
          <button
            type="button"
            className="ml-auto grid h-10 w-10 place-items-center rounded-md bg-[#0b2344] text-white lg:hidden"
            aria-label={open ? data.close_label : data.menu_label}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div className="hidden items-center justify-end gap-4 px-4 py-3.5 text-[14px] font-medium text-[#243140] lg:flex lg:pl-[230px] lg:pr-6 xl:gap-6 xl:pl-[280px] xl:pr-8 xl:text-[15px]">
          {data.links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link whitespace-nowrap transition-colors duration-200 hover:text-[#8d1d2c]"
              style={{ animation: `header-drop 0.45s ease ${0.04 * index}s both` }}
            >
              {link.name}
            </a>
          ))}
          <a
            href={data.button_href}
            className="group ml-1 inline-flex items-center gap-2 rounded-md bg-[#8d1d2c] px-4 py-2 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#8d1d2c] hover:shadow-lg"
          >
            {data.button_text}
            <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-white lg:hidden ${open ? 'max-h-[80vh] border-t border-black/5' : 'max-h-0'}`}
        style={{ transition: 'max-height 0.35s ease' }}
      >
        <nav className="grid gap-1 px-5 py-4 text-base font-medium">
          {data.links.map((link) => (
            <a key={link.name} href={link.href} className="rounded-md px-2 py-2.5 hover:bg-cream hover:text-[#8d1d2c]" onClick={() => setOpen(false)}>
              {link.name}
            </a>
          ))}
          <a href={data.button_href} onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[#8d1d2c] px-5 py-3 text-sm font-semibold text-white">
            {data.button_text}
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
