/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './snippets/**/*.liquid',
    './layout/*.liquid',
    './templates/**/*.liquid',
    './sections/**/*.liquid',
  ],
  options: {
    safelist: ['space-x-10']
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
