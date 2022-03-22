import React from 'react';
import { NextPage } from 'next';
import Button from '@components/Button';
import useDarkMode from 'src/hooks/useDarkMode';
import { useRouter } from 'next/router';
import ThemeSwitch from '@components/ThemeSwitch';

interface PageProps { }

const Page: NextPage<PageProps> = props => {
	useDarkMode()
	const router = useRouter()

	return (
		<div className="w-screen h-screen select-none">
			<ThemeSwitch />
			<div className="rx-bg-gray-1 transition-colors min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
				<div className="max-w-max mx-auto">
					<main className="sm:flex">
						<p className="text-4xl transition-colors font-extrabold rx-text-olive-9 sm:text-5xl">404</p>
						<div className="sm:ml-6">
							<div className="sm:border-l sm:rx-border-gray-5 sm:pl-6 transition-colors">
								<h1 className="text-4xl transition-colors font-extrabold rx-text-gray-11 tracking-tight sm:text-5xl">Page not found</h1>
								<p className="mt-1 text-base transition-colors rx-text-gray-9">Please check the URL in the address bar and try again.</p>
							</div>
							<div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
								<Button size='sm' color='olive' variant='light' onClick={() => router.push( '/' )}>
									Go back home
								</Button>

							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	)
};

Page.displayName = '404Page';

export default Page;
