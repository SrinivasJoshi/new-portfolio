import React from 'react';
import Card from './Card';

const Projects = () => {
	const web3Projects = [
		{
			id: 1,
			name: 'Music NFTs',
			image: '/images/icons8-done.gif',
			description:
				'Discover music-based NFTs with our marketplace! Destination for artists and music fans to buy, sell, and listen to music.',
			github_url: 'some_url',
			site_url: 'some_site_url',
		},
		{
			id: 2,
			name: 'Cosmo NFTs',
			image: '/images/icons8-done.gif',
			description:
				'Get your hands on a limited edition, animated NFT based on your zodiac sign! Each NFT features a unique animation',
			github_url: 'some_url',
			site_url: 'some_site_url',
		},
		{
			id: 3,
			name: 'Music NFTs',
			image: '/images/icons8-done.gif',
			description:
				'Experience the excitement of a card duel game that is based on the unique attributes of various characters by NFTs',
			github_url: 'some_url',
			site_url: 'some_site_url',
		},
	];

	const web2Projects = [
		{
			id: 1,
			name: 'Sorting Visualiser',
			image: '/images/icons8-done.gif',
			description:
				'A tool that allows users to visualise and understand how different sorting algorithms work.Built using vanilla JS.',
			github_url: 'some_url',
			site_url: 'some_site_url',
		},
		{
			id: 2,
			name: 'Lose The “Very”',
			image: '/images/icons8-done.gif',
			description:
				'Spice up your vocabulary and avoid overusing the word "very."Use of OpenAI’s API along with react.js for frontend.',
			github_url: 'some_url',
			site_url: 'some_site_url',
		},
		{
			id: 3,
			name: 'Twitter Clone(Twitt3r)',
			image: '/images/icons8-done.gif',
			description:
				'Discover music-based NFTs with our marketplace! Destination for artists and music fans to buy, sell, and listen to music.',
			github_url: 'some_url',
			site_url: 'some_site_url',
		},
	];
	return (
		<section className='mt-10 flex flex-col justify-evenly min-h-screen items-center'>
			<div className='flex flex-col justify-evenly items-center'>
				<img
					src='/images/undraw_code.svg'
					alt='Person Image'
					className='w-10 h-10'
				/>
				<h2 className='text-2xl font-kalam'>My Projects</h2>
			</div>

			<h2 className='font-kalam text-lg'>Web3 projects</h2>
			<div className='grid grid-cols-3 gap-6 w-4/5'>
				{web3Projects.map((project) => {
					return (
						<Card
							name={project.name}
							image={project.image}
							description={project.description}
							github_url={project.github_url}
							site_url={project.site_url}
							key={project.id}
						/>
					);
				})}
			</div>
			<h2 className='font-kalam text-lg'>Web2 projects</h2>
			<div className='grid grid-cols-3 gap-6 w-4/5'>
				{web2Projects.map((project) => {
					return (
						<Card
							name={project.name}
							image={project.image}
							description={project.description}
							github_url={project.github_url}
							site_url={project.site_url}
							key={project.id}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
