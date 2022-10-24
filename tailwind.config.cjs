/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		colors: {
			blue: '#00001A',
			white: {
				full: '#FFF',
				300: '#FFFDFA',
				600: '#C5C6CE',
			},
			grey: '#5E607A',
			red: '#F15D51',
			yellow: '#E9AA52'
		},
		fontFamily: {
			inter: ["'Inter'", 'sans-serif']
		},
	},
	plugins: []
};
