<template>
  <div>
    <router-link to="/example-preview">Example Preview</router-link>
    |
    <router-link to="/async-example-preview">Async Example Preview</router-link>
    |
    <router-link to="/lazy-load-example">Lazy Load Example</router-link>
    |
    <h2>Component Modularity</h2>
    <router-link to="/directive">Example Preview</router-link>
    <Button flat small></Button>
    <i class="material-icons">contact_support</i>
    <router-link to="/list">List</router-link>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped></style>
