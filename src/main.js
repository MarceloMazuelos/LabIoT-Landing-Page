// Usa jsDelivr en lugar de unpkg
import { createApp } from 'https://cdn.jsdelivr.net/npm/vue@3/dist/vue.esm-browser.js';
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
