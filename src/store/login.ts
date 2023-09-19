import { defineStore } from 'pinia'

export const loginStore = defineStore('login', {
  state: () => ({
    user: '',
    password: '',
    canLogin: false,
    loginInvalidMessage: ''
  })
})
