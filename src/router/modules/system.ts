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
      component: () => import("@/pages/dashboard/workplace/index.vue"),
    },
    {
      path: "roles",
      name: "system-roles",
      meta: { title: "角色管理" },
    },
    {
      path: "permissions",
      name: "system-permissions",
      meta: { title: "权限管理" },
    },
  ],
};
