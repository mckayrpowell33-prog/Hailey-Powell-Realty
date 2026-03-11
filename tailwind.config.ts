import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: '#274D3A',
          pine: '#1E3A2E',
          taupe: '#7A746B',
          mist: '#F6F4F1',
          slate: '#223344'
        }
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif']
      },
      boxShadow: {
        soft: '0 8px 24px rgba(20, 30, 25, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
