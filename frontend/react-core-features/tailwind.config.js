/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: ".4rem",
				xl: "2rem",
			},
			screens: {
				xl: "1100px",
			},
		},
		extend: {},
	},
	plugins: [],
};
