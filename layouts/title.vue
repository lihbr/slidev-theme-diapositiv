<script setup lang="ts">
import { useSlideContext } from "@slidev/client"
import { computed } from "vue"

const props = defineProps<{
	centered?: boolean
	align?: "left" | "right"
	theme?: string
}>()

const { $slidev } = useSlideContext()

const _align = computed(() => {
	return props.align === "left" || (!props.align && !!($slidev.nav.currentSlideNo % 2)) ? "left" : "right"
})
</script>

<template>
	<layout
		vfig
		:theme="theme"
		class="title grid grid-cols-3 grid-auto-rows-[min-content] gap-y-8 gap-x-1"
		:class="{ 'text-right': _align === 'right', 'content-center': centered }"
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

.text-right:not(.content-center), .content-center:not(.text-right) {
	& :deep(.heading-h1), & :deep(h1) {
		@apply grid-col-start-2
	}
}
</style>
