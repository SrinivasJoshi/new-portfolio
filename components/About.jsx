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
						As a self-taught web developer, I have gained experience in using
						Javascript to create web interfaces with a focus on accessibility
						and user experience. I have also worked with various technologies,
						including React.js, Angular, Firebase, and Node.js. I have gained
						practical experience through internships at three startups and one
						MNC 💪
					</p>
					<p className='my-7'>
						I enjoy reading books from a variety of genres to broaden my
						perspective and satisfy my curiosity. In addition to web
						development, my interests include personal finance, business, and
						technology in general. I enjoy trying out new AIs(chatGPT🤌)
					</p>
					<p>
						I'm currently learning to build web apps using TypeScript and
						experimenting with new frameworks like T3 stack. I'm expanding my
						tech stack by incorporating advanced tools like Prisma, Next.js 13,
						and Redis. I'm interested in blockchain and am working to master
						Solidity and the Ethereum Virtual Machine to develop useful
						decentralized applications⛓️
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
						Web3, also known as the decentralised web, refers to the use of
						blockchain technology to create a more secure and transparent
						internet. It allows for the creation of decentralised applications
						(dApps) that can operate without the need for a central authority or
						server.Web3 technologies open up new possibilities for innovation
						and the creation of new products and services🤝
					</p>
					<p className='my-5'>
						Web3 technologies, such as blockchain, provide a more secure
						platform which allow for greater transparency and accountability in
						online transactions.Overall, the adoption of web3 technologies has
						the potential to revolutionise the way we use the internet and could
						have a significant impact on various industries⚒️
					</p>
					<p>
						Web3 has a bad reputation as get-rich-quick scheme however it
						affords us the opportunity to create "generational wealth" if you
						can make the most of it.My long term goal as a developer is to
						“leave a dent on the universe”. Web3 is my best bet after open
						source to be part of “software eating the world” 🤖
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
