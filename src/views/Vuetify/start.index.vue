<template>
  <section>
    <em v-if="!$route.params.task"
      >missing parameter on /start/vuetify route. Try something like
      /start/vuetify/VuetifyButtonComponent</em
    >
    <component :is="$route.params.task"></component>
  </section>
</template>

<script>
import VuetifyButtonComponent from "../../components/Vuetify/Buttons/start.index.vue";
export default {
  name: "vuetify-vue",
  components: {
    VuetifyButtonComponent
  },
  data() {
    return {
      snackbar: false
    };
  }
};
</script>

<style scoped></style>
