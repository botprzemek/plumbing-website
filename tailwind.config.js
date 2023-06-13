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
        'blue': 'rgb(45,170,255)',
        'black': 'rgb(39,39,39)',
        'white': 'rgb(241,244,248)',
      },
      padding: {
        'fit': '15%',
        'phone': '5%',
      }
    },
  },
  plugins: [],
}

