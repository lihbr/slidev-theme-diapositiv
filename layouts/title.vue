<script setup lang="ts">
import { computed } from "vue"
import { useSlideContext } from "@slidev/client"

const props = defineProps<{
	align?: "left" | "right"
}>()

const { $slidev } = useSlideContext()

const _align = computed(() => {
	return props.align || !!($slidev.nav.currentSlideNo % 2) ? "left" : "right"
})
</script>

<template>
	<layout
		vfig
		fback
		class="title grid grid-cols-3 grid-auto-rows-[min-content] gap-y-8 gap-x-1"
		:class="{ 'text-right': _align === 'right' }"
	>
		<slot />
	</layout>
</template>

<style scoped>
:deep(.heading-h1), :deep(h1) {
	@apply grid-col-span-2
}

:deep(p) {
	@apply grid-row-start-2 grid-col-start-2
}

.text-right {
	& :deep(.heading-h1), & :deep(h1) {
		@apply grid-col-start-2
	}
}
</style>
