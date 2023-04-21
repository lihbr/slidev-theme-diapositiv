<!-- HEALTH:MID poll -->
<script setup lang="ts">
import { injectionSlidevContext } from "@slidev/client/constants.ts";
import { type PropType, inject, onUnmounted, watch } from "vue";

import { usePoll } from "../composables/usePoll";

const props = defineProps({
	id: {
		type: String as PropType<string>,
		required: true,
	},
	choices: {
		type: Array as PropType<number[]>,
		required: true,
	},
});

const { start, stop, results } = usePoll(props.id);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const ctx = inject(injectionSlidevContext)!;
watch(
	() => ctx.nav.route,
	() => {
		if (
			ctx.nav.currentLayout === "poll" &&
			// @ts-expect-error - Missing type
			ctx.nav.route?.meta?.slide?.frontmatter?.id === props.id
		) {
			start();
		} else {
			stop();
		}
	},
	{ immediate: true },
);

onUnmounted(() => {
	stop();
});

defineExpose({ props });
</script>

<template>
	<layout class="poll">
		<slot name="before" />
		<div
			class="slot-default self-center w-full grid gap-x-6 text-center mt-6"
			:style="{
					gridTemplateColumns: `repeat(${props.choices.length}, 1fr)`,
				}">
			<slot />
		</div>
		<div
			class="self-center w-full grid gap-x-6 text-center mt-6"
			:style="{
					gridTemplateColumns: `repeat(${props.choices.length}, 1fr)`,
				}">
			<h3 v-for="choice in choices"
				:key="choice">
				{{ results[choice] || 0 }}
			</h3>
		</div>
	</layout>
</template>

<style lang="pcss">
.slidev-layout.poll:not(.pip-large):not(.text-center) .slot-default {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		max-width: 75%;
	}
}
</style>
