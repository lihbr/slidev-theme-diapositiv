<!-- HEALTH:HIGH sections -->
<script setup lang="ts">
import { type PropType } from "vue";

const props = defineProps({
	left: {
		type: String as PropType<string>,
		default: "1 1 0%",
	},
	right: {
		type: String as PropType<string>,
		default: "1 1 0%",
	},
});

defineExpose({ props });
</script>

<template>
	<layout class="sections flex gap-6">
		<div class="left" :style="{ flex: props.left }">
			<slot />
		</div>
		<div class="right" :style="{ flex: props.right }">
			<slot name="right" />
		</div>
	</layout>
</template>

<style lang="pcss">
.slidev-layout.sections.pip-large {
	@apply flex-col;
}
</style>
