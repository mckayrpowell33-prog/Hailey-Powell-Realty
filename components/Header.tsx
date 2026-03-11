'use client';

import Link from 'next/link';
import { useState } from 'react';
import LogoBlock from './LogoBlock';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/search-homes', label: 'Search Homes' },
  { href: '/featured-listings', label: 'Featured Listings' },
  { href: '/boise-areas', label: 'Boise Areas' },
  { href: '/about', label: 'About' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-taupe/20 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <LogoBlock compact />
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-brand-forest">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link href="/search-homes" className="rounded-full bg-brand-forest px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-pine">
            Search Homes
          </Link>
        </div>
        <button className="rounded-md border border-brand-taupe/40 p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className="block h-0.5 w-5 bg-brand-forest" />
          <span className="mt-1 block h-0.5 w-5 bg-brand-forest" />
          <span className="mt-1 block h-0.5 w-5 bg-brand-forest" />
        </button>
      </div>
      {open && (
        <div className="border-t border-brand-taupe/20 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-slate-700" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/search-homes" className="mt-1 rounded-full bg-brand-forest px-4 py-2 text-center text-sm font-semibold text-white" onClick={() => setOpen(false)}>
              Search Homes
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
