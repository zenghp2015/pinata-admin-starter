export default {
  path: "/template",
  name: "template",
  meta: { title: "页面模板", icon: "logo-apple-filled" },
  redirect: "/template/list",
  children: [
    {
      path: "list",
      name: "template-list",
      meta: { title: "列表页", icon: "view-list" },
      children: [
        {
          path: "base",
          name: "template-list-base",
          meta: { title: "基础列表" },
        },
        {
          path: "bacardse",
          name: "template-list-card",
          meta: { title: "卡片列表" },
        },
        {
          path: "filter",
          name: "template-list-filter",
          meta: { title: "筛选列表" },
        },
        {
          path: "tree",
          name: "template-list-tree",
          meta: { title: "树状刷选列表" },
        },
      ],
    },
    {
      path: "form",
      name: "form",
      meta: { title: "表单页" },
      children: [
        {
          path: "base",
          name: "template-form-base",
          meta: { title: "基础表单页" },
        },
        {
          path: "step",
          name: "template-form-step",
          meta: { title: "分步表单页" },
        },
      ],
    },
    {
      path: "profile",
      name: "profile",
      meta: { title: "详情页" },
      children: [
        {
          path: "base",
          name: "template-profile-base",
          meta: { title: "基础详情页" },
        },
        {
          path: "advanced",
          name: "template-profile-advanced",
          meta: { title: "多卡片详情页" },
        },
        {
          path: "deploy",
          name: "template-profile-deploy",
          meta: { title: "数据详情页" },
        },
        {
          path: "secondary",
          name: "template-profile-secondary",
          meta: { title: "二级详情页" },
        },
      ],
    },
    {
      path: "result",
      name: "result",
      meta: { title: "结果" },
      children: [],
    },
    {
      path: "exception",
      name: "exception",
      meta: { title: "异常页" },
      children: [],
    },
    {
      path: "user",
      name: "user",
      meta: { title: "个人页" },
      children: [
        {
          path: "index",
          name: "template-user-index",
          meta: { title: "个人中心页" },
        },
      ],
    },
    {
      path: "login",
      name: "login",
      meta: { title: "登录页" },
      children: [
        {
          path: "index",
          name: "template-login-index",
          meta: { title: "登录中心" },
        },
      ],
    },
  ],
};
