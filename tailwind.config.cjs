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
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
      },
    },
    extend: {},
  },
  plugins: [],
}
