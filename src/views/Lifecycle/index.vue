<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>Updated: {{ timesUpdated }}</h2>
    <Button @click="timesUpdated++">Update</Button>
    <Destroyable @click="showDestroyable = false" v-if="showDestroyable" />
  </div>
</template>

<script>
import Button from "@/components/Buttons/Button";
import Destroyable from "./destroyable";
import lifecycleMixin from "@/shared/mixins/lifecycle.js";
import {
  logHookFeatures,
  lifecycleHooksFeatureDetectionTable
} from "@/shared/utils/logging/index.js";

export default {
  name: "Lifecycle",
  data() {
    return {
      showDestroyable: true,
      timesUpdated: 0
    };
  },
  components: {
    Button,
    Destroyable
  },
  mixins: [lifecycleMixin],
  beforeCreate() {
    logHookFeatures(
      "[Lifecycle View] beforeCreate",
      lifecycleHooksFeatureDetectionTable(this)
    );
  },
  created() {
    logHookFeatures(
      "[Lifecycle View] created",
      lifecycleHooksFeatureDetectionTable(this)
    );
  },
  beforeMount() {
    logHookFeatures(
      "[Lifecycle View] beforeMount",
      lifecycleHooksFeatureDetectionTable(this)
    );
  },

  mounted() {
    logHookFeatures(
      "[Lifecycle View] mounted",
      lifecycleHooksFeatureDetectionTable(this)
    );
  },
  beforeUpdate() {
    logHookFeatures(
      "[Lifecycle View] beforeUpdate",
      lifecycleHooksFeatureDetectionTable(this)
    );
  },
  updated() {
    logHookFeatures(
      "[Lifecycle View] updated",
      lifecycleHooksFeatureDetectionTable(this)
    );
  },
  beforeRouteEnter(to, from, next) {
    logHookFeatures(
      "[Lifecycle View] beforeRouteEnter",
      lifecycleHooksFeatureDetectionTable(this)
    );
    next(() => {});
  },
  beforeRouteLeave(to, from, next) {
    logHookFeatures(
      "[Lifecycle View] beforeRouteLeave",
      lifecycleHooksFeatureDetectionTable(this)
    );
    next(() => {});
  },
  beforeRouteUpdate(to, from, next) {
    logHookFeatures(
      "[Lifecycle View] beforeRouteUpdate",
      lifecycleHooksFeatureDetectionTable(this)
    );
    next(() => {});
  }
};
</script>

<style scoped></style>
