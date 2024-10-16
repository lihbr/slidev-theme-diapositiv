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
		hfig
		class="interaction flex items-center justify-center"
		:class="{
			'text-right': _align === 'right',
		}"
	>
		<div class="w-2/3 translate-y-[-7px] space-y-8">
			<slot />
		</div>
	</layout>
</template>

<style scoped>
:deep(.heading-h1), :deep(h1) {
	@apply text-theme
}
</style>
