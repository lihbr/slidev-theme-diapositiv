<!-- HEALTH:MID layout -->
<script setup lang="ts">
import { type PropType } from "vue";

import { usePip } from "../composables/usePip";

import Themify from "../components/Themify.vue";

const props = defineProps({
	class: {
		type: String as PropType<string>,
		default: "",
	},
});

const { current } = usePip();

defineExpose({ props, current });
</script>

<template>
	<Themify as="section" class="h-full relative flex items-stretch">
		<!-- pip-off -->
		<div
			v-if="current === 'off'"
			class="slidev-layout pip-off w-full relative p-12 max-h-full"
			:class="props.class"
		>
			<slot />
		</div>

		<template v-else>
			<!-- slide -->
			<div
				class="slidev-layout pip-on relative p-12 max-h-full"
				:class="[
					{
						'pip-small w-full': current === 'small',
						'pip-large w-3/5': current === 'large',
					},
					props.class,
				]"
			>
				<slot />
			</div>

			<!-- pip-large -->
			<figure
				v-if="current === 'large'"
				class="w-2/5 bg-$slidev-theme-primary"
			></figure>

			<!-- pip-small -->
			<figure
				v-if="current === 'small'"
				class="absolute bottom-4 right-4 border-b-16 border-$slidev-theme-primary"
			>
				<svg width="240" height="135">
					<rect width="240" height="135" />
				</svg>
			</figure>
		</template>
	</Themify>
</template>
