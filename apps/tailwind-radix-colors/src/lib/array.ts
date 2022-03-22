
export const chunk = <T>( arr: T[], size: number ): T[][] => {
	if ( size <= 0 ) return [arr]

	const chunks: T[][] = [];
	let i = 0;

	while ( i < arr.length ) {
		chunks.push( arr.slice( i, i += size ) );
	}

	return chunks;
}
