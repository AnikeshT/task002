import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#0c0d10',
          elevated: '#14151a',
          surface: '#1a1c22',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-strong': 'rgba(255, 255, 255, 0.16)',
        },
        paper: {
          light: '#fbfaf8',
          bone: '#f3efe8',
          muted: '#e5decfa0',
        },
        ink: {
          DEFAULT: '#fbfaf8',
          muted: '#9a9da6',
          faint: '#60636d',
          dark: '#121316',
        },
        accent: {
          ochre: '#c6955a',
          'ochre-hover': '#af7f46',
          mist: '#8aa6b5',
          sage: '#4e6b5d',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};

export default config;
