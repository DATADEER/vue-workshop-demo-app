<template>
  <section>
    <h2>Vue.nextTick</h2>
    <form :action="formURL" method="POST" ref="customForm">
      <Button @click.prevent="submitForm">LEAVE PAGE</Button>
    </form>
  </section>
</template>

<script>
import Button from "../../Buttons/Button/index";
export default {
  name: "nextTick",
  components: { Button },
  data() {
    return {
      formURL: null
    };
  },
  methods: {
    submitForm() {
      // TODO: Wait until the DOM has been updated
      this.formURL = "https://apiida.com/";
      this.$refs.customForm.submit(); // using refs is not good practice
    }
  }
};
</script>

<style scoped></style>
