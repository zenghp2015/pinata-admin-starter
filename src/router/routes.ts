import type { RouteRecordRaw } from "vue-router";

const modules = import.meta.glob(["./modules/*.ts"], {
  eager: true,
  import: "default",
});

export const syncRoutes: RouteRecordRaw[] = [];
Object.keys(modules).forEach((key) => {
  const mod = modules[key] || {};
  const routes = Array.isArray(mod) ? [...mod] : [mod];
  syncRoutes.push(...routes);
});
