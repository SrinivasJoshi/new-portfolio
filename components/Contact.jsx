import React, { useState } from 'react';

const Contact = () => {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const sendMessage = () => {
		if (!email || !message) {
			alert('Empty input!');
			return;
		}
		const body = {
			email,
			message,
		};
		// SEND USING FETCH API
	};

	return (
		<div className='min-h-screen flex flex-col justify-evenly py-10 items-center text-center'>
			<div className='flex flex-col justify-evenly items-center mb-20'>
				<img
					src='/images/undraw_envelope.svg'
					alt='Person Image'
					className='w-10 h-10 mb-5'
				/>
				<h2 className='text-xl font-kalam'>Contact Me</h2>
			</div>

			<div className='flex flex-col p-2'>
				<input
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					type='text'
					name='email'
					id='email'
					placeholder='Enter your Email ID '
					className='outline-0 border border-wwhite rounded-md bg-bblack px-3 py-2 mb-5'
				/>
				<textarea
					onChange={(e) => {
						setMessage(e.target.value);
					}}
					name='message'
					id='message'
					cols='30'
					rows='10'
					className='outline-0 border border-wwhite rounded-md bg-bblack px-3 py-2'
					placeholder='Enter your Message'></textarea>
			</div>
			<button
				onClick={sendMessage}
				className='mt-5 border border-wwhite px-3 py-2 w-fit rounded-lg font-kalam font-bold'>
				Send
			</button>
		</div>
	);
};

export default Contact;
