import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "es",
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
    fr: {
      category: "Ce catégorie est",
      tutorial: "Ce didacticiel est",
      greet: "Salut, {user}",
    },
  },
});

export default i18n;
