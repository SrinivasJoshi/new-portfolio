import Link from 'next/link';
import React from 'react';

export default function Custom404() {
	return (
		<div className='flex flex-col justify-center items-center min-h-screen bg-bblack text-wwhite'>
			<img
				src='/images/undraw_exclamation-point.svg'
				alt='Exclamation SVG'
				className='mb-5'
			/>

			<p className='font-kalam w-2/5 text-center my-8'>
				<strong>
					404 error? More like 404 opportunity to explore the rest of my
					website! Go ahead and take a look around, I promise it's worth your
					while.
				</strong>
			</p>

			<button>
				<Link
					href='/'
					className='border border-wwhite px-3 py-2 w-fit rounded-lg font-kalam'>
					Home
				</Link>
			</button>
		</div>
	);
}
