import * as format from '../src/lib/format'

const colors = {
	olive: {
		olive1: 'hsl(110, 20.0%, 99.0%)',
		olive2: 'hsl(120, 16.7%, 97.6%)',
		olive3: 'hsl(119, 10.1%, 95.2%)',
		olive4: 'hsl(118, 8.1%, 93.0%)',
		olive5: 'hsl(117, 7.1%, 90.8%)',
		olive6: 'hsl(115, 6.4%, 88.5%)',
		olive7: 'hsl(114, 5.9%, 85.4%)',
		olive8: 'hsl(110, 5.2%, 77.3%)',
		olive9: 'hsl(110, 3.5%, 55.5%)',
		olive10: 'hsl(111, 2.8%, 51.7%)',
		olive11: 'hsl(110, 3.0%, 43.0%)',
		olive12: 'hsl(110, 25.0%, 9.5%)',
	},
	oliveDark: {
		olive1: 'hsl(110, 5.0%, 8.6%)',
		olive2: 'hsl(105, 7.4%, 10.6%)',
		olive3: 'hsl(106, 6.4%, 13.1%)',
		olive4: 'hsl(106, 5.8%, 15.3%)',
		olive5: 'hsl(107, 5.3%, 17.4%)',
		olive6: 'hsl(107, 4.9%, 19.9%)',
		olive7: 'hsl(108, 4.4%, 23.6%)',
		olive8: 'hsl(110, 3.8%, 30.6%)',
		olive9: 'hsl(110, 6.0%, 42.5%)',
		olive10: 'hsl(111, 4.8%, 48.2%)',
		olive11: 'hsl(110, 5.0%, 61.8%)',
		olive12: 'hsl(110, 6.0%, 93.0%)',
	}
}

describe( 'toTailwindColor', () => {
	it( 'Should transform radix-color to tailwind like color structure', () => {
		const twColor: any = format.toTailwindColor( colors.olive )

		expect( twColor[1] )
			.toBe( '#fcfdfc' )

		expect( Object.keys( twColor ) )
			.toStrictEqual( ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] )
	} )
} )

describe( 'toTailwindColors', () => {
	it( 'Should transform radix-color to tailwind like color structure', () => {
		const twColor: any = format.toTailwindColors( colors as any )

		expect( twColor.olive[1] )
			.toBe( '#fcfdfc' )

		expect( Object.keys( twColor ) )
			.toStrictEqual( ['olive', 'oliveDark'] )

		expect( Object.keys( twColor.olive ) )
			.toStrictEqual( ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] )
	} )
} )
