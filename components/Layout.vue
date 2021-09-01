<!-- HEALTH:MID layout -->
<template>
	<themify as="section" class="h-full relative flex items-stretch">
		<!-- pip-off -->
		<div
			v-if="!dev || !['small', 'large'].includes($slidev.themeConfigs.pip)"
			class="slidev-layout pip-off w-full relative p-12"
			:class="props.class"
		>
			<slot />
		</div>

		<template v-else>
			<!-- slide -->
			<div
				class="slidev-layout pip-on relative p-12"
				:class="[
					{
						'pip-small w-full': $slidev.themeConfigs.pip === 'small',
						'pip-large w-3/5': $slidev.themeConfigs.pip === 'large',
					},
					props.class,
				]"
			>
				<slot />
			</div>

			<!-- pip-large -->
			<figure
				class="w-2/5 bg-$slidev-theme-primary"
				v-if="$slidev.themeConfigs.pip === 'large'"
			></figure>

			<!-- pip-small -->
			<figure
				class="
					absolute
					bottom-4
					right-4
					border-b-16 border-$slidev-theme-primary
				"
				v-if="$slidev.themeConfigs.pip === 'small'"
			>
				<svg width="240" height="135">
					<rect width="240" height="135" />
				</svg>
			</figure>
		</template>
	</themify>
</template>

<script setup lang="ts">
import { PropType } from "vue";

import Themify from "../components/Themify.vue";

const dev = process.env.NODE_ENV === "development";

const props = defineProps({
	class: {
		type: String as PropType<string>,
		default: "",
	},
});

defineExpose({ dev, props });
</script>
