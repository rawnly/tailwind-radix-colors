import { toTailwindColors } from './lib/format'
import twPlugin from 'tailwindcss/plugin'
import * as radixColors from '@radix-ui/colors'

export const colors = toTailwindColors( radixColors )

type Options = {
	prefix?: string
	properties?: string[]
}

export const plugin = twPlugin.withOptions<Options>( ( options = {} ) =>
	( { addUtilities, e, theme } ) => {
		const {
			prefix = 'rx',
			properties = ['bg', 'shadow', 'text', 'border', 'ring']
		} = options

		const utilities = Object.keys( radixColors )
			.filter( color => !( /Dark|A|black|white$/.test( color ) ) )
			.reduce( ( acc, colorName ) => {
				const colorStyles = Array.from( new Array( 12 ) ).reduce( ( acc, _, idx ) => {
					const value = idx + 1

					const valueStyles = properties.reduce( ( acc, prop ) => {
						const key = e( `${prefix}-${prop}-${colorName}-${value}` ) // {rx}-{text}-{bronze}-{12}
						const color = {
							light: theme( `colors.${colorName}.${value}` ),
							dark: theme( `colors.${colorName}Dark.${value}` ),
						}

						return {
							...acc,
							[`.${key}`]: {
								[`@apply ${prop}-[${color.light}] dark:${prop}-[${color.dark}]`]: {}
							}
						}
					}, {} )

					return { ...acc, ...valueStyles }
				}, {} )

				return {
					...acc,
					...colorStyles
				}
			}, {} )

		addUtilities( utilities )
	}
)
