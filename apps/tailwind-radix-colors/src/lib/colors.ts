export const parseHSL = ( value: string ): number[] =>
	value
		.replace( 'hsla', 'hsl' )
		.slice( 4, -1 )
		.replace( /%|\s+/g, '' )
		.split( ',' )
		.map( Number );

export const hsl2hex = ( h: number, s: number, l: number, alpha: number = 100 ): string => {
	l /= 100;
	const a = s * Math.min( l, 1 - l ) / 100;

	const f = ( n: number ) => {
		const k = ( n + h / 30 ) % 12;
		const color = l - a * Math.max( Math.min( k - 3, 9 - k, 1 ), -1 );
		return Math.round( 255 * color ).toString( 16 ).padStart( 2, '0' );   // convert to Hex and prefix "0" if needed
	};


	const hex = `#${f( 0 )}${f( 8 )}${f( 4 )}`;

	const formattedAlpha = Math.round( alpha * 100 )

	if ( formattedAlpha >= 0 && formattedAlpha < 100 ) {
		return `${hex}${formattedAlpha.toString( 16 ).padStart( 2, '0' )}`;
	}

	return hex;
}



export function hslToHex( hsl: string ): string {
	const [h, s, l, alpha] = parseHSL( hsl );
	const hex = hsl2hex( h, s, l, alpha );

	return hex
}
