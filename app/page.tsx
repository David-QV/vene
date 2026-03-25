import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { CounterAnimation } from '@/components/CounterAnimation';

export const metadata: Metadata = {
  title: 'Vene Construction | Commercial Construction & Remodeling St. Louis',
  description:
    'St. Louis premier commercial contractor. New construction, commercial remodeling, tenant improvements & drywall. Licensed, insured, 10+ years of excellence.',
};

/* ─── Data ────────────────────────────────────────────────────── */
const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Commercial Construction',
    desc:  'Full-scale new construction for offices, retail spaces, warehouses, and commercial facilities — built to last.',
    href:  '/services#commercial-construction',
    primary: true,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: 'Commercial Remodeling',
    desc:  'Transform your existing commercial space. Office renovations, retail refreshes, and complete gut renovations.',
    href:  '/services#remodeling',
    primary: true,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Tenant Improvements',
    desc:  'Custom space fit-outs for new tenants — from raw shell to move-in ready. Fast, professional, and on budget.',
    href:  '/services#tenant-improvements',
    primary: true,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Residential Services',
    desc:  'Quality home additions, remodels, and new construction with the same commitment to excellence.',
    href:  '/services#residential',
    primary: false,
  },
];

const projects = [
  { src: '/images/IMG_9796.jpg', title: 'Commercial Interior Fit-Out', cat: 'Tenant Improvements', wide: true },
  { src: '/images/IMG_8400.jpg', title: 'Attic Conversion & Drywall', cat: 'Residential', wide: false },
  { src: '/images/IMG_9621.jpg', title: 'New Commercial Build', cat: 'Commercial Construction', wide: false },
  { src: '/images/IMG_9925.jpg', title: 'Interior Drywall & Finishing', cat: 'Drywall & Interior', wide: false },
  { src: '/images/IMG_9556.jpg', title: 'Framing & Insulation Package', cat: 'Tenant Improvements', wide: false },
];

const pillars = [
  {
    number: '01',
    title: 'Decade of Experience',
    desc:  'Over 10 years delivering commercial and residential projects across Missouri with proven results.',
  },
  {
    number: '02',
    title: 'On Time, On Budget',
    desc:  'We respect your timeline and investment. Clear communication from bid to final walk-through.',
  },
  {
    number: '03',
    title: 'Licensed & Insured',
    desc:  'Full licensing, bonding, and insurance for your complete peace of mind on every project.',
  },
  {
    number: '04',
    title: 'Minimal Disruption',
    desc:  'We plan around your business operations to keep downtime low while quality stays high.',
  },
];

const testimonials = [
  {
    quote: 'Vene Construction transformed our office space beyond expectations. Professional team, immaculate finish, and they delivered two weeks ahead of schedule.',
    author: 'Robert M.',
    role:   'Office Manager, Topeka',
  },
  {
    quote: 'We hired them for our retail fit-out and could not be happier. They understood our vision perfectly and executed it flawlessly.',
    author: 'Lisa T.',
    role:   'Retail Owner, St. Louis, MO',
  },
  {
    quote: 'Outstanding quality. Our warehouse renovation was done with zero disruption to our operations. Will hire again without hesitation.',
    author: 'Carlos A.',
    role:   'Operations Director',
  },
];

