import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./locales/i18n";
import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/soho-dark/theme.css";
import "primeicons/primeicons.css";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import router from "./router";

const app = createApp(App);

app.use(i18n);
app.use(PrimeVue);
app.use(router);

app.component("pv-button", Button);
app.component("pv-input-text", InputText);
app.component("pv-dropdown", Dropdown);
app.mount("#app");
