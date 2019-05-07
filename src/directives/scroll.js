import Vue from "vue";

function handleScrollBoundary(scrollBoundary, binding, el) {
  if (window.scrollY >= scrollBoundary) {
    el.style.position = "fixed";
    if (binding.arg === "left") {
      el.style.left = 0 + "px";
    } else if (binding.arg === "right") {
      el.style.right = 0 + "px";
    }
  } else {
    el.style.position = "static";
  }
}

Vue.directive("scroll", {
  bind(el, binding) {
    console.log("custom directive element", el);
    console.log("custom directive args", binding.arg);
    console.log("custom directive value", binding.value);

    const scrollBoundary = binding.value;

    window.addEventListener("scroll", () =>
      handleScrollBoundary(scrollBoundary, binding, el)
    );
  },
  unbind() {
    window.removeEventListener("scroll", handleScrollBoundary);
  }
});
