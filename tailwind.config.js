/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fondo: '#1A1A2E',
        crema: '#F7F7F2',
        acento: '#FF6B6B',
        'acento-dark': '#E05555',
        teal: '#4ECDC4',
        highlight: '#FFE66D',
        'card-bg': '#2D2D44',
        'card-border': '#34344F',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'pulse-coral': 'pulse-coral 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-coral': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255,107,107, 0.7)' },
          '50%': { boxShadow: '0 0 0 12px rgba(255,107,107, 0)' },
        },
      },
    },
  },
  plugins: [],
}
