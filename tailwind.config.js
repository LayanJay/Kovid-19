module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#121212',
      pink: {
        dark: '#D71747',
        base: '#FF4D79',
      },
      gray: '#525252',
      white: '#fff',
      blue: '#3DC2C3',
      green: '#3CC782',
      red: '#D35443',
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
