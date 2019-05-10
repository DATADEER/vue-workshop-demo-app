<template>
  <DynamicList>
    <!-- TODO: Implement Scoped Slot -->
    <!-- <TemperatureChip :temperature=""></TemperatureChip> -->
    <!-- <SensorCard class="card__container" :sensor=""></SensorCard> -->
    <!-- TODO: Implement Scoped Slot -->
  </DynamicList>
</template>

<script>
import DynamicList from "@/components/DynamicList/start.index.vue";
import TemperatureChip from "@/components/Sensors/Chips/TemperatureChip/index.vue";
import SensorCard from "@/components/Sensors/SensorCard/index.vue";

export default {
  name: "DynamicListView",
  components: {
    SensorCard,
    TemperatureChip,
    DynamicList
  }
};
</script>

<style scoped>
.card__container {
  margin: 1rem;
}
</style>
