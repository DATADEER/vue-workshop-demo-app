<template>
  <DynamicList>
    <template v-slot:default="{ sensor }">
      <!--<TemperatureChipFunctional
        :temperature="sensor.temperature"
      ></TemperatureChipFunctional>-->
      <TemperatureChip :temperature="sensor.temperature"></TemperatureChip>
      <SensorCard class="card__container" :sensor="sensor"></SensorCard>
    </template>
  </DynamicList>
</template>

<script>
import DynamicList from "@/components/DynamicList/index.vue";
import TemperatureChip from "@/components/Sensors/Chips/TemperatureChip/index.vue";
import TemperatureChipFunctional from "@/components/Sensors/Chips/TemperatureChipFunctional/index.vue";
import SensorCard from "@/components/Sensors/SensorCard/index.vue";

export default {
  name: "DynamicListView",
  components: {
    SensorCard,
    TemperatureChip,
    TemperatureChipFunctional,
    DynamicList
  }
};
</script>

<style scoped>
.card__container {
  margin: 1rem;
}
</style>
