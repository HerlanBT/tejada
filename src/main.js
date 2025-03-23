

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js';
import './assets/main.css';

import VueProgressBar from '@aacassandra/vue3-progressbar';

const options = {
    color: '#42b883',  // Color de la barra
    failedColor: 'red', // Color si falla la carga
    height: '3px'       // Altura de la barra de progreso
};



createApp(App).mount('#app');
const app = createApp(App);
app.use(VueProgressBar, options);
app.use(router);
app.mount('#app');

