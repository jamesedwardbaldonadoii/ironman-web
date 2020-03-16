module.exports = {
  theme: {
    minWidth: {
      0: '0',
      1: '5rem',
      full: '100%'
    },
    extend: {
      width: {
        '-20': '20rem'
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
