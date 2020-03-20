module.exports = {
  theme: {
    minWidth: {
      0: '0',
      1: '5rem',
      full: '100%'
    },
    extend: {
      colors: {
        teal: {
          100: '#EAF6F7',
          200: '#CBE9EB',
          300: '#ACDCDE',
          400: '#6DC1C6',
          500: '#2FA7AD',
          600: '#2A969C',
          700: '#1C6468',
          800: '#154B4E',
          900: '#0E3234'
        }
      },
      width: {
        '-20': '20rem',
        '-30': '30rem'
      },
      transitionDuration: {
        0: '0ms',
        700: '700ms'
      },
      transitionProperty: {
        width: 'width',
        left: 'left',
        borderRadius: 'border-radius',
        background: 'background'
      }
    }
  },
  variants: {
    width: ['responsive', 'focus'],
    borderRadius: ['hover'],
    background: ['active'],
    transitionDuration: ['hover', 'active']
  },
  plugins: []
}
