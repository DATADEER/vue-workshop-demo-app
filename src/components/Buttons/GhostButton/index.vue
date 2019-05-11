<template>
  <div>
    <v-btn
      @click="$emit('click')"
      v-on="$listeners"
      v-bind="{ ...$props, ...$attrs }"
      class="btn--ghost"
      ><slot
    /></v-btn>
  </div>
</template>

<script>
export default {
  name: "GhostButton"
};
</script>

<style scoped>
button.v-btn.btn--ghost {
  border: 1px solid rgba(67, 160, 71, 0.8);
  box-shadow: none;
}
</style>
