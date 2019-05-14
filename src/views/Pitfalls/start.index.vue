<template>
  <section>
    <em v-if="!$route.params.task"
      >missing parameter on /start/pitfalls route. Try something like
      /start/pitfalls/NextTick</em
    >
    <component :is="$route.params.task"></component>
  </section>
</template>

<script>
import ThisIsUndefined from "../../components/Pitfalls/ThisIsUndefined/start.index";
import UnknownProperty from "../../components/Pitfalls/UnknownProperty/start.index";
import MutateComplexProperties from "../../components/Pitfalls/MutateComplexProperties/start.index";
import NextTick from "../../components/Pitfalls/NextTick/start.index";
import DataFunction from "../../components/Pitfalls/DataFunction/start.index";
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
