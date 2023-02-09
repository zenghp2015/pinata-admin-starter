<script setup lang="tsx">
import type { PropType } from "vue";
import { getActive } from "@/router";
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

const active = computed(() => getActive());
// console.log("menuItem", active.value);

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
  if (typeof item.icon === "string") return <t-icon name={item.icon} />;
  const RenderIcon = item.icon;
  return RenderIcon;
};

const menuList = computed(() => {
  const { navData } = props;
  return getMenuList(navData);
});

const getPath = (item: ListItemType) => {
  // console.log("getPath", item);
  // console.log("getPath", item.path);
  // console.log("getPath", active.value);
  if (active.value.startsWith(item.path)) {
    return active.value;
  }
  return item.meta?.single ? item.redirect : item.path;
};
// console.table(menuList.value);
</script>

<template>
  <div>
    <template v-for="item in menuList" :key="item.path">
      <template
        v-if="!item.children || !item.children.length || item.meta?.single"
      >
        <t-menu-item :name="item.path" :value="getPath(item)" :to="item.path">
          <template #icon>
            <component :is="menuIcon(item)" class="t-icon"></component>
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
          <component :is="menuIcon(item)" class="t-icon"></component>
        </template>
        <menu-item v-if="item.children" :nav-data="item.children" />
      </t-submenu>
    </template>
  </div>
</template>
