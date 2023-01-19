<!-- HEALTH:HIGH themify -->
<script setup lang="ts">
import { type PropType } from "vue";

import { useRandomTheme } from "../composables/useRandomTheme";

const props = defineProps({
	as: {
		type: String as PropType<string>,
		default: "div",
	},
});

const { current } = useRandomTheme();

defineExpose({ props, current });
</script>

<template>
	<component :is="props.as" :class="`theme-${current}`">
		<slot />
	</component>
</template>
