<template>
	<div>
		<input placeholder="Name" v-model="sensor.room_name">
		<input placeholder="IP" v-model="sensor.ip_address">
		<input placeholder="MAC" v-model="sensor.mac_address">
		<input placeholder="Temperature" v-model="sensor.temperature">
		<SensorCard :sensor="sensor"></SensorCard>
	</div>
</template>

<script>
import SensorCard from "../../../../src/components/Sensors/SensorCard";

export default {
	components: { SensorCard },
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
