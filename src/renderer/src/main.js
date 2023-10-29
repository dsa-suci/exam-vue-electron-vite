import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueAnimXyz from '@animxyz/vue3'
import '@animxyz/core'
import App from './App.vue'
import router from './router'

import './index.css'
const pinia = createPinia()

createApp(App).use(pinia).use(VueAnimXyz).use(router).mount('#app')
