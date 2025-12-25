/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'magic-dark': '#0a0a0a',
        'magic-purple': '#b026ff',
        'magic-orange': '#ff8c00',
        'magic-blue': '#00e5ff',
        'magic-pink': '#ff007f',
        'magic-deep': '#12002b',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #12002b 0%, #b026ff 50%, #ff8c00 100%)',
        'card-gradient-1': 'linear-gradient(135deg, #ff8c00 0%, #ff007f 100%)',
        'card-gradient-2': 'linear-gradient(135deg, #00e5ff 0%, #b026ff 100%)',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

