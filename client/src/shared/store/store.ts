import { create } from "zustand";

import { AuthData, User } from "./types";

export const useUserStore = create<User>(() => ({}));

export const setUser = (data: AuthData) => {
  useUserStore.setState(() => ({ auth: data }));
  localStorage.setItem("token", data.token);
};

export const unsetUser = () => {
  useUserStore.setState(() => ({ auth: undefined }));
  localStorage.removeItem("token");
};
