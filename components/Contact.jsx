import React, { useState } from 'react';

const Contact = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');

	const sendMessage = () => {
		if (!email || !message || !name) {
			alert('Empty input!');
			return;
		}
		const data = {
			service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
			template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
			user_id: process.env.NEXT_PUBLIC_USER_ID,
			template_params: {
				from_name: name,
				from_email: email,
				message: message,
			},
		};
		console.log('posting data...');
		// SEND USING FETCH API
		fetch('https://api.emailjs.com/api/v1.0/email/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((res) => {
			if (res.status === 200) {
				alert('Message sent!!');
				setName('');
				setMessage('');
				setEmail('');
			} else {
				alert('Error Occured!');
			}
		});
	};

	return (
		<div
			className='min-h-screen flex flex-col justify-evenly py-6 md:py-10 items-center text-center'
			id='contact'>
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
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					type='text'
					name='email'
					id='email'
					placeholder='Enter your Email ID '
					className='outline-0 border border-wwhite rounded-md bg-bblack px-3 py-2 mb-5'
				/>
				<input
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					type='text'
					name='Name'
					id='Name'
					placeholder='Enter your Name'
					className='outline-0 border border-wwhite rounded-md bg-bblack px-3 py-2 mb-5'
				/>
				<textarea
					onChange={(e) => {
						setMessage(e.target.value);
					}}
					value={message}
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
