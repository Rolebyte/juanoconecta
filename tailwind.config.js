/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fondo: '#0B1020',
        crema: '#EAF0FF',
        acento: '#3D7BFF',
        'acento-dark': '#2F63D9',
        teal: '#22D3EE',
        highlight: '#8FB3FF',
        'card-bg': '#121A30',
        'card-border': '#1E2945',
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
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(61,123,255, 0.7)' },
          '50%': { boxShadow: '0 0 0 12px rgba(61,123,255, 0)' },
        },
      },
    },
  },
  plugins: [],
}
