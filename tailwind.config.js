/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,html,js,jsx,ts}",
    "./public/*.{html,js}",
    "./index.html",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'blue': 'rgb(51,105,255)',
        'black': 'rgb(3,3,3)',
        'white': 'rgb(255,255,255)',
      },
      height: {
        'phone': '50vh',
      },
      padding: {
        'fit': '15%',
        'phone': '5%',
      },
      backgroundSize: {
        'scale': '210%',
      },
      keyframes: {
        shake: {
          '0%': { transform: 'rotate(0deg)' },
          '1%': { transform: 'rotate(9deg)' },
          '2%': { transform: 'rotate(0deg)' },
          '3%': { transform: 'rotate(-9deg)' },
          '4%': { transform: 'rotate(0deg)' },
          '5%': { transform: 'rotate(9deg)' },
          '6%': { transform: 'rotate(0deg)' },
          '7%': { transform: 'rotate(-9deg)' },
          '8%': { transform: 'rotate(0deg)' },
          '9%': { transform: 'rotate(9deg)' },
          '10%': { transform: 'rotate(0deg)' },
          '11%': { transform: 'rotate(-9deg)' },
          '12%': { transform: 'rotate(0deg)' },
        }
      },
      animation: {
        'shake': 'shake 5s linear infinite 1s',
      }
    },
  },
  plugins: [],
}

