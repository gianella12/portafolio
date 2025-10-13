/** @type {import('tailwindcss').Config} */
const animaciones = require('@midudev/tailwind-animations');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [animaciones],
}