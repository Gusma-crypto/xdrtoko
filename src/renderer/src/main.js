import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import PrimeVue from 'primevue/config'

createApp(App).use(router).use(PrimeVue).mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
