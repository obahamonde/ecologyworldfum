<script setup lang="ts">
const portfolioImages = computed(()=>{
  let images = []
  for (let i = 0; i < 7; i++) {
    images.push(
      `/portfolio/${i}.jpeg`,
      `/services/${i}.jpeg`
     
    )
  }
  return images
})
</script>
<template>
<div class="container">
	  <h1 class="heading">Servicios</h1>
	
  <div class="gallery">
  	<div class="gallery-item rounded-lg sh" v-for="i in portfolioImages">
			<img class="gallery-image" :src="i"/>
		</div>

	</div>

</div>
</template>

<style scoped>
/*

All grid code is placed in a 'supports' rule (feature query) at the bottom of the CSS (Line 77). 
        
The 'supports' rule will only run if your browser supports CSS grid.

Flexbox is used as a fallback so that browsers which don't support grid will still recieve an identical layout.

*/

@import url(https://fonts.googleapis.com/css?family=Montserrat:500);

:root {
	/* Base font size */
	font-size: 10px;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

body {
	min-height: 100vh;
	background-color: #fafafa;
}

.container {
	max-width: 100rem;
	margin: 0 auto;
	padding: 0 2rem 2rem;
}

.heading {
	font-family: "Montserrat", Arial, sans-serif;
	font-size: 4rem;
	font-weight: 500;
	line-height: 1.5;
	text-align: center;
	padding: 3.5rem 0;
	color: #1a1a1a;
}

.heading span {
	display: block;
}

.gallery {
	display: flex;
	flex-wrap: wrap;
	/* Compensate for excess margin on outer gallery flex items */
	margin: -1rem -1rem;
}

.gallery-item {
	/* Minimum width of 24rem and grow to fit available space */
	flex: 1 0 24rem;
	/* Margin value should be half of grid-gap value as margins on flex items don't collapse */
	margin: 1rem;
	box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
	overflow: hidden;
}

.gallery-image {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 400ms ease-out;
}

.gallery-image:hover {
	transform: scale(1.15);
}

/*

The following rule will only run if your browser supports CSS grid.

Remove or comment-out the code block below to see how the browser will fall-back to flexbox styling. 

*/

@supports (display: grid) {
	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
		grid-gap: 2rem;
	}

	.gallery,
	.gallery-item {
		margin: 0;
	}
}

</style>