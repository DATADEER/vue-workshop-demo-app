import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Vuetify, {
  VApp, // required
  VBtn,
  VTextField,
  VContainer,
  VFlex,
  VLayout,
  VCard,
  VSelect,
  VCardTitle
} from "vuetify/lib";
import colors from "vuetify/es5/util/colors";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

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
    VCardTitle
  },
  theme: {
    primary: colors.purple,
    secondary: colors.grey.darken1,
    success: colors.green.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
