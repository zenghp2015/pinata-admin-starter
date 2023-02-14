import { type Router, type RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import LoginView from "@/pages/login/index.vue";
import ExceptionView from "@/pages/exception/404.vue";
import GridView from "@/pages/grid/index.vue";
import { useConfigStore } from "@/store";

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
    redirect: "/dashboard/workplace",
  },
  {
    // TODO: 动态路由
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
  const { global } = useConfigStore();
  const titleDOM = document.getElementsByTagName("title")[0];
  const title = to?.meta?.title || global.title || "pinata-admin-starter";
  if (title && title.length) {
    titleDOM.innerText = title;
  }
});

export default router;
