<template>
	<div class="w-full h-10 bg-green-400 text-semibold">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</div>
	<router-view />
</template>

<style lang="scss">
@import './styles.scss';
</style>
