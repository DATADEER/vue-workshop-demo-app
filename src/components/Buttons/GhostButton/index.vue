<template>
  <div class="">
    <v-btn @click="$emit('click')" :small="small" class="btn--ghost"
      ><slot
    /></v-btn>
  </div>
</template>

<script>
export default {
  name: "GhostButton",
  props: {
    small: Boolean
  }
};
</script>

<style scoped>
button.v-btn.btn--ghost {
  border: 1px solid rgba(67, 160, 71, 0.8);
  box-shadow: none;
}
</style>
