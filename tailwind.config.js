module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'gray-1x': '#F7F7F7',
        'gray-2x': '#E3E3E3',
        'gray-3x': '#CFCFCF',
        'gray-4x': '#BBBBBB',
      },
      textColor: {
        'gray-1x': '#F7F7F7',
        'gray-2x': '#E3E3E3',
        'gray-3x': '#CFCFCF',
        'gray-4x': '#BBBBBB',
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
