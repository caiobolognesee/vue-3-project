import { defineStore } from 'pinia'

export const spendingAverageStore = defineStore('spendingAverage', {
  state: () => ({
    liters: null,
    kilometers: null,
    kilometersPerLiter: 0,
  }),
  getters: {
    getKilometersPerLiter: (state): Object => {
      console.log(state.kilometersPerLiter)
      return state.kilometersPerLiter + ' KM/L'
    },
  },
  actions: {
    calculate(kilometers: number, liters: number, kilometersPerLiter: any) {
      let result = liters / kilometers
      kilometersPerLiter = result.toPrecision(3)
    }
  }
})
