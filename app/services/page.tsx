import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Services | Commercial Construction & Remodeling',
  description:
    'Vene Construction offers commercial construction, commercial remodeling, tenant improvements, drywall installation, and residential services in St. Louis, MO.',
};

/* ─── Data ────────────────────────────────────────────────────── */
const commercialServices = [
  {
    id: 'commercial-construction',
    badge: 'Core Service',
    title: 'Commercial Construction',
    subtitle: 'New builds & expansions for businesses',
    img: 'https://images.pexels.com/photos/12992734/pexels-photo-12992734.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    description:
      'From the ground up, we construct commercial facilities that are built to the highest standards. Whether you need a new office building, retail center, warehouse, or mixed-use space, our experienced team handles every phase of the project.',
    bullets: [
      'Office buildings & corporate campuses',
      'Retail & restaurant spaces',
      'Warehouses & industrial facilities',
      'Mixed-use commercial developments',
      'Building additions & expansions',
      'ADA compliance upgrades',
    ],
    flip: false,
  },
  {
    id: 'remodeling',
    badge: 'Core Service',
    title: 'Commercial Remodeling',
    subtitle: 'Transforming existing spaces for modern business',
    img: 'https://images.pexels.com/photos/5493656/pexels-photo-5493656.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    description:
      'Breathe new life into your commercial space with a strategic remodel. We help businesses modernize their environments to boost productivity, improve customer experience, and align with their brand identity.',
    bullets: [
      'Complete office renovations & redesigns',
      'Retail space transformations',
      'Restaurant & food service renovations',
      'Healthcare & medical office upgrades',
      'Interior demolition & layout reconfiguration',
      'ADA compliance retrofits',
    ],
    flip: true,
  },
  {
    id: 'tenant-improvements',
    badge: 'Core Service',
    title: 'Tenant Improvements',
    subtitle: 'Custom fit-outs from shell to move-in ready',
    img: '/images/IMG_9796.jpg',
    description:
      'Moving into a new commercial lease? We specialize in tenant improvement projects — transforming raw or vanilla shell spaces into fully functional, branded business environments. Fast turnaround without compromising quality.',
    bullets: [
      'Shell space to finished office conversions',
      'Retail space fit-outs',
      'Restaurant build-outs',
      'Medical & dental office fit-outs',
      'Co-working & open-office designs',
      'Conference room & boardroom builds',
    ],
    flip: false,
  },
  {
    id: 'drywall',
    badge: 'Specialty',
    title: 'Drywall & Interior Finishes',
    subtitle: 'Precision craftsmanship for flawless interiors',
    img: '/images/IMG_9905.jpg',
    description:
      'Our drywall crews are among the most skilled in the region. We provide professional drywall installation, finishing, and repair for both commercial and residential projects, ensuring smooth, ready-to-paint surfaces every time.',
    bullets: [
      'Commercial drywall installation',
      'Metal stud framing',
      'Acoustic ceiling systems',
      'Drywall repair & patching',
      'Level 5 finish for premium spaces',
      'Firewall & sound-rated assemblies',
    ],
    flip: true,
  },
];

const steps = [
  { step: '01', title: 'Consultation', desc: 'We meet to understand your project goals, timeline, and budget. No obligations.' },
  { step: '02', title: 'Proposal',     desc: 'We deliver a detailed, transparent proposal with scope, cost, and schedule.' },
  { step: '03', title: 'Planning',     desc: 'Our team coordinates permits, materials, and subcontractors before breaking ground.' },
  { step: '04', title: 'Execution',    desc: 'Construction begins with regular progress updates and open communication throughout.' },
  { step: '05', title: 'Delivery',     desc: 'Final walk-through, punch list, and project handover. Your satisfaction is guaranteed.' },
];

