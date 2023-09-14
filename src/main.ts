import App from './App.vue'
import { createApp } from 'vue'
import { pinia } from '@/store'

import { registerPlugins } from '@/plugins'

const app = createApp(App).use(pinia)
registerPlugins(app)

app.mount('#app')
