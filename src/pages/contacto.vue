<script setup lang="ts">
const scrollY = ref(0);

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollY.value = window.scrollY;
  });
});
</script>
<template>
<div class="relative overflow-hidden">
	<h1 class="text-lg font-bold mb-4 text-center">Contacto</h1>
	<div class="image-container relative h-96 overflow-hidden">
		<img :style="{ transform: `translateY(-${scrollY * 1.2}px)` }" src="/designs/contact.jpeg" class="absolute top-0 w-full object-cover"/>
	</div>
	<div class="text-container p-8 text-accent">
		<h2 class="text-3xl font-semibold mb-4">La Importancia de la Prevención de Plagas</h2>
		<p class="text-lg font-light leading-relaxed">
			La prevención de plagas es crucial para mantener un ecosistema sostenible. Plagas no controladas pueden causar daños irreparables a la flora y fauna local, alterando el equilibrio ecológico.
		</p>
		<h3 class="text-2xl font-medium mt-4 mb-2">Manejo Integrado de Plagas para Empresas</h3>
		<p class="text-lg font-light leading-relaxed">
			El manejo integrado de plagas (MIP) es una estrategia efectiva que combina diferentes métodos de control, tanto químicos como biológicos, para mantener las plagas en niveles aceptables sin dañar el medio ambiente.
		</p>
	</div>
</div>
</template>

<style scoped>
.image-container img {
  will-change: transform;
}</style>
