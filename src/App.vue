<script setup lang="ts">
import { onMounted } from "vue";
onMounted(() => {
  // document.documentElement.setAttribute("theme-mode", "dark");
});
</script>
<template>
  <t-config-provider class="config-provider">
    <RouterView class="light" />
  </t-config-provider>
</template>
