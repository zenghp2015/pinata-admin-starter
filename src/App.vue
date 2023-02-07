<script setup lang="ts">
import { onMounted } from "vue";
onMounted(() => {
  // document.documentElement.setAttribute("theme-mode", "dark");
});
</script>
<template>
  <RouterView class="light" />
</template>
