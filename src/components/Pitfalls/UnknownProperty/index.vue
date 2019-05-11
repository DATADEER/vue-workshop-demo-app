<template>
  <section>
    <h2>Unknown Property</h2>
    <li v-for="building in buildings">
      {{ building.address }}
    </li>
  </section>
</template>

<script>
import { fetchBuildings } from "@/api/buildings/index.js";

export default {
  name: "UnknownProperty",
  data() {
    return {
      buildings: null
    };
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
