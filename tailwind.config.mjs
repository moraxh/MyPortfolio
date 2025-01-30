/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'bg': 'var(--bg-color, #090F12)',
				'primary': 'var(--primary-color, #A6C6D0)',
				'accent': 'var(--accent-color, #746AB0)',
				'secondary': 'var(--secondary-color, #373968)',
				'text': 'var(--text-color, #E2EBF0)',
				'success': 'var(--success-color, #22C55E)',
				'danger': 'var(--danger-color, #FF0000)',
				'placeholder': 'var(--placeholder-color, #292929)',
				'bg-secondary': 'var(--bg-secondary-color, #131F25)',
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
			},
		},
	},
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.filter-success-drop-shadow': {
          filter: 'drop-shadow(0 0 5px #22C55E)',
        },
				  '.filter-danger-drop-shadow': {
          filter: 'drop-shadow(0 0 5px #FF0000)',
        },
      }, ['responsive', 'hover']);
    },
  ],
}
