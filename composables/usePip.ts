import { type Ref, computed, ref } from "vue";
// @ts-expect-error from slidev
import configs from "/@slidev/configs";

const pip = ["inherit", "off", "small", "large"] as const;

const mode = ref<typeof pip[number]>(pip[0]);

export const usePip = (): {
	mode: Ref<typeof pip[number]>;
	current: Ref<Exclude<typeof pip[number], typeof pip[0]>>;
	cycle: () => void;
} => {
	const current = computed<Exclude<typeof pip[number], typeof pip[0]>>(() => {
		if (mode.value !== "inherit") {
			return mode.value;
		} else if (
			process.env.NODE_ENV === "development" &&
			["small", "large"].includes(configs.themeConfig.pip)
		) {
			return configs.themeConfig.pip;
		} else {
			return "off";
		}
	});

	const cycle = (): void => {
		mode.value = pip[(pip.indexOf(mode.value) + 1) % pip.length];
		// eslint-disable-next-line no-console
		console.info("usePip.ts: cycled to mode `%s`", mode.value);
	};

	return {
		mode,
		current,
		cycle,
	};
};
