import { createApp } from 'vue'
// 引入 element-plus 插件
import ElementPlus from 'element-plus'
// @ts-expect-error 避免编译失败
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 引入 element-plus 样式
import 'element-plus/dist/index.css'
import './style.css'
// import App from './App.vue'
import App from '@/App.vue'

// createApp(App).mount('#app')
// 获取应用实例对象
const app = createApp(App)
// app.use(ElementPlus)
app.use(ElementPlus, {
    locale: zhCn,
})
// 获取环境变量
console.log(import.meta.env)
// 挂载应用
app.mount('#app')
