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
    <span v-for="sensor in sensors" :key="sensor.id">
      <slot :sensor="sensor" :sensors="sensors"></slot>
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
    },
    removeSensor(sensor) {
      console.log(sensor);
      this.sensors.splice(this.sensors.indexOf(sensor), 1);
    }
  },
  computed: {},
  mounted() {
    this.$on("removeSensor", payload => {
      this.removeSensor(payload);
    });
  }
};
</script>

<style scoped></style>
