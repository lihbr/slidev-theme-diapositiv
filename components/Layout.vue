<script lang="ts" setup>
import { onSlideEnter } from "@slidev/client"
import { ref } from "vue"

defineProps<{
	vfig?: boolean
	hfig?: boolean
	fback?: boolean
}>()

const theme = ref<string | undefined>(undefined)

onSlideEnter(() => {
	const themes = ["navy", "beet", "flamingo", "ochre", "butter", "mantis"]
	theme.value = themes[Math.floor(Math.random() * themes.length)]
})
</script>

<template>
	<div class="layout relative h-full p8 z-0" :class="theme">
		<slot />
		<Vfig v-if="vfig" class="absolute inset-0 mx-8" :style="{ zIndex: fback ? -1 : 'auto' }" />
		<Hfig v-if="hfig" class="absolute inset-0" :style="{ zIndex: fback ? -1 : 'auto' }" />
	</div>
</template>
