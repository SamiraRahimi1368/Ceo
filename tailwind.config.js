/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

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
  plugins: [],
}