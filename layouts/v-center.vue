<template>
  <div class="slidev-layout v-center">
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>

<style>
.slidev-layout.v-center {
	@apply h-full grid;
}
</style>
