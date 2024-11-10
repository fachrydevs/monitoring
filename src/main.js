import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import '@/assets/tailwind.css'
import 'remixicon/fonts/remixicon.css'
import '@/assets/global.css'

createApp(App).use(router).mount('#app')
