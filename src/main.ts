import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import PrimeButton from 'primevue/button'
import Message from 'primevue/message'

import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core CSS
import 'primeicons/primeicons.css' //iconss
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'

const app = createApp(App)

// Use pinia for state management
app.use(createPinia())

// Use PrimeVue
app.use(PrimeVue)
app.component('Button', PrimeButton)
app.component('Message', Message)
app.component('InputText', InputText)
app.component('Textarea', Textarea)

app.mount('#app')
