/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/tw-elements/dist/js/**/*.js',
	],
	theme: {
		fontFamily: {
			special: ['Archivo Black', 'sans-serif'],
			base: ['Playfair Display', 'serif'],
			alt: ['Source Sans 3', 'sans-serif'],
		},
		extend: {
			colors: {
				'base-clr': '#fe7606',
				logo: '#b9c1cc',
				'base-white': '#fff',
				'base-black': '#111111',
				'base-yellow': '#f1c50e',
			},
			animation: {
				'slide-bottom':
					'slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
				scale: 'scale 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
			},
			keyframes: {
				'slide-bottom': {
					'0%': {
						transform: 'translateY(-25%)',
						'-webkit-transform': 'translateY(-25%)',
					},
					'100%': {
						'-webkit-transform': 'translateY(0)',
						transform: 'translateY(0)',
					},
				},
				scale: {
					'0%': {
						transform: 'scale(1)',
						'-webkit-transform': 'scale(1)',
					},
					'100%': {
						'-webkit-transform': 'scale(1.2)',
						transform: 'scale(1.2)',
					},
				},
			},
		},
	},
	plugins: [require('tw-elements/dist/plugin.cjs')],
	darkMode: 'class',
};
