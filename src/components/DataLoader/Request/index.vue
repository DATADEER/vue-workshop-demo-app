<template>
  <section>
    <slot :isLoading="isLoading" :response="response" :error="error"></slot>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Request",
  props: {
    url: String
  },
  data() {
    return {
      isLoading: false,
      response: null,
      error: null
    };
  },
  created() {
    this.isLoading = true;
    axios
      .get(this.url)
      .then(response => {
        this.response = response;
        this.isLoading = false;
      })
      .catch(error => {
        console.log("error", JSON.stringify(error));
        this.error = error;
        this.isLoading = false;
      });
  }
};
</script>

<style scoped></style>
