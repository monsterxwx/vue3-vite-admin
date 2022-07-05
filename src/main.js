import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import './styles/index.scss' // 加载全局样式
import directives from '@/directives'
import { setupPlugins } from './plugins'

const app = createApp(App)
setupPlugins(app)
app.use(router).use(directives).mount('#app')
