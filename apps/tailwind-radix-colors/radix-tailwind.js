const { formatColors } = require('./util')
const plugin = require('tailwindcss/plugin')
const radix_colors = require('@radix-ui/colors')
const radixColors = formatColors( radix_colors )


module.exports.colors = radixColors
module.exports.plugin = plugin( function ( { addUtilities, e, theme } ) {
	const colorKeys = Object.keys( radix_colors ).filter( color => !( /Dark|A|black|white$/.test( color ) ) )

	for ( const color of colorKeys ) {
		for ( const i in Array.from(new Array(11)) ) {
			const k = parseInt(i) + 1

			for ( const attr of ['bg', 'shadow', 'text', 'border', 'ring'] ) {
				addUtilities({
					[`.${e(`rx-${attr}-${color}-${k}`)}`]: {
						[`@apply ${attr}-[${theme(`colors.${color}.${k}`)}] dark:${attr}-[${theme(`colors.${color}Dark.${k}`)}]`]: {}
					},
				})
			}
		}
	}
} )
