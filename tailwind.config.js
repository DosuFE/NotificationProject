/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'plus': [ 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '5px 5px 5px 5px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}

