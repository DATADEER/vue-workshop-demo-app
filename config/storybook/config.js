import { configure, addDecorator } from "@storybook/vue";
import Vue from "vue";

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
  VIcon
} from "vuetify/lib";
import colors from "vuetify/es5/util/colors";
import "vuetify/src/stylus/app.styl";
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
    VCardTitle,
    VChip,
    VAvatar,
    VIcon
  },
  theme: {
    primary: colors.purple,
    secondary: colors.grey.darken1,
    success: colors.green.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3
  }
});

// Ensures every story is wrapped in a v-app tag
addDecorator(() => ({
  template: "<v-app><story/></v-app>"
}));

function loadStories() {
  const req = require.context("../../", true, /\.story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
