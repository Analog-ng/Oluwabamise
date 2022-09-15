/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.{html,js}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		extend: {
			colors: {
				/* custom color */
				firstColor: '#3f63db',
				secondColor: '#eef2f5',
				firstColorLighter: '#5e3fcb',
				titleColor: '#B7990D',
				textColor: '#FFFFFF',
				textColorAlt: '#060a16',
				inputColor: '#b2c1f1',
				bodyColorLight: '#eceffb',
				bodyColorDark: '#131e42',
				darkColor: '#060a16'
			},

			backgroundImage: {
				'contact-img': "url('../img/contactBG.jpg')"
			}
		}
	},
	plugins: [require('tailwind-scrollbar-hide')]
};
