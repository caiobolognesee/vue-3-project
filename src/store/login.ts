import { defineStore } from 'pinia'

export const loginStore = defineStore('login', {
  state: () => ({
    user: '',
    password: '',
    canLogin: false,
    loginInvalidMessage: '',
    rules: [
      (email: String) => {
        if (email) return true

        return 'Digite o email!'
      },
      (password: String) => {
        if (password) return true

        return 'Digite a senha!'
      },
    ],
  })
})
