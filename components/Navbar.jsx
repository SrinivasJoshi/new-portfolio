import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
	const [navbar, setNavbar] = useState(false);
	return (
		<nav className='w-full bg-bblack text-wwhite'>
			<div className='justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-10'>
				<div>
					<div className='flex items-center justify-between py-3 md:py-5 md:block'>
						<img
							src='/images/undraw_ghost.svg'
							alt='Logo'
							className='w-6 md:w-7'
						/>
						<div className='md:hidden'>
							<button
								className='p-2 text-gray-700 rounded-md outline-none'
								onClick={() => setNavbar(!navbar)}>
								{navbar ? (
									<img
										src='/images/undraw_cancel.svg'
										alt='Cancel Icon'
										className='w-8 md:w-7'
									/>
								) : (
									<img
										src='/images/undraw_menu.svg'
										alt='Menu Icon'
										className='w-8 md:w-7'
									/>
								)}
							</button>
						</div>
					</div>
				</div>
				<div>
					<div
						className={`flex-1 justify-self-center pb-3 mt-2 md:block md:pb-0 md:mt-0 ${
							navbar ? 'block' : 'hidden'
						}`}>
						<ul className='text-lg md:text-xl items-center font-kalam justify-center space-y-5 md:flex md:space-x-12 md:space-y-0'>
							<li>
								<Link href='#home'>Home</Link>
							</li>
							<li>
								<Link href='#about'>About</Link>
							</li>
							<li>
								<Link href='https://medium.com/@srinivasjoshi66'>Blog</Link>
							</li>
							<li>
								<Link href='#work'>Work</Link>
							</li>
							<li>
								<Link href='#contact'>Contact</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
