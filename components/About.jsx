import React from 'react';

const About = () => {
	return (
		<section id='about'>
			<div
				className='flex flex-col justify-evenly py-10 items-center text-center'
				id='#about'>
				<div className='flex flex-col justify-evenly items-center mb-20'>
					<img
						src='/images/undraw_person.svg'
						alt='Person Image'
						className='w-10 h-10 mb-5'
					/>
					<h2 className='text-xl font-kalam'>About Me</h2>
				</div>
				<div className='flex flex-col w-3/4 md:w-2/4 font-varela'>
					<p>
						I'm a self-taught web developer experienced in using JavaScript to
						craft user-friendly web interfaces, with a keen eye on
						accessibility. I've handled diverse tech, including the MERN stack,
						and backed it up with 6 exciting internships🤩.
						<br />
						<br />
						<strong>
							I've been part of 1MNC, 3 tech startups and 2 web3 startups.
							Currently, I'm a full-time developer at Jio Platforms Limited,
							giving it my all 💪.{' '}
						</strong>
					</p>
					<p className='my-7'>
						Exploring various book genres helps me broaden my perspective and
						satisfy my curiosity. Besides web development, I'm captivated by
						personal finance, business, and all things tech 📖.
					</p>
					<p>
						I've moved past the beginner phase of solidity development. My focus
						now is on improving further by crafting gas-efficient and secure
						code. It's really about mindset and practice. Currently, I'm
						immersing myself in EVM, Yul, and reading up on security.
						<br />
						<br /> Though security audits make me a bit nervous 😬, I'm gearing
						up to dive in. Open-source contributions are on my radar too, as I
						plan to follow my curiosity to create exciting things.
					</p>
				</div>
			</div>
			<div className='mt-10 flex flex-col justify-evenly py-10 items-center text-center'>
				<div className='flex flex-col justify-evenly items-center mb-20'>
					<img
						src='/images/undraw_rocket.svg'
						alt='Rocket Image'
						className='w-10 h-10 mb-5'
					/>
					<h2 className='text-xl font-kalam'>Why I’m crazy about Web3</h2>
				</div>
				<div className='flex flex-col w-3/4 md:w-2/4 font-varela'>
					<p>
						<strong>Web3? What?</strong>
					</p>
					<br />
					<p>
						Web3, often called the decentralized web, utilizes blockchain tech
						to establish a safer and transparent internet. This leads to
						decentralized apps (dApps) that function without central control.
						Web3 tech paves the way for innovative products and services to
						emerge 🤝.
					</p>
					<p className='my-5'>
						Web3 technologies, including blockchain, offer enhanced security and
						foster transparency and responsibility in online transactions. In
						essence, embracing web3 has the potential to reshape internet usage
						and greatly influence various industries ⚒️.
					</p>
					<p>
						<strong>Gotcha! But why ?</strong>
					</p>
					<br />
					<p>
						While Web3 sometimes gets labeled as a get-rich-quick scheme, it
						actually offers a chance to build "generational wealth" if harnessed
						effectively. As a developer, my ultimate goal is to make a lasting
						impact. Web3, alongside open source, presents my prime opportunity
						to contribute to the transformative force of "software eating the
						world" 🤖.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
