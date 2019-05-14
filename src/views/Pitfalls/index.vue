<template>
  <section>
    <em v-if="!$route.params.task"
      >missing parameter on /pitfalls route. Try something like
      /pitfalls/NextTick</em
    >
    <component :is="$route.params.task"></component>
  </section>
</template>

<script>
import ThisIsUndefined from "../../components/Pitfalls/ThisIsUndefined/index";
import UnknownProperty from "../../components/Pitfalls/UnknownProperty/index";
import MutateComplexProperties from "../../components/Pitfalls/MutateComplexProperties/index";
import NextTick from "../../components/Pitfalls/NextTick/index";
import DataFunction from "../../components/Pitfalls/DataFunction/index";
export default {
  name: "Pitfalls",
  components: {
    NextTick, // eslint-disable-line
    MutateComplexProperties, // eslint-disable-line
    UnknownProperty, // eslint-disable-line
    ThisIsUndefined, // eslint-disable-line
    DataFunction // eslint-disable-line
  }
};
</script>

<style scoped></style>
