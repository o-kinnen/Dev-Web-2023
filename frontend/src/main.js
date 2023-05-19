import {createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

export const API = process.env.VUE_APP_API;

createApp(App)
    .use(router)
    .mount('#app')
