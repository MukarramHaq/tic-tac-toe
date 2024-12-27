/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    boxShadow: {
      ny: 'inset 0 -7px 0 0 #10212A',
      'btn-yellow': 'inset 0 -7px 0 0 #CC8B14',
      'btn-blue': 'inset 0 -7px 0 0 #118C87',
      'btn-reset': 'inset 0 -5px 0 0 #6B8997',
    },
    letterSpacing: {
      xs: '0.88px',
      s: '1px',
      m: '1.25px',
      lg: '1.5px'
    },
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
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
      height: {
        17: '67px',
        13: '52px',
        md: '140px'
      },
      width: {
        13: '52px',
        md: '140px'
      },
      borderRadius: {

      }
    },
  },
  plugins: [],
}