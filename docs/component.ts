export default {
  name: "组件名",
  attribute: {
    style: {
      fontSize: "12px",
    }, // 样式属性
    component: {
      value: "",
    }, // 组件属性
    event: [], // 事件属性
  },
  // 右侧面板
  panel: {
    style: [],
    component: [],
    event: ["onChange"],
  },
};
