/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Dark premium operator palette
        bg: '#0A0E11',          // near-black base
        surface: '#10161A',     // card surface
        elevated: '#161E23',    // raised surface
        line: 'rgba(255,255,255,0.08)',
        ink: '#EAF0F2',         // primary text (high contrast)
        muted: '#9AA7AD',       // secondary text (~7:1 on bg)
        faint: '#5F6E75',       // decorative only (borders/dots/icons)
        // Teal accent scale
        teal: {
          DEFAULT: '#2DD4BF',
          bright: '#5EEAD4',
          deep: '#0D9488',
          glow: 'rgba(45,212,191,0.35)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        micro: ['0.72rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
      maxWidth: {
        page: '72rem',
        prose: '44rem',
      },
      borderRadius: {
        card: '5px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(45,212,191,0.25), 0 8px 40px -8px rgba(45,212,191,0.25)',
        card: '0 1px 0 rgba(255,255,255,0.04), 0 12px 40px -16px rgba(0,0,0,0.6)',
      },
      keyframes: {
        drift: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8)' },
        },
      },
      animation: {
        drift: 'drift 22s ease-in-out infinite alternate',
        pulseDot: 'pulseDot 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
