/* eslint-disable @typescript-eslint/no-unused-vars */
import { ActionTree, GetterTree, MutationTree } from "vuex";
import { RootState } from ".";

export interface Counter {
    count: number;
}

// root state object.
// each Vuex instance is just a single state tree.
export const counterState: Counter = {
    count: 0,
};

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
export const counterMutations = <MutationTree<Counter>>{
    increment(state) {
        state.count++;
    },
    decrement(state) {
        state.count--;
    },
};

// actions are functions that cause side effects and can involve
// asynchronous operations.
export const counterActions = <ActionTree<Counter, RootState>>{
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd({ commit, state }): void {
        if ((state.count + 1) % 2 === 0) {
            commit('increment');
        }
    },
    incrementAsync({ commit }): Promise<void> {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                commit('increment');
                resolve();
            }, 1000);
        });
    },
};

// getters are functions.
export const counterGetters = <GetterTree<Counter, RootState>>{
    evenOrOdd(state): string {
        return state.count % 2 === 0 ? 'even' : 'odd';
    }
};
