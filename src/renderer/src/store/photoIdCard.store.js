import { defineStore } from 'pinia'

export const usePhotoIdCardStore = defineStore({
  id: 'photoIdCard',
  state: () => ({
    ktm: '',
    time: 4,
    ambilFoto: false,
    extended: false
  })
})
