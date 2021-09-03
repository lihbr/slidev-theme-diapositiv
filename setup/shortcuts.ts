import { defineShortcutsSetup, NavOperations } from "@slidev/types";

import { usePip } from "../composables/usePip";

export default defineShortcutsSetup((_nav: NavOperations) => {
	return [
		{
			key: "ControlLeft+Backquote",
			fn: () => {
				usePip().cycle();
			},
			autoRepeat: true,
		},
	];
});
