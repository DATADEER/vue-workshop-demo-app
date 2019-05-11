<template>
  <section>
    <h2>This Is Undefined</h2>
    <em>Results can be found in the console</em>
  </section>
</template>

<script>
export default {
  name: "ThisIsUndefined",
  mounted() {
    console.log("this", this);
  }
};
</script>

<style scoped></style>
