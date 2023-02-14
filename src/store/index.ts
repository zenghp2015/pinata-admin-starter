import { createPinia } from "pinia";
const store = createPinia();

export { store };
export * from "./modules/config";
export * from "./modules/permission";
export * from "./modules/user";
export default store;
