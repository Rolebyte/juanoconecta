/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fondo: '#0A0A0A',
        crema: '#F5F0EB',
        acento: '#C4846A',
        'acento-dark': '#A86D55',
        'card-bg': '#111111',
        'card-border': '#1E1E1E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
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
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(196, 132, 106, 0.7)' },
          '50%': { boxShadow: '0 0 0 12px rgba(196, 132, 106, 0)' },
        },
      },
    },
  },
  plugins: [],
}
