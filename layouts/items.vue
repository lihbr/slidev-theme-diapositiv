<!-- HEALTH:MID items -->
<script setup lang="ts">
import { type PropType } from "vue";

const props = defineProps({
	cols: {
		type: Number as PropType<number>,
		default: 4,
	},
	rows: {
		type: Number as PropType<number>,
		default: 1,
	},
	gap: {
		type: String as PropType<string>,
		default: "gap-x-6 gap-y-12",
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
				class="slot-items grid text-center"
				:class="[{ 'items-center': props.centered }, props.gap]"
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

<style lang="pcss">
.slidev-layout.items {
	.slot-items {
		& > svg,
		& > div > svg {
			@apply w-full h-16;
		}

		& > div > svg ~ * {
			@apply mt-6;
		}
	}
}
</style>
