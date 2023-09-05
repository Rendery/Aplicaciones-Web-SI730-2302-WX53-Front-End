import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from "vue-i18n";


const i18n = createI18n({
    locale: 'fr',
    message: {
        en: {
            "category":'category'
        },
        es:{
            "category":'Categoría'
        },
        fr:{
            "category" :'Catégorie'
        }
    }
})

const app = createApp(App);
app.use(i18n);

app.mount('#app')
