// import Layout from "@/layouts/default.vue";
export default {
  path: "/users",
  name: "users",
  meta: { title: "用户管理", single: true },
  redirect: "/users/base",
  // component: Layout,
  children: [
    {
      path: "base",
      name: "users-base",
      meta: { title: "用户管理列表" },
      component: () => import("@/layouts/blank.vue"),
      children: [
        {
          path: "",
          name: "users-list",
          meta: { title: "用户管理列表" },
          component: () => import("@/pages/users/base.vue"),
        },
        {
          path: "add",
          name: "users-add",
          meta: { title: "用户管理新增" },
          component: () => import("@/pages/users/add.vue"),
        },
        {
          path: "edit",
          name: "users-edit",
          meta: { title: "用户管理编辑" },
          component: () => import("@/pages/users/edit.vue"),
        },
      ],
    },
  ],
};
