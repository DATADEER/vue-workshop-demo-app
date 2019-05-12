<template>
  <v-card data-cy="SensorCard" class="card__container" width="200px">
    <div class="card__header">
      <v-icon
        @click="$parent.$emit('removeSensor', sensor)"
        class="material-icons remove__icon"
        color="white"
      >
        close
      </v-icon>
    </div>
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
    sensor: {
      room_name: String,
      ip_address: String,
      mac_address: String,
      temperature: Number
    }
  }
};
</script>

<style lang="scss" scoped>
.card__header {
  display: flex;
  justify-content: flex-end;
}

.card__container {
  display: inline-block;
}

.remove__icon {
  background-color: orangered;
  opacity: 0.2;

  &:hover {
    opacity: 1;
  }
}
</style>
