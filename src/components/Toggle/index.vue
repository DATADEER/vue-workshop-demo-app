<template>
  <div class="toggle__wrapper">
    <slot :active="active" :toggle="toggle"></slot>
  </div>
</template>

<script>
export default {
  name: "Toggle",
  data() {
    return {
      active: false
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    }
  }
};
</script>

<style scoped></style>
