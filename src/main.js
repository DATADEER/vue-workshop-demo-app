import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import * as Sentry from "@sentry/browser";
import * as Integrations from "@sentry/integrations";

import Vuetify, {
  VApp, // required
  VBtn,
  VTextField,
  VContainer,
  VFlex,
  VLayout,
  VCard,
  VSelect,
  VCardTitle,
  VChip,
  VAvatar,
  VIcon,
  VSnackbar,
  VDataTable
} from "vuetify/lib";
import colors from "vuetify/es5/util/colors";
import "vuetify/src/stylus/app.styl";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import deLang from "vuetify/es5/locale/de";

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VTextField,
    VContainer,
    VLayout,
    VFlex,
    VCard,
    VSelect,
    VCardTitle,
    VChip,
    VAvatar,
    VIcon,
    VSnackbar,
    VDataTable
  },
  directives: {},
  theme: {
    primary: colors.purple,
    secondary: colors.grey.darken1,
    success: colors.green.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3
  },
  iconfont: "mdi",
  lang: {
    locales: { de: deLang },
    current: "de"
  }
});

Vue.config.productionTip = false;
if (process.env.NODE_ENV === "development") {
  Vue.config.devtools = true;
  Vue.config.performance = true;
} else {
  Sentry.init({
    dsn: "https://1fb949591e56459da25c39c4c822ae43@sentry.io/1457749",
    environment: process.env.NODE_ENV,
    integrations: [
      new Integrations.Vue({
        Vue,
        attachProps: true
      })
    ]
  });
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
