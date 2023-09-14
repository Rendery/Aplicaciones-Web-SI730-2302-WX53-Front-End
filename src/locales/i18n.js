import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "en",
  messages: {
    en: {
      category: "This category es",
      tutorial: "This turorial is",
      greet: "Hello, {user}",
    },
    es: {
      category: "Esta categoría es",
      tutorial: "Este tutorial es",
      greet: "Hola, {user}",
    },
  },
});

export default i18n;
