<template>
	<div>
		<v-text-field placeholder="Name" v-model="sensor.room_name"/>
		<v-text-field placeholder="IP" v-model="sensor.ip_address"/>
		<v-text-field placeholder="MAC" v-model="sensor.mac_address"/>
		<v-text-field placeholder="Temperature" v-model="sensor.temperature"/>
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
