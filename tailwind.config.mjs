/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'bg': '#090F12',
				'primary': '#A6C6D0',
				'accent': '#746AB0',
				'secondary': '#373968',
				'text': '#E2EBF0',
				'success': '#22C55E',
				'bg-secondary': '#131F25',
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
