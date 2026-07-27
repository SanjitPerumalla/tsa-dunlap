import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { vMagnetic } from './directives/magnetic.js'

history.scrollRestoration = 'manual'

createApp(App).use(router).directive('magnetic', vMagnetic).mount('#app')
