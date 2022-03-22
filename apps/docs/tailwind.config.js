const tailwindRadix = require('tailwind-radix-colors')

module.exports = {
  content: ['src/**/*.{ts,js,tsx,jsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      ...tailwindRadix.colors,
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'rgba(0, 0, 0, 0)'
    }
  },
  plugins: [
    tailwindRadix.plugin
  ],
}
