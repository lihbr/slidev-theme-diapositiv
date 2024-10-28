import { defineConfig } from "vite"

export default defineConfig({
	server: {
		proxy: {
			"^/assets/fonts/.*": "https://lihbr.com",
		},
	},
})
