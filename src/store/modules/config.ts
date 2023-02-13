interface State {
  config: {
    [Prop: string]: any;
  };
}

export const useConfigStore = defineStore("config", () => {
  const state = reactive<State>({
    config: {},
  });

  const displayMode = computed(() => {
    const { mode } = toRefs(state.config.theme);
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

  return {
    ...toRefs(state),
    displayMode,
  };
});
