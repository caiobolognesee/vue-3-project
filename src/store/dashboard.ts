import { createStore } from 'vuex';

export const store = createStore({})

// import { createStore, Store, useStore as vuexUseStore } from 'vuex';
// import { InjectionKey } from 'vue';

// interface State {
// }

// export const key: InjectionKey<Store<State>> = Symbol()

// export const store = createStore<State>({
//   state: () => ({
//     dashboard: '',
//     rules: [
//       (email: String) => {
//         if (email) return true

//         return 'Digite o email!'
//       },
//     ],
//   }),

//   getters: {
//     user(state) {
//       let dashboard = state.dashboard
//       return { dashboard }
//     },
//   },

//   actions: {
//     saveDashboard(dashboard: string) {
//       this.dashboard = dashboard
//     },
//   }
// })

// export function useStore(): Store<State> {
//   return vuexUseStore(key)
// }
