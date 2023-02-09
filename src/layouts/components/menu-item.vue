<script setup lang="tsx">
import type { PropType } from "vue";
export interface MenuRoute {
  path: string;
  title?: string;
  name?: string;
  icon?:
    | string
    | {
        render: () => void;
      };
  redirect?: string;
  children: MenuRoute[];
  meta: any;
}
type ListItemType = MenuRoute & { icon?: string };

const props = defineProps({
  navData: {
    type: Array as PropType<MenuRoute[]>,
    default: () => [],
  },
});

const getMenuList = (list: MenuRoute[], basePath?: string): ListItemType[] => {
  if (!list) return [];
  return list
    .map((item) => {
      const path =
        basePath && !item.path.includes(basePath)
          ? `${basePath}/${item.path}`
          : item.path;
      return {
        path,
        title: item.meta?.title,
        icon: item.meta?.icon,
        children: getMenuList(item.children, path),
        meta: item.meta,
        redirect: item.redirect,
      };
    })
    .filter((item) => item.meta && item.meta.hidden !== true);
};

const menuIcon = (item: ListItemType) => {
  console.log(item.icon);
  if (typeof item.icon === "string") return <t-icon name={item.icon} />;
  const RenderIcon = item.icon;
  return RenderIcon;
};

const menuList = computed(() => {
  const { navData } = props;
  return getMenuList(navData);
});
</script>

<template>
  <div>
    <template v-for="item in menuList" :key="item.path">
      <template v-if="!item.children || !item.children.length">
        <t-menu-item :name="item.path" :value="item.path">
          <template #icon>
            <component :is="menuIcon(item)"></component>
          </template>
          {{ item.title }}
        </t-menu-item>
      </template>
      <t-submenu
        v-else
        :name="item.path"
        :value="item.path"
        :title="item.title"
      >
        <template #icon>
          <component :is="menuIcon(item)"></component>
        </template>
        <menu-item v-if="item.children" :nav-data="item.children" />
      </t-submenu>
    </template>
  </div>
</template>
