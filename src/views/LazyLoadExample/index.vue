<template>
  <div>
    <h1>Lazy Load Example</h1>
    <Component1></Component1>
  </div>
</template>

<script>
const Component1 = () => import("@/components/Component1");

export default {
  components: { Component1 }
};
</script>
