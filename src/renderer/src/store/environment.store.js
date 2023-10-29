import { defineStore } from 'pinia'

export const useEnvironmentStore = defineStore({
  id: 'environment',
  state: () => ({
    vid: '',
    time: 4,
    mulaiRekam: false,
    selesaiRekam: false,
    rekam: false,
    extended: false
  })
})
