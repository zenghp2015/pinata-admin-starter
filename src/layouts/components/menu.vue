<script setup lang="ts">
import MenuItem from "./menu-item.vue";
import { syncRoutes, getActive } from "@/router";

const sideMenu: any = computed(() => {
  const newMenuRouters = syncRoutes;
  return newMenuRouters;
});

const active = computed(() => getActive());
// console.log("menu", active.value);
</script>

<template>
  <div class="sidebar-container">
    <t-menu theme="light" :value="active">
      <template #logo>
        <img
          height="28"
          src="https://tdesign.gtimg.com/site/baseLogo-light.png"
          alt="logo"
        />
      </template>
      <MenuItem :nav-data="sideMenu" />
      <template #operations>123333</template>
    </t-menu>
  </div>
</template>

<style lang="less" scoped>
.sidebar-container {
  height: 100%;
}
</style>
