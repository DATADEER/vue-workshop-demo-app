<template>
  <section>
    <Button @click="snackbar = true">Submit</Button>
    <GhostButton @click="snackbar = true" large>Edit</GhostButton>
    <v-snackbar v-model="snackbar" :timeout="1000">
      <em> Button was clicked</em>
    </v-snackbar>
  </section>
</template>

<script>
import Button from "@/components/Buttons/Button/index.vue";
import GhostButton from "@/components/Buttons/GhostButton/index.vue";

export default {
  name: "VuetifyButtonComponent",
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
