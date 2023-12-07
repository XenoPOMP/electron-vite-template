import { type Config } from 'tailwindcss';

import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,scss}'],

	theme: {
		extend: darkTheme,
	},

	plugins: [],
};

export default config;
