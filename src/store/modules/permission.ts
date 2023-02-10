import type { RouteRecordRaw } from "vue-router";
import { useConfigStore } from "./config";
// import { initModuleRoutes } from "@/router";

interface State {
  routes: RouteRecordRaw[];
  removeRoutes: RouteRecordRaw[];
  whiteListRouters?: string[];
}

const initModuleRoutes = async () => {
  const modules = import.meta.glob(["@/router/modules/*.ts"], {
    eager: true,
    import: "default",
  });
  const routes: RouteRecordRaw[] = [];
  Object.keys(modules).forEach((key) => {
    const mod = modules[key];
    if (!mod) return;
    const routesAry = Array.isArray(mod) ? [...mod] : [mod];
    routes.push(...routesAry);
  });
  return routes;
};

export const usePermissionStore = defineStore("permission", () => {
  const { config } = useConfigStore();

  const state = reactive<State>({
    routes: [],
    removeRoutes: [], // 远程路由
    whiteListRouters: config.permission.whiteListRouters || [],
  });

  function getActive(maxLevel = 3) {
    const route = useRoute();
    if (!route.path) {
      return "";
    }
    return route.path
      .split("/")
      .filter((_item: string, index: number) => index <= maxLevel && index > 0)
      .map((item: string) => `/${item}`)
      .join("");
  }

  // 前端认证
  async function localAuth() {
    // TODL: 过滤权限 roles
    const routes = await initModuleRoutes();
    state.routes = routes;
  }

  // 后端认证
  async function remoteAuth() {}

  async function buildRoutes() {
    config.permission.authentication === "local" ? await localAuth() : await remoteAuth();
    return state.routes;
  }

  return {
    ...toRefs(state),
    getActive,
    buildRoutes,
  };
});
