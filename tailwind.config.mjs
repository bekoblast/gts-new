/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // brand violet
        brand: {
          50: '#f4f1ff', 100: '#e7dfff', 200: '#cfbfff', 300: '#b094ff',
          400: '#8c63f0', 500: '#6a3dd1', 600: '#5320b8', 700: '#380997',
          800: '#2b057a', 900: '#1d035a', 950: '#0e022d', DEFAULT: '#380997'
        },
        // coral accent
        coral: {
          50: '#fff1f1', 100: '#ffdddd', 200: '#ffbdbe', 300: '#ff8f90',
          400: '#fb5d5f', 500: '#e44a4a', 600: '#c33232', 700: '#a32626',
          800: '#7e1d1d', 900: '#5d1313', DEFAULT: '#e44a4a'
        },
        // warm off-white / ink neutrals
        paper: '#faf8f5',
        ink: {
          50: '#f6f6f8', 100: '#ebebf0', 200: '#d6d7e0', 300: '#b2b4c6',
          400: '#8589a3', 500: '#646882', 600: '#4c4f66', 700: '#3b3d50',
          800: '#222431', 900: '#13141d', 950: '#0a0b12'
        }
      },
      fontFamily: {
        display: ['"Sora"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"General Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      letterSpacing: { tightest: '-0.04em' },
      boxShadow: {
        soft: '0 1px 2px rgba(19,20,29,0.04), 0 8px 24px -8px rgba(19,20,29,0.10)',
        lift: '0 8px 16px -6px rgba(19,20,29,0.10), 0 24px 48px -16px rgba(19,20,29,0.18)',
        brand: '0 16px 40px -12px rgba(56,9,151,0.40)'
      }
    }
  },
  plugins: []
};
