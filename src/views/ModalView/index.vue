<template>
  <div>
    <Button @click="showModal = true" large>Open Modal</Button>
    <Modal @close="showModal = false" v-if="showModal">
      <template v-slot:title>
        <h1>Modal Title</h1>
      </template>
      <template v-slot:body>
        <h1>This modal can be closed and opened. It supports slots</h1>
      </template>
      <!--<template v-slot:footer>
                <Button @click="showModal=false" small>confirm</Button>
            </template>-->
      <h1>Default slot content</h1>
    </Modal>
  </div>
</template>

<script>
import Button from "@/components/Buttons/Button/index.vue";
import Modal from "@/components/Modal/Basic/index.vue";

export default {
  name: "ModalTest",
  components: {
    Button,
    Modal
  },
  data() {
    return {
      showModal: false
    };
  }
};
</script>

<style scoped></style>
