<template>
  <section @click="$emit('click')" class="destroyable-block__container">
    I will be destroyed on click
  </section>
</template>

<script>
import {
  logHookFeatures,
  lifecycleHooksFeatureDetectionTable
} from "@/shared/utils/logging/index.js";
import lifecycleMixin from "@/shared/mixins/lifecycle.js";

export default {
  name: "Destroyable",
  mixins: [lifecycleMixin],
  beforeDestroy() {
    logHookFeatures(
      "[DestroyableRedBox] beforeDestroy",
      lifecycleHooksFeatureDetectionTable(this)
    );
  },
  destroyed() {
    logHookFeatures(
      "[DestroyableRedBox] destroyed",
      lifecycleHooksFeatureDetectionTable(this)
    );
  }
};
</script>

<style scoped>
.destroyable-block__container {
  padding: 1rem;
  background-color: red;
  color: white;
  cursor: pointer;
}
</style>
