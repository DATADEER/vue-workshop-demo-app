<template>
  <section>
    <h2>Mutate Complex Properties</h2>
    <div v-if="building">
      <Button @click="addCountry">Add Country</Button>
      <li v-for="(info, i) in Object.keys(building)" :key="i">
        {{ info }}
      </li>
    </div>
  </section>
</template>

<script>
import { fetchBuildings } from "@/api/buildings/index.js";
import Button from "../../Buttons/Button/index";

export default {
  name: "MutateComplexProperties",
  components: { Button },
  data() {
    return {
      building: null
    };
  },
  methods: {
    addCountry() {
      //TODO: Add country to building in a reactive way
      this.building.country = "USA";
      console.log("building", this.building);
    }
  },
  created() {
    fetchBuildings()
      .then(response => {
        console.log("buildings response", response);
        this.building = response.data[0];
        console.log("building", this.building);
      })
      .catch(console.error);
  }
};
</script>

<style scoped></style>
