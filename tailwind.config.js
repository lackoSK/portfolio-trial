module.exports = {
  purge: {
    enabled: false,
    content: []
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#3d61e1',
        dark: '#202022',
        lightgray: '#E5E5E5',
        darkgray: '#333333',
        mediumgray: '#878797',
        semigray: '#35353C',
      },
      fontFamily: {
        primary: ['Barlow Condensed'],
        secondary: ['Barlow'],
      },
      letterSpacing: {
        huge: '0.7em'
      },
      ringWidth: {
        '12': '12px',
      },
    },
  },
  variants: {
    variants: {
      extend: {
        ringColor: ['hover', 'active'],
      }
    }
  },
  plugins: [],
}
