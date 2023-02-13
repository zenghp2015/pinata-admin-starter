<script setup lang="ts">
import type { PropType } from "vue";
import type { MenuRoute } from "@/types";

import { version } from "../../../package.json";
import { usePermissionStore, useConfigStore } from "@/store";
import MenuItem from "./menu-item.vue";

import AssetLogo from "@/assets/images/logo.svg?component";
import AssetLogoFull from "@/assets/images/logo-full.svg?component";

defineProps({
  menu: {
    type: Array as PropType<MenuRoute[]>,
    default: () => [],
  },
  layout: {
    type: String,
    default: "",
  },
});

const permissionStore = usePermissionStore();
const { config, displayMode } = storeToRefs(useConfigStore());

const collapsed = computed(() => config.value.theme.isSidebarCompact);
const active = computed(() => permissionStore.getActive());
const versionContent = computed(() => {
  return !collapsed.value ? `${config.value.global.title} ${version}` : version;
});

function getLogo() {
  if (collapsed.value) return AssetLogo;
  return AssetLogoFull;
}

function autoCollapsed() {
  const isCompact = window.innerWidth <= config.value.global.minPoint;
  config.value.theme.isSidebarCompact = isCompact;
}

onMounted(() => {
  autoCollapsed();
  window.onresize = () => {
    autoCollapsed();
  };
});
</script>

<template>
  <div class="sidebar-container">
    <t-menu :theme="displayMode" :value="active" :collapsed="collapsed">
      <template #logo>
        <div class="side-nav-logo-wrapper">
          <component :is="getLogo()" :class="`side-nav-${collapsed ? 'logo' : 'full-logo'}`" />
        </div>
      </template>
      <MenuItem :nav-data="menu" />
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
.side-nav-logo-wrapper {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.side-nav-logo {
  display: flex;
  width: 100%;
  height: 32px;
}
.side-nav-full-logo {
  .side-nav-logo;
  padding: 0 20px;
}
.version-container {
  color: var(--td-text-color-primary);
  opacity: 0.4;
}
</style>
