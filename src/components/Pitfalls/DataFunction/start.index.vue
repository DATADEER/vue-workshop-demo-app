<template>
  <section>
    <div v-for="i in 6" :key="i">
      <Counter></Counter>
    </div>
  </section>
</template>

<script>
import Counter from "./Counter/start.index.vue";

export default {
  name: "DataFunction",
  components: {
    Counter
  }
};
</script>

<style scoped></style>
