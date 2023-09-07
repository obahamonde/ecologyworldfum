<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});
const { data, open, close, status, send } = useWebSocket(props.url, {
  autoReconnect: true,
});

const emit = defineEmits(["receive"]);

onMounted(() => {
  open();
});

onUnmounted(() => {
  close();
});

watchEffect(() => {
  if (status.value === "CLOSED"){
    setTimeout(() => {
      open();
    }, 3000);
  }})


watch(data, async (newData) => {
  emit("receive", newData);
});

defineExpose({
  send,
  message:data
});
</script>
<template>
  <slot :status="status" />
</template>