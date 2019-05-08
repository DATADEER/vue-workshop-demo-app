<template>
  <div>
    <h1>{{ title }} {{ $route.query.id }}</h1>
    <Button @click="$forceUpdate()">Update</Button>
  </div>
</template>

<script>
import get from "lodash/get";
import isFunction from "lodash/isFunction";
import Button from "@/components/Buttons/Button";
import { logHookFeatures } from "@/shared/utils/logging/index.js";

function lifecycleHooksFeatureDetectionTable(self) {
  return {
    "this.title": get(self, "title", "unavailable"),
    "this.runSideeffect": isFunction(get(self, "runSideeffect", "unavailable"))
      ? get(self, "runSideeffect", "unavailable")()
      : "unavailable",
    "this.reversedTitle": get(self, "reversedTitle", "unavailable")
      ? get(self, "reversedTitle", "unavailable")
      : "unavailable",
    "h1 in DOM": document.querySelector("h1") ? "h1" : "unavailable"
  };
}

export default {
  name: "Lifecycle",
  data: function() {
    return {
      title: "The Lifecycle Hooks"
    };
  },
  rules: {
    nice: "very",
    good: "not"
  },
  components: {
    Button
  },
  methods: {
    runSideeffect() {
      return "sideeffect";
    }
  },
  computed: {
    reversedTitle() {
      return this.title
        .split("")
        .reverse()
        .join("");
    }
  },
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
  beforeDestroy() {
    logHookFeatures("beforeDestroy", lifecycleHooksFeatureDetectionTable(this));
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
