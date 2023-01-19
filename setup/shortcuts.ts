import {
	type NavOperations,
	type ShortcutOptions,
	defineShortcutsSetup,
} from "@slidev/types";

import { usePip } from "../composables/usePip";

export default defineShortcutsSetup(
	(_nav: NavOperations, base: ShortcutOptions[]) => {
		return [
			...base,
			{
				key: "ControlLeft+Backquote",
				fn: () => {
					usePip().cycle();
				},
				autoRepeat: true,
			},
		];
	},
);
