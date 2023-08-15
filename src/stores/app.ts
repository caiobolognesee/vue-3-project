import { defineStore } from 'pinia'

export const appStore = defineStore('app', {
  state: () => ({
    email: '',
    password: '',
  }),

  getters: {
    user(state) {
        let email = state.email
        let password = state.password
      return { email, password }
    },
  },

  actions: {
    saveLogin(email: string, password: string) {
      this.email = email,
      this.password = password
    },
  }
})


