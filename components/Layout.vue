<script lang="ts" setup>
import { onSlideEnter } from "@slidev/client"
import { ref } from "vue"

defineProps<{
	vfig?: boolean
	hfig?: boolean
	nofig?: boolean
	ffront?: boolean
	theme?: string
}>()

const randomTheme = ref<string | undefined>(undefined)

onSlideEnter(() => {
	const themes = ["navy", "beet", "flamingo", "ochre", "butter", "mantis"]
	randomTheme.value = themes[Math.floor(Math.random() * themes.length)]
})
</script>

<template>
	<div class="layout relative h-full p-8 z-0" :class="theme || randomTheme">
		<slot />
		<Vfig v-if="!nofig && vfig" class="absolute inset-0 mx-8" :style="{ zIndex: ffront ? 'auto' : -1 }" />
		<Hfig v-if="!nofig && hfig" class="absolute inset-0" :style="{ zIndex: ffront ? 'auto' : -1 }" />
	</div>
</template>
