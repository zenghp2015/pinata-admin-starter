import { createApp } from "vue";
import tdesign from "tdesign-vue-next";
import store from "./store";
import router from "./router";
import App from "./App.vue";

// 样式
import "tdesign-vue-next/es/style/index.css";
import "./assets/styles/main.less";

const app = createApp(App);
app.use(tdesign);
app.use(store);
app.use(router);
app.mount("#app");
