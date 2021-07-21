import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

export interface State {
	count: number;
}

// root state object.
// each Vuex instance is just a single state tree.
const state: State = {
	count: 0,
};

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
	increment(state): void {
		state.count++;
	},
	decrement(state): void {
		state.count--;
	},
};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
	increment: ({ commit }) => commit('increment'),
	decrement: ({ commit }) => commit('decrement'),
	incrementIfOdd({ commit, state }) {
		if ((state.count + 1) % 2 === 0) {
			commit('increment');
		}
	},
	incrementAsync({ commit }) {
		return new Promise<void>((resolve) => {
			setTimeout(() => {
				commit('increment');
				resolve();
			}, 1000);
		});
	},
};

// getters are functions.
const getters = {
	evenOrOdd: (state) => (state.count % 2 === 0 ? 'even' : 'odd'),
};

export const key: InjectionKey<Store<State>> = Symbol();
export const store = createStore<State>({
	state,
	getters,
	actions,
	mutations,
});

// define your own `useStore` composition function
export function useStore(): Store<State> {
	return baseUseStore(key);
}
