<script setup lang="ts">
import { useConfigStore } from "@/store";
const configStore = useConfigStore();
const { displayMode } = storeToRefs(configStore);
</script>
<template>
  <t-config-provider :class="[displayMode, 'config-provider']">
    <RouterView />
  </t-config-provider>
</template>
