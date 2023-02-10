<script setup lang="ts">
import MenuItem from "./menu-item.vue";
import { usePermissionStore } from "@/store";

const permissionStore = usePermissionStore();
const active = computed(() => permissionStore.getActive());
const sideMenu: any = computed(() => {
  const { routes } = permissionStore;
  const newMenuRouters = routes;
  // TODO: 多种数据方式
  return newMenuRouters;
});
</script>

<template>
  <div class="sidebar-container">
    <t-menu theme="light" :value="active">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
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
