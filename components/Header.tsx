'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navigation, siteConfig } from '@/lib/site-data';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container-wrap flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-700 text-white font-bold">
            CI
          </div>
          <div className="leading-tight">
            <div className="text-lg font-bold text-slate-900">{siteConfig.name}</div>
            <div className="text-[10px] sm:text-xs text-slate-500">{siteConfig.tagline}</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-brand-700 transition"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/admin/login" className="text-sm font-medium text-slate-500 hover:text-brand-700 transition">
            Login
          </Link>
          <Link href="/admission" className="btn-primary !py-2 !px-4 !text-sm">
            Enroll Now
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="container-wrap py-3 flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md text-slate-700 hover:bg-brand-50 hover:text-brand-700"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/admin/login"
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded-md text-slate-500 hover:bg-slate-100"
            >
              Admin Login
            </Link>
            <Link
              href="/admission"
              onClick={() => setOpen(false)}
              className="mt-2 btn-primary"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
