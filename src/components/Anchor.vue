<script setup lang="ts">
const props = defineProps<{
  to: string;
  title: string;
  class: string;
}>();
</script>
<template>
  <a
    :href="props.to"
    :title="props.title"
    target="_blank"
    rel="noopener noreferrer"
    :class="props.class"
  >
    <slot></slot>
  </a>
</template>
