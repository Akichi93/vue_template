import { createApp } from 'vue'
import router from './routers'
import './style.css'
import User from './db/User.js';
import App from './App.vue';
import '@vueform/multiselect/themes/default.css'; 

window.User = User

createApp(App)
    .use(router)
    .mount('#app')

