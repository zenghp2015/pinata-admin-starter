<script setup lang="ts">
import { version } from "../../../package.json";
import MenuItem from "./menu-item.vue";
import { usePermissionStore, useConfigStore } from "@/store";

const permissionStore = usePermissionStore();
const { config } = useConfigStore();

const collapsed = computed(() => config.theme.isSidebarCompact);
const active = computed(() => permissionStore.getActive());
const sideMenu: any = computed(() => {
  const { routes } = permissionStore;
  const newMenuRouters = routes;
  // TODO: 多种数据方式
  return newMenuRouters;
});
const versionContent = computed(() => {
  return !collapsed.value ? `${config.global.title} ${version}` : version;
});
const autoCollapsed = () => {
  const isCompact = window.innerWidth <= config.theme.minPoint;
  config.theme.isSidebarCompact = isCompact;
};

onMounted(() => {
  autoCollapsed();
  window.onresize = () => {
    autoCollapsed();
  };
});
</script>

<template>
  <div class="sidebar-container">
    <t-menu theme="light" :value="active" :collapsed="collapsed">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
      </template>
      <MenuItem :nav-data="sideMenu" />
      <template #operations>
        <div class="version-container">{{ versionContent }}</div>
      </template>
    </t-menu>
  </div>
</template>

<style lang="less" scoped>
.sidebar-container {
  height: 100%;
}
.version-container {
  color: var(--td-text-color-primary);
  opacity: 0.4;
}
</style>
