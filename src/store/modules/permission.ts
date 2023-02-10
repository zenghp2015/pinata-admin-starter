import type { RouteRecordRaw } from "vue-router";
interface State {
  routes: RouteRecordRaw[];
  removeRoutes: RouteRecordRaw[];
}

export const usePermissionStore = defineStore("permission", () => {
  const state = reactive<State>({
    routes: [],
    removeRoutes: [], // 远程路由
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

  return {
    ...toRefs(state),
    getActive,
  };
});
