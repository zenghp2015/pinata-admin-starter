<script setup lang="ts">
import useClipboard from "vue-clipboard3";
import { MessagePlugin } from "tdesign-vue-next";
import { useConfigStore } from "@/store";

import lightSvg from "@/assets/images/setting-theme-light.svg?component";
import darkSvg from "@/assets/images/setting-theme-dark.svg?component";
import autoSvg from "@/assets/images/setting-theme-mix.svg?component";

const configStore = useConfigStore();
const formData = computed(() => configStore.theme);
const modeOptions = [
  { type: "light", text: "明亮", component: markRaw(lightSvg) },
  { type: "dark", text: "暗黑", component: markRaw(darkSvg) },
  { type: "auto", text: "跟随系统", component: markRaw(autoSvg) },
];
const layoutOptions = [
  { type: "side", text: "侧边导航布局", thumbnail: getThumbnailUrl("side") },
  { type: "top", text: "顶部导航布局", thumbnail: getThumbnailUrl("top") },
  { type: "mix", text: "组合导航布局", thumbnail: getThumbnailUrl("mix") },
];
function getThumbnailUrl(name: string) {
  return new URL(`../../assets/images/setting-layout-${name}.png`, import.meta.url).href;
}

// 主题色
const colorOptions = ["#0052D9", "#0594FA", "#00A870", "#EBB105", "#ED7B2F", "#E34D59", "#ED49B4", "#834EC2"];
const panelColor =
  "conic-gradient(from 90deg at 50% 50%, #FF0000 -19.41deg, #FF0000 18.76deg, #FF8A00 59.32deg, #FFE600 99.87deg, #14FF00 141.65deg, #00A3FF 177.72deg, #0500FF 220.23deg, #AD00FF 260.13deg, #FF00C7 300.69deg, #FF0000 340.59deg, #FF0000 378.76deg)";
const dynamicColor = computed(() => {
  const isDynamic = !colorOptions.includes(formData.value.brandTheme);
  return isDynamic ? formData.value.brandTheme : "";
});
const brandThemeStyle = computed(() => {
  return (value: string) => ({
    background: colorOptions.includes(value) ? value : panelColor,
  });
});
function changeColor(value: string) {
  // TODO:
  formData.value.brandTheme = value;
}

// 复制
async function handleCopy() {
  const { toClipboard } = useClipboard();
  const text = JSON.stringify(configStore.theme);
  try {
    await toClipboard(text);
    MessagePlugin.closeAll();
    MessagePlugin.success("复制成功");
  } catch {
    MessagePlugin.closeAll();
    MessagePlugin.success("复制失败");
  }
}

defineExpose({ handleCopy });
</script>

<template>
  <div class="settings-container">
    <t-form ref="form" :data="formData" label-align="left">
      <div class="setting-group-title">主题模式</div>
      <t-radio-group v-model="formData.mode">
        <div v-for="(item, index) in modeOptions" :key="index" class="setting-layout-radio">
          <t-radio-button :key="index" :value="item.type">
            <component :is="item.component" />
          </t-radio-button>
          <p :style="{ textAlign: 'center', marginTop: '8px' }">{{ item.text }}</p>
        </div>
      </t-radio-group>

      <div class="setting-group-title">主题色</div>
      <t-radio-group v-model="formData.brandTheme">
        <div v-for="(item, index) in colorOptions" :key="index" class="setting-layout-radio">
          <t-radio-button :key="index" :value="item" class="setting-layout-color-group">
            <div class="color-container" :style="brandThemeStyle(item)" />
          </t-radio-button>
        </div>
        <div class="setting-layout-radio">
          <t-popup placement="bottom-right" trigger="click">
            <template #content>
              <t-color-picker-panel format="HEX" :swatchColors="[]" @change="changeColor" />
            </template>
            <t-radio-button :value="dynamicColor" class="setting-layout-color-group">
              <div class="color-container" :style="brandThemeStyle(dynamicColor)" />
            </t-radio-button>
          </t-popup>
        </div>
      </t-radio-group>

      <div class="setting-group-title">导航布局</div>
      <t-radio-group v-model="formData.layout">
        <div v-for="(item, index) in layoutOptions" :key="index" class="setting-layout-radio">
          <t-radio-button :key="index" :value="item.type">
            <t-image :src="item.thumbnail" fit="cover" />
          </t-radio-button>
          <p :style="{ textAlign: 'center', marginTop: '8px' }">{{ item.text }}</p>
        </div>
      </t-radio-group>

      <div class="setting-group-title">元素开关</div>
      <t-form-item v-show="formData.layout === 'mix'" label="分割菜单（混合模式下有效）" name="splitMenu">
        <t-switch v-model="formData.splitMenu" />
      </t-form-item>
      <t-form-item v-show="formData.layout === 'mix'" label="固定 Sidebar" name="isSidebarFixed">
        <t-switch v-model="formData.isSidebarFixed" />
      </t-form-item>
      <t-form-item v-show="formData.layout === 'side'" label="显示 Header" name="showHeader">
        <t-switch v-model="formData.showHeader" />
      </t-form-item>
      <t-form-item label="显示 Breadcrumbs" name="showBreadcrumb">
        <t-switch v-model="formData.showBreadcrumb" />
      </t-form-item>
      <t-form-item label="显示 Footer" name="showFooter">
        <t-switch v-model="formData.showFooter" />
      </t-form-item>
      <t-form-item label="开启多标签页" name="isUseTabsRouter">
        <t-switch v-model="formData.isUseTabsRouter"></t-switch>
      </t-form-item>
    </t-form>
  </div>
</template>

<style lang="less" scoped>
// TODO:
.color-container {
  width: 24px;
  height: 24px;
  border-radius: var(--td-radius-circle);
  display: inline-block;
  overflow: hidden;
  background-color: gold;
}

.settings-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .setting-group-title {
    font-size: 14px;
    line-height: 22px;
    margin: 32px 0 24px 0;
    text-align: left;
    font-family: PingFang SC;
    font-style: normal;
    font-weight: 500;
    color: var(--td-text-color-primary);
  }

  :deep(.t-form) {
    width: 100%;
    padding: 0 20px;
  }

  :deep(.t-radio-group.t-size-m) {
    min-height: 32px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  :deep(.t-radio-group.t-size-m .t-radio-button) {
    height: auto;
  }

  .setting-layout-radio {
    :deep(.t-radio-button) {
      display: inline-flex;
      max-height: 78px;
      padding: 8px;
      border-radius: var(--td-radius-default);
      border: 2px solid var(--td-component-border);
      > .t-radio-button__label {
        display: inline-flex;
      }
    }

    :deep(.t-is-checked) {
      border: 2px solid var(--td-brand-color) !important;
    }
  }
  :deep(.t-form__controls-content) {
    justify-content: end;
  }
}

.setting-layout-color-group {
  // display: inline-flex;
  // justify-content: center;
  // align-items: center;
  border-radius: 50% !important;
  padding: 6px !important;
  border: 2px solid transparent !important;

  > .t-radio-button__label {
    display: inline-flex;
  }
}
</style>
