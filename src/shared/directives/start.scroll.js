export const scrollDirective = {
  bind(el, binding) {
    console.log("custom directive element", el);
    console.log("custom directive binding", binding);
    console.log("custom directive arg", binding.arg);
    console.log("custom directive value", binding.value);
    console.log("custom directive modifiers", binding.modifiers);

    //TODO: Implement scroll directive
  }
};
