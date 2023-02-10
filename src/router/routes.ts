import type { RouteRecordRaw } from "vue-router";

export const getModuleRoutes = () => {
  const routes: RouteRecordRaw[] = [];
  const modules = import.meta.glob(["./modules/*.ts"], {
    eager: true,
    import: "default",
  });

  Object.keys(modules).forEach((key) => {
    const mod = modules[key];
    if (!mod) return;
    const routesAry = Array.isArray(mod) ? [...mod] : [mod];
    routes.push(...routesAry);
  });

  return routes;
};
