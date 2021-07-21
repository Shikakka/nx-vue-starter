<template>
	<div class="flex flex-col items-center">
		<h2 class="font-semibold text-xl">
			Clicked: {{ count }} times, count is {{ evenOrOdd }}.
		</h2>

		<div class="grid grid-cols-2 gap-2">
			<button class="py-2 px-8 bg-blue-500 text-white" @click="increment">
				+
			</button>
			<button class="py-2 px-8 bg-blue-500 text-white" @click="decrement">
				-
			</button>
			<button
				class="py-2 px-8 bg-blue-500 text-white"
				@click="incrementIfOdd"
			>
				Increment if odd
			</button>
			<button
				class="py-2 px-8 bg-blue-500 text-white"
				@click="incrementAsync"
			>
				Increment async
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from './../../store';

export default defineComponent({
	name: 'Counter',
	components: {},
	setup() {
		const store = useStore();

		return {
			count: computed(() => store.state.count),
			evenOrOdd: computed(() => store.getters.evenOrOdd),
			increment: () => store.dispatch('increment'),
			decrement: () => store.dispatch('decrement'),
			incrementIfOdd: () => store.dispatch('incrementIfOdd'),
			incrementAsync: () => store.dispatch('incrementAsync'),
		};
	},
});
</script>
