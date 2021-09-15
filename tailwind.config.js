module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#A6B1E1',
        'secondary': '#DCD6F7',
        'primary-lite': '#F4EEFF',
      },
      fontFamily: {
        nunito: "'Nunito', sans- serif",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
