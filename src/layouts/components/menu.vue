<script setup lang="ts">
import MenuItem from "./menu-item.vue";
import { syncRoutes } from "@/router";

const sideMenu: any = computed(() => {
  const newMenuRouters = syncRoutes;
  return newMenuRouters;
});
const getActive = (maxLevel = 3): string => {
  const route = useRoute();
  if (!route.path) {
    return "";
  }
  return route.path
    .split("/")
    .filter((_item: string, index: number) => index <= maxLevel && index > 0)
    .map((item: string) => `/${item}`)
    .join("");
};

const active = computed(() => getActive(2));

console.log(getActive());
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
