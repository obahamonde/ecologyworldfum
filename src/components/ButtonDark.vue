<template>
  <button icon-btn @click="toggleDark()" class="z-50">
    <Icon
      :icon="isDark ? 'mdi:weather-night' : 'mdi:weather-sunny'"
      class="x2 tr fixed m-4 text-accent dark:text-success z-50"
    />
  </button>
</template>
