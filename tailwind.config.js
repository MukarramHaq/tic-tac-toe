/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: '#31C3BD',
        'blue-hover': '#65E9E4',
        yellow: '#F2B137',
        'yellow-hover': '#FFC860',
        navy: '#1A2A33',
        'navy-hover': '#1F3641',
        silver: '#A8BFC9',
        'silver-hover': '#D8E8ED'
      },
    },
  },
  plugins: [],
}