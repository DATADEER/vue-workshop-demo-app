<template>
  <div>
    <!-- TODO: Implement button props and events -->
    <v-btn class="button--default"><slot /></v-btn>
  </div>
</template>

<script>
export default {
  name: "Button",
  // TODO: Implement propTypes
  props: {},
  created() {
    console.log(this.$props);
    console.log(this.$listeners);
    console.log(this.$attrs);
  }
};
</script>

<style scoped>
button.v-btn.button--default {
  border-radius: 0;
  box-shadow: none;
}
</style>
