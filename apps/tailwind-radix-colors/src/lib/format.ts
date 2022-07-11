import * as colors from '@radix-ui/colors'
import { hslToHex } from './colors';

export type RadixColors = typeof colors;
export type RadixColor = RadixColors[keyof RadixColors]

export const toTailwindColor = ( color: RadixColor ) =>
	Object
		.entries( color )
		.reduce( ( acc, [key, value] ) => {
			const k = ( key.match( /\d+$/ ) || [] )[0];

			return {
				...acc,
				[k]: value.startsWith( 'hsl' ) ? hslToHex( value ) : value,
			};
		}, {} as Record<string, string> );


export const toTailwindColors = ( colors: RadixColors ) => Object
	.entries( colors )
	.reduce( ( acc, [colorName, color] ) => ( {
		...acc,
		[colorName]: toTailwindColor( color )
	} ), {} );
