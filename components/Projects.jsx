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
			name: 'BIZ Token+Faucet+Burner',
			image: '/images/project-images/3.png',
			tag: '#WEB3',
			description:
				'This project is an ERC20 token with a faucet, burner, and Chainlink-powered automated token burning capabilities.',
			github_url: 'https://github.com/SrinivasJoshi/BizToken',
			site_url: 'https://biz-token.vercel.app/',
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
			name: 'Mr.Keys',
			image: '/images/project-images/5.png',
			tag: '#CLI',
			description:
				"I made a cool password manager over the weekend. It's a simple command-line tool that I built using node and express.",
			github_url: 'https://github.com/SrinivasJoshi/password-manager',
			site_url: '',
		},
		{
			id: 6,
			name: 'CommitEase',
			image: '/images/project-images/6.png',
			tag: '#ChatGPT',
			description:
				'Simple text rewriter chrome extension using chatGPT, just more humanised. Usage : tweets and text like this ;)',
			github_url: 'https://github.com/SrinivasJoshi/CommitEase',
			site_url: '',
		},
	];
	return (
		<section
			id='work'
			className='mt-10 flex flex-col justify-evenly min-h-screen items-center'>
			<div className='flex flex-col justify-evenly items-center mb-10'>
				<img
					src='/images/undraw_code.svg'
					alt='Person Image'
					className='w-10 h-10'
				/>
				<h2 className='text-2xl font-kalam'>My Projects</h2>
			</div>

			<div className='grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-12 w-4/5'>
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
