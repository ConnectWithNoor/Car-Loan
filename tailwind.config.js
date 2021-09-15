module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#9792c9',
        'secondary': '#9B72AA',
        'primary-lite': '#F4EEFF',
        'bg-primary': "#82528b"
      },
      textColor: {
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
