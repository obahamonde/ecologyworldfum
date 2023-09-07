<script setup lang="ts">
const routes = ref([
	{
		name: "Inicio",
		route: "/",
		icon: "mdi-home",
	},
	{
		name: "Servicios",
		route: "/servicios",
		icon: "mdi-briefcase",
	},
	{
		name: "Nosotros",
		route: "/nosotros",
		icon: "mdi-account-group",
	},
	{
		name: "Contacto",
		route: "/contacto",
		icon: "mdi-phone",
	},
])


</script>

<template>
	<section class="tl fixed w-full col start z-50">
	<div class="col center ml-4"><img src="/logo.svg" class="x6 cp scale"/></div>
	<div class="card cp" v-for="i in routes">
		<div class="front">
    <RouterLink :to="i.route" class="text"><div class="col center"><Icon :icon="i.icon" class="x2 p-1 pb-2"/></div></RouterLink>
  </div>
  <div class="back">
    <RouterLink :to="i.route" class="text">{{ i.name }}</RouterLink>
  </div>
</div>
</section>
</template>
<style scoped>
body{
background-color:#1e1e1e;  
}
.card {
  position: relative;
  float: left;
  padding-bottom: 40px;
  width: 160px;
  text-align: center;
  clear:both;;
}
.front,
.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.front,
.back {
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transition: -webkit-transform 0.3s;
          transition: transform 0.2s;
}
.front {
  padding-top:5px;
  background-color: #6DB52D;
}
.back {
  padding-top:5px;
  background-color: #ffffff;
  -webkit-transform: rotateX(-180deg);
          transform: rotateX(-180deg);
}
.card:hover .front {
  -webkit-transform: rotateX(-180deg);
          transform: rotateX(-180deg);
}
.card:hover .back {
  -webkit-transform: rotateX(0);
          transform: rotateX(0);
}
.card:hover .text {
  color:#6DB52D;
}
.text{
  color:white;
  font-family:sans-serif;
  padding-top:20px;
}

.router-link-active{
  color:#015F2C;
}
</style>