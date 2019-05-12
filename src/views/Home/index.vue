<template>
  <section>
    <article>
      <h2>Project Structure</h2>
      <router-link to="/lazy-load-example">Lazy Load Example</router-link> |
      <router-link to="/building/data">Building Data</router-link> |
      <router-link to="/building/detail">Building Detail</router-link> |
      <router-link to="/building/edit">Building Edit</router-link>
    </article>
    <article>
      <h2>Component Modularity</h2>
      <router-link to="/slot">Slot</router-link> |
      <router-link to="/directive">Custom Directives</router-link> |
      <router-link to="/data">Data Loader Component</router-link> |
      <router-link to="/list">Dynamic List</router-link> |
      <router-link to="/iscomponent">Component Tag</router-link> |
      <router-link to="/lifecycle">Lifecycle Hooks</router-link> |
      <router-link to="/mixin">Mixins</router-link> |
      <router-link to="/modal">Modal</router-link> |
      <router-link to="/routing/12/name/somename">Routing</router-link>
    </article>
    <article>
      <h2>Fertige Component Libraries</h2>
      <router-link to="/vuetify">Vuetify</router-link>
    </article>
    <article>
      <h2>Vue Pitfalls</h2>
      <router-link to="/pitfalls">Pitfalls</router-link>
    </article>
  </section>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
article {
  margin-bottom: 2em;
}
</style>
