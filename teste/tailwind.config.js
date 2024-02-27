/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./profiles/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#444444',
      },

      fontFamily: {
        lexend: ["Lexend Deca", "sans-serif"],
      },

      keyframes: {
        blink: {
        '0%': { opacity: '100%' },
        '50%': { opacity: '0%' },
        }
      },

      animation: {
        blink: 'blink 1s linear infinite',
      },
    },
  },
  plugins: [],
}


