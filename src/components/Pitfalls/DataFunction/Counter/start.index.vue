<template>
  <section>
    <h1>{{ counter }}</h1>
    <v-btn color="blue" @click="counter++">+1</v-btn>
  </section>
</template>

<script>
export default {
  name: "StaticData",
  data: {
    counter: 0
  }
};
</script>

<style scoped></style>
