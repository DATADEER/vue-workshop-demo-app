export function logHookFeatures(hookName, features) {
  console.group(`${hookName} hook`);
  console.table(features);
  console.groupEnd(`${hookName} hook`);
}
