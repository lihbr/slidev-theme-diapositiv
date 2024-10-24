import type { ShikiSetupReturn } from "@slidev/types"
import { defineShikiSetup } from "@slidev/types"

import farben from "theme-farben/farben.json"

export default defineShikiSetup((): ShikiSetupReturn => {
	return {
		// @ts-expect-error - Invalid inferred type from JSON
		theme: farben,
	}
})
