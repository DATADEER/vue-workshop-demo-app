<template>
  <section>
    <!-- <ThisIsUndefined></ThisIsUndefined> -->
    <!-- <UnknownProperty></UnknownProperty> -->
    <!-- <MutateComplexProperties></MutateComplexProperties> -->
  </section>
</template>

<script>
import ThisIsUndefined from "../../components/Pitfalls/ThisIsUndefined/start.index";
import UnknownProperty from "../../components/Pitfalls/UnknownProperty/start.index";
import MutateComplexProperties from "../../components/Pitfalls/MutateComplexProperties/start.index";
export default {
  name: "Pitfalls",
  components: {
    MutateComplexProperties, // eslint-disable-line
    UnknownProperty, // eslint-disable-line
    ThisIsUndefined // eslint-disable-line
  }
};
</script>

<style scoped></style>
