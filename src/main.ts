import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { createPinia } from 'pinia'
import { createWebHistory } from 'vue-router'
import App from './App.vue'
import createRouter from './router'

const pinia = createPinia()

const router = createRouter(createWebHistory())

// import CSS resources
// import './style.css'
import 'primevue/resources/primevue.min.css'            // core 
import 'primevue/resources/themes/saga-blue/theme.css'  // theme
import 'primeicons/primeicons.css'                      // icons
import 'primeflex/primeflex.css'          // PrimeFlex
import Tooltip from 'primevue/tooltip';

createApp(App).use(router).use(pinia).use(PrimeVue).directive('tooltip', Tooltip).mount('#app')
