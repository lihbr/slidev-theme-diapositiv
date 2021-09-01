<!-- HEALTH:HIGH v-center -->
<template>
	<layout class="v-center flex">
		<div class="absolute top-12 left-12">
			<slot name="before" />
		</div>
		<div class="self-center w-full">
			<slot />
		</div>
	</layout>
</template>

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
