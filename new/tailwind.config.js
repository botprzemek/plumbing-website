/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,html,js,jsx,ts}",
    "./public/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'background': 'rgb(241,244,248)',
      },
    },
  },
  plugins: [],
}