/* ─── Page ───────────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-[55vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/12992734/pexels-photo-12992734.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Commercial interior construction"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/20 via-transparent to-navy-950/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <AnimateOnScroll className="text-center">
            <p className="section-label mb-4">What We Offer</p>
            <h1 className="font-serif font-bold text-white text-5xl lg:text-6xl leading-tight mb-5">
              Comprehensive <span className="text-gold-500">Construction</span><br />Services
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              From commercial new builds to residential remodels — precision craftsmanship
              for every project phase.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════ COMMERCIAL SERVICES ══════════ */}
      {commercialServices.map(({ id, badge, title, subtitle, img, description, bullets, flip }) => (
        <section
          key={id}
          id={id}
          className={`py-24 lg:py-32 scroll-mt-20 ${flip ? 'bg-navy-950' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${flip ? 'lg:flex-row-reverse' : ''}`}>

              {/* Image */}
              <AnimateOnScroll variant={flip ? 'fade-right' : 'fade-left'} className={flip ? 'lg:order-2' : ''}>
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden group">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-950/20 to-transparent" />
                  {/* Badge */}
                  <div className="absolute top-5 left-5 bg-gold-500 text-navy-900 text-xs font-bold tracking-widest uppercase px-3 py-1.5">
                    {badge}
                  </div>
                </div>
                {/* Decorative accent */}
                <div className={`absolute w-1/2 h-1/2 border-2 ${
                  flip ? 'border-gold-500/15 -bottom-4 -left-4' : 'border-gold-500/15 -bottom-4 -right-4'
                } -z-10`} />
              </AnimateOnScroll>

              {/* Text */}
              <AnimateOnScroll variant={flip ? 'fade-left' : 'fade-right'} className={flip ? 'lg:order-1' : ''}>
                <p className="section-label mb-3">{badge}</p>
                <h2 className={`font-serif font-bold text-4xl lg:text-5xl leading-tight mb-2 ${
                  flip ? 'text-white' : 'text-navy-900'
                }`}>
                  {title}
                </h2>
                <p className={`text-lg mb-5 ${flip ? 'text-gold-500' : 'text-navy-500'}`}>{subtitle}</p>
                <div className={`w-16 h-0.5 bg-gold-500 mb-7`} />
                <p className={`leading-relaxed mb-8 ${flip ? 'text-navy-300' : 'text-navy-600'}`}>
                  {description}
                </p>
                <ul className="space-y-3 mb-8">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${flip ? 'text-navy-300' : 'text-navy-700'}`}>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact#quote" className={flip ? 'btn-gold' : 'btn-outline-navy'}>
                  Request a Quote
                </Link>
              </AnimateOnScroll>

            </div>
          </div>
        </section>
      ))}

      {/* ══════════ RESIDENTIAL ══════════ */}
      <section id="residential" className="bg-navy-900 py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll variant="fade-right">
              <div className="relative h-[360px] overflow-hidden">
                <Image
                  src="/images/IMG_9621.jpg"
                  alt="Residential construction"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-navy-950/30" />
                <div className="absolute top-5 left-5 bg-navy-700 text-navy-200 text-xs font-bold tracking-widest uppercase px-3 py-1.5">
                  Secondary Service
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-left">
              <p className="section-label mb-3">Also Available</p>
              <h2 className="font-serif font-bold text-white text-4xl leading-tight mb-3">
                Residential Services
              </h2>
              <p className="text-gold-500 text-lg mb-5">Home construction & remodeling</p>
              <div className="w-16 h-0.5 bg-gold-500 mb-7" />
              <p className="text-navy-300 leading-relaxed mb-6">
                While our primary focus is commercial work, we bring the same level of
                quality and care to residential projects. From new home builds to kitchen
                remodels, Vene Construction delivers the same excellence at every scale.
              </p>
              <ul className="space-y-3 mb-8">
                {['New home construction', 'Home additions & extensions', 'Kitchen & bathroom remodels', 'Basement finishing', 'Custom drywall & interiors'].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy-300 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact#quote" className="btn-outline-white">
                Inquire About Residential
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ══════════ PROCESS ══════════ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll className="text-center mb-16">
            <p className="section-label mb-3">How We Work</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-navy-900">
              Our Process
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mt-5 mx-auto" />
            <p className="text-navy-600 mt-5 text-lg max-w-xl mx-auto">
              A proven, transparent process that keeps your project on track from
              first call to final walkthrough.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map(({ step, title, desc }, i) => (
              <AnimateOnScroll key={step} variant="fade-up" delay={i * 100}>
                <div className="group relative bg-navy-50 border border-navy-100 p-6
                                hover:border-gold-500/60 hover:bg-white hover:shadow-gold-sm
                                transition-all duration-400 h-full flex flex-col">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-500
                                  scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-serif font-bold text-navy-200 text-4xl leading-none
                                     group-hover:text-gold-500 transition-colors duration-400">
                      {step}
                    </span>
                    <div className="flex-1 h-px bg-navy-100 group-hover:bg-gold-500/30 transition-colors duration-400" />
                  </div>
                  <h3 className="font-serif font-bold text-navy-900 text-lg mb-2">{title}</h3>
                  <p className="text-navy-600 text-sm leading-relaxed mt-auto">{desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="bg-gold-500 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif font-bold text-navy-900 text-4xl mb-4">
              Let's Build Something Together.
            </h2>
            <p className="text-navy-700 text-lg mb-8">
              Contact us today for a free, no-obligation project consultation.
            </p>
            <Link
              href="/contact#quote"
              className="inline-block px-10 py-4 bg-navy-900 text-white font-bold text-sm tracking-widest uppercase
                         hover:bg-navy-800 transition-colors duration-300"
            >
              Get a Free Quote
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
