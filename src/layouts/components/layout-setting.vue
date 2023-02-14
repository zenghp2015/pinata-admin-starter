<script setup lang="ts">
import { useConfigStore } from "@/store";

const settingsRef = ref();
const configStore = useConfigStore();
const visible = computed(() => configStore.global.showSettingPanel);
const drawerProps = reactive({
  header: "页面配置",
  size: "460px",
  closeBtn: true,
  cancelBtn: "关闭",
  confirmBtn: "复制配置项",
});

function handleClose() {
  configStore.global.showSettingPanel = false;
}
</script>
<template>
  <t-drawer
    :visible="visible"
    v-bind="drawerProps"
    @close="handleClose"
    @cancel="handleClose"
    @confirm="() => settingsRef.handleCopy()"
  >
    <Settings ref="settingsRef" />
  </t-drawer>
</template>
