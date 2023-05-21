const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    clipPath: {
      mypolygon: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 1rem))",
    },
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
    },

    extend: {
      fontFamily: {
        'nunito': ['Nunito'],
        'rubik': ['Rubik'],
      },
      animation: {
        imageBounce: "imageBounce 4s infinite"
      },
      keyframes: {
        imageBounce: {
          '0%': { 'transform': 'translateY(10px)' },
          '50%': { 'transform': 'translateY(0)' },
          '100%': { 'transform': 'translateY(10px)' },
        }
      }
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}