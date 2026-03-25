/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#eef0f9',
          100: '#c8cde9',
          200: '#a2aad9',
          300: '#7c87ca',
          400: '#5664ba',
          500: '#2d3b75',
          600: '#243062',
          700: '#1b2450',
          800: '#12183d',
          900: '#090c1f',
          950: '#04060f',
        },
        gold: {
          50:  '#fffde0',
          100: '#fffab3',
          200: '#fff680',
          300: '#ffee4d',
          400: '#ffe620',
          500: '#ffd936',
          600: '#e6c320',
          700: '#c9a800',
          800: '#a68d00',
          900: '#7a6700',
        },
      },
      fontFamily: {
        serif: ['var(--font-raleway)', 'sans-serif'],
        sans:  ['var(--font-raleway)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%':   { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(8px)' },
        },
        lineGrow: {
          '0%':   { width: '0' },
          '100%': { width: '100%' },
        },
        countUp: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up':     'fadeInUp 0.7s ease forwards',
        'fade-left':   'fadeInLeft 0.7s ease forwards',
        'fade-right':  'fadeInRight 0.7s ease forwards',
        'scale-in':    'scaleIn 0.6s ease forwards',
        'shimmer':     'shimmer 3s ease infinite',
        'scroll-bounce': 'scrollBounce 1.8s ease-in-out infinite',
        'line-grow':   'lineGrow 0.8s ease forwards',
      },
      transitionDuration: {
        '400': '400ms',
      },
      boxShadow: {
        'gold': '0 0 30px rgba(255, 217, 54, 0.3)',
        'gold-sm': '0 0 15px rgba(255, 217, 54, 0.2)',
        'navy': '0 8px 40px rgba(9, 12, 31, 0.4)',
      },
    },
  },
  plugins: [],
};
