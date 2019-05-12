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
    data: get(self, "title", "UNAVAILABLE"),
    methods: isFunction(get(self, "runSideeffect", "UNAVAILABLE"))
      ? get(self, "runSideeffect", "UNAVAILABLE")()
      : "UNAVAILABLE",
    computed: get(self, "reversedTitle", "UNAVAILABLE")
      ? get(self, "reversedTitle", "UNAVAILABLE")
      : "UNAVAILABLE",
    DOM: document.querySelector("h1") ? "h1" : "UNAVAILABLE"
  };
}

export default {
  name: "Lifecycle",
  data: function() {
    return {
      title: "The Lifecycle Hooks"
    };
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
