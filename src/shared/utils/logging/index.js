import get from "lodash/get";
import isFunction from "lodash/isFunction";

export function lifecycleHooksFeatureDetectionTable(self) {
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

export function logHookFeatures(hookName, features) {
  console.group(`${hookName} hook`);
  console.table(features);
  console.groupEnd(`${hookName} hook`);
}
