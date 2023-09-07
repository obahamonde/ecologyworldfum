<script setup lang="ts">
const emit = defineEmits(["close"]);
</script>

<template>
  <transition name="modal">
    <div class="fixed z-10 inset-0 overflow-y-auto" @click.self="emit('close')">
      <div class="flex items-center justify-center ">
        <div class=" bg-secondary dark:bg-accent my-24 rounded-lg sh px-8 py-4">
          <div class="modal-header">
            <slot name="header"> </slot>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <button class="btn-del my-4" @click="emit('close')">Close</button>
            <slot name="footer"> </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}

.modal-enter,
.modal-leave-to

/* .modal-leave-active in <2.6 */ {
  opacity: 0;
}

.modal-footer {
  @apply row center;
}
</style>
