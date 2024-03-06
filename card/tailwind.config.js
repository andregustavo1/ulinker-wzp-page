/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./profiles/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#444444',
      },

      fontFamily: {
        comfortaa: ['comfortaa', 'sans-serif']
      },
    },
  },
  plugins: [],
}


