<!-- HEALTH:HIGH footnote -->
<template>
	<footer
		class="
			footnote
			px-12
			pb-12
			absolute
			bottom-0
			left-0
			w-full
			text-xs
			font-300
			text-cream-100
			hover:text-slate
			dark:(text-slate-100
			hover:text-cream)
			transition-colors
		"
	>
		<hr class="mb-3 border-inherit" />
		<slot />
	</footer>
</template>
