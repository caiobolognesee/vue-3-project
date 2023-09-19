import { defineStore } from 'pinia'

export const dashboardStore = defineStore('dashboard', {
  state: () => ({
    dashboard: '',
    rules: [
      (email: String) => {
        if (email) return true

        return 'Digite o email!'
      },
    ],
  }),

  getters: {
    user(state) {
      let dashboard = state.dashboard
      return { dashboard }
    },
  },

  actions: {
    saveDashboard(dashboard: string) {
      this.dashboard = dashboard
    },
  }
})
