<template>
  <v-card
    data-cy="SensorCard"
    class="card__container"
    width="200px"
    @click="$parent.$emit('removeSensor', sensor)"
  >
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-3">{{ sensor.room_name }}</h3>

        <div class="mb-2">IP: {{ sensor.ip_address }}</div>
        <div class="mb-2">Mac: {{ sensor.mac_address }}</div>
        <div class="mb-2">Sensor: {{ sensor.temperature }}° C</div>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "SensorCard",
  props: {
    sensor: Object
  }
};
</script>

<style scoped>
.card__container {
  display: inline-block;
}
</style>
