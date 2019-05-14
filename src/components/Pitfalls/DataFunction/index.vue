<template>
  <section>
    <div v-for="i in 6" :key="i">
      <Counter></Counter>
    </div>
  </section>
</template>

<script>
import Counter from "./Counter/";

export default {
  name: "DataFunction",
  components: {
    Counter
  }
};
</script>

<style scoped></style>
