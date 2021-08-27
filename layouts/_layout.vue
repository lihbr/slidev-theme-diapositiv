<template>
	<themify class="slidev-layout p-12 h-full relative">
		<slot />
		<figure
			class="absolute bottom-4 right-4 border-b-16 border-$slidev-theme-primary"
			v-if="dev && $slidev.themeConfigs.pip"
		>
			<svg width="240" height="135">
				<rect width="240" height="135" />
			</svg>
		</figure>
	</themify>
</template>

<script setup lang="ts">
import Themify from "../components/Themify.vue";

const dev = process.env.NODE_ENV === "development";

defineExpose({ dev });
</script>
