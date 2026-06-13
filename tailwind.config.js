/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette — dark, recolored (Aditya's standard).
        bg: '#1A1B25',          // brand near-black navy (base)
        surface: '#222330',     // raised card surface
        elevated: '#2A2B3A',    // higher surface
        line: 'rgba(255,255,255,0.09)',
        ink: '#FFFFFF',         // primary text
        muted: '#B4AFA8',       // secondary text (warm gray, ~8:1 on bg)
        faint: '#6E6A64',       // decorative only (borders/dots/icons)
        // Cream — the legible highlight accent on dark.
        cream: {
          DEFAULT: '#FFE8D4',
          soft: 'rgba(255,232,212,0.72)',
        },
        // Brand deep blue — CTA fills + gradient (too dark for text on navy).
        blue: {
          DEFAULT: '#1C3D73',
          soft: '#2A5499',
          bright: '#3D6BB0',
        },
      },
      fontFamily: {
        display: ['"General Sans"', 'system-ui', 'sans-serif'],
        sans: ['"General Sans"', 'system-ui', '-apple-system', 'sans-serif'],
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
        glow: '0 0 0 1px rgba(28,61,115,0.5), 0 8px 40px -8px rgba(28,61,115,0.55)',
        card: '0 1px 0 rgba(255,255,255,0.04), 0 12px 40px -16px rgba(0,0,0,0.65)',
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
