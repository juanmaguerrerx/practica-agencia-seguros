// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import App from './App.vue'
// import router from './router'

// const app = createApp(App)

// // Usa Pinia para el estado global
// app.use(createPinia())

// // Usa el enrutador de Vue.js
// app.use(router)

// // Monta la aplicación en el elemento con ID "app"
// app.mount('#app')
import { createApp } from "vue";
import { createPinia } from 'pinia';
import App from "./App.vue";
import router from './router';
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";
import PrimeVue from 'primevue/config';
import axios from 'axios'; // Importa Axios
import 'primevue/resources/themes/aura-light-green/theme.css';
import ToastService from 'primevue/toastservice';

// Configura Axios
axios.defaults.baseURL = 'http://localhost:8000'; // Cambia la URL base según la configuración de tu servidor Laravel

createApp(App)
  .use(createVuestic())
  .use(PrimeVue)
  .use(ToastService)
  .use(createPinia())
  .use(router)
  .mount("#app");
