import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { CounterAnimation } from '@/components/CounterAnimation';

export const metadata: Metadata = {
  title: 'About Us | Vene Construction',
  description:
    'Learn about Vene Construction — 10+ years of commercial and residential construction excellence in St. Louis, MO. Our story, mission, and values.',
};

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Uncompromising Quality',
    desc:  'We never cut corners. Every project is executed with precision and the highest quality materials, because your space deserves nothing less.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'True Partnership',
    desc:  'We work alongside you, not just for you. Open communication, transparent pricing, and genuine collaboration from day one to completion.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Reliability & Integrity',
    desc:  'When we make a commitment, we keep it. Schedules, budgets, and promises — we hold ourselves to a standard others only talk about.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Innovation & Craft',
    desc:  'We stay current with the latest construction techniques and materials, combining modern expertise with proven craftsmanship.',
  },
];

const certifications = [
  'General Contractor License',
  'Fully Bonded & Insured',
  'OSHA Certified Workforce',
  'Missouri Licensed Contractor',
];

/* ─── Page ───────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-[55vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/12992734/pexels-photo-12992734.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Commercial construction workers"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <AnimateOnScroll className="text-center">
            <p className="section-label mb-4">Our Story</p>
            <h1 className="font-serif font-bold text-white text-5xl lg:text-6xl leading-tight mb-5">
              Built on Trust. <br />
              <span className="text-gold-500">Defined by Excellence.</span>
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              More than a decade of transforming visions into concrete reality —
              one commercial project at a time.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════ OUR STORY ══════════ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <AnimateOnScroll variant="fade-right">
              <p className="inline-block bg-gold-500 text-navy-900 text-xs font-bold tracking-widest uppercase px-3 py-1 mb-3">Who We Are</p>
              <h2 className="font-serif font-bold text-navy-900 text-4xl lg:text-5xl leading-tight mb-5">
                More Than a Decade of Building Excellence
              </h2>
              <div className="w-16 h-0.5 bg-gold-500 mb-7" />
              <div className="space-y-5 text-navy-600 leading-relaxed">
                <p>
                  Vene Construction was founded with a single, clear purpose: to deliver
                  commercial construction services that businesses in St. Louis could truly
                  depend on. With over 10 years in the industry, we've built our reputation
                  project by project, earning the trust of business owners, property managers,
                  and developers across the region.
                </p>
                <p>
                  Our team is composed of highly trained craftsmen and project managers who
                  bring expertise, professionalism, and genuine care to every engagement.
                  We understand that commercial construction isn't just about building — it's
                  about enabling your business to succeed.
                </p>
                <p>
                  From a small tenant improvement to a full commercial build, we bring the
                  same level of dedication and precision to every project, regardless of size.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-2 px-4 py-2 border border-navy-100 bg-navy-50">
                    <svg className="w-4 h-4 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy-700 text-xs font-semibold">{cert}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-left" className="relative">
              <Image
                src="/images/who-are-we_-1.png"
                alt="Who are we — Vene Construction"
                width={800}
                height={800}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Floating stat card */}
              <div className="hidden lg:block absolute -bottom-6 -left-6 bg-navy-900 border border-navy-700 p-6 shadow-navy">
                <p className="font-serif font-bold text-gold-500 text-4xl">10+</p>
                <p className="text-white text-sm mt-1">Years of Experience</p>
                <p className="text-white/70 text-xs mt-0.5">Serving St. Louis & Beyond</p>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <section className="bg-navy-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-navy-700">
            {[
              { label: 'Years in Business',     end: 10,  suffix: '+' },
              { label: 'Projects Completed',    end: 200, suffix: '+' },
              { label: 'Satisfied Clients',     end: 100, suffix: '%' },
              { label: 'Skilled Crew Members',  end: 15,  suffix: '+' },
            ].map(({ label, end, suffix }, i) => (
              <AnimateOnScroll key={label} variant="fade-up" delay={i * 100} className="text-center lg:px-8">
                <div className="stat-number text-5xl lg:text-6xl">
                  <CounterAnimation end={end} suffix={suffix} />
                </div>
                <p className="text-white/70 text-sm mt-2">{label}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ VALUES ══════════ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll className="text-center mb-16 max-w-2xl mx-auto">
            <p className="inline-block bg-gold-500 text-navy-900 text-xs font-bold tracking-widest uppercase px-3 py-1 mb-3">What Drives Us</p>
            <h2 className="font-serif font-bold text-navy-900 text-4xl lg:text-5xl">
              Our Core Values
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mt-5 mx-auto" />
            <p className="text-navy-600 mt-5 text-lg">
              The principles that guide every decision, every project, and every relationship
              we build with our clients.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:grid-rows-2">
            {values.map(({ icon, title, desc }, i) => (
              <AnimateOnScroll key={title} variant="fade-up" delay={i * 100} className="h-full">
                <div className="flex gap-6 p-8 border border-navy-100 hover:border-gold-500/50
                                hover:shadow-gold-sm transition-all duration-400 group h-full">
                  <div className="text-gold-500 shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110">
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-navy-900 text-xl mb-3">{title}</h3>
                    <p className="text-navy-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TEAM PHOTO ══════════ */}
      <section className="bg-navy-900 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll variant="fade-left">
              <p className="section-label mb-3">Our Team</p>
              <h2 className="font-serif font-bold text-white text-4xl lg:text-5xl leading-tight mb-5">
                Skilled Crews. <span className="text-gold-500">Trusted Results.</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold-500 mb-7" />
              <p className="text-white/80 leading-relaxed mb-6">
                Our team is our greatest asset. Every crew member is carefully vetted, fully
                trained, and deeply committed to the quality standards that define Vene
                Construction. We invest in our people so that every client gets the absolute
                best on every project.
              </p>
              <p className="text-white/80 leading-relaxed mb-10">
                From project managers and estimators to lead carpenters and drywall specialists,
                we bring together the right people for every job. That's what makes the difference
                between a construction company and a true construction partner.
              </p>
              <Link href="/contact" className="btn-outline-white">
                Meet the Team
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-right">
              <div className="relative h-[460px] overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/16767783/pexels-photo-16767783.jpeg?auto=compress&cs=tinysrgb&w=900&q=80"
                  alt="Construction crew at work interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-navy-950/30" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="bg-gold-500 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif font-bold text-navy-900 text-4xl mb-4">
              Ready to Work with St. Louis' Best?
            </h2>
            <p className="text-navy-700 text-lg mb-8 max-w-xl mx-auto">
              Get in touch for a free consultation and discover why businesses across
              St. Louis trust Vene Construction.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact#quote"
                className="px-10 py-4 bg-navy-900 text-white font-bold text-sm tracking-widest uppercase hover:bg-navy-800 transition-colors duration-300"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/projects"
                className="px-10 py-4 bg-white border-2 border-navy-900 text-navy-900 font-bold text-sm tracking-widest uppercase hover:bg-navy-50 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
