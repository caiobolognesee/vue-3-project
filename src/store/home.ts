import { createStore } from 'vuex';

export const store = createStore({})


// import { createStore, Store, useStore as vuexUseStore } from 'vuex';
// import { InjectionKey } from 'vue';

// interface State {
// }

// export const key: InjectionKey<Store<State>> = Symbol()

// export const store = createStore<State>({
//   state: () => ({
//     home: 'aaaaaaaaaaaaaaaaaaaaaa',
//     rules: [
//       (email: String) => {
//         if (email) return true

//         return 'Digite o email!'
//       },
//     ],
//   }),

//   getters: {
//     user(state) {
//       let home = state.home
//       return { home }
//     },
//   },

//   actions: {
//     saveHome(home: string) {
//       this.home = home
//     },
//   }
// })

// export function useStore(): Store<State> {
//   return vuexUseStore(key)
// }

