<script lang="ts" setup>
defineProps<{
	theme?: string
	ffront?: boolean
	nofig?: boolean
	full?: boolean
	centered?: boolean
}>()
</script>

<template>
	<layout :ffront="ffront" :theme="theme" :nofig="nofig" vfig class="default flex items-center justify-center">
		<div :class="{ 'w-2/3 !space-y-8': !full, '-m-8': full, 'flex flex-col items-center text-center': centered }">
			<slot />
		</div>
	</layout>
</template>
