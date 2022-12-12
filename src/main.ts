import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import axiosInit from './core/net/response.interceptor';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import 'element-plus/dist/index.css';
import './styles/index.scss';

const app = createApp(App).use(store).use(router);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// app.config.globalProperties.axios
axiosInit(axios);
app.provide('axios', axios);
console.log('main Init');
app.mount('#app');
