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
    return mode.value;
  });

  return {
    ...toRefs(state),
    displayMode,
  };
});
