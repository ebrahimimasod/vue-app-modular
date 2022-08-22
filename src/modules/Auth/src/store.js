import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'authCounter',
  state: () => ({
    authCounter: 0
  }),
  getters: {
    doubleCount: (state) => state.authCounter * 2
  },
  actions: {
    increment() {
      this.authCounter++
    }
  }
})
