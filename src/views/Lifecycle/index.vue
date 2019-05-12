<template>
  <div>
    <h1>{{ title }} {{ $route.query.id }}</h1>
    <Button @click="$forceUpdate()">Update</Button>
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
      showDestroyable: true
    };
  },
  components: {
    Button,
    Destroyable
  },
  mixins: [lifecycleMixin],
  beforeCreate() {
    logHookFeatures("beforeCreate", lifecycleHooksFeatureDetectionTable(this));
  },
  created() {
    console.log("options", this.$options);
    logHookFeatures("created", lifecycleHooksFeatureDetectionTable(this));
  },
  beforeMount() {
    logHookFeatures("beforeMount", lifecycleHooksFeatureDetectionTable(this));
  },

  mounted() {
    logHookFeatures("mounted", lifecycleHooksFeatureDetectionTable(this));
  },
  beforeUpdate() {
    logHookFeatures("beforeUpdate", lifecycleHooksFeatureDetectionTable(this));
  },
  updated() {
    logHookFeatures("updated", lifecycleHooksFeatureDetectionTable(this));
  },
  beforeRouteEnter(to, from, next) {
    logHookFeatures(
      "beforeRouteEnter",
      lifecycleHooksFeatureDetectionTable(this)
    );
    next(() => {});
  },
  beforeRouteLeave(to, from, next) {
    logHookFeatures(
      "beforeRouteLeave",
      lifecycleHooksFeatureDetectionTable(this)
    );
    next(() => {});
  },
  beforeRouteUpdate(to, from, next) {
    logHookFeatures(
      "beforeRouteUpdate",
      lifecycleHooksFeatureDetectionTable(this)
    );
    next(() => {});
  }
};
</script>

<style scoped></style>
