import { store, useConfigStore } from "@/store";

const getFileName = (file: string, extname = ".ts") => {
  const fielName = file.substring(file.lastIndexOf("/") + 1);
  return fielName.replace(extname, "");
};

export const initConfig = () => {
  const configStore = useConfigStore(store);
  const modules = import.meta.glob(["@/config/*.config.ts"], {
    eager: true,
    import: "default",
  });
  Object.keys(modules).forEach((key) => {
    const mod = modules[key] || {};
    const modKey = getFileName(key, ".config.ts");
    configStore.$patch({ [modKey]: mod });
    // configStore.config[modKey] = mod;
  });
};

export default {
  install: initConfig,
};
