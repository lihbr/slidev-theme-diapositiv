<!-- HEALTH:HIGH center -->
<template>
	<layout class="center flex">
		<div class="absolute top-12 left-12">
			<slot name="before" />
		</div>
		<div class="slot-default self-center w-full text-center">
			<slot />
		</div>
	</layout>
</template>

<style lang="pcss">
.slidev-layout.center {
	&:not(.pip-large) .slot-default {
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		img,
		svg {
			@apply mx-auto;
			max-width: 75%;
		}
	}

	img {
		@apply mx-auto;
	}
}
</style>
