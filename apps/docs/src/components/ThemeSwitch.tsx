import React, { FC, useMemo } from "react";
import useDarkMode from 'src/hooks/useDarkMode';
import { MoonIcon, SunIcon } from './icons';

interface IThemeSwitchProps { }

const ThemeSwitch: FC<IThemeSwitchProps> = ( props ) => {
	const darkMode = useDarkMode()

	if ( typeof window === 'undefined' ) return null

	const icon = useMemo( () => darkMode.enabled ? <SunIcon /> : <MoonIcon />, [darkMode.enabled] )

	return (
		<button className='fixed top-5 cursor-pointer transition-colors right-5 dark:text-white rounded-full px-2 py-1 hover:rx-bg-gray-2' onClick={darkMode.toggle}>
			{icon}
		</button>
	);
}

ThemeSwitch.displayName = 'ThemeSwitch'

export default ThemeSwitch;
