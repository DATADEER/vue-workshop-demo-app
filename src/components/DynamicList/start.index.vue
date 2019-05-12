<template>
  <section>
    <section>
      <v-flex xs12 sm6 d-flex>
        <v-select
          data-cy="SortingSelect"
          :v-model="sorting"
          :items="items"
          @change="sortTemperatures"
          box
          label="Sorting"
        ></v-select>
      </v-flex>
    </section>
    <!-- this.sensors contains a list of sensors -->
    <span v-for="sensor in sensors" :key="sensor.id">
      <!-- TODO: Implement Slot Props -->
    </span>
  </section>
</template>

<script>
import sensorsJSON from "@/shared/assets/mock-data/temperatures.json";

export default {
  name: "DynamicList",
  data() {
    return {
      sensors: sensorsJSON,
      items: [
        { text: "Temperature Descending", value: "TEMPERATURE_DESCENDING" },
        { text: "Temperature Ascending", value: "TEMPERATURE_ASCENDING" }
      ],
      sorting: "TEMPERATURE_NONE"
    };
  },
  methods: {
    sortTemperatures(event) {
      switch (event) {
        case "TEMPERATURE_DESCENDING":
          this.sensors.sort(function(a, b) {
            return b.temperature - a.temperature;
          });
          break;
        case "TEMPERATURE_ASCENDING":
          this.sensors.sort(function(a, b) {
            return a.temperature - b.temperature;
          });
          break;
        default:
          console.error("This option does not exist for temeperatur sorting");
          break;
      }
    }
  }
};
</script>

<style scoped></style>