/* ─── Page ───────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-interior.webp"
            alt="Commercial interior framing construction"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-navy-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/30" />
        </div>

        {/* Decorative grid lines */}
        <div className="absolute inset-0 z-0 opacity-5"
          style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-36 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 px-4 py-2 mb-8 animate-fade-up">
              <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
              <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
                <span className="block sm:inline">St. Louis, MO</span>
                <span className="hidden sm:inline"> · </span>
                <span className="block sm:inline">Licensed &amp; Insured · 10+ Years</span>
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-serif font-bold text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6 animate-fade-up"
              style={{ animationDelay: '100ms' }}
            >
              Building the Spaces
              <span className="block text-gold-500">Where Business</span>
              <span className="block">Thrives.</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto animate-fade-up"
              style={{ animationDelay: '200ms' }}
            >
              Commercial construction, expert remodeling, and tenant improvements —
              delivered on time and on budget across Missouri.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap justify-center gap-4 animate-fade-up"
              style={{ animationDelay: '300ms' }}
            >
              <Link href="/projects" className="btn-gold">
                View Our Work
              </Link>
              <Link href="/contact#quote" className="btn-outline-white">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold-500 to-transparent animate-scroll-bounce" />
        </div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <section className="bg-navy-900 border-y border-navy-700 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-navy-700">
            {[
              { label: 'Years in Business',    end: 10,  suffix: '+' },
              { label: 'Projects Completed',   end: 200, suffix: '+' },
              { label: 'Client Satisfaction',  end: 100, suffix: '%' },
              { label: 'States Served',        end: 3,   suffix: '+' },
            ].map(({ label, end, suffix }, i) => (
              <AnimateOnScroll key={label} variant="fade-up" delay={i * 120} className="text-center lg:px-8">
                <div className="stat-number text-5xl lg:text-6xl">
                  <CounterAnimation end={end} suffix={suffix} />
                </div>
                <p className="text-white/80 text-sm mt-2 tracking-wide">{label}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section className="section-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll className="mb-16 max-w-2xl mx-auto text-center">
            <p className="section-label mb-3">What We Do</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
              Built for Every Space.
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mt-5 mx-auto" />
            <p className="text-navy-600 mt-5 text-lg leading-relaxed">
              From large-scale commercial builds and tenant improvements to residential
              remodels — we bring the same dedication to quality to every project.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon, title, desc, href, primary }, i) => (
              <AnimateOnScroll key={title} variant="fade-up" delay={i * 100}>
                <Link
                  href={href}
                  className="group service-card block p-8 h-full border-navy-700"
                >
                  <div className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-[9px] font-bold tracking-widest uppercase px-2 py-1">
                    {primary ? 'Commercial' : 'Residential'}
                  </div>
                  <div className="mb-5 text-gold-500 transition-colors duration-300">
                    {icon}
                  </div>
                  <h3 className="font-serif font-bold text-white text-xl mb-3">{title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">{desc}</p>
                  <span className="text-gold-500 text-xs font-semibold tracking-widest uppercase
                                   flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FEATURED PROJECTS ══════════ */}
      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <AnimateOnScroll>
              <p className="section-label mb-3">Portfolio</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight">
                Our Work Speaks <span className="text-gold-500">for Itself.</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold-500 mt-5" />
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-left">
              <Link href="/projects" className="btn-outline-white shrink-0">
                View All Projects
              </Link>
            </AnimateOnScroll>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-5 auto-rows-[280px] -mx-6 md:mx-0">
            {projects.map(({ src, title, cat, wide }, i) => (
              <AnimateOnScroll
                key={title}
                variant="scale-in"
                delay={i * 100}
                className={`project-card relative overflow-hidden cursor-pointer ${
                  wide ? 'lg:col-span-2' : ''
                }`}
              >
                <Image
                  src={src}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
                />
                <div className="overlay">
                  <p className="text-gold-500 text-xs font-semibold tracking-widest uppercase mb-2">{cat}</p>
                  <h3 className="font-serif font-bold text-white text-xl">{title}</h3>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WHY CHOOSE US ══════════ */}
      <section className="section-light py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text side */}
            <div>
              <AnimateOnScroll variant="fade-right">
                <p className="section-label mb-3">Why Vene</p>
                <h2 className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-5">
                  The Standard You Deserve.
                </h2>
                <div className="w-16 h-0.5 bg-gold-500 mb-8" />
              </AnimateOnScroll>

              <div className="grid sm:grid-cols-2 gap-6">
                {pillars.map(({ number, title, desc }, i) => (
                  <AnimateOnScroll key={number} variant="fade-up" delay={i * 100}>
                    <div className="group p-6 border border-navy-100 hover:border-gold-500
                                    hover:shadow-gold-sm transition-all duration-400">
                      <span className="font-serif text-3xl font-bold text-gold-500/30 group-hover:text-gold-500
                                       transition-colors duration-300 block mb-3">
                        {number}
                      </span>
                      <h3 className="font-serif font-bold text-navy-900 text-lg mb-2">{title}</h3>
                      <p className="text-navy-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>

            {/* Image side */}
            <AnimateOnScroll variant="fade-left" className="relative">
              <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
                <Image
                  src="/images/IMG_9905.jpg"
                  alt="Commercial interior construction quality"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy-950/30 to-transparent" />
                {/* Floating badge */}
                <div className="absolute bottom-8 left-8 bg-navy-900/90 backdrop-blur-sm border border-gold-500/30 p-5">
                  <p className="text-gold-500 font-serif text-3xl font-bold">10+</p>
                  <p className="text-white text-sm mt-1">Years of Excellence</p>
                </div>
              </div>
              {/* Gold accent border */}
              <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border-2 border-gold-500/20 -z-10" />
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section className="bg-navy-900 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll className="text-center mb-16">
            <p className="section-label mb-3">Client Stories</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight">
              Trusted by Businesses <span className="text-gold-500">Across Missouri.</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mt-5 mx-auto" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(({ quote, author, role }, i) => (
              <AnimateOnScroll key={author} variant="fade-up" delay={i * 130}>
                <div className="relative bg-white border border-navy-100 p-8 h-full
                                hover:border-gold-500/50 hover:shadow-gold-sm transition-all duration-400 group">
                  {/* Quote icon */}
                  <svg className="w-8 h-8 text-gold-500/40 group-hover:text-gold-500/70 transition-colors duration-300 mb-5"
                    fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-navy-700 text-sm leading-relaxed mb-6 italic">"{quote}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 bg-gold-500/20 border border-gold-500/30 flex items-center justify-center">
                      <span className="text-gold-500 font-bold text-sm">{author[0]}</span>
                    </div>
                    <div>
                      <p className="text-navy-900 font-semibold text-sm">{author}</p>
                      <p className="text-navy-500 text-xs">{role}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA BANNER ══════════ */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/12771407/pexels-photo-12771407.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Commercial interior construction space"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="section-label mb-4">Start Your Project</p>
            <h2 className="font-serif font-bold text-white text-4xl lg:text-6xl leading-tight mb-6">
              Ready to Transform Your{' '}
              <span className="text-gold-500">Business Space?</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Get your free, no-obligation consultation. We'll review your project,
              budget, and timeline — and give you a clear path forward.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact#quote" className="btn-gold">
                Get a Free Quote
              </Link>
              <a href="tel:7854730596" className="btn-outline-white">
                Call (785) 473-0596
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
