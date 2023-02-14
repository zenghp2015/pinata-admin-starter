<script setup lang="ts">
import type { RouteRecordRaw } from "vue-router";
import SideNav from "./menu.vue";
import { usePermissionStore, useConfigStore } from "@/store";

const route = useRoute();
const configStore = useConfigStore();
const permissionStore = usePermissionStore();

const layout = computed(() => configStore.theme.layout);
const sideMenu: any = computed(() => {
  const { theme } = configStore;
  const { routes } = permissionStore;
  let newMenuRouters: RouteRecordRaw[] = routes;
  if (theme?.layout === "mix" && theme.splitMenu) {
    newMenuRouters.forEach((menu: RouteRecordRaw) => {
      if (route.path.indexOf(menu.path) === 0) {
        newMenuRouters = menu.children?.map((subMenu) => ({ ...subMenu, path: `${menu.path}/${subMenu.path}` })) || [];
      }
    });
  }
  return newMenuRouters;
});

// console.log(layout.value);
</script>
<template>
  <SideNav :layout="layout" :menu="sideMenu" />
</template>
