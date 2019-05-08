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
    <template v-for="sensor in temps">
      <slot :sensor="sensor">
        <p>{{ sensor.temperature }}</p>
      </slot>
    </template>
  </section>
</template>

<script>
import temperatures from "@/shared/assets/mock-data/temperatures.json";

export default {
  name: "DynamicList",
  data() {
    return {
      temps: temperatures,
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
          this.temps.sort(function(a, b) {
            return b.temperature - a.temperature;
          });
          break;
        case "TEMPERATURE_ASCENDING":
          this.temps.sort(function(a, b) {
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
      this.temps.splice(this.temps.indexOf(sensor), 1);
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
