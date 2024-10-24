<script lang="ts" setup>
import Title from "./title.vue"

defineProps<{
	xAlign?: "left" | "right"
	xTheme?: string
}>()
</script>

<template>
	<Title :align="xAlign" :theme="xTheme">
		<slot />
	</Title>
</template>
