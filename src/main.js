import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import 'vue-toastification/dist/index.css'; 
import router from './router/index.js'

// createApp(App).use(router).mount('#app')

// const pinia = createPinia();
const app = createApp(App);

app.use(router);

app.mount('#app');
