<script lang="ts" setup>
import { renderSVG } from "uqr"
import { computed } from "vue"

const props = defineProps<{
	href: string
}>()

const qrCode = computed(() => {
	return renderSVG(props.href, {
		ecc: "M",
		whiteColor: "#fff7f7",
		blackColor: "#131010",
	})
})
</script>

<template>
	<div class="qrcode flex flex-col gap-8">
		<a :href="href" target="_blank" rel="noopener noreferrer">{{ href.replace("https://", "") }}</a>
		<figure v-html="qrCode" />
		<slot />
	</div>
</template>
