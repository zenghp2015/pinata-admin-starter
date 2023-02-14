import { createApp } from "vue";
import config from "./config";
import store from "./store";
import router from "./router";
import App from "./App.vue";

// 样式
import "tdesign-vue-next/es/style/index.css";
import "./assets/styles/main.less";
import "./permission";

const app = createApp(App);
app.use(config);
app.use(store);
app.use(router);
app.mount("#app");
