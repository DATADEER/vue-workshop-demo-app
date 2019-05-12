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
      this.formURL = "https://apiida.com/";
      console.log("form action URL", this.$refs.customForm.action);
      this.$nextTick(() => {
        console.log("form action URL", this.$refs.customForm.action);
        this.$refs.customForm.submit(); // using refs is not good practice
      });
    }
  }
};
</script>

<style scoped></style>
