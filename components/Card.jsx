import React from 'react';

const Card = (props) => {
	return (
		<div className='border border-wwhite rounded-lg flex flex-col items-center'>
			<img src={props.image} alt='Project Image' className='rounded-lg' />
			<h3 className='text-lg font-kalam my-3'>{props.name}</h3>
			<div className='flex justify-evenly items-center my-4'>
				<a href={props.github_url}>
					<img src='/GITHUB_ICON' alt='Github Icon' />
				</a>
				<a href={props.site_url}>
					<img src='/=SITE_URL_IMAGE' alt='Github Icon' />
				</a>
			</div>
			<p className='text-center px-3 mb-2'>{props.description}</p>
		</div>
	);
};

export default Card;
