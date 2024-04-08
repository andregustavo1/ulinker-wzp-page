/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./profiles/**/*.html"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-image': "url('/src/img/bg.webp')",
     }),

      fontFamily: {
        lexend: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
}
