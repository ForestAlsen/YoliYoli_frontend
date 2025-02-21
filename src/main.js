import './assets/base.scss'
import './assets/icon/iconfont.css'
import './assets/icon/iconfont.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueCookies from 'vue-cookies'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.config.globalProperties.VueCookies = VueCookies
// app.config.globalProperties.MaxWidth = 2000
// app.config.globalProperties.MinWidth = 1250
app.mount('#app')
