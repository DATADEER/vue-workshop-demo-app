<template>
  <section>
    <h1>Current Language:</h1>
    <h2>{{ this.localeFlag }}</h2>
    <GhostButton class="d-inline-block" @click="setLocale('de')"
      >🇩🇪</GhostButton
    >
    <GhostButton class="d-inline-block" @click="setLocale('en')"
      >🇬🇧</GhostButton
    >
  </section>
</template>

<script>
//TODO: import mixin
import GhostButton from "@/components/Buttons/GhostButton/index.vue";

//TODO: register mixin in component
export default {
  name: "MixinView",
  components: {
    GhostButton
  }
};
</script>

<style scoped></style>
