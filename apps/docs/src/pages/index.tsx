import React from 'react';
import { NextPage } from 'next';
import { CopyIcon, DownloadIcon, MoonIcon, SunIcon } from '@components/icons';
import Button from '@components/Button';
import { useRouter } from 'next/router';
import useDarkMode from 'src/hooks/useDarkMode';
import toast from 'react-hot-toast';
import ThemeSwitch from '@components/ThemeSwitch';

interface PageProps { }


export const copyToClipboard = async ( text: string ) => {
	if ( typeof window === 'undefined' ) return null

	if ( 'clipboard' in navigator ) {
		await navigator.clipboard.writeText( text );
		toast( 'Copied to clipboard', {
			duration: 1250,
			position: 'bottom-left',
			icon: <CopyIcon />,
			className: '!rx-bg-olive-9 !text-white'
		} )
	} else {
		return document.execCommand( 'copy', true, text );
	}
}

const Page: NextPage<PageProps> = _ => {
	const router = useRouter()

	return (
		<div className='w-screen transition-colors h-screen flex items-center gap-4 justify-center flex-col rx-bg-mauve-1'>
			<ThemeSwitch />

			<main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
				<div className="text-center">
					<h1 className="tracking-tight font-extrabold rx-text-olive-11">
						<span className="block text-4xl sm:text-5xl md:text-6xl xl:inline rx-text-olive-11">Tailwind + Radix Colors</span>{' '}
						{/* <span className="block text-2xl sm:text-3xl md:text-5xl xl:inline rx-text-olive-9">Try it now</span> */}
					</h1>
					<p className="mt-3 max-w-md mx-auto text-base rx-text-olive-11 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
						{/* Describe the package */}
						<code>tailwind-radix-colors</code> is a <a target={'_blank'} href="https://tailwindcss.com">TailwindCSS</a> plugin that adds <a target={'_blank'} href="https://radix-ui.com/colors">Radix colors</a> to Tailwind.
						It also provides dynamic utilities for dark-colors.
					</p>
					<div className="mt-5 max-w-md mx-auto grid grid-cols-2 gap-4 md:mt-8">
						<Button
							size='xl'
							variant='light'
							color='olive'
							onClick={() => router.push( 'https://github.com/rawnly/tailwind-radix-colors' )}
							className='font-bold uppercase'
						>
							Github
						</Button>
						<Button
							size='xl'
							variant='primary'
							color='lime'
							onClick={() => router.push( 'https://npmjs.com/tailwind-radix-colors' )}
							className='gap-2 font-bold uppercase'
						>
							NPM
						</Button>
					</div>
				</div>
			</main>

			<span className='fixed bottom-5 left-1/2 -translate-x-1/2 rx-text-olive-11'>Made with a ⌨ by <a href="https://fedevitale.dev">Federico Vitale</a></span>
		</div>
	)
};

Page.displayName = 'IndexPage';

export default Page;
