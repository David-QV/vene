'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';

/* ─── Form ────────────────────────────────────────────────────── */
const services = [
  'Commercial Construction',
  'Commercial Remodeling',
  'Tenant Improvements',
  'Drywall & Interior Finishes',
  'Residential Services',
  'Other / Not Sure',
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const empty: FormState = {
  name: '', email: '', phone: '', company: '', service: '', budget: '', message: '',
};

const budgets = [
  'Under $10,000',
  '$10,000 – $50,000',
  '$50,000 – $150,000',
  '$150,000 – $500,000',
  '$500,000+',
  'Not Sure',
];

/* ─── Page ───────────────────────────────────────────────────── */
export default function ContactPage() {
  const [form, setForm]       = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200)); // Simulate async
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/5493656/pexels-photo-5493656.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Commercial interior renovation work"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <AnimateOnScroll className="text-center">
            <p className="section-label mb-4">Get In Touch</p>
            <h1 className="font-serif font-bold text-white text-5xl lg:text-6xl leading-tight mb-5">
              Let's Build <span className="text-gold-500">Something</span><br />Great Together.
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Free consultations. No pressure. Just a conversation about your project
              and how we can help make it a reality.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════ CONTACT SECTION ══════════ */}
      <section id="quote" className="bg-navy-950 py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

            {/* ── Info side ── */}
            <AnimateOnScroll variant="fade-right" className="lg:col-span-2">
              <div>
                <p className="section-label mb-3">Contact Information</p>
                <h2 className="font-serif font-bold text-white text-3xl lg:text-4xl mb-5">
                  We're Ready to Help.
                </h2>
                <div className="w-12 h-0.5 bg-gold-500 mb-8" />

                <ul className="space-y-7 mb-10">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-1">Phone</p>
                      <a href="tel:7854730596" className="text-white text-lg font-semibold hover:text-gold-500 transition-colors duration-200">
                        (785) 473-0596
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-1">Website</p>
                      <a href="https://veneconstruction.com" target="_blank" rel="noopener noreferrer"
                        className="text-white font-semibold hover:text-gold-500 transition-colors duration-200">
                        veneconstruction.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-1">Service Area</p>
                      <p className="text-white font-semibold">St. Louis &amp; Surrounding Areas</p>
                      <p className="text-white/70 text-sm">Topeka, Lawrence, Wichita, KC &amp; more</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-1">Business Hours</p>
                      <p className="text-white font-semibold">Mon – Fri: 7:00am – 6:00pm</p>
                      <p className="text-white/70 text-sm">Saturday: 8:00am – 2:00pm</p>
                    </div>
                  </li>
                </ul>

                {/* Social */}
                <div>
                  <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-4">Follow Us</p>
                  <a
                    href="https://www.instagram.com/veneconstruction/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-5 py-3 border border-navy-600 text-white
                               hover:border-gold-500 hover:text-gold-500 transition-all duration-300 text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                    @veneconstruction
                  </a>
                </div>
              </div>
            </AnimateOnScroll>

            {/* ── Form ── */}
            <AnimateOnScroll variant="fade-left" className="lg:col-span-3">
              <div className="bg-navy-950 border border-gold-500 p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gold-500/10 border-2 border-gold-500 mx-auto mb-6 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-serif font-bold text-white text-3xl mb-3">Message Sent!</h3>
                    <p className="text-white/80 mb-8 max-w-sm mx-auto">
                      Thank you for reaching out. We'll review your project details and
                      get back to you within one business day.
                    </p>
                    <button
                      onClick={() => { setForm(empty); setSubmitted(false); }}
                      className="btn-gold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif font-bold text-white text-2xl mb-2">Request a Free Quote</h2>
                    <p className="text-white/70 text-sm mb-8">
                      Tell us about your project and we'll get back to you within one business day.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="form-label">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={update('name')}
                            placeholder="John Smith"
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label className="form-label">Company / Organization</label>
                          <input
                            type="text"
                            value={form.company}
                            onChange={update('company')}
                            placeholder="Acme Corp"
                            className="form-input"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="form-label">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={update('email')}
                            placeholder="you@company.com"
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label className="form-label">Phone Number</label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={update('phone')}
                            placeholder="(785) 000-0000"
                            className="form-input"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="form-label">Service Needed *</label>
                          <select
                            required
                            value={form.service}
                            onChange={update('service')}
                            className="form-input appearance-none cursor-pointer"
                          >
                            <option value="" disabled>Select a service...</option>
                            {services.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="form-label">Estimated Budget</label>
                          <select
                            value={form.budget}
                            onChange={update('budget')}
                            className="form-input appearance-none cursor-pointer"
                          >
                            <option value="">Select a range...</option>
                            {budgets.map((b) => (
                              <option key={b} value={b}>{b}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="form-label">Project Description *</label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={update('message')}
                          placeholder="Describe your project, location, timeline, and any other relevant details..."
                          className="form-input resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-4 font-bold text-sm tracking-widest uppercase transition-all duration-300
                          ${loading
                            ? 'bg-navy-700 text-navy-400 cursor-not-allowed'
                            : 'bg-gold-500 text-navy-900 hover:bg-gold-400 hover:shadow-gold active:scale-[0.99]'
                          }`}
                      >
                        {loading ? 'Sending…' : 'Send My Request'}
                      </button>

                      <p className="text-white/50 text-xs text-center">
                        By submitting this form you agree to be contacted regarding your project.
                        We respect your privacy and never share your information.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* ══════════ MAP PLACEHOLDER ══════════ */}
      <section className="relative border-t border-navy-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/12771407/pexels-photo-12771407.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Commercial construction interior"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-navy-800/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <AnimateOnScroll className="text-center mb-10">
            <p className="section-label mb-2" style={{textShadow:'0 2px 12px #000, 0 4px 24px #000'}}>Coverage Area</p>
            <h2 className="font-serif font-bold text-white text-3xl" style={{textShadow:'0 2px 12px #000, 0 4px 24px #000'}}>We Serve All of St. Louis &amp; Beyond</h2>
          </AnimateOnScroll>
          <AnimateOnScroll className="text-center">
            <p className="text-gold-500 font-serif font-bold text-2xl mb-2" style={{textShadow:'0 2px 12px #000, 0 4px 24px #000'}}>St. Louis &amp; Surrounding Areas</p>
            <p className="text-white/80 text-sm mb-8" style={{textShadow:'0 2px 12px #000, 0 4px 24px #000'}}>St. Louis · Clayton · Chesterfield · St. Charles · And beyond</p>
            <a href="tel:7854730596" className="inline-block btn-gold">
              Call to Confirm Your Area
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
