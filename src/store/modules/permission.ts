import { defineStore } from "pinia";
export const usePermission = defineStore("permission", () => {
  const state = reactive({
    routes: [],
    asyncRoutes: [],
  });
});
