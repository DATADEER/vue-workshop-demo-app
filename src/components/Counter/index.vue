<template>
  <div class="counter_wrapper">
    <div @click="count = count - 1">-</div>
    <div>{{ count }}</div>
    <div @click="count = count + 1">-</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.counter__wrapper {
  display: flex;
}
</style>
