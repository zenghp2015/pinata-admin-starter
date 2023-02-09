export default [
  {
    path: "/dashboard",
    name: "dashboard",
    meta: { title: "仪表盘", icon: "dashboard" },
    redirect: "/dashboard/workplace",
    children: [
      {
        path: "workplace",
        name: "dashboard-workplace",
        meta: { title: "工作台" },
      },
      {
        path: "monitor",
        name: "dashboard-monitor",
        meta: { title: "实时监控" },
      },
    ],
  },
  {
    path: "/visualization",
    name: "visualization",
    meta: { title: "数据可视化", icon: "logo-apple-filled" },
    redirect: "/visualization/data-analysis",
    children: [
      {
        path: "data-analysis",
        name: "visualization-data-analysis",
        meta: { title: "分析页" },
      },
      {
        path: "multi-dimension-data-analysis",
        name: "visualization-multi-dimension-data-analysis",
        meta: { title: "多维数据分析" },
      },
    ],
  },
];
