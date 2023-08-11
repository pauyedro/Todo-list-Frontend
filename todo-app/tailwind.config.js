/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        caveat: "'Caveat', cursiva",
        quicksand: "'Quicksand', sans-serif"
      }
    },
  },
  plugins: [],
}

