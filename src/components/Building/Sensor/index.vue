<template>
	<div>
		<h3>{{ room_name }}</h3>
		<div>IP: {{ ip_address }}</div>
		<div>Mac: {{ mac_address }}</div>
		<div>Sensor: {{ temperature }}° C</div>
	</div>
</template>

<script>
export default {
	props: {
		room_name: String,
		ip_address: String,
		mac_address: String,
		temperature: Number
	}
};
</script>
