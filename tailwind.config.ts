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
        arctic: {
          950: '#030712',
          900: '#070C1B',
          850: '#0B132B',
          800: '#111D3D',
          700: '#1C2E59',
          600: '#2C427B',
        },
        glacier: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
        },
        aurora: {
          green: '#10B981',
          emerald: '#059669',
          cyan: '#06B6D4',
          teal: '#14B8A6',
          violet: '#8B5CF6',
          purple: '#A855F7',
        },
        hearth: {
          amber: '#F59E0B',
          flame: '#D97706',
          glow: '#FDE68A',
        },
        frost: {
          DEFAULT: '#F8FAFC',
          muted: '#94A3B8',
          dark: '#64748B',
          line: 'rgba(255, 255, 255, 0.08)',
          'line-strong': 'rgba(255, 255, 255, 0.16)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'aurora-gradient': 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.12) 50%, rgba(139, 92, 246, 0.15) 100%)',
        'radial-frost': 'radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.12), transparent 70%)',
        'subtle-grid': 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
      },
      animation: {
        'aurora-shift': 'auroraShift 18s ease infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        auroraShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
