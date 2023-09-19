import { defineStore } from 'pinia'

export const homeStore = defineStore('home', {
  state: () => ({
    home: '',
    rules: [
      (email: String) => {
        if (email) return true

        return 'Digite o email!'
      },
    ],
  }),

  getters: {
    user(state) {
      let home = state.home
      return { home }
    },
  },

  actions: {
    saveHome(home: string) {
      this.home = home
    },
  }
})
