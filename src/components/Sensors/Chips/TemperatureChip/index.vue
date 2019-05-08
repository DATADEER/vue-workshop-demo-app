<template>
  <section class="tempchip__wrapper">
    <template v-if="temperature <= 0">
      <v-chip color="blue" text-color="white">
        <v-avatar>
          <v-icon>ac_unit</v-icon>
        </v-avatar>
        {{ temperature }}° C
      </v-chip>
    </template>
    <template v-if="temperature > 0 && temperature <= 20">
      <v-chip color="green" text-color="white">
        <v-avatar>
          <v-icon>tag_faces</v-icon>
        </v-avatar>
        {{ temperature }}° C
      </v-chip>
    </template>
    <template v-if="temperature > 20">
      <v-chip color="red" text-color="white">
        <v-avatar>
          <v-icon>wb_sunny</v-icon>
        </v-avatar>
        {{ temperature }}° C
      </v-chip>
    </template>
  </section>
</template>

<script>
export default {
  name: "TemperatureChip",
  props: {
    temperature: Number
  }
};
</script>

<style scoped>
.tempchip__wrapper {
  display: inline-block;
}
</style>
