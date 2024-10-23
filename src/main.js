import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import vuetify from './plugins/vuetify'
import { GlobalVariables } from './globalviariables'
import store from './store';

import Toast from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; 

const app = createApp(App)
GlobalVariables(app, router);

app.use(router)
app.use(vuetify)
app.use(store)
app.use(Toast)

// app.component('ToastContainer', ToastContainer);
// app.config.globalProperties.$toast = toast;

app.mount('#app')
