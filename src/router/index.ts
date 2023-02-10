import { type Router, type RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import Layout from "@/layouts/default.vue";
import LoginView from "@/pages/login/index.vue";
import ExceptionView from "@/pages/exception/404.vue";
import GridView from "@/pages/grid/index.vue";

import store, { useConfigStore, usePermissionStore } from "@/store";

export const initModuleRoutes = () => {
  const permissionStore = usePermissionStore(store);
  const modules = import.meta.glob(["@/router/modules/*.ts"], {
    eager: true,
    import: "default",
  });
  Object.keys(modules).forEach((key) => {
    const mod = modules[key];
    if (!mod) return;
    const routesAry = Array.isArray(mod) ? [...mod] : [mod];
    permissionStore.routes.push(...routesAry);
  });
};

// TOOD: 临时存放
export const getActive = (maxLevel = 3): string => {
  const route = useRoute();
  if (!route.path) {
    return "";
  }
  return route.path
    .split("/")
    .filter((_item: string, index: number) => index <= maxLevel && index > 0)
    .map((item: string) => `/${item}`)
    .join("");
};

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
  routes: [...constantRoutes],
}) as Router;

// set title
router.afterEach((to) => {
  const { config } = useConfigStore();
  const titleDOM = document.getElementsByTagName("title")[0];
  const title = to?.meta?.title || config?.global?.title || "pinata-admin-starter";
  if (title && title.length) {
    titleDOM.innerText = title;
  }
});

export default router;
