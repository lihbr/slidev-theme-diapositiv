<!-- HEALTH:HIGH qr-code -->
<script setup lang="ts">
import { type PropType, computed } from "vue";
import QRCode from "qrcode-svg";

const props = defineProps({
	content: {
		type: String as PropType<string>,
		required: true,
	},
	size: {
		type: Number as PropType<number>,
		default: 220,
	},
});

const figureContent = computed(() => {
	const svg = new QRCode({
		content: props.content,
		padding: 1,
		width: props.size,
		height: props.size,
		color: "#131010",
		background: "#fff7f7",
		ecl: "M",
		pretty: false,
	}).svg();

	return `${svg}
<figcaption>
	<a href="${props.content}" target="_blank" rel="noopener noreferrer">
		${props.content.replace("https://", "")}
	</a>
</figcaption>`;
});

defineExpose({ props });
</script>

<template>
	<div class="qrcode">
		<slot />
		<figure v-html="figureContent"></figure>
	</div>
</template>

<style lang="pcss">
.qrcode {
	figure svg {
		@apply mx-auto my-3;
	}
}
</style>
