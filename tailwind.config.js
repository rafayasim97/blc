/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1e3a5f', // Dark blue for text and backgrounds
        'brand-gold': '#b9975b', // Gold/brown for accents and buttons
        'brand-light': '#f7f5f2', // Off-white for page backgrounds
        'brand-dark': '#333333',   // Primary text color
      },
      fontFamily: {
        sans: ['"Lato"', ...fontFamily.sans],
        serif: ['"Merriweather"', ...fontFamily.serif],
      },
    },
  },
  plugins: [],
}