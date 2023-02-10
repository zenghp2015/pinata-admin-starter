<script setup lang="ts">
import SideMenu from "./components/menu.vue";
</script>

<template>
  <div class="pinata-layout">
    <t-layout>
      <t-aside><SideMenu /></t-aside>
      <t-layout>
        <t-header>header</t-header>
        <t-content>
          <RouterView />
        </t-content>
      </t-layout>
    </t-layout>
  </div>
</template>

<style lang="less" scoped>
.pinata-layout {
  display: flex;
  width: 100vw;
  height: 100vh;
}
</style>
