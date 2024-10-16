import { defineConfig } from "unocss"

function alpha(hexa: string, alpha = 1) {
	return `${hexa}${`0${Number(Math.round(255 * alpha)).toString(16)}`.slice(-2)}`
}

export default defineConfig({
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			inherit: "inherit",
			theme: {
				"DEFAULT": "var(--color-theme)",
				"o-20": "var(--color-theme-o-20)",
				"100": "var(--color-theme-100)",
			},
			slate: {
				"DEFAULT": "#1f1919", // 800
				"o-20": alpha("#1f1919", 0.2),
				"900": "#131010",
				"700": "#2c2323",
				"200": "#7c6565",
				"100": "#8e7878",
				"50": "#a18e8e",
			},
			cream: {
				"DEFAULT": "#faf1f1", // 800
				"o-20": alpha("#faf1f1", 0.2),
				"900": "#fffefe",
				"700": "#f2e4e4",
				"200": "#b4a4a4",
				"100": "#ab9a9a",
				"50": "#a69191",
			},
			// o-20 used for tap highlight and inline code only
			navy: {
				"DEFAULT": "#54669c",
				"o-20": alpha("#54669c", 0.2),
				"100": "#8a98c3",
			},
			beet: {
				"DEFAULT": "#a54a5e",
				"o-20": alpha("#a54a5e", 0.2),
				"100": "#cc7e8f",
			},
			flamingo: {
				"DEFAULT": "#e84311",
				"o-20": alpha("#e84311", 0.2),
				"100": "#fc693c",
			},
			ochre: {
				"DEFAULT": "#f27502",
				"o-20": alpha("#f27502", 0.2),
				"100": "#ff922d",
			},
			butter: {
				"DEFAULT": "#ffb005",
				"o-20": alpha("#ffb005", 0.2),
				"100": "#ffbf34",
			},
			mantis: {
				"DEFAULT": "#759f53",
				"o-20": alpha("#759f53", 0.2),
				"100": "#a4c589",
			},
		},
	},
})
