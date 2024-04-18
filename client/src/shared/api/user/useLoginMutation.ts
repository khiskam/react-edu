import { useMutation } from "@tanstack/react-query";
import { setUser } from "src/shared/store";

import { axiosUnuthClient } from "../client";
import { AuthResponceData, LoginData } from "./types";

const login = async (data: LoginData) => {
  const response = await axiosUnuthClient.post<AuthResponceData>(
    "/login",
    data
  );

  return response;
};

export const useLoginMutation = () =>
  useMutation({
    mutationFn: login,
    onSuccess: ({ data }) =>
      setUser({ id: data.user.id, email: data.user.email, token: data.token }),
  });
