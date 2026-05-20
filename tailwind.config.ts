import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        wine: { DEFAULT: '#58303d', dark: '#3d2029' },
        gold: {
          DEFAULT: '#C69B3C',
          light: '#DCBE7B',
          dark: '#9E7A2A',
          pale: '#EDE0C3',
        },
        ivory: '#F4EADE',
        cream: '#FAF7F2',
        blush: '#F0E3DC',
        body: { DEFAULT: '#3D2B30', mid: '#7A6269', light: '#A8949A' },
      },
      fontFamily: {
        h: ['var(--font-cormorant)', 'Georgia', 'serif'],
        b: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
