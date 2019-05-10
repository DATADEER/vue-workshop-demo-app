<template>
  <section @click.self="$emit('close')" class="modal__backdrop">
    <article class="modal__container">
      <header class="modal__header">
        <div class="modal__container-title">
          <!-- TODO: Implement Scoped Slot -->
        </div>
        <i @click="$emit('close')" class="modal__button--close material-icons">
          close
        </i>
      </header>
      <main class="modal__body">
        <!-- TODO: Implement Scoped Slot -->
      </main>
      <footer class="modal__footer">
        <!-- TODO: Implement Scoped Slot -->
      </footer>
      <slot></slot>
    </article>
  </section>
</template>

<script>

export default {
  name: "Modal"
};
</script>

<style lang="scss" scoped>
@import "../../../shared/styles/variables";

.modal__backdrop {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: $z-backdrop;
}

.modal__container {
  border: 3px solid gray;
  border-radius: 2px;
  width: 500px;
  min-height: 200px;
  padding: 2rem;
  z-index: $z-modal;
  background: white;
}

.modal__header {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.modal__container-title {
  margin-right: auto;
}

.modal__button--close {
  cursor: pointer;
}

.modal__body {
  padding: 2rem 1rem;
}
</style>
