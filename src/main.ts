import { createApp } from 'vue'
import App from './App.vue'
import { store } from '@/store'
import { registerPlugins } from '@/plugins'
import router from '@/router/index'

const app = createApp(App).use(router).use(store)
registerPlugins(app)

app.mount('#app')
