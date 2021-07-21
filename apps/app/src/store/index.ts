import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

import { counterState, counterGetters, counterActions, counterMutations, Counter } from './counter';
import { nameState, nameGetters, nameActions, nameMutations, Name } from './name';

export interface RootState extends Counter, Name { };
type CombinedStore = Store<RootState>;

export const key: InjectionKey<CombinedStore> = Symbol();
export const store = createStore<RootState>({
	state: { ...counterState, ...nameState },
	getters: { ...counterGetters, ...nameGetters },
	actions: { ...counterActions, ...nameActions },
	mutations: { ...counterMutations, ...nameMutations },
});

// define your own `useStore` composition function
export function useStore(): CombinedStore {
	return baseUseStore(key);
}
