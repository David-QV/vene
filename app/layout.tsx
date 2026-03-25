import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://veneconstruction.com'),
  title: {
    default: 'Vene Construction | Commercial Construction & Remodeling St. Louis',
    template: '%s | Vene Construction',
  },
  description:
    'Vene Construction delivers premium commercial construction, remodeling, and tenant improvements across St. Louis, MO. 10+ years of excellence, licensed & insured.',
  keywords: [
    'commercial construction St. Louis',
    'commercial remodeling St. Louis',
    'tenant improvements Missouri',
    'office fit-out',
    'drywall contractor St. Louis',
    'general contractor St. Louis',
    'Vene Construction',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://veneconstruction.com',
    siteName: 'Vene Construction',
    title: 'Vene Construction | Commercial Construction & Remodeling St. Louis',
    description:
      'Premium commercial construction, remodeling, and space fit-outs across St. Louis, MO. 10+ years, licensed & insured.',
    images: [
      {
        url: '/images/cropped-VENE-logo-azul-1-150x150.png',
        width: 150,
        height: 150,
        alt: 'Vene Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vene Construction | Commercial Construction St. Louis',
    description: 'Premium commercial construction & remodeling in St. Louis, MO.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={raleway.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
