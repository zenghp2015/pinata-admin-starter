<script setup lang="ts">
import LayoutHeader from "./components/header.vue";
import LayoutContent from "./components/layout-content.vue";
import LayoutSideMenu from "./components/layout-side.vue";
import { useConfigStore } from "@/store";

const configStore = useConfigStore();
const hasSide = computed(() => configStore.config.theme.layout === "side");
</script>

<template>
  <div class="layout-container">
    <template v-if="hasSide">
      <t-layout key="side">
        <t-aside><LayoutSideMenu /></t-aside>
        <t-layout>
          <t-header><LayoutHeader /></t-header>
          <t-content>
            <LayoutContent />
          </t-content>
        </t-layout>
      </t-layout>
    </template>
    <template v-else>
      <t-layout key="no-side">
        <t-header><LayoutHeader /></t-header>
        <t-layout>
          <t-content><LayoutContent /></t-content>
        </t-layout>
      </t-layout>
    </template>
  </div>
</template>

<style lang="less" scoped>
.layout-container {
  display: flex;
  width: 100vw;
  height: 100vh;
}

.t-layout__sider {
  width: fit-content;
}
</style>
