/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			//prettier-ignore
			'bblack': '#01010c',
			//prettier-ignore
			'wwhite':'#fafafa',
		},
		fontFamily: {
			varela: 'Varela',
			kalam: 'Kalam',
		},
	},
	plugins: [],
};
