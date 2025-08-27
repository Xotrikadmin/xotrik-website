/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: '#0A1828',
        secondary: '#114F55',
        accent: '#178582',
        gold: '#D4AF37',
      },
       backdropBlur: {
        'xl': '40px',
      },
      animation: {
    'pulse-slow': 'pulse 6s ease-in-out infinite',
  },
     fontFamily: {
  sans: ['Inter', 'sans-serif'],
  heading: ['Plus Jakarta Sans', 'sans-serif'],
},
    },
  },
  plugins: [],
}
