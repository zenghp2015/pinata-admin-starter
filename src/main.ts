import { createApp } from "vue";
import { initConfig } from "./config";
import { initModuleRoutes } from "./router";

import tdesign from "tdesign-vue-next";
import store from "./store";
import router from "./router";
import App from "./App.vue";

// 样式
import "tdesign-vue-next/es/style/index.css";
import "./assets/styles/main.less";
import "./permission";

const initApp = () => {
  initConfig();
  initModuleRoutes();
};

const loadApp = async () => {
  const app = createApp(App);
  app.use(tdesign);
  app.use(store);
  app.use(router);
  app.mount("#app");
};

initApp();
loadApp();

// 初始化
// 加载Vue,挂载
