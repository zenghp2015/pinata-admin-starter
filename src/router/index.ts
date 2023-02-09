import {
  type RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router";

import Layout from "@/layouts/default.vue";
import LoginView from "@/pages/login/index.vue";
import ExceptionView from "@/pages/exception/404.vue";
import GridView from "@/pages/grid/index.vue";

import userRoutes from "./modules/user";

export * from "./routes";

console.log(userRoutes);

const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/grid",
    name: "layout-grid",
    component: GridView,
  },
  {
    path: "/",
    name: "Root",
    component: Layout,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: ExceptionView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...constantRoutes, userRoutes],
});

console.log(router.getRoutes());

export default router;
