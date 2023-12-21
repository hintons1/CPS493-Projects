import './assets/main.css'

import { createApp } from 'vue';
import Toast from "vue-toastification";
import Oruga from '@oruga-ui/oruga-next';
import '@oruga-ui/theme-oruga/dist/scss/oruga-full.scss';
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css';
import App from './App.vue';
import SimpleTypeahead from 'vue3-simple-typeahead';
import router from './router';

const app = createApp(App)

app.use(router).use(Toast, {}).use(Oruga).use(SimpleTypeahead)

app.mount('#app')
