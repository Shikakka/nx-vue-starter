<template>
	<div>
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
		<Counter />
	</div>
</template>

<script>
import { defineComponent } from 'vue';

import HelloWorld from './../components/HelloWorld.vue';
import Counter from './../components/counter/Couter.vue';

export default defineComponent({
	name: 'Home',
	components: {
		HelloWorld,
		Counter,
	},
});
</script>
