import { createStore } from 'vuex';

export const store = createStore({})

// import { createStore, Store, useStore as vuexUseStore } from 'vuex';
// import { InjectionKey } from 'vue';

// interface State {
// }

// export const key: InjectionKey<Store<State>> = Symbol()

// export const store = createStore<State>({
//   state: () => ({
//     liters: null,
//     kilometers: null,
//     kilometersPerLiter: '',
//   }),
//   getters: {
//     getKilometersPerLiter(): string {
//       return this.kilometersPerLiter + ' KM/L'
//     },
//   },
//   actions: {
//     calculate(liters: number, kilometers: number) {
//       let result = kilometers / liters
//       this.kilometersPerLiter = result.toPrecision(3)
//     }
//   }
// })

// export function useStore(): Store<State> {
//   return vuexUseStore(key)
// }
