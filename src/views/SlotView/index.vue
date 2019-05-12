<template>
  <SlotButton>
    OK
    <!--<v-icon>save</v-icon>-->
    <!--<img src="https://source.unsplash.com/random/20x20"/>-->
  </SlotButton>
</template>

<script>
import SlotButton from "../../components/Buttons/SlotButton/index";
export default {
  name: "SlotView",
  components: { SlotButton }
};
</script>

<style scoped>
img {
  width: 30px;
}
</style>
