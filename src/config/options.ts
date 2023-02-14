// 主题
import lightSvg from "@/assets/images/setting-theme-light.svg?component";
import darkSvg from "@/assets/images/setting-theme-dark.svg?component";
import autoSvg from "@/assets/images/setting-theme-mix.svg?component";
export const modeOptions = [
  { type: "light", text: "明亮", component: markRaw(lightSvg) },
  { type: "dark", text: "暗黑", component: markRaw(darkSvg) },
  { type: "auto", text: "跟随系统", component: markRaw(autoSvg) },
];

// 导航布局
const getThumbnailUrl = (name: string) =>
  new URL(`../../assets/images/setting-layout-${name}.png`, import.meta.url).href;
export const layoutOptions = [
  { type: "side", text: "侧边导航布局", thumbnail: getThumbnailUrl("side") },
  { type: "top", text: "顶部导航布局", thumbnail: getThumbnailUrl("top") },
  { type: "mix", text: "组合导航布局", thumbnail: getThumbnailUrl("mix") },
];

// 主题色
export const colorOptions = ["#0052D9", "#0594FA", "#00A870", "#EBB105", "#ED7B2F", "#E34D59", "#ED49B4", "#834EC2"];
