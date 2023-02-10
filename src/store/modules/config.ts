interface State {
  config: {
    [Prop: string]: any;
  };
}

export const useConfigStore = defineStore("config", () => {
  const state = reactive<State>({
    config: {},
  });

  return {
    ...toRefs(state),
  };
});
