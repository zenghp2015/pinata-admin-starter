// import { useConfigStore } from "@/store";

interface State {
  token: string;
  userInfo?: {
    [Prop: string]: any;
  };
}

export const useUserStore = defineStore("user", () => {
  // const configStore = useConfigStore();
  // console.log(configStore);
  const state = reactive<State>({
    // TODO: 临时设置token
    token: localStorage.getItem("pinata-admin") || "main_token",
    userInfo: {},
  });

  const getUserName = computed(() => state.userInfo?.name);

  async function getUserInfo() {
    const mockRemoteUserInfo = async (token: string) => {
      if (token === "main_token") {
        return {
          name: "超级管理员",
          roles: ["all"],
        };
      }
      return {
        name: "普通管理员",
        roles: ["UserIndex", "DashboardBase", "login"],
      };
    };

    const ret = await mockRemoteUserInfo(state.token);
    state.userInfo = ret;
    return ret;
  }

  // 过滤权限
  // async function filterRoles() {}

  return {
    ...toRefs(state),
    getUserName,
    getUserInfo,
  };
});
