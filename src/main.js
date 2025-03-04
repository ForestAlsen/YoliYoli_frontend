import './assets/base.scss'
import './assets/icon/iconfont.css'
import './assets/icon/iconfont.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueQrcode from 'vue-qrcode'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueCookies from 'vue-cookies'
import DialogComponent from './components/DialogComponent.vue'
import CoverComponent from './components/CoverComponent.vue'
import AvatarComponent from './components/AvatarComponent.vue'
import VideoCard from './components/VideoCard.vue'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.component('vue-qrcode', VueQrcode)
app.component('DialogComponent', DialogComponent)
app.component('CoverComponent', CoverComponent)
app.component('AvataComponent', AvatarComponent)
app.component('VideoCard', VideoCard)

/**
 * @description: 全局配置
 */
app.config.globalProperties.VueCookies = VueCookies
app.config.globalProperties.bodyMaxWidth = 2000
app.config.globalProperties.bodyMinWidth = 1250
app.config.globalProperties.bodyPadding = 150
app.config.globalProperties.imgSuffixName = '_suffixName.jpg'
app.mount('#app')
