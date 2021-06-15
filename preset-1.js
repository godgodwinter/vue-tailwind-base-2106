// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'true-gray': colors.trueGray,
        'emerald': colors.emerald,
        'teal': colors.teal,
        'light-blue': colors.lightBlue,
        'rose': colors.rose,
        'lime': colors.lime,
        'cyan': colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
