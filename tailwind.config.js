module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#121212',
      pink: '#FF4D79',
      gray: '#525252',
      white: '#fff',
    },
    extend: {
      fontFamily: {
        primary: ['Montserrat', 'san-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
