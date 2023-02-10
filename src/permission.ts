import router from "@/router";
import { usePermissionStore, useUserStore } from "./store";

// 查看用户是否登录
// 已登录 获取用户信息, 权限信息，生成路由
// 未登录 判断是否在白名单中，否则跳转登录页
router.beforeEach(async (to, from) => {
  const { whiteListRouters, routes, buildRoutes } = usePermissionStore();
  const { token: hasToken, getUserInfo } = useUserStore();
  if (hasToken) {
    if (to.path === "/login") return { path: "/" };
    if (routes && routes.length === 0) {
      // 获取用户信息
      try {
        await getUserInfo();
        const routes = await buildRoutes();
        routes.forEach((item) => {
          router.addRoute(item);
        });

        if (to.name === "NotFound") {
          return { path: to.fullPath, replace: true, query: to.query };
        }

        const redirect = decodeURIComponent((from.query.redirect || to.path) as string);
        return to.path === redirect ? { ...to, replace: true } : { path: redirect };
      } catch (err) {
        console.error("pinata-admin-starter错误拦截:", err);
      }
    }
  } else {
    if (!whiteListRouters?.includes(to.path)) {
      return { path: "/login" };
    }
  }
});
