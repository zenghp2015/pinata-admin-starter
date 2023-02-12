<script setup lang="ts">
import useClipboard from "vue-clipboard3";
import { MessagePlugin } from "tdesign-vue-next";
import { useConfigStore } from "@/store";

const configStore = useConfigStore();
const visible = computed(() => configStore.config.global.showSettingPanel);
const drawerProps = reactive({
  header: "页面配置",
  size: "460px",
  // footer: false,
  closeBtn: true,
  cancelBtn: "关闭",
  confirmBtn: "复制配置项",
});

function handleClose() {
  configStore.config.global.showSettingPanel = false;
}

async function handleCopy() {
  const { toClipboard } = useClipboard();
  const text = JSON.stringify(configStore.config.theme);

  try {
    await toClipboard(text);
    MessagePlugin.closeAll();
    MessagePlugin.success("复制成功");
  } catch {
    MessagePlugin.closeAll();
    MessagePlugin.success("复制失败");
  }
  // toClipboard(text)
  //   .then(() => {})
  //   .catch(() => {});
}
</script>
<template>
  <t-drawer :visible="visible" v-bind="drawerProps" @close="handleClose" @cancel="handleClose" @confirm="handleCopy">
    <Settings :show-copy="false" />
  </t-drawer>
</template>
