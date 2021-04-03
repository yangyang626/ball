import { createApp } from 'vue'
import initElement from '@/common/element';
import App from './App.vue'
import router from './router/index';


let app = createApp(App)
initElement(app);
app.use(router).mount('#app');
