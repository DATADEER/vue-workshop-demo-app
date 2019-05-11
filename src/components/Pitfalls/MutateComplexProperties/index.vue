<template>
  <section>
    <h2>Mutate Complex Properties</h2>
    <div v-if="building">
      <Button @click="addCountryByReplace">Add Country</Button>
      <!-- <Button @click="addCountryReactively">Add Country (Reactively)</Button> -->
      <!-- <Button @click="addCountryByReplace">Add Country (By Replace)</Button> -->
      <li v-for="(info, i) in Object.keys(building)" :key="i">
        {{ info }}
      </li>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
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
      this.building.country = "USA";
      console.log("building", this.building);
    },
    addCountryReactively() {
      Vue.delete(this.building, "country"); // delete in case property has already been added non-reactively
      Vue.set(this.building, "country", "USA");
      console.log("building (reactively)", this.building);
    },
    addCountryByReplace() {
      this.building = { ...this.building, country: "USA" };
      console.log("building (by replace)", this.building);
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
