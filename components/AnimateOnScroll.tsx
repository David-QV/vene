'use client';
import { useEffect, useRef, useState } from 'react';

type Variant = 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in' | 'fade-in';

interface Props {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
}

const initialStyles: Record<Variant, string> = {
  'fade-up':    'opacity-0 translate-y-8',
  'fade-left':  'opacity-0 -translate-x-8',
  'fade-right': 'opacity-0 translate-x-8',
  'scale-in':   'opacity-0 scale-95',
  'fade-in':    'opacity-0',
};

export function AnimateOnScroll({
  children,
  variant = 'fade-up',
  delay = 0,
  className = '',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : initialStyles[variant]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
