import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import "animate.css";
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
