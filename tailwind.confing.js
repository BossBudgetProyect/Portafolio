/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' }
        },
        blink: {
          '50%': { opacity: '0' }
        }
      },
      animation: {
        typing: 'typing 3s steps(20, end) forwards',
        blink: 'blink 0.8s infinite'
      }
    },
  },
  plugins: [],
}