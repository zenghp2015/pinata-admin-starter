export default {
  // layout
  layout: () => import("@/layouts/default.vue"),
  blank: () => import("@/layouts/blank.vue"),

  // pages
  dashboardWorkplaceView: () => import("@/pages/dashboard/workplace/index.vue"),
  dashboardMonitorView: () => import("@/pages/dashboard/monitor/index.vue"),
};
