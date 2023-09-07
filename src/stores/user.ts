import { acceptHMRUpdate, defineStore } from "pinia";
import { Notification } from "../types";

export const useStore = defineStore("user", () => {
  const state = reactive({
    notifications: [] as Notification[],
    messages: [] as any[],
  });

  const setState = (newState: any) => {
    Object.assign(state, newState);
  };

  return {
    state,
    setState,
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStore as any, import.meta.hot));
