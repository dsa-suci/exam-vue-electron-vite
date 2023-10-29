import { defineStore } from 'pinia'

export const useRecognitionStore = defineStore({
  id: 'recognition',
  state: () => ({
    foto: '',
    time: 4,
    ambilFoto: false,
    selesai: false,
    extended: false
  })
})
