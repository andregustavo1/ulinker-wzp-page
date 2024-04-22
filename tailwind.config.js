/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./index.html", "./0*/**/*.html", "./0*/**/*.js", "./card/**/*.html","./card/**/*.js"],
  theme: {
    extend: {
        backgroundImage: theme => ({
            'custom-image': "url('/src/img/bg.webp')",
        }),
        fontFamily: {
            lexend: ["Lexend Deca", "sans-serif"],
            comfortaa: ['comfortaa', 'sans-serif'],
        },
        colors: {
            '000001': '#883CEB',
        },
    },
  },
  plugins: [],
}
