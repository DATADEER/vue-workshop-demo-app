<template>
  <div>
    <Button @click="showModal = true" large>Open Modal</Button>
    <Modal @close="showModal = false" v-if="showModal">
      <!-- TODO: Implement Scoped Slot Templates-->
    </Modal>
  </div>
</template>

<script>
import Button from "@/components/Buttons/Button/index.vue";
import Modal from "@/components/Modal/Basic/start.index.vue";

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
