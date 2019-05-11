<template>
  <div class="wrapper">
    <h1>TemperatureSensor</h1>
    <div class="component_wrapper">
      <div class="input_wrapper">
        <input placeholder="Name" v-model="sensor.room_name" />
        <input placeholder="IP" v-model="sensor.ip_address" />
        <input placeholder="MAC" v-model="sensor.mac_address" />
        <input
          placeholder="Temperature"
          v-model="sensor.temperature"
          type="number"
        />
      </div>
      <TemperatureSensor v-bind="sensor"></TemperatureSensor>
    </div>
  </div>
</template>

<script>
import TemperatureSensor from ".";

export default {
  components: { TemperatureSensor },
  data: () => {
    return {
      sensor: {
        room_name: "",
        ip_address: "",
        mac_address: "",
        temperature: 0
      }
    };
  }
};
</script>

<style lang="scss" scoped>
input {
  display: block;
  margin: 5px;
  padding: 2px 5px;
  border-bottom: 1px solid black;
}

.wrapper {
  margin: 25px;
}

.input_wrapper {
  margin-right: 50px;
}

.component_wrapper {
  display: flex;
  margin-top: 25px;
}
</style>
