import React from 'react';

export default function HeroSection() {
	return (
		<section
			className='bg-bblack text-wwhite md:px-10 px-6 font-varela flex flex-col-reverse items-center justify-evenly md:items-start md:flex-row md:justify-between'
			id='home'>
			<div className='h-96 flex flex-col justify-evenly md:mt-28 mt-3 md:items-start items-center'>
				<div>
					<p className='md:mb-3 mb-1 md:text-base text-sm md:text-left text-center'>
						Hi, my name is
					</p>
					<h1 className='font-kalam text-xl md:text-3xl md:text-left text-center'>
						Srinivas Joshi
					</h1>
					<h1 className='font-kalam text-xl md:text-3xl md:text-left text-center'>
						I build things for the Web
					</h1>
				</div>
				<p className='w-full md:w-3/5 md:text-base text-sm md:text-left text-center'>
					I'm a Fullstack Developer who loves building awesome web apps and
					sometimes even dips into design. I like to cover all the bases and
					make sure everything is top-notch.
					<br />
					<br />
					Venturing deep into the Web3 rabbit hole! 🕳️🌐
				</p>
				<a
					href='#contact'
					className='border border-wwhite px-3 py-2 w-fit rounded-lg font-kalam'>
					Get In Touch
				</a>
			</div>
			<img
				src='/images/main-page-img.png'
				alt='Hero-section-image'
				className='w-4/5 mt-3 md:w-2/5 md:h-2/5 md:mt-28'
			/>
		</section>
	);
}
