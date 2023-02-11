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
const layoutOptions = ["side", "top", "mix"];

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
        </div>
      </t-radio-group>
      <div class="setting-group-title">主题色</div>
      <div class="setting-group-title">导航布局</div>
      <t-radio-group v-model="formData.layout">
        <div v-for="(item, index) in layoutOptions" :key="index" class="setting-layout-radio">
          <t-radio-button :key="index" :value="item">
            <t-image :src="getThumbnailUrl(item)" fit="cover" />
          </t-radio-button>
        </div>
      </t-radio-group>
      <div class="setting-group-title">元素开关</div>
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

  :deep(.t-radio-group.t-size-m) {
    min-height: 32px;
    width: 100%;
    // justify-content: space-between;
    align-items: center;
  }

  :deep(.t-radio-group.t-size-m .t-radio-button) {
    height: auto;
  }

  .setting-layout-radio {
    margin-right: 20px;
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
