<template>
	<layout class="v-center flex">
		<div class="self-center w-full">
			<slot />
		</div>
	</layout>
</template>

<script setup lang="ts">
import Layout from "./_layout.vue";
</script>

<style>
.slidev-layout.v-center:not(.pip-large):not(.text-center) {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		max-width: 75%;
	}
}
</style>
