// import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
// 라우터 인스턴스 사용 등록
app.use(router);
app.mount('#app');
