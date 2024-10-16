<script lang="ts" setup>
import { onSlideEnter, onSlideLeave } from "@slidev/client"
import { usePoll } from "../composables/usePoll"

const props = defineProps<{
	id: string
	left: { id: string, href: string, label: string }
	right: { id: string, href: string, label: string }
}>()

const { start, stop, results } = usePoll(props.id)

onSlideEnter(start)
onSlideLeave(stop)
</script>

<template>
	<layout vfig class="poll grid grid-cols-3 items-center">
		<qr-code :href="left.href" class="w-3/4 ml-auto">
			{{ left.label }}
		</qr-code>
		<div class="px-8 space-y-8">
			<slot />
			<div class="flex justify-between">
				<span class="heading-1">{{ results[left.id] || 0 }}</span>
				<span class="heading-1">{{ results[right.id] || 0 }}</span>
			</div>
		</div>
		<qr-code :href="right.href" class="w-3/4 text-right">
			{{ right.label }}
		</qr-code>
	</layout>
</template>

<style scoped>
:deep(.heading-h2), :deep(h2) {
	@apply text-theme text-center
}
</style>
