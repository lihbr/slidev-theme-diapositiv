<template>
	<layout class="items flex">
		<div class="absolute">
			<slot />
		</div>
		<div
			class="self-center grid gap-6 text-center"
			:style="`grid-template-columns: repeat(${props.cols}, 1fr);`"
		>
			<slot name="items" />
		</div>
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
});

defineExpose({ props });
</script>
