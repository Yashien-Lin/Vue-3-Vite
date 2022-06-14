import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/styles/index.scss';
import 'element-plus/theme-chalk/dark/css-vars.css';

createApp(App).use(router).mount('#app')
