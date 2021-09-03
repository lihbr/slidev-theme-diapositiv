<!-- HEALTH:MID items -->
<template>
	<layout class="items flex">
		<figure class="self-center w-full">
			<figcaption
				class="mb-4"
				:class="{ 'absolute top-12 left-12': props.fixed }"
			>
				<slot name="before" />
			</figcaption>
			<div
				class="slot-items grid gap-x-6 gap-y-12 text-center"
				:class="{ 'items-center': props.centered }"
				:style="{
					gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
					gridTemplateRows: `repeat(${props.rows}, 1fr)`,
				}"
			>
				<slot />
			</div>
		</figure>
		<slot name="after" />
	</layout>
</template>

<script setup lang="ts">
import { PropType } from "vue";

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
	centered: {
		type: Boolean as PropType<boolean>,
		default: false,
	},
});

defineExpose({ props });
</script>

<style>
.slidev-layout.items {
	.slot-items {
		& > svg,
		& > div > svg {
			@apply w-full h-16;
		}

		& > div > svg ~ * {
			@apply mt-4;
		}
	}
}
</style>
