'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about',    label: 'About' },
  { href: '/contact',  label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome   = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [pathname]);

  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-navy-950/95 backdrop-blur-md shadow-navy py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11">
            <Image
              src="/images/cropped-VENE-logo-azul-1-150x150.png"
              alt="Vene Construction"
              fill
              sizes="44px"
              className="object-contain"
            />
          </div>
          <div className="leading-tight">
            <p className="font-serif text-lg font-bold text-white tracking-wide">VENE</p>
            <p className="text-[10px] text-gold-500 tracking-[0.2em] uppercase -mt-0.5">
              Construction
            </p>
          </div>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname.startsWith(href)
                  ? 'text-gold-500 active'
                  : 'text-white/75 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact#quote"
            className="ml-2 px-5 py-2.5 bg-gold-500 text-navy-900 font-bold text-xs tracking-widest uppercase
                       transition-all duration-300 hover:bg-gold-400 hover:shadow-gold active:scale-95"
          >
            Get a Quote
          </Link>
        </nav>

        {/* ── Mobile burger ── */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 text-white"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy-950 border-t border-navy-700 px-6 pb-6 pt-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block py-3 text-white/80 hover:text-gold-500 border-b border-navy-800
                         text-sm tracking-wide transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact#quote"
            className="mt-5 block text-center px-5 py-3 bg-gold-500 text-navy-900
                       font-bold text-xs tracking-widest uppercase"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
