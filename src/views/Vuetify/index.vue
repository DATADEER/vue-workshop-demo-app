<template>
  <section>
    <em v-if="!$route.params.task"
      >missing parameter on /vuetify route. Try something like
      /vuetify/VuetifyButtonComponent</em
    >
    <component :is="$route.params.task"></component>
  </section>
</template>

<script>
import VuetifyButtonComponent from "../../components/Vuetify/Buttons/index.vue";
import VuetifyDataTable from "../../components/Vuetify/DataTable/index";
export default {
  name: "vuetify-vue",
  components: {
    VuetifyDataTable,
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
