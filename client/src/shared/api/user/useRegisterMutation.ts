import { useMutation } from "@tanstack/react-query";
import { setUser } from "src/shared/store";

import { axiosUnuthClient } from "../client";
import { AuthResponceData, RegisterRequestData } from "./types";

const register = async (data: RegisterRequestData) => {
  const response = await axiosUnuthClient.post<AuthResponceData>(
    "/register",
    data
  );

  return response;
};

export const useRegisterMutation = () =>
  useMutation({
    mutationFn: register,
    onSuccess: ({ data }) =>
      setUser({ id: data.user.id, email: data.user.email, token: data.token }),
  });
