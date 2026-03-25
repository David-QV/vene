'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';

/* ─── Data ────────────────────────────────────────────────────── */
type Category = 'All' | 'Commercial' | 'Remodeling' | 'Tenant Improvements' | 'Residential';

interface Project {
  id: number;
  title: string;
  location: string;
  category: Exclude<Category, 'All'>;
  src: string;
  wide?: boolean;
  tall?: boolean;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Commercial Interior Fit-Out',
    location: 'St. Louis, MO',
    category: 'Tenant Improvements',
    src: '/images/IMG_9796.jpg',
    wide: true,
    year: '2023',
  },
  {
    id: 2,
    title: 'Residential New Build',
    location: 'Clayton, MO',
    category: 'Residential',
    src: '/images/IMG_9621.jpg',
    year: '2022',
  },
  {
    id: 3,
    title: 'Interior Drywall & Finishing',
    location: 'Chesterfield, MO',
    category: 'Remodeling',
    src: '/images/IMG_9925.jpg',
    year: '2023',
  },
  {
    id: 4,
    title: 'Attic Conversion & Drywall',
    location: 'St. Louis, MO',
    category: 'Remodeling',
    src: '/images/IMG_8400.jpg',
    year: '2023',
  },
  {
    id: 5,
    title: 'Commercial Drywall Install',
    location: 'Kirkwood, MO',
    category: 'Commercial',
    src: '/images/IMG_9905.jpg',
    year: '2022',
  },
  {
    id: 6,
    title: 'Custom Staircase Framing',
    location: 'St. Charles, MO',
    category: 'Residential',
    src: '/images/IMG_9581.jpg',
    tall: true,
    year: '2022',
  },
  {
    id: 7,
    title: 'New Construction — Envelope',
    location: 'O\'Fallon, MO',
    category: 'Commercial',
    src: '/images/IMG_9726-copy.jpg',
    year: '2022',
  },
  {
    id: 8,
    title: 'Framing & Insulation Package',
    location: 'Ballwin, MO',
    category: 'Tenant Improvements',
    src: '/images/IMG_9556.jpg',
    year: '2022',
  },
];

const categories: Category[] = ['All', 'Commercial', 'Remodeling', 'Tenant Improvements', 'Residential'];

/* ─── Page ───────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const [active, setActive] = useState<Category>('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-[55vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/IMG_9796.jpg"
            alt="Commercial interior construction projects"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <AnimateOnScroll className="text-center">
            <p className="section-label mb-4">Our Portfolio</p>
            <h1 className="font-serif font-bold text-white text-5xl lg:text-6xl leading-tight mb-5">
              Projects That <span className="text-gold-500">Define Excellence.</span>
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Every project tells a story of craftsmanship, precision, and partnership
              with the businesses and homeowners we serve.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════ FILTER + GRID ══════════ */}
      <section className="bg-navy-950 py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Filter tabs */}
          <AnimateOnScroll className="flex flex-wrap gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  active === cat
                    ? 'bg-gold-500 text-navy-900'
                    : 'border border-white text-white/80 hover:border-gold-500 hover:text-gold-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimateOnScroll>

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-1 sm:gap-5 space-y-1 sm:space-y-5 -mx-6 sm:mx-0">
            {filtered.map((p, i) => (
              <AnimateOnScroll
                key={p.id}
                variant="scale-in"
                delay={i * 60}
                className="break-inside-avoid"
              >
                <div className="project-card group relative overflow-hidden cursor-pointer">
                  <div className={`relative ${p.tall ? 'h-[480px]' : p.wide ? 'h-[320px]' : 'h-[260px]'}`}>
                    <Image
                      src={p.src}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  {/* Hover overlay */}
                  <div className="overlay">
                    <div>
                      <span className="inline-block bg-gold-500 text-navy-900 text-[10px] font-bold tracking-widest uppercase px-2 py-1 mb-3">
                        {p.category}
                      </span>
                      <h3 className="font-serif font-bold text-white text-xl mb-1">{p.title}</h3>
                      <p className="text-white/80 text-sm flex items-center gap-1.5">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {p.location} · {p.year}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-navy-400">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="bg-navy-900 py-20 border-t border-navy-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="section-label mb-4">Start Your Project</p>
            <h2 className="font-serif font-bold text-white text-4xl mb-5">
              Ready to Add Your Project to This Portfolio?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Contact us today for a free consultation and let's discuss how we can
              bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact#quote" className="btn-gold">
                Get a Free Quote
              </Link>
              <Link href="/services" className="btn-outline-white">
                View Our Services
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
