import React from 'react';
import Card from './Card';

const Projects = () => {
	const web3Projects = [
		{
			id: 1,
			name: 'Music NFTs',
			image: '/images/project-images/2.png',
			tag: '#WEB3',
			description:
				'Discover music-based NFTs with our marketplace! Destination for artists and music fans to buy, sell, and listen to music.',
			github_url: 'https://github.com/SrinivasJoshi/Music-NFTs',
			site_url: 'https://music-nfts-ruby.vercel.app/',
		},
		{
			id: 2,
			name: 'Cosmo NFTs',
			image: '/images/project-images/1.png',
			tag: '#WEB3',
			description:
				'Get your hands on a limited edition, animated NFT based on your zodiac sign! Each NFT features a unique animation',
			github_url: 'https://github.com/SrinivasJoshi/cosmo-nfts',
			site_url: 'https://cosmo-nfts.vercel.app/',
		},
		{
			id: 3,
			name: 'Lose The “Very”',
			image: '/images/project-images/3.png',
			tag: '#AI',
			description:
				'Spice up your vocabulary and avoid overusing the word "very."Use of OpenAI’s API along with react.js for frontend.',
			github_url: 'https://github.com/SrinivasJoshi/loseTheVery',
			site_url: 'https://lose-the-very.netlify.app/',
		},
		{
			id: 4,
			name: 'Sorting Visualiser',
			image: '/images/project-images/4.png',
			tag: '#DSA',
			description:
				'A tool that allows users to visualise and understand how different sorting algorithms work.Built using vanilla JS.',
			github_url: 'https://github.com/SrinivasJoshi/sorting-visualizer',
			site_url: 'https://sorting-visualiser1.netlify.app/',
		},
		{
			id: 5,
			name: 'Guess the color',
			image: '/images/project-images/5.png',
			tag: '#WEB2',
			description:
				'This is one of my first JS project.Users are presented with a RGB value along with colored tiles,they must match the square with the correct RGB value.',
			github_url: 'https://github.com/SrinivasJoshi/color-game',
			site_url: 'https://colorgame1212.netlify.app/',
		},
		{
			id: 6,
			name: 'Time Lock Contract',
			image: '/images/project-images/6.png',
			tag: '#WEB3',
			description:
				'A decentralized application that allows users to lock up their MATIC for a certain period of time. The app uses smart contracts enforce the time lock.',
			github_url: 'https://github.com/SrinivasJoshi/timelock',
			site_url: 'https://timelock-three.vercel.app/',
		},
	];
	return (
		<section className='mt-10 flex flex-col justify-evenly min-h-screen items-center'>
			<div className='flex flex-col justify-evenly items-center mb-10'>
				<img
					src='/images/undraw_code.svg'
					alt='Person Image'
					className='w-10 h-10'
				/>
				<h2 className='text-2xl font-kalam'>My Projects</h2>
			</div>

			<div className='grid grid-cols-3 gap-8 w-4/5'>
				{web3Projects.map((project) => {
					return (
						<Card
							name={project.name}
							image={project.image}
							description={project.description}
							github_url={project.github_url}
							site_url={project.site_url}
							key={project.id}
							tag={project.tag}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
