interface State {
  theme?: any;
  global?: any;
  permission?: any;
  components?: any;
  [key: string]: any;
}

export const useConfigStore = defineStore("config", () => {
  const state = reactive<State>({
    theme: {},
    global: {},
    permission: {},
    components: {},
  });

  const displayMode = computed(() => {
    const { mode } = toRefs(state.theme);
    let mod;
    if (mode.value === "auto") {
      const media = window.matchMedia("(prefers-color-scheme:dark)");
      mod = media.matches ? "dark" : "light";
    } else {
      mod = mode.value;
    }
    changeMode(mod);
    return mod;
  });

  function changeMode(mode: "dark" | "light" | "auto") {
    const isDarkMode = mode === "dark";
    isDarkMode
      ? document.documentElement.setAttribute("theme-mode", "dark")
      : document.documentElement.removeAttribute("theme-mode");
  }

  // TODO: 复制配置项
  function copyConfig(name: any) {
    console.log(name, state[name]);
  }

  return {
    ...toRefs(state),
    displayMode,
  };
});
