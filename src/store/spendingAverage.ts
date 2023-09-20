import { defineStore } from 'pinia'

export const spendingAverageStore = defineStore('spendingAverage', {
  state: () => ({
    liters: null,
    kilometers: null,
    kilometersPerLiter: '',
  }),
  getters: {
    getKilometersPerLiter(): string {
      return this.kilometersPerLiter + ' KM/L'
    },
  },
  actions: {
    calculate(liters: number, kilometers: number) {
      let result = kilometers / liters
      this.kilometersPerLiter = result.toPrecision(3)
    }
  }
})
