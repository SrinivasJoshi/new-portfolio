import React from 'react';

const Card = (props) => {
	return (
		<div className='border border-wwhite rounded-lg flex flex-col items-center'>
			<img src={props.image} alt='Project Image' className='rounded-lg' />
			<h3 className='text-xl font-bold font-kalam my-3'>{props.name}</h3>
			<div className='flex justify-between items-center w-3/5 mb-3'>
				<p className='border border-wwhite px-2 py-1 rounded-xl text-xs'>
					{props.tag}
				</p>
				<div className='flex justify-evenly items-center'>
					<a href={props.github_url}>
						<img
							src='/images/github-logo.png'
							alt='Github Icon'
							className='w-8 h-8'
						/>
					</a>
					<a href={props.site_url}>
						<img
							src='/images/link-logo.png'
							alt='link to website'
							className='w-8 h-8'
						/>
					</a>
				</div>
			</div>

			<p className='text-center px-3 mb-4'>{props.description}</p>
		</div>
	);
};

export default Card;
