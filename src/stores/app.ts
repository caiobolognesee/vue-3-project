import { defineStore } from 'pinia'

export const appStore = defineStore({
  id: 'app',
  state: () => ({
    email: [] as string[],
    password: [] as string[],
  }),
})


