import { createApp } from "vue";
import tdesign from "tdesign-vue-next";
import config from "./config";
import store from "./store";
import router from "./router";
import App from "./App.vue";

// 样式
import "tdesign-vue-next/es/style/index.css";
import "./assets/styles/main.less";
import "./permission";

const app = createApp(App);
app.use(store);
app.use(tdesign);
app.use(config);
app.use(router);
app.mount("#app");
