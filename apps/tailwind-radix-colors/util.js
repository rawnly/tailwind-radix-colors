function getHSLValues( value ) {
	return value
		.replace('hsla', 'hsl')
		.slice( 4, -1 )
		.replace( /%|\s+/g, '' )
		.split( ',' )
		.map( Number );
}

function toHex( h, s, l, alpha ) {
	l /= 100;
	const a = s * Math.min( l, 1 - l ) / 100;
	const f = n => {
		const k = ( n + h / 30 ) % 12;
		const color = l - a * Math.max( Math.min( k - 3, 9 - k, 1 ), -1 );
		return Math.round( 255 * color ).toString( 16 ).padStart( 2, '0' );   // convert to Hex and prefix "0" if needed
	};


	const hex = `#${f( 0 )}${f( 8 )}${f( 4 )}`;

	const formattedAlpha = Math.round(alpha * 100)
	if ( formattedAlpha > 0 && formattedAlpha < 100 ) {
		return `${hex}${formattedAlpha.toString( 16 ).padStart(2, '0')}`;
	}

	return hex;
}

function chunk(arr, size) {
	if (size === void 0) { size = 1; }
	var chunks = [];
	var i = 0;
	while (i < arr.length) {
		chunks.push(arr.slice(i, i += size));
	}
	return chunks;
}


function hexToRgb(hexcode) {
	let [r, g, b, a = ['6', '4']] = chunk(hexcode.replace('#', '').split(''), 2).map(item => eval(`0x${item.join('')}`));

	if ( isNaN(a) ) {
		a = 100
	}

	if ( a > 100 ) {
		a = 100
	} else if ( a < 0 ) {
		a = 0
	}

	return `rgba(${r},${g},${b},${a / 100})`
}


function hslToHex( str ) {
	const [h, s, l, alpha] = getHSLValues( str );
	const hex = toHex( h, s, l, alpha );

	return hex
}

const formatColor = ( color ) =>
	Object
		.entries( color )
		.reduce( ( acc, [key, value] ) => {
			return {
				...acc,
				[key.match( /\d+$/ )[0]]: value.startsWith( 'hsl' ) ? hslToHex( value ) : value,
			};
		}, {} );


const formatColors = ( colors ) => Object
	.entries( colors )
	.reduce( ( acc, [colorName, color] ) => ( {
		...acc,
		[colorName]: formatColor( color )
	} ), {} );

module.exports.formatColors = formatColors;
module.exports.hslToHex = hslToHex;
