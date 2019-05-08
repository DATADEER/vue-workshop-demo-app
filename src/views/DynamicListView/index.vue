<template>
  <DynamicList>
    <template v-slot:default="sensorData">
      <TemperatureChipFunctional
        :temperature="sensorData.sensor.temperature"
      ></TemperatureChipFunctional>
      <TemperatureChip
        :temperature="sensorData.sensor.temperature"
      ></TemperatureChip>
      <SensorCard
        class="card__container"
        :sensor="sensorData.sensor"
      ></SensorCard>
    </template>
  </DynamicList>
</template>

<script>
import DynamicList from "@/components/DynamicList/DynamicList.vue";
import TemperatureChip from "@/components/Sensors/TemperatureChip.vue";
import TemperatureChipFunctional from "@/components/Sensors/TemperatureChipFunctional.vue";
import SensorCard from "@/components/Sensors/SensorCard.vue";

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
