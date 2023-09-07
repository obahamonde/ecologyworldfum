<script setup lang="ts">
const router = useRouter();
</script>
<template>
  <main p="x4 y10" text="center teal-700 dark:gray-200">
    <div text-4xl>
      <Icon icon="mdi:alert-circle-outline" />
    </div>
    <RouterView />
    <div>
      <button class="btn-del" @click="router.back()">Back</button>
    </div>
  </main>
</template>
