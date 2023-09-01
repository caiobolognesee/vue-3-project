import { defineStore } from 'pinia'

const state = () => ({
  liters: null,
  kilometers: null,
  kilometersPerLiter: null as any,
  rules: [
    (liters: number) => {
      if (liters) return true

      return 'Insira quantos litros foram gastos!'
    },
    (kilometers: number) => {
      if (kilometers) return true

      return 'Insira quantos quilometros foram percorridos!'
    },
  ],
})

const getters = {
  getKilometersPerLiter: (state: { kilometersPerLiter: string }) => {
    return state.kilometersPerLiter + ' KM/L'
  },
}

const actions = {
  calculate(kilometers: number, liters: number, state: { kilometersPerLiter: string }) {
    let result = liters / kilometers
    state.kilometersPerLiter = result.toPrecision(3)
  }
}

const spendingAverageStore = {
  state,
  getters,
  actions
}

export function registerModule(store: { registerModule: (arg0: string, arg1: { state: () => { liters: null; kilometers: null; kilometersPerLiter: any; rules: (((liters: number) => true | "Insira quantos litros foram gastos!") | ((kilometers: number) => true | "Insira quantos quilometros foram percorridos!"))[] }; getters: { getKilometersPerLiter: (state: { kilometersPerLiter: string }) => string }; actions: { calculate(kilometers: number, liters: number, state: { kilometersPerLiter: string }): void } }) => void }) {
  store.registerModule('spendingAverageStore', spendingAverageStore)
}

export function unregisterModule(store: { unregisterModule: (arg0: string, arg1: any) => void }) {
  store.unregisterModule('spendingAverageStore', store)
}

export default spendingAverageStore
