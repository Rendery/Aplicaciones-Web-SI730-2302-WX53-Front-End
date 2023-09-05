import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from "vue-i18n";


const i18n = createI18n({
    locale: 'fr',
    message: {
        en: {
            "category":'category ',
            "tutorial":'turorial'
        },
        es:{
            "category":'Categoría',
            "tutorial":'tutorial es'
        },
        fr:{
            "category" :'Catégorie',
            "tutorial":'Didacticiel'
        }
    }
})

const app = createApp(App);
app.use(i18n);

app.mount('#app')
