<template>
  <Toggle>
    <template v-slot:default="{ active, toggle }">
      <Button @click="toggle">Toggle</Button>
      <h1>{{ active ? "yes" : "no" }}</h1>
    </template>
  </Toggle>
</template>

<script>
import Toggle from "@/components/Toggle/index.vue";
import Button from "@/components/Buttons/Button/index.vue";
export default {
  name: "toggleView",
  components: { Button, Toggle }
};
</script>

<style scoped></style>
