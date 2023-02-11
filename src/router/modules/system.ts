export default {
  path: "/system",
  name: "system",
  meta: { title: "系统管理", icon: "dashboard", orderNo: 4 },
  component: () => import("@/layouts/default.vue"),
  redirect: "/system/users",
  children: [
    {
      path: "users",
      name: "system-users",
      meta: { title: "用户管理" },
      component: () => import("@/pages/system/users/index.vue"),
    },
    {
      path: "roles",
      name: "system-roles",
      meta: { title: "角色管理" },
      component: () => import("@/pages/system/roles/index.vue"),
    },
    {
      path: "permissions",
      name: "system-permissions",
      meta: { title: "权限管理" },
      component: () => import("@/pages/system/permissions/index.vue"),
    },
    {
      path: "theme",
      name: "system-theme",
      meta: { title: "主题配置" },
      component: () => import("@/pages/system/theme/index.vue"),
    },
  ],
};
