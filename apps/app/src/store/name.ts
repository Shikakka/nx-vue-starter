/* eslint-disable @typescript-eslint/no-unused-vars */
import { ActionTree, GetterTree, MutationTree } from "vuex";
import { RootState } from ".";

export interface Name {
    firstName: string;
    lastName: string;
}

// root state object.
// each Vuex instance is just a single state tree.
export const nameState: Name = {
    firstName: 'Shi',
    lastName: 'Kakka'
};

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
export const nameMutations = <MutationTree<Name>>{
    clearNames(state) {
        state.firstName = state.lastName = '';
    },
    setFirstName(state, firstName) {
        state.firstName = firstName;
    },
    setLastName(state, lastName) {
        state.lastName = lastName
    }
};

// actions are functions that cause side effects and can involve
// asynchronous operations.
export const nameActions = <ActionTree<Name, RootState>>{
    async loadName({ commit }, url: string) {
        const response = await fetch(url);
        if (response.ok) {
            const names = await response.json();
            commit('setFirstName', names.firstName);
            commit('setLastName', names.lastName);
            return names;
        } else {
            throw 'Invalid URL';
        }
    },
    setFirstName: ({ commit }, firstName) => commit('setFirstName', firstName),
    setLastName: ({ commit }, firstName) => commit('setLastName', firstName),
};

// getters are functions.
export const nameGetters = <GetterTree<Name, RootState>>{
    fullName(state, getters, rootState, rootGetters): string {
        return state.firstName + ' ' + state.lastName;
    },
    firstName(state, getters, rootState, rootGetters): string {
        return state.firstName;
    },
    lastName(state, getters, rootState, rootGetters): string {
        return state.lastName;
    }
};
