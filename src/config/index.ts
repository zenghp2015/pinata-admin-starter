import { store, useConfigStore } from "@/store";

const getFileName = (file: string, extname = ".ts") => {
  const fielName = file.substring(file.lastIndexOf("/") + 1);
  return fielName.replace(extname, "");
};

export default function () {
  const configStore = useConfigStore(store);
  const modules = import.meta.glob(["@/config/*.store.ts"], {
    eager: true,
    import: "default",
  });
  Object.keys(modules).forEach((key) => {
    const mod = modules[key] || {};
    const modKey = getFileName(key, ".store.ts");
    configStore.$patch({ [modKey]: mod });
  });
}
