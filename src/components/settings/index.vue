<script setup lang="ts">
import { useConfigStore } from "@/store";
import lightSvg from "@/assets/images/setting-theme-light.svg?component";
import darkSvg from "@/assets/images/setting-theme-dark.svg?component";
import autoSvg from "@/assets/images/setting-theme-mix.svg?component";
const configStore = useConfigStore();
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
const formData = computed(() => configStore.config.theme);
function getThumbnailUrl(name: string) {
  return new URL(`../../assets/images/setting-layout-${name}.png`, import.meta.url).href;
}
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
    <div class="setting-info">
      <p>请复制后手动修改配置文件: /src/config/theme.config.ts</p>
      <t-button theme="primary" variant="text"> 复制配置项 </t-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
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

.setting-info {
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  color: var(--td-text-color-placeholder);
  width: 100%;
  background: var(--td-bg-color-container);
}
</style>
