<script setup lang="ts">
import MenuItem from "./menu-item.vue";
import { useConfigStore, usePermissionStore, useUserStore } from "@/store";
const configStore = useConfigStore();
const permissionStore = usePermissionStore();
const { getUserName } = useUserStore();

const changeCollapsed = () => {
  const { theme } = configStore.config;
  theme.isSidebarCompact = !theme.isSidebarCompact;
};

//
const headerMenu: any = computed(() => {
  const { theme } = configStore.config;
  const { routes } = permissionStore;
  if (theme.layout === "mix") {
  }
  return routes;
});

function toggleSettingPanel() {
  // TODO:
  // const [set, config] = useConfigStore()
  // set('global.showSettingPanel', true)

  // config('global.showSettingPanel', true)
  // config('global.showSettingPanel', null)

  // setConfig('global.showSettingPanel', true)
  // removeConfig('global.showSettingPanel')
  configStore.config.global.showSettingPanel = true;
}

console.log(headerMenu.value);
</script>

<template>
  <t-head-menu expand-type="popup">
    <template #logo>
      <div class="header-operate-left">
        <t-button theme="default" shape="square" variant="text" @click="changeCollapsed">
          <t-icon class="collapsed-icon" name="view-list" />
        </t-button>
      </div>
    </template>
    <template #default>
      <!-- <MenuItem class="header-menu" :nav-data="headerMenu" /> -->
    </template>
    <template #operations>
      <div class="operations-container">
        <t-tooltip placement="bottom" content="代码仓库">
          <t-button theme="default" shape="square" variant="text">
            <t-icon name="logo-github" />
          </t-button>
        </t-tooltip>
        <t-tooltip placement="bottom" content="帮助文档">
          <t-button theme="default" shape="square" variant="text">
            <t-icon name="help-circle" />
          </t-button>
        </t-tooltip>
        <t-tooltip content="页面配置">
          <t-button theme="default" variant="text" shape="square" @click="toggleSettingPanel">
            <t-icon name="setting" />
          </t-button>
        </t-tooltip>
        <t-dropdown :min-column-width="120" trigger="click">
          <t-button theme="default" variant="text">
            <template #icon>
              <t-icon class="header-user-avatar" name="user-circle" />
            </template>
            <div class="header-user-account">{{ getUserName }}</div>
            <template #suffix><t-icon name="chevron-down" /></template>
          </t-button>
          <template #dropdown>
            <t-dropdown-menu>
              <t-dropdown-item class="dropdown-container-item">
                <t-icon name="user-circle"></t-icon>个人中心
              </t-dropdown-item>
              <t-dropdown-item class="dropdown-container-item">
                <t-icon name="poweroff"></t-icon>退出登录
              </t-dropdown-item>
            </t-dropdown-menu>
          </template>
        </t-dropdown>
      </div>
    </template>
  </t-head-menu>
</template>

<style lang="less" scoped>
.header-menu {
  flex: 1 1 1;
  display: inline-flex;

  :deep(.t-menu__item) {
    min-width: unset;
  }
}

.header-operate-left {
  display: flex;
  align-items: normal;
  line-height: 0;
  padding-left: var(--td-size-4);
}
.operations-container {
  display: flex;
  align-items: center;
  .t-popup__reference {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .t-button {
    margin-left: var(--td-size-4);
  }
}
.dropdown-container-item {
  display: flex;
  width: 100%;
  align-items: center;
  :deep(.t-dropdown__item-text) {
    display: flex;
    align-items: center;
  }
  .t-icon {
    font-size: var(--td-comp-size-xxxs);
    margin-right: var(--td-comp-margin-s);
  }
  :deep(.t-dropdown__item) {
    width: 100%;
    margin-bottom: 0px;
  }
  &:last-child {
    :deep(.t-dropdown__item) {
      margin-bottom: 8px;
    }
  }
}
</style>
