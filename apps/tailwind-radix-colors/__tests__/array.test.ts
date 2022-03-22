import * as arr from '../src/lib/array'

const array = Array.from( new Array( 10 ), ( _, idx ) => idx )

describe( 'chunk', () => {
	it( 'Should chunk array into sub arrays of 2', () => {
		const chunked = arr.chunk( array, 2 )

		expect( chunked.length )
			.toEqual( Math.floor( array.length / 2 ) )

		expect( chunked[0] )
			.toStrictEqual( [0, 1] )
	} )

	it( 'Should return a single sub-array if is provided an invalid size', () => {
		const chunked = arr.chunk( array, -1 )

		expect( chunked.length ).toEqual( 1 )
		expect( chunked )
			.toStrictEqual( [array] )
	} )
} )
