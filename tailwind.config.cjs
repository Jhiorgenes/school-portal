/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      red: '#B91C1C',
      dark: {
        DEFAULT: '#111827',
        200: '#353436',
      },
      white: {
        DEFAULT: '#FFFFFF',
        200: '#F3F4F6',
      },
    },
    fontFamily: {
      inter: 'Inter',
      mukta: 'Mukta',
    },
    extend: {},
  },
  plugins: [],
}
