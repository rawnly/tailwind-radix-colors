const tailwindRadix = require('tailwind-radix-colors')


const primaryColors = {
  ...tailwindRadix.createAlias('primary', 'blue'),
  ...tailwindRadix.createAlias('neutral', 'mauve'),  
}

console.log(primaryColors)


module.exports = {
  content: ['src/**/*.{ts,js,tsx,jsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      ...tailwindRadix.colors,
      ...primaryColors,
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'rgba(0, 0, 0, 0)'
    }
  },
  plugins: [
    tailwindRadix.plugin({
      debug: true,
      colors: {
        ...tailwindRadix.colors,
        ...primaryColors,
      }
    })
  ],
}
