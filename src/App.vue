<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: "Ecology World Fumigaciones",
  meta: [
    { name: "description", content: "Donde los expertos en exterminación de plagas se encuentran con la tecnología y buenas prácticas para brindar un servicio de calidad." },
  ],
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/logo.svg",
    },
  ],
});
</script>

<template>
  <RouterView />
</template>

