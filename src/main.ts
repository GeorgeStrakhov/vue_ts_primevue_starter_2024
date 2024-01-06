
import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia'

//components that we will need globally
import Button from "primevue/button";
import Image from "primevue/image";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Textarea from 'primevue/textarea';
import Panel from 'primevue/panel';
import Dialog from 'primevue/dialog';
import Toast from 'primevue/toast';
import ProgressSpinner from 'primevue/progressspinner';
import Sidebar from 'primevue/sidebar';
import Dropdown from 'primevue/dropdown';
import PanelMenu from 'primevue/panelmenu';

//services
import ToastService from 'primevue/toastservice';
import DialogService from 'primevue/dialogservice';

import 'primeflex/primeflex.css' //grid system
import 'primevue/resources/themes/lara-dark-teal/theme.css';
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css'; //icons

import Ripple from 'primevue/ripple';

import App from './App.vue'
import router from './router'

const app = createApp(App)

//custom services
app.use(ToastService)
app.use(DialogService)

app.component('ProgressSpinner', ProgressSpinner)
app.component('Button', Button)
app.component('Toast', Toast)
app.component('Image', Image)
app.component('Card', Card)
app.component('InputText', InputText)
app.component('Panel', Panel)
app.component('Textarea', Textarea)
app.component('Dialog', Dialog)
app.component('Sidebar', Sidebar)
app.component('Dropdown', Dropdown)
app.component('PanelMenu', PanelMenu)

app.directive('ripple', Ripple)

app.use(PrimeVue, {ripple: true})


app.use(createPinia())
app.use(router)

app.mount('#app')
