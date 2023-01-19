import { type Ref, ref } from "vue";

enum Theme {
	Navy = "navy",
	Beet = "beet",
	Flamingo = "flamingo",
	Ochre = "ochre",
	Butter = "butter",
	Mantis = "mantis",
}

export const useRandomTheme = (): {
	shuffle: () => void;
	current: Ref<Theme>;
} => {
	const current = ref<Theme>("" as Theme);

	const shuffle = () => {
		const possibleThemes = Object.values(Theme).filter(
			(theme) => theme !== current.value,
		);

		current.value =
			possibleThemes[Math.floor(Math.random() * possibleThemes.length)];
	};

	shuffle();

	return {
		current,
		shuffle,
	};
};
