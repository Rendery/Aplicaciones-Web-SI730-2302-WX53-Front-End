import { createI18n } from "vue-i18n";


const i18n = createI18n({
    locale: 'fr',
    messages: {
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

export default i18n;