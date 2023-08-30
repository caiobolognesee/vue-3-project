import { defineStore } from 'pinia'

export const spendingAverageStore = defineStore('spendingAverage', {
  state: () => ({
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
  }),
  getters: {
    getKilometersPerLiter: (state): number => {
      return state.kilometersPerLiter
    },
  },
  actions: {
    calculate(kilometers: number, liters: number) {
      this.kilometersPerLiter = kilometers / liters
    }
  }
})
