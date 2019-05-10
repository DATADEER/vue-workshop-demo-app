<template>
  <div class="">
    <v-btn
      v-on="$listeners"
      v-bind="$props"
      :color="color"
      class="button--default"
      ><slot
    /></v-btn>
    <!--
     Manually pass events and attributes
     <v-btn
      @click="$emit('click')"
      :color="color"
      :flat="flat"
      :small="small"
      :large="large"
      class="button--default"
      ><slot
    /></v-btn> -->
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    flat: Boolean,
    small: Boolean,
    large: Boolean,
    color: {
      type: String,
      default: "success"
    }
  },
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
