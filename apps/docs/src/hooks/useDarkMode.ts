import { useState, useEffect } from 'react'

type UseDarkMode = {
	enabled: boolean;
	toggle: VoidFunction
	enable: VoidFunction
	disable: VoidFunction
}


const useDarkMode = (): UseDarkMode => {
	const [isDark, setIsDark] = useState<boolean>( () => {
		if ( typeof window === 'undefined' || !( 'matchMedia' in window ) ) return false
		if ( localStorage.getItem( 'dark-theme' ) ) return JSON.parse( localStorage.getItem( 'dark-theme' ) )
		return window.matchMedia( '(prefers-color-scheme: dark)' ).matches
	} )

	useEffect( () => {
		if ( typeof window === 'undefined' ) return
		if ( localStorage.getItem( 'dark-theme' ) ) return

		const prefersDark = window.matchMedia( '(prefers-color-scheme: dark)' );

		prefersDark.onchange = ( ev ) => setIsDark( ev.matches )
		setIsDark( prefersDark.matches )
	}, [] );

	useEffect( () => {
		if ( typeof window === 'undefined' ) return
		const action = isDark ? 'add' : 'remove'
		document.documentElement.classList[action]( 'dark' )
	}, [isDark] )


	return {
		enabled: isDark,
		toggle: () => {
			setIsDark( isDark => {
				localStorage.setItem( 'dark-theme', JSON.stringify( !isDark ) )
				return !isDark
			} )

		},
		enable: () => {
			setIsDark( true )
			localStorage.setItem( 'dark-theme', JSON.stringify( true ) )
		},
		disable: () => {
			setIsDark( true )
			localStorage.setItem( 'dark-theme', JSON.stringify( false ) )
		},
	}
}


export default useDarkMode
