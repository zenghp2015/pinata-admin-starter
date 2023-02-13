<script setup lang="ts">
const settingsRef = ref();
</script>
<template>
  <div class="theme-container">
    <t-card :bordered="false">
      <div class="card-container">
        <Settings ref="settingsRef" />
        <div class="setting-info">
          <p>请复制后手动修改配置文件: /src/config/theme.config.ts</p>
          <t-button theme="primary" variant="text" @click="() => settingsRef.handleCopy()"> 复制配置项 </t-button>
        </div>
      </div>
    </t-card>
  </div>
</template>
<style scoped>
.card-container {
  width: 420px;
  margin: 0 auto;
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
