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
import locale from "@/shared/mixins/locale.js";
import GhostButton from "@/components/Buttons/GhostButton.vue";

export default {
  name: "MixinView",
  components: {
    GhostButton
  },
  mixins: [locale]
};
</script>

<style scoped></style>
