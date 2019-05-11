<template>
  <section>
    <Button @click="snackbar = true">Submit</Button>
    <GhostButton @click="snackbar = true">Edit</GhostButton>
    <v-snackbar v-model="snackbar" :timeout="1000">
      <em> Button was clicked</em>
    </v-snackbar>
  </section>
</template>

<script>
import Button from "../../components/Buttons/Button/start.index.vue";
import GhostButton from "../../components/Buttons/GhostButton/start.index.vue";
export default {
  name: "vuetify-vue",
  components: {
    GhostButton,
    Button
  },
  data() {
    return {
      snackbar: false
    };
  }
};
</script>

<style scoped></style>
