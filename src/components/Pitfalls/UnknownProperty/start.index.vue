<template>
  <section>
    <h2>Unknown Property</h2>
  </section>
</template>

<script>
import { fetchBuildings } from "@/api/buildings/index.js";

export default {
  name: "UnknownProperty",
  data() {
    return {};
  },
  created() {
    fetchBuildings()
      .then(response => {
        console.log("buildings response", response);
        this.buildings = response.data;
      })
      .catch(console.error);
  }
};
</script>

<style scoped></style>
