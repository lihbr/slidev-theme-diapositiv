<template>
	<layout class="items flex">
		<figure class="self-center w-full">
			<figcaption
				class="mb-4"
				:class="{ 'absolute top-12 left-12': props.fixed }"
			>
				<slot />
			</figcaption>
			<div
				class="slot-items grid gap-x-6 gap-y-12 text-center"
				:style="{
					gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
					gridTemplateRows: `repeat(${props.rows}, 1fr)`,
				}"
			>
				<slot name="items" />
			</div>
		</figure>
	</layout>
</template>

<script setup lang="ts">
import { PropType } from "vue";

import Layout from "./_layout.vue";

const props = defineProps({
	cols: {
		type: Number as PropType<number>,
		default: 4,
	},
	rows: {
		type: Number as PropType<number>,
		default: 1,
	},
	fixed: {
		type: Boolean as PropType<boolean>,
		default: true,
	},
});

defineExpose({ props });
</script>

<style>
.slidev-layout.items {
	.slot-items {
		font-size: 1rem;

		& > svg,
		& > div > svg {
			@apply w-full h-16 mb-4;
		}
	}
}
</style>
