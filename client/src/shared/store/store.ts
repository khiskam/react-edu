import { User } from "./types";
import { create } from "zustand";

export const useAuth = create<User>(() => ({
  token: null,
}));

export const setToken = (token: string | null) =>
  useAuth.setState(() => {
    console.log(token);
    return { token };
  });
