const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			colors: {
				'cyber-100': '#FD19AD',
				'cyber-200': '#EA1AB4',
				'cyber-300': '#D71ABB',
				'cyber-400': '#C41BC2',
				'cyber-500': '#B21CC9',
				'cyber-600': '#9F1CCF',
				'cyber-700': '#8C1DD6',
				'cyber-800': '#791DDD',
				'cyber-900': '#661EE4'
			}
		},
	},
	plugins: [],
};

module.exports = config;
