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
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }

    },
  },
  plugins: [],
}