<!-- HEALTH:HIGH cover -->
<template>
	<layout class="cover !p-8 text-slate-600 dark:(text-cream-600)">
		<div class="flex h-full border border-16 border-$slidev-theme-primary">
			<div class="self-center text-center w-full">
				<slot />
			</div>
		</div>
	</layout>
</template>

<style lang="pcss">
.slidev-layout.cover {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		@apply text-slate dark:(text-cream);
	}
}
</style>
