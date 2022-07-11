const tailwindRadix = require('tailwind-radix-colors')

const generateColor = (name, color) => ({
  [name]: tailwindRadix.colors[color],
  [`${name}Dark`]: tailwindRadix.colors[`${color}Dark`],
})

const primaryColors = generateColor('primary', 'amber')
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
      colors: {
        ...tailwindRadix.colors,
        ...primaryColors,
      }
    })
  ],
}
