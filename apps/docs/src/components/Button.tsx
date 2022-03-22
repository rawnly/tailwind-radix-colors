import React, { FC } from "react";
import cx, { ClassValue } from 'clsx'

interface IButtonLinkProps {
	color?: 'gold' | 'slate' | 'mauve' | 'olive' | 'blue' | 'teal' | 'gray' | 'green' | 'lime'

	className?: ClassValue
	bordered?: boolean
	variant?: 'primary' | 'light' | 'outline' | 'ghost'

	size?: 'sm' | 'md' | 'lg' | 'xl'
	onClick?(): void
}

const styles = {
	gold: {
		light: 'rx-bg-gold-4 hover:rx-bg-gold-5 active:rx-bg-gold-6 rx-text-gold-11',
		primary: 'rx-bg-gold-9 hover:rx-bg-gold-10 text-white',
		outline: 'border rx-border-gold-8 rx-text-gold-11',
		ghost: 'rx-text-gold-11 hover:rx-bg-gold-5 active:rx-bg-gold-6',
	},
	slate: {
		light: 'rx-bg-slate-4 hover:rx-bg-slate-5 active:rx-bg-slate-6 rx-text-slate-11',
		primary: 'rx-bg-slate-9 hover:rx-bg-slate-10 text-white',
		outline: 'border rx-border-slate-8 rx-text-slate-11',
		ghost: 'rx-text-slate-11 hover:rx-bg-slate-3 active:rx-bg-slate-6',
	},
	mauve: {
		light: 'rx-bg-mauve-4 hover:rx-bg-mauve-5 active:rx-bg-mauve-6 rx-text-mauve-11',
		primary: 'rx-bg-mauve-9 hover:rx-bg-mauve-10 text-white',
		outline: 'border rx-border-mauve-8 rx-text-mauve-11',
		ghost: 'rx-text-mauve-11 hover:rx-bg-mauve-3 active:rx-bg-mauve-6',
	},
	olive: {
		light: 'rx-bg-olive-4 hover:rx-bg-olive-5 active:rx-bg-olive-6 rx-text-olive-11',
		primary: 'rx-bg-olive-9 hover:rx-bg-olive-10 text-white',
		outline: 'border rx-border-olive-8 rx-text-olive-11',
		ghost: 'rx-text-olive-11 hover:rx-bg-olive-3 active:rx-bg-olive-6',
	},
	blue: {
		light: 'rx-bg-blue-4 hover:rx-bg-blue-5 active:rx-bg-blue-6 rx-text-blue-11',
		primary: 'rx-bg-blue-9 hover:rx-bg-blue-10 text-white',
		outline: 'border rx-border-blue-8 rx-text-blue-11',
		ghost: 'rx-text-blue-11 hover:rx-bg-blue-3 active:rx-bg-blue-6',
	},
	teal: {
		light: 'rx-bg-teal-4 hover:rx-bg-teal-5 active:rx-bg-teal-6 rx-text-teal-11',
		primary: 'rx-bg-teal-9 hover:rx-bg-teal-10 text-white',
		outline: 'border rx-border-teal-8 rx-text-teal-11',
		ghost: 'rx-text-teal-11 hover:rx-bg-teal-3 active:rx-bg-teal-6',
	},
	gray: {
		light: 'rx-bg-gray-4 hover:rx-bg-gray-5 active:rx-bg-gray-6 rx-text-gray-11',
		primary: 'rx-bg-gray-9 hover:rx-bg-gray-10 text-white',
		outline: 'border rx-border-gray-8 rx-text-gray-11',
		ghost: 'rx-text-gray-11 hover:rx-bg-gray-3 active:rx-bg-gray-6',
	},
	green: {
		light: 'rx-bg-green-4 hover:rx-bg-green-5 active:rx-bg-green-6 rx-text-green-11',
		primary: 'rx-bg-green-9 hover:rx-bg-green-10 text-white',
		outline: 'border rx-border-green-8 rx-text-green-11',
		ghost: 'rx-text-green-11 hover:rx-bg-green-3 active:rx-bg-green-6',
	},
	lime: {
		light: 'rx-bg-lime-4 hover:rx-bg-lime-5 active:rx-bg-lime-6 rx-text-lime-11',
		primary: 'rx-bg-lime-9 hover:rx-bg-lime-10 text-black',
		outline: 'border rx-border-lime-8 rx-text-lime-11',
		ghost: 'rx-text-lime-11 hover:rx-bg-lime-3 active:rx-bg-lime-6',
	},
}


const Button: FC<IButtonLinkProps> = ( { variant = 'light', color = 'gray', size = 'sm', ...props } ) => (
	<button
		onClick={props.onClick}
		className={cx(
			'rounded',
			'flex items-center justify-center transition-colors',
			styles[color ?? 'gray'][variant ?? 'light'],
			{
				border: variant === 'outline',
				'px-6 py-2': size === 'md',
				'px-4 py-2 text-sm': size === 'sm',
				'px-6 py-4 text-md': size === 'lg',
				'px-8 py-4 text-md': size === 'xl',
			},
			props.className
		)}
	>
		{props.children}
	</button>
)

Button.displayName = 'ButtonLink'

export default Button;
