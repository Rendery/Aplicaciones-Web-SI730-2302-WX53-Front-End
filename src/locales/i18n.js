import { createI18n } from "vue-i18n";


const i18n = createI18n({
    locale: 'es',
    messages: {
        en: {
            "category":'category ',
            "tutorial":'turorial',
            "greet":'Hello, {user}'
        },
        es:{
            "category":'Categoría',
            "tutorial":'tutorial es',
            "greet":'Hola, {user}'
        },
        fr:{
            "category" :'Catégorie',
            "tutorial":'Didacticiel',
            "greet":'Salut, {user}'
        }
    }
})

export default i18n;