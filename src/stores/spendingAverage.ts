import { defineStore } from 'pinia'

export const spendingAverageStore = defineStore('spendingAverage', {
  state: () => ({
    liters: null,
    kilometers: null,
    kilometersPerLiter: null,
    rules: [
      (liters: String) => {
        if (liters) return true

        return 'Insira quantos litros foram gastos!'
      },
      (kilometers: String) => {
        if (kilometers) return true

        return 'Insira quantos quilometros foram percorridos!'
      },
    ],
  }),
  actions: {
    calculate(kilometers: number, liters: number, kilometersPerLiter: number) {
      kilometersPerLiter = kilometers/liters
    }
  }
})
